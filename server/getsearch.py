import json
import msgpack
import falcon
import time
from collections import OrderedDict
from retrying import retry
from database import Database
from historyGetter import histGetter

class GetSearch(object):
    

    def parseJson_fromQuery(self, response, userid):
        data ={}
        data["recent_result"] = []
        for result in response:
            record = {}
            count = 0
            if(userid  !=""):
                record["userid"] = userid
            record["search_string"] = result[count]
            count += 1
            record["endpoint"] = result[count]
            count += 1
            record["frequency"] = result[count]
            data["recent_result"].append(record)
        return data
    
    def on_get(self, req, resp):
        try:
            db = Database()
            obj = histGetter(db)
            if "userid" not in req.params:
                userid = ""
                histList = obj.getHistory()
            else:
                userid = req.params['userid']
                histList = obj.getHist(userid)
            data = self.parseJson_fromQuery(histList ,userid)
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
                
    