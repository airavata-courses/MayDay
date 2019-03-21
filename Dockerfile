FROM node:10

# Create app directory
WORKDIR /purple

# Install dependencies
RUN npm install

# Copy contents
COPY ./ ./

# Port to open in Docker
EXPOSE 3000

# command to run at container startup
CMD [ "npm", "start" ]