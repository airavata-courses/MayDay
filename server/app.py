import falcon
from search import Search
from test import Test
from zookeeper import ZookeeperHandler
from falcon_cors import CORS
from getsearch import GetSearch
from connect import H2Connection as db
cors = CORS(allow_origins_list=['http://localhost:3000', 'http://js-168-167.jetstream-cloud.org:4200'],
            allow_all_headers=True,
            allow_all_methods=True,
			allow_all_origins=True)
class App:

	api = None
	search = None
	test = None
	zk = None

	def __init__(self):
		self.api  = falcon.API(middleware=[cors.middleware])
		self.search = Search()
		self.get_search = GetSearch()
		self.test = Test()
		self.zk = ZookeeperHandler()
		self.add_api_routes()

	def add_api_routes(self):
		self.api.add_route('/search/recent',self.search)
		self.api.add_route('/search/all',self.get_search)
		self.api.add_route('/zookeeper',self.zk)
		self.api.add_route('/test',self.test)
	
	def get_api(self):
		return self.api
	
	def get_zk(self):
		return self.zk



