FROM node:10

# Create app directory
WORKDIR /purple

# Copy contents
COPY ./ ./

# Install dependencies
RUN npm install

# Port to open in Docker
EXPOSE 3000

# command to run at container startup
CMD [ "npm", "start" ]