import falcon

from .search import Search
from .test import Test


api = application = falcon.API()


search = Search()
api.add_route('/search/recent',search)

test = Test()
api.add_route('/test',test)