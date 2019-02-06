import json
import msgpack
import falcon

class Test(object):
    
    def on_get(self , req , res):
        res.set_header('response', '200 OK')
        res.status = falcon.HTTP_200
        res.body = "200 OK"