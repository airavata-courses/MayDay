from app import App
from waitress import serve
import sys

if (len(sys.argv) == 3 and sys.argv[1] == "PORT"):
    PORT = sys.argv[2]
else:
    PORT = 7000

serve(App().get_api(), host='0.0.0.0', port=PORT) 

