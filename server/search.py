import json
import msgpack
import falcon
import time
from collections import OrderedDict
from connect import H2Connection as db
from retrying import retry
from db_connect import DB

class Search(object):

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
            #ob = db()
            DB().get_db().executeSQL(DB().get_db().readSQLFromFile('sanjeevni_db.sql'))
            obj ={
                "code" : 201,
                "message" : "Created",
                "data":posted_data
            }
            DB().get_db().executeSQL("INSERT INTO sanjeevi_search_history VALUES ('"+obj["data"]["recent_result"][0]["userid"]+"', '"+obj["data"]["recent_result"][0]["search_string"]+"', '"+obj["data"]["recent_result"][0]["req_param"]+"','"+str(obj["data"]["recent_result"][0]["endpoint"])+"' ,CURRENT_TIMESTAMP);")
            DB().get_db().executeSQL("SELECT * from sanjeevi_search_history")
            #print ob.getResponse()
            DB().get_db().commit()
            DB().get_db().destroy()
            res.set_header('response', '201 Created')
            res.set_header('Access-Control-Allow-Origin', '*')
            res.body = json.dumps(OrderedDict(obj), ensure_ascii=False)
            res.status = falcon.HTTP_201

    # try:
    #     if "recent_result" not in posted_data:
    #         errmsg = {
    #             "msg" : "Invalid request format"
    #         }
    #         res.set_header('response', '400')
    #         res.set_header('Access-Control-Allow-Origin', '*')
    #         res.status = falcon.HTTP_400
    #         res.body = json.dumps(errmsg, ensure_ascii=False,sort_keys=True, indent=4)
    #     else:
    #         ob = db()
    #         ob.executeSQL(ob.readSQLFromFile('sanjeevni_db.sql'))
    #         obj ={
    #             "code" : 201,
    #             "message" : "Created",
    #             "data":posted_data
    #         }
    #         ob.executeSQL("INSERT INTO sanjeevi_search_history VALUES ('"+obj["data"]["recent_result"][0]["userid"]+"', '"+obj["data"]["recent_result"][0]["search_string"]+"', '"+obj["data"]["recent_result"][0]["req_param"]+"','"+str(obj["data"]["recent_result"][0]["endpoint"])+"' ,CURRENT_TIMESTAMP);")
    #         ob.executeSQL("SELECT * from sanjeevi_search_history")
    #         #print ob.getResponse()
    #         ob.commit()
    #         ob.destroy()
    #         res.set_header('response', '201 Created')
    #         res.set_header('Access-Control-Allow-Origin', '*')
    #         res.body = json.dumps(OrderedDict(obj), ensure_ascii=False)
    #         res.status = falcon.HTTP_201
    # except Exception as e:
    #     res.status = falcon.HTTP_500
    #     res.body = json.dumps({'status': 0, 'message': 'Server Error'})  
