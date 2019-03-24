FROM python:2.7.9

# Create app directory
WORKDIR /server

# Copy contents
COPY . /server

# Install dependencies
RUN pip install -r /server/requirements.txt

# Port to open in Docker
EXPOSE 7000

# command to run at container startup
CMD [ "python", "./server/__init__.py"  ]