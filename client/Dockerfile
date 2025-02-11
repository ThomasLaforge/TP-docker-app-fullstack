FROM node:18-alpine
WORKDIR /app
RUN npm install --global serve
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 2007
CMD ["serve", "-s", "dist", "-p", "2007"]