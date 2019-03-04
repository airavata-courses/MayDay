-- DROP TABLE IF EXISTS sanjeevi_search_history;
-- DROP TABLE IF EXISTS sanjeevi_search_history_temp;
CREATE TABLE IF NOT EXISTS sanjeevi_search_history(
	userid VARCHAR NOT NULL,
	search_string VARCHAR NOT NULL,
	endpoint VARCHAR NOT NULL,
	time_stamp timestamp
);

CREATE TABLE IF NOT EXISTS sanjeevi_search_history_temp(
	search_string VARCHAR NOT NULL,
	endpoint VARCHAR NOT NULL
);
-- INSERT INTO sanjeevi_search_history VALUES ('roja.raman@iu.edu', 'Mark', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('roja.raman@gmail.com', 'ABC', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('roja.raman@iu.edu', 'Mark', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('abc@iu.edu', 'Mark', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('roja.raman@iu.edu', 'Henry', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('roja.raman@iu.edu', 'Mark', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('roja.raman@gmail.com', 'Henry', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('roja.raman@iu.edu', 'Mark', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('abc@iu.edu', 'Mark', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('roja.raman@iu.edu', 'Henry', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('roja.raman@iu.edu', 'Mark', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('roja.raman@gmail.com', 'Henry', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('roja.raman@iu.edu', 'Mark', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('abc@iu.edu', 'Mark', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('roja.raman@iu.edu', 'Henry', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('roja.raman@iu.edu', 'Oscar', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('roja.raman@gmail.com', 'Henry', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('roja.raman@iu.edu', 'Mark', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('abc@iu.edu', 'Mark', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('roja.raman@iu.edu', 'Henry', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('roja.raman@iu.edu', 'Mark', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('roja.raman@gmail.com', 'Henry', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('roja.raman@iu.edu', 'Mark', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('abc@iu.edu', 'Mark', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('roja.raman@iu.edu', 'Henry', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('roja.raman@iu.edu', 'Mark', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('roja.raman@gmail.com', 'Henry', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('roja.raman@iu.edu', 'Mark', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('abc@iu.edu', 'Mark', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('roja.raman@iu.edu', 'Henry', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('roja.raman@iu.edu', 'Sachin', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('roja.raman@gmail.com', 'Henry', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('roja.raman@iu.edu', 'Mark', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('abc@iu.edu', 'Mark', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);
-- INSERT INTO sanjeevi_search_history VALUES ('roja.raman@iu.edu', 'Obama', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors' ,CURRENT_TIMESTAMP);


-- INSERT INTO sanjeevi_search_history_temp VALUES ('Mark', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors');
-- INSERT INTO sanjeevi_search_history_temp VALUES ('Henry', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors');
-- INSERT INTO sanjeevi_search_history_temp VALUES ('Mark', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors');
-- INSERT INTO sanjeevi_search_history_temp VALUES ('Mark', '{"limit": "10","location": "37.773,-122.413,100","name": "mark","skip": "0", "user_location": "37.773,-122.413"}','/alldoctors');