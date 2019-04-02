class histSetter:
    def __init__(self, database):
        self.db = database

    def setHist(self, id,search_string,endpoint,):
        query = "INSERT INTO sanjeevi_search_history VALUES ({},{},{},CURRENT_TIMESTAMP);".format(id,search_string,endpoint)
        return self.db._executeQuery(query)