FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm cache clean --force
RUN npm install
COPY . .

EXPOSE 5000

RUN npx prisma generate
CMD [ "npm", "start" ]