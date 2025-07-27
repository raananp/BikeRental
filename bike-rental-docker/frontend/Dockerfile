FROM node:18
WORKDIR /app

# Copy package.json before the rest to leverage Docker cache and avoid ENOENT
COPY package.json . 
RUN npm install

# Then copy the rest of the files
COPY . .

EXPOSE 3000
CMD ["npm", "start"]