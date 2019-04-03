class histGetter:

    def __init__(self, database):
        self.db = database

    def getHistoryAll(self):
        query = "SELECT * from sanjeevi_search_history"
        return self.db.fetchAll(query)
    def getHistory(self):
        query = "SELECT h.search_string , h.endpoint, count(h.search_string) from sanjeevi_search_history as h GROUP BY h.search_string, h.endpoint;"
        return self.db.fetchAll(query)

    def getHist(self, id):
        query = "SELECT h.search_string , h.endpoint, count(h.search_string) from sanjeevi_search_history as h where h.userid = {} GROUP BY h.search_string,h.endpoint LIMIT 10".format(id)
        return self.db.fetchAll(query)