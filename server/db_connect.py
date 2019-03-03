from connect import H2Connection as db


class DB:
    db = None
    
    def __init__(self):
        self.db = db()
    
    def get_db(self):
        return self.db