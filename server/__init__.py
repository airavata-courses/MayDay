#!/bin/python
from app import App
from waitress import serve

serve(App().get_api(), host='localhost', port=8001)