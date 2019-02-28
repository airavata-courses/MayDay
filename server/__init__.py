from app import App
from waitress import serve
import config as config

serve(App().get_api(), host='0.0.0.0', port=config.PORT) 

