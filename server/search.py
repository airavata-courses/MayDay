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

        # Create a JSON representation of the resource
        resp.body = json.dumps(doc, ensure_ascii=False)

        # The following line can be omitted because 200 is the default
        # status returned by the framework, but it is included here to
        # illustrate how this may be overridden as needed.
        resp.status = falcon.HTTP_200