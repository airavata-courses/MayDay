### Search management microservice codenamed: Blue

### Make sure you have isolated python environment 
execute following command

virtual .venv

### To Run the code
### waitress-serve --port=PORT MODULE:OBJECT
waitress-serve --port=8000 server.app:api

### GET response
http://localhost:8000/search/recent

