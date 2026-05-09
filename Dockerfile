FROM nginx:alpine
COPY out /usr/share/nginx/html
COPY nginx-default.conf /etc/nginx/conf.d/default.conf
