import os
import ConfigParser

class Configurations:

    def __init__(self):
        self.config = ConfigParser.ConfigParser()
        self.config.read(
            os.path.join(os.path.dirname(__file__),'database.ini')
        )

    def getConfigParser(self):
        return self.config