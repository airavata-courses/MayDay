DROP TABLE IF EXISTS sanjeevi_search_history;
CREATE TABLE sanjeevi_search_history(
	userid VARCHAR,
	search_string VARCHAR,
	req_param VARCHAR,
	endpoint VARCHAR,
	time_stamp timestamp
);

INSERT INTO sanjeevi_search_history VALUES ('roja.raman@iu.edu', 'Mark', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
INSERT INTO sanjeevi_search_history VALUES ('roja.raman@gmail.com', 'Henry', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
INSERT INTO sanjeevi_search_history VALUES ('roja.raman@iu.edu', 'Mark', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
INSERT INTO sanjeevi_search_history VALUES ('abc@iu.edu', 'Mark', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);