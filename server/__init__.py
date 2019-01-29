from app import App
from waitress import serve
import os

PORT = os.environ.get['PORT',8000]
serve(App().get_api(), host='localhost', port=PORT)
