import psycopg2
import psycopg2.extras

from configurations import Configurations

class Database:
    def __init__(self):
        configurations = Configurations()
        self.configParser = configurations.getConfigParser()

        schema = self.configParser.get('POSTGRESQL', 'schema')

        self.conn = psycopg2.connect("host='{}' dbname='{}' user='{}' password='{}'". format(
                self.configParser.get('POSTGRESQL', 'host'),
                self.configParser.get('POSTGRESQL', 'dbname'),
                self.configParser.get('POSTGRESQL', 'username'),
                self.configParser.get('POSTGRESQL', 'password')
            )
        )

        cur = self.conn.cursor()

        if schema is not None and schema != '':
            cur.execute("SET search_path TO {}". format(schema) )

    def getDbConnection(self):
        return self.conn

    def fetchAll(self, query):
        cur = self._executeQuery(query)
        rows = cur.fetchall()
        return rows

    def fetchOne(self, query):
        cur = self._executeQuery(query)
        rows = cur.fetchone()
        return rows

    # Execute the query and return the cursor object
    def _executeQuery(self, query):
        cur = self.conn.cursor(cursor_factory = psycopg2.extras.DictCursor)
        cur.execute(query)
        self.conn.commit()
        
        return cur