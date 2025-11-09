#!/bin/bash

# logrotate.sh
# 로그 파일을 지정한 경과일 수 이후 압축하고, 오래된 압축 파일은 삭제

if [ "$#" -lt 4 ]; then
    echo "Usage: $0 log_path log_pattern delete_after_days compress_after_days"
    echo "Example: $0 /home/ubuntu/app/logs '*.log' 30 7"
    exit 1
fi

log_path=$1
log_pattern=$2
delete_after_days=$3
compress_after_days=$4

echo "[Log Cleanup Start]"
echo "Target Dir: $log_path"
echo "Pattern: $log_pattern"
echo "Delete after: $delete_after_days days"
echo "Compress after: $compress_after_days days"

# 디렉토리 확인
if [ ! -d "$log_path" ]; then
  echo "Error: directory does not exist: $log_path"
  exit 1
fi

cd "$log_path"

# 오래된 .gz 로그 삭제
find . -name "${log_pattern}.gz" -type f -mtime +${delete_after_days} -exec rm -f {} \;

# 오래된 로그 파일 압축 (이미 .gz 인 건 제외)
find . -name "$log_pattern" ! -name "*.gz" -type f -mtime +${compress_after_days} | while read file; do
  gzip "$file"
  gz_file="$file.gz"
  chown app:app "$gz_file"   # <== 소유자 재설정
done

echo "[Log Cleanup Done]"
