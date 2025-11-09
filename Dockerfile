# ============================ base ============================
FROM node:22.14.0-alpine AS base

# ============================ deps ============================
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# ============================ builder ============================
# 개발시에는 ENV NODE_ENV 비활성화
FROM base AS builder
ARG BUILD_TYPE=production
ENV NODE_ENV=$BUILD_TYPE 
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ============================ runner ============================
FROM base AS runner
ARG BUILD_TYPE=production
ENV NODE_ENV=$BUILD_TYPE
WORKDIR /app
RUN apk --no-cache add curl bash busybox-suid supervisor su-exec
RUN addgroup --system --gid 1001 app
RUN adduser --system --uid 1001 app
COPY --from=builder /app/public ./public
RUN mkdir .next
RUN mkdir -p /app/logs && chown -R app:app /app/logs
RUN chown app:app .next
COPY --from=builder --chown=app:app /app/.next/standalone ./
COPY --from=builder --chown=app:app /app/.next/static ./.next/static
COPY logrotate.sh /app/logrotate.sh
RUN chmod +x /app/logrotate.sh

COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh
ENTRYPOINT [ "/app/entrypoint.sh" ]

COPY supervisord.conf /etc/supervisord.conf
RUN echo "0 1 * * * /app/logrotate.sh /app/logs '*' 60 7" > /etc/crontabs/root
# USER app
# Change 9000 When Before Deploys Production
# by ksw
EXPOSE 9001
ENV PORT 9001
ENV HOSTNAME "0.0.0.0"
CMD ["node", "server.js"]
#CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]

