import jaydebeapi
import json
import jpype

class H2Connection:

	h2DriverClass = 'org.h2.Driver'
	h2ConnectionString = 'jdbc:h2:./dbfiles/sanjeevni;AUTO_RECONNECT=TRUE'
	h2Creds = ['admin', 'admin']
	h2Jar = 'dbfiles/h2-1.4.197.jar'

	connection = jaydebeapi.connect(h2DriverClass, h2ConnectionString, h2Creds, jars=[h2Jar])
	jpype.attachThreadToJVM()
	cursor = connection.cursor()

	def readSQLFromFile(self, sqlfile):
		sqlFile = open(sqlfile, 'r')
		return sqlFile.read()

	def executeSQL(self, sqlContents):
		self.cursor.execute(sqlContents)

	def commit(self):
		self.connection.commit()

	def getResponse(self):
		return json.dumps(self.cursor.fetchall())

	def destroy(self):
		self.connection.close()
		self.cursor.close()

	def init_database(self):
		self.executeSQL(self.readSQLFromFile('dbfiles/sanjeevni_db.sql'))

# ob.executeSQL('SELECT * FROM student;')
# print ob.getResponse()
# ob.destroy()
