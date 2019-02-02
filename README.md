### Search management microservice codenamed: Blue
[![Build Status](https://travis-ci.org/airavata-courses/MayDay.svg?branch=develop-microservice-blue)](https://travis-ci.org/airavata-courses/MayDay)
### Make sure you have isolated python environment 
execute following command to install falcon and setup virtual environment

pip install falcon  <br /> 
pip install virtualenv  <br /> 
virtualenv .venv  <br /> 

### To Run the code
python ./server/__init__.py  <br /> 

### GET response
http://localhost:8000/search/recent  <br /> 

Sample Resposne:
{
    "recent_result": [
         {
            "string_string": "GYN",
            "endpoint": "/alldoctors",
            "userid": "xxxx@gmail.com",
            "timestamp": "Sat Feb  2 17:22:55 2019",
            "req_param": {
                "skip": "0",
                "limit": "10",
                "user_location": "37.773,-122.413",
                "location": "37.773,-122.413,100"
            }
        },
        {
            "string_string": "ENT",
            "endpoint": "/alldoctors",
            "userid": "abc@gmail.com",
            "timestamp": "Sat Feb  2 17:14:06 2019",
            "req_param": {
                "skip": "0",
                "limit": "10",
                "user_location": "37.773,-122.413",
                "location": "37.773,-122.413,100"
            }
        }
    ]
}
 <br /> 
### POST request
http://localhost:8000/search/recent  <br /> 
Sample request
{
		"recent_result":[
                {
              
                    "string_string":"ENT",
                    "userid":"abc@gmail.com",
                    "req_param":
                    	{
                    		"location":"37.773,-122.413,100",
                    		"user_location":"37.773,-122.413",
                    		"skip":"0","limit":"10"
                    		
                    	},
                    "endpoint":"/alldoctors"
                }
            ]
	}
 <br /> 
Sample response
{
    "message": "Created",
    "code": 201,
    "data": {
        "recent_result": [
            {
                "userid": "abc@gmail.com",
                "endpoint": "/alldoctors",
                "string_string": "ENT",
                "req_param": {
                    "skip": "0",
                    "limit": "10",
                    "user_location": "37.773,-122.413",
                    "location": "37.773,-122.413,100"
                }
            }
        ]
    }
}
