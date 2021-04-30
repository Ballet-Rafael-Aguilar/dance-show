FROM nginx:1.19.3-alpine
EXPOSE 4000
COPY dist/apps/playground /var/www
COPY apps/playground/nginx.conf /etc/nginx/nginx.conf
