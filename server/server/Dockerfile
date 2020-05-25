FROM node:alpine
WORKDIR /usr/app/back
EXPOSE 4000

COPY ./ ./
RUN npm install
ENTRYPOINT ["sh", "./entrypoint.sh"]
