### Search management microservice codenamed: Blue
[![Build Status](https://travis-ci.org/airavata-courses/MayDay.svg?branch=develop-microservice-blue)](https://travis-ci.org/airavata-courses/MayDay)
### Make sure you have isolated python environment 
execute following command to install falcon and setup virtual environment

pip install falcon  <br /> 
pip install virtualenv  <br /> 
virtualenv .venv  <br /> 

### To Run the code
### waitress-serve --port=PORT MODULE:OBJECT

pip install waitress  <br /> 
waitress-serve --port=8000 server.app:api  <br /> 

### GET response
http://localhost:8000/search/recent  <br /> 

Sample Resposne:
{
    "recent_doctor_result": [
        {
            "rating": "5",
            "doctor_id": "01",
            "specialisation": "Neurologist",
            "id": 0,
            "doctor": "John Doe"
        },
        {
            "rating": "5",
            "doctor_id": "02",
            "specialisation": "Cardiologist",
            "id": 1,
            "doctor": "Abc Def"
        },
        {
            "rating": "5",
            "doctor_id": "03",
            "specialisation": "ENT",
            "id": 1,
            "doctor": "Xyz xyz"
        }
    ]
}
 <br /> 
### POST request
http://localhost:8000/search/recent  <br /> 
Sample request
{
	"userid" : 1
}
 <br /> 
Sample response
{
    "message": "OK",
    "code": 200,
    "userid": {
        "userid": 1
    }
}
