import json
import msgpack
import falcon
import time
from collections import OrderedDict

class Search(object):
    
    
    def on_get(self, req, resp):
        with open('data.json') as json_file:  
            data = json.load(json_file)
            resp.set_header('response', '200 OK')
            resp.body = json.dumps(OrderedDict(data), ensure_ascii=False,sort_keys=True, indent=4)
            resp.status = falcon.HTTP_200


    def on_post(self, req, res):
        posted_data = json.loads(req.stream.read())
        if "recent_result" not in posted_data:
            errmsg = {
                "msg" : "Invalid request format"
            }
            res.set_header('response', '400')
            res.status = falcon.HTTP_400
            res.body = json.dumps(errmsg, ensure_ascii=False,sort_keys=True, indent=4)
        else:
            #print(str(type(posted_data)))
            #print(posted_data) 
            search = Search()
            
            obj ={
                "code" : 201,
                "message" : "Created",
                "data":posted_data
            }

            recent_result = {
                "userid":obj["data"]["recent_result"][0]["userid"],
                "string_string":obj["data"]["recent_result"][0]["string_string"],
                "req_param":obj["data"]["recent_result"][0]["req_param"],
                "endpoint":str(obj["data"]["recent_result"][0]["endpoint"]),
                "timestamp":time.asctime( time.localtime(time.time()) )
            }
            res.set_header('response', '201 Created')
            res.body = json.dumps(OrderedDict(obj), ensure_ascii=False)
            res.status = falcon.HTTP_201
            
            search.data_insertion(recent_result)
            
    def data_insertion(self, data_response):
        #print data_response
        doc["recent_result"].append(data_response)
        with open('data.json', 'w') as outfile:  
            json.dump(doc, outfile , sort_keys=True, indent=4)
            outfile.close()


doc = { 
            "recent_result":[
                {
                    "userid":"roja.raman@iu.edu",
                    "string_string":"obstetrics",
                    "req_param":{'location':'37.773,-122.413,100','user_location':'37.773,-122.413','skip':'0','limit':'10'},
                    "endpoint":"/alldoctors",
                    "timestamp":""
                }
            ]
        }
