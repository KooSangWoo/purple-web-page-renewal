#!/bin/bash

# 스크립트 실행 중 오류가 발생하면 즉시 중단합니다.
set -e

# --- 1. 버전 확인 ---
# 스크립트 실행 시 첫 번째 인수로 버전(tag)을 받습니다.
if [ -z "$1" ]; then
  echo "!! [Error] 빌드 버전을 입력해야 합니다."
  echo "   사용 예: ./build.sh 1.0.1"
  exit 1
fi

# --- 2. 변수 설정 ---
# 원본 버전 (Docker 태그용)
VERSION_ORIGINAL=$1
# '.'이 제거된 버전 (.tar 파일명용)
# Bash의 문자열 치환 기능 (${변수//찾을문자/바꿀문자})을 사용합니다.
VERSION_CLEANED=${VERSION_ORIGINAL//./}

IMAGE_NAME="purpleai_web_renewal"
IMAGE_TAG="${IMAGE_NAME}:${VERSION_ORIGINAL}"
TAR_FILE_NAME="${IMAGE_NAME}_v${VERSION_CLEANED}.tar"

echo "============================================="
echo "  [STEP 1/3] Docker 빌드 시작"
echo "  Target Image: ${IMAGE_TAG}"
echo "  Platform: linux/amd64"
echo "============================================="

docker build --platform linux/amd64 -t ${IMAGE_TAG} .

echo ""
echo "============================================="
echo "  [STEP 2/3] Docker 이미지 목록 확인"
echo "  ( '${IMAGE_NAME}' 이름으로 필터링 )"
echo "============================================="

docker images | grep ${IMAGE_NAME}

echo ""
echo "============================================="
echo "  [STEP 3/3] Docker 이미지를 .tar 파일로 저장"
echo "  Source Image: ${IMAGE_TAG}"
echo "  Saving File:  ${TAR_FILE_NAME}"
echo "============================================="

docker save -o ${TAR_FILE_NAME} ${IMAGE_TAG}

echo ""
echo "============================================="
echo "  >> 빌드 프로세스 완료!"
echo "  >> 최종 산출물: ${TAR_FILE_NAME}"
echo "============================================="