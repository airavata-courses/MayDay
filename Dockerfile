FROM node:10

# Create app directory
WORKDIR /rhino

# Copy contents
COPY ./ ./

# Install dependencies
RUN npm install

# Port to open in Docker
EXPOSE 4200

# command to run at container startup
CMD [ "npm", "run","start:cloud" ]