FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm cache clean --force
RUN npm install
COPY . .

EXPOSE 5000

ARG DATABASE_URL
ENV DATABASE_URL ${DATABASE_URL}

ARG PGUSER
ENV PGUSER ${PGUSER}

ARG PGPASSWORD
ENV PGPASSWORD ${PGPASSWORD}

RUN npx prisma generate
RUN npx prisma db push
RUN npx prisma db seed
CMD [ "npm", "start" ]