import jaydebeapi
import json

class H2Connection:
	
	connection = None

	h2DriverClass = 'org.h2.Driver'
	h2ConnectionString = 'jdbc:h2:./sanjeevni'
	h2Creds = ['admin', 'admin']
	h2Jar = './h2-1.4.197.jar'

	cursor = None

	def __init__(self):
		self.connection = jaydebeapi.connect(self.h2DriverClass, self.h2ConnectionString, self.h2Creds, self.h2Jar)
		self.cursor = self.connection.cursor()

	def readSQLFromFile(self, sqlfile):
		sqlFile = open(sqlfile, 'r')
		return sqlFile.read()

	def executeSQL(self, sqlContents):
		self.cursor.execute(sqlContents)

	def getResponse(self):
		return json.dumps(self.cursor.fetchall())

	def destroy(self):
		self.connection.close()
		self.cursor.close()



# ob = H2Connection()
# ob.executeSQL(ob.readSQLFromFile('sample.sql'))
# ob.executeSQL('SELECT * FROM student;')
# print ob.getResponse()
# ob.destroy()
