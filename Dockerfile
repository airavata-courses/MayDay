FROM maven:3.6.0-jdk-8

# Create app directory
WORKDIR /red

# Copy contents
COPY ./com.microservice.red ./

# Clean project
RUN mvn clean

# Install dependencies
RUN mvn install

# Port to open in Docker
EXPOSE 8080

# command to run at container startup
CMD ["mvn","jetty:run"]
