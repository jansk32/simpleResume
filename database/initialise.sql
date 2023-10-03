CREATE DATABASE IF NOT EXISTS Requests;
use Requests;
CREATE TABLE IF NOT EXISTS transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName varchar(20) NOT NULL,
    lastName varchar(20),
    email varchar(100) NOT NULL,
    company varchar(100) NOT NULL,
    body varchar(300),
    type int NOT NULL,
    messageId varchar(250) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);