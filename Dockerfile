# base image
FROM node:12.2.0-alpine


RUN mkdir /ftp-react
WORKDIR /ftp-react
ADD . /ftp-react

# install and cache app dependencies
ADD package.json /ftp-react

EXPOSE 3000
RUN cd /ftp-react && npm install --silent

# start app
CMD ["npm", "start"]
