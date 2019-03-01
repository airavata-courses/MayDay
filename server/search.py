import json
import msgpack
import falcon
import time
from collections import OrderedDict
from database import H2Connection as db
from retrying import retry


class Search(object):
    
    def __init__(self):
        self.db = db()

    def parseJson_fromQuery(self, response, userid):
        data ={}
        data["recent_result"] = []
        for result in json.loads(response):
            record = {}
            count = 0
            if(userid  !=""):
                record["userid"] = userid
            record["search_string"] = result[count]
            count += 1
            record["req_param"] = result[count]
            count += 1
            record["endpoint"] = result[count]
            count += 1
            record["frequency"] = result[count]
            data["recent_result"].append(record)
        return data
    
    @retry(wait_fixed=2000, stop_max_attempt_number=5)
    def on_get(self, req, resp):
        try:
            search = Search()
            if "userid" not in req.params:
                userid = ""
                self.db.executeSQL("SELECT h.search_string , h.req_param, h.endpoint, count(h.search_string) from sanjeevi_search_history as h GROUP BY h.search_string")
            else:
                userid = req.params['userid']
                self.db.executeSQL("SELECT TOP 10 h.search_string , h.req_param, h.endpoint, count(h.search_string) from sanjeevi_search_history as h where h.userid like '"+req.params["userid"]+"' GROUP BY h.search_string")
            data = search.parseJson_fromQuery(self.db.getResponse() ,userid)
            resp.set_header('response', '200 OK')
            resp.set_header('Access-Control-Allow-Origin', '*')
            resp.body = json.dumps(data, ensure_ascii=False,sort_keys=True, indent=4)
            resp.status = falcon.HTTP_200
        except Exception as e:
            print e
            resp.status = falcon.HTTP_500
            resp.body = json.dumps({'status': 0, 'message': 'Server Error'})        
                

    def on_post(self, req, res):
        
        posted_data = json.loads(req.stream.read())
        try:
            if "recent_result" not in posted_data:
                errmsg = {
                    "msg" : "Invalid request format"
                }
                res.set_header('response', '400')
                res.set_header('Access-Control-Allow-Origin', '*')
                res.status = falcon.HTTP_400
                res.body = json.dumps(errmsg, ensure_ascii=False,sort_keys=True, indent=4)
            else:
                dbj ={
                    "code" : 201,
                    "message" : "Created",
                    "data":posted_data
                }
                self.db.executeSQL("INSERT INTO sanjeevi_search_history VALUES ('"+dbj["data"]["recent_result"][0]["userid"]+"', '"+dbj["data"]["recent_result"][0]["search_string"]+"', '"+dbj["data"]["recent_result"][0]["req_param"]+"','"+str(dbj["data"]["recent_result"][0]["endpoint"])+"' ,CURRENT_TIMESTAMP);")
                self.db.executeSQL("SELECT * from sanjeevi_search_history")
                #print db.getResponse()
                self.db.commit()
                #db.destroy()
                res.set_header('response', '201 Created')
                res.set_header('Access-Control-Allow-Origin', '*')
                res.body = json.dumps(OrderedDict(dbj), ensure_ascii=False)
                res.status = falcon.HTTP_201
        except Exception as e:
            res.status = falcon.HTTP_500
            res.body = json.dumps({'status': 0, 'message': 'Server Error'})  
            
            #search.data_insertion(recent_result)
            
#     def data_insertion(self, data_response):
#         #print data_response
#         doc["recent_result"].append(data_response)
#         with open('data.json', 'w') as outfile:  
#             json.dump(doc, outfile , sort_keys=True, indent=4)
#             outfile.close()


# doc = { 
#             "recent_result":[
#                 {
#                     "userid":"roja.raman@iu.edu",
#                     "search_string":"dbstetrics",
#                     "req_param":{'location':'37.773,-122.413,100','user_location':'37.773,-122.413','skip':'0','limit':'10'},
#                     "endpoint":"/alldoctors",
#                     "timestamp":""
#                 }
#             ]
#         }
