import json
import msgpack
import falcon


class Search(object):
    
    
    def on_get(self, req, resp):
        # Create a JSON representation of the response
        resp.body = json.dumps(doc, ensure_ascii=False)

        # The following line can be omitted because 200 is the default
        # status returned by the framework, but it is included here to
        # illustrate how this may be overridden as needed.
        resp.status = falcon.HTTP_200


    def on_post(self, req, res):
        posted_data = json.loads(req.stream.read())
        if "recent_result" not in posted_data:
            errmsg = {
                "msg" : "Invalid request format"
            }
            res.status = falcon.HTTP_400
            res.body = json.dumps(errmsg, ensure_ascii=False)
        else:
            #print(str(type(posted_data)))
            #print(posted_data) 
            search = Search()
            
            obj ={
                "code" : 201,
                "message" : "OK",
                "data":posted_data
            }

            idn = idnum + 1
            recent_result = {
                "id" : idn,
                "string_string":obj["data"]["recent_result"][0]["string_string"],
                "req_param":obj["data"]["recent_result"][0]["req_param"],
                "endpoint":str(obj["data"]["recent_result"][0]["endpoint"])
            }
            
            res.body = json.dumps(obj, ensure_ascii=False)
            res.status = falcon.HTTP_201
            
            search.data_insertion(recent_result)
            
    def data_insertion(self, data_response):
        print data_response
        doc["recent_result"].append(data_response)
        print doc


idnum = 0
doc = { 
            "recent_result":[
                {
                    "id" : idnum,
                    "string_string":"obstetrics",
                    "req_param":"{'location':'37.773,-122.413,100','user_location':'37.773,-122.413','skip':'0','limit':'10'}",
                    "endpoint":"https://paas-purple.herokuapp.com/alldoctors"
                }
            ]
        }
