from app import App
from waitress import serve
import config as config
from database import H2Connection

# init Database 
H2Connection().init_database()

# init App
serve(App().get_api(), host='0.0.0.0', port=config.PORT) 

