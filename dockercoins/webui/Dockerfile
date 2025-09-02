FROM node:18-slim

WORKDIR /app

# Copy the package file and install dependencies
COPY package.json . 
RUN npm install --production

# Copy the rest of your application files
COPY webui.js . 
COPY files/ ./files/

EXPOSE 80
CMD ["node", "webui.js"]