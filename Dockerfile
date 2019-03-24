FROM python:3.6

# Create app directory
WORKDIR /server

# Copy contents
COPY . .

# Install dependencies
RUN pwd
RUN pip install --trusted-host pypi.python.org -r requirements.txt

# Port to open in Docker
EXPOSE 7000

# command to run at container startup
CMD [ "python", "./server/__init__.py"  ]