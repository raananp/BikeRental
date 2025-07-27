FROM node:18

WORKDIR /app

# Copy only package files first to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Expose the frontend port
EXPOSE 3000

# Start the React dev server
CMD ["npm", "start"]