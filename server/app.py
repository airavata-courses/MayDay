import falcon

from search import Search
from test import Test

class App:

	api = None
	search = None
	test = None

	def __init__(self):
		self.api  = falcon.API()
		self.search = Search()
		self.test = Test()
		self.add_api_routes()

	def add_api_routes(self):
		self.api.add_route('/search/recent',self.search)
		self.api.add_route('/test',self.test)
	
	def get_api(self):
		return self.api