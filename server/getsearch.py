import json
import msgpack
import falcon
import time
from collections import OrderedDict
from connect import H2Connection as db
from retrying import retry

class GetSearch(object):
    
    # ob =  None
    # def __init__(self):
    #     self.ob = db()

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
            # record["req_param"] = result[count]
            # count += 1
            record["endpoint"] = result[count]
            count += 1
            record["frequency"] = result[count]
            data["recent_result"].append(record)
        return data
    
    @retry(wait_fixed=2000, stop_max_attempt_number=5)
    def on_get(self, req, resp):
        try:
            #search = Search()
            ob = db()
            ob.executeSQL(ob.readSQLFromFile('sanjeevni_db.sql'))
            if "userid" not in req.params:
                userid = ""
                ob.executeSQL("SELECT h.search_string , h.endpoint, count(h.search_string) from sanjeevi_search_history as h GROUP BY h.search_string")
            else:
                userid = req.params['userid']
                ob.executeSQL("SELECT TOP 10 h.search_string , h.endpoint, count(h.search_string) from sanjeevi_search_history as h where h.userid like '"+req.params["userid"]+"' GROUP BY h.search_string")
            data = self.parseJson_fromQuery(ob.getResponse() ,userid)
            ob.destroy()
            resp.set_header('response', '200 OK')
            resp.set_header('Access-Control-Allow-Origin', '*')
            resp.set_header('Access-Control-Allow-Methods', '*')
            resp.set_header('Access-Control-Allow-Headers', '*')
            resp.set_header('Access-Control-Max-Age', 1728000)  #20 days
            resp.body = json.dumps(data, ensure_ascii=False,sort_keys=True, indent=4)
            resp.status = falcon.HTTP_200
        except Exception as e:
            resp.status = falcon.HTTP_500
            resp.body = json.dumps({'status': 0, 'message': 'Server Error'})        
                