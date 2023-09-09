# Use the official Node 16 image as a parent image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install dependencies inside the container
RUN npm install

# Copy the local src directory to the container
COPY . .

# Expose the port the app runs on
EXPOSE 3001

# Specify the command to run on container start
CMD ["npm", "run", "start:prod"]
