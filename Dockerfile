FROM node:16.13.0-alpine AS builder

WORKDIR /app

COPY . .


RUN npx nx build app/datahub

FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/htmlRUN rm -rf ./*

COPY --from=builder /app/apps/datahub /usr/share/nginx/html


RUN sed -i '10i \\ttry_files $uri $uri/ /index.html;' /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]