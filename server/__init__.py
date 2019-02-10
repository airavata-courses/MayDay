from app import App
from waitress import serve

serve(App().get_api(), host='0.0.0.0', port=7000) 

