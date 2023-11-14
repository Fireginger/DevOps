FROM node:14
WORKDIR /app
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]