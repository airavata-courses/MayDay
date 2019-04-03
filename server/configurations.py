import os
import configparser

class Configurations:

    def __init__(self):
        self.config = configparser.ConfigParser()
        self.config.read(
            os.path.join(os.path.dirname(__file__),'database.ini')
        )

    def getConfigParser(self):
        return self.config