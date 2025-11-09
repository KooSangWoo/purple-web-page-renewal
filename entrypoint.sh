#!/bin/sh

# 1. logs 폴더 권한 보장
mkdir -p /app/logs
chown -R app:app /app/logs

# 2. 크론 실행 (root가 실행해야 하므로 여기서 시작)
crond

# 3. 마지막에 CMD 명령 실행 (app 유저로)
exec su-exec app "$@"
