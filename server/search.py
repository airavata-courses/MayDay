import json
import msgpack
import falcon
import time
from collections import OrderedDict
from retrying import retry
from database import Database
from historyGetter import histGetter
from historySetter import histSetter

class Search(object):

    def on_post(self, req, res):
        try:
            posted_data = json.loads(req.stream.read())
            if "recent_result" not in posted_data:
                errmsg = {
                    "msg" : "Invalid request format"
                }
                res.set_header('response', '400')
                res.set_header('Access-Control-Allow-Origin', '*')
                res.set_header('Access-Control-Allow-Methods', '*')
                res.set_header('Access-Control-Allow-Headers', '*')
                res.set_header('Access-Control-Max-Age', 1728000)  #20 days
                res.status = falcon.HTTP_400
                res.body = json.dumps(errmsg, ensure_ascii=False,sort_keys=True, indent=4)
            else:
                db = Database()
                ob = histSetter(db)
                obg = histGetter(db)
                if (posted_data["recent_result"][0]["userid"] != "" and posted_data["recent_result"][0]["search_string"] != "" and posted_data["recent_result"][0]["endpoint"] != "" ):
                    obj ={
                        "code" : 201,
                        "message" : "Created",
                        "data":posted_data
                    }
                    endpointstr = "'"+str(obj["data"]["recent_result"][0]["endpoint"])+"'"
                    useridstr = "'"+obj["data"]["recent_result"][0]["userid"]+"'"
                    search_stringstr = "'"+obj["data"]["recent_result"][0]["search_string"]+"'"
                    h = ob.setHist(useridstr,search_stringstr,endpointstr)
                    g = obg.getHistoryAll()
                    res.set_header('response', '201 Created')
                    res.set_header('Access-Control-Allow-Origin', '*')
                    res.body = json.dumps(OrderedDict(obj), ensure_ascii=False)
                    res.status = falcon.HTTP_201
                else:
                    res.set_header('response', '201 Created')
                    res.set_header('Access-Control-Allow-Origin', '*')
                    msg = {
                        "code": 400,
                        "message": "Bad Request. Parameters cannot be empty."
                    }
                    res.body = json.dumps(msg, ensure_ascii=False)
                    res.status = falcon.HTTP_400
                
        except Exception as e:
            res.status = falcon.HTTP_500
            res.body = json.dumps({'status': 0, 'message': 'Server Error'})