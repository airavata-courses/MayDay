import json
import msgpack
import falcon

class Search(object):

    def on_get(self, req, resp):
        doc = {
            'recent_doctor_result': [
                 {'id': 0,
                    'doctor_id': '01',
                    'doctor': 'John Doe',
                    'rating': '5',
                    'specialisation': 'Neurologist'},
                    {'id': 1,
                    'doctor_id': '02',
                    'doctor': 'Abc Def',
                    'rating': '5',
                    'specialisation': 'Cardiologist'},
                    {'id': 1,
                    'doctor_id': '03',
                    'doctor': 'Xyz xyz',
                    'rating': '5',
                    'specialisation': 'ENT'},
            ]
        }

        # Create a JSON representation of the response
        resp.body = json.dumps(doc, ensure_ascii=False)

        # The following line can be omitted because 200 is the default
        # status returned by the framework, but it is included here to
        # illustrate how this may be overridden as needed.
        resp.status = falcon.HTTP_200


    def on_post(self, req, res):
        posted_data = json.loads(req.stream.read())
        if "userid" not in posted_data:
            errmsg = {
                "msg" : "Invalid request format"
            }
            res.status = falcon.HTTP_400
            res.body = json.dumps(errmsg, ensure_ascii=False)
        else:
            #print(str(type(posted_data)))
            #print(posted_data)
            obj ={
                "code" : 200,
                "message" : "OK",
                "userid":posted_data
            }
            
            res.body = json.dumps(obj, ensure_ascii=False)
            res.status = falcon.HTTP_200