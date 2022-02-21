FROM node:16-alpine

ADD . /react-skeleton
WORKDIR /react-skeleton
COPY ["package.json", "yarn.lock", "./"]

#uncomment if using ethereumjs in yarn.lock.
#RUN apk add --no-cache git
#RUN apk add --no-cache python3 py3-pip make g++
RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
