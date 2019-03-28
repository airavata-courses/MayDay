from app import App
from waitress import serve
import config as config
from zookeeper import ZookeeperHandler

#ZookeeperHandler.registerAuthService(App().get_zk(),config.PORT)
serve(App().get_api(), host='0.0.0.0', port=config.PORT) 


