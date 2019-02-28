import json
import msgpack
import falcon
import time
from collections import OrderedDict
from connect import H2Connection as db

class Search(object):
    
    # ob =  None
    # def __init__(self):
    #     self.ob = db()

    def parseJson_fromQuery(self, response):
        data ={}
        data["recent_result"] = []
        for result in json.loads(response):
            record = {}
            count = 0
            record["userid"] = result[count]
            count += 1
            record["search_string"] = result[count]
            count += 1
            record["req_param"] = result[count]
            count += 1
            record["endpoint"] = result[count]
            count += 1
            record["timestamp"] = result[count]
            data["recent_result"].append(record)
        return data
    
    def on_get(self, req, resp):
        ob = db()
        search = Search()
        ob.executeSQL(ob.readSQLFromFile('sanjeevni_db.sql'))
        ob.executeSQL('SELECT * FROM sanjeevi_search_history;')
        data = search.parseJson_fromQuery(ob.getResponse())
        resp.set_header('response', '200 OK')
        resp.set_header('Access-Control-Allow-Origin', '*')
        print data
        resp.body = json.dumps(data, ensure_ascii=False,sort_keys=True, indent=4) 
        resp.status = falcon.HTTP_200
        ob.destroy()


    def on_post(self, req, res):
        
        posted_data = json.loads(req.stream.read())
        if "recent_result" not in posted_data:
            errmsg = {
                "msg" : "Invalid request format"
            }
            res.set_header('response', '400')
            res.set_header('Access-Control-Allow-Origin', '*')
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
                "search_string":obj["data"]["recent_result"][0]["search_string"],
                "req_param":obj["data"]["recent_result"][0]["req_param"],
                "endpoint":str(obj["data"]["recent_result"][0]["endpoint"]),
                "timestamp":time.asctime( time.localtime(time.time()) )
            }
            res.set_header('response', '201 Created')
            res.set_header('Access-Control-Allow-Origin', '*')
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
                    "search_string":"obstetrics",
                    "req_param":{'location':'37.773,-122.413,100','user_location':'37.773,-122.413','skip':'0','limit':'10'},
                    "endpoint":"/alldoctors",
                    "timestamp":""
                }
            ]
        }
