FROM  node:latest as build 
RUN yarn global add webpack 
RUN yarn global add webpack-cli
WORKDIR /app/src
COPY package.json yarn.lock ./
RUN yarn 
COPY . ./
RUN yarn build
RUN cd ./dist && ls 

FROM nginx:latest 
COPY --from=build  /app/src/dist/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
