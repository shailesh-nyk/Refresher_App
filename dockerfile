# base image
FROM node:12.9.0

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY . .
RUN npm install
RUN npm rebuild node-sass
EXPOSE 3000
CMD ["npm", "start"]


# http://ec2-18-217-145-135.us-east-2.compute.amazonaws.com:3000/