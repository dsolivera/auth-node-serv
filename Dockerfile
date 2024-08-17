# Dockerfile for User Service
FROM node:18

# Create app directory
WORKDIR  /Users/solivera/Workspace/auth-node-serv

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose port
EXPOSE 5001

# Command to run the app
CMD ["npm", "start"]
