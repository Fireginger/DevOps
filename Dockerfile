FROM node:14
RUN useradd --system app
WORKDIR /app
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
USER app
CMD ["npm", "start"]