import falcon

from .search import Search


api = application = falcon.API()


search = Search()
api.add_route('/search/recent',search)