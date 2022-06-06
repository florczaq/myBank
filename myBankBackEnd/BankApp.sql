-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: mybank
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accounts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int DEFAULT NULL,
  `balance` decimal(10,2) DEFAULT '0.00',
  `savings` decimal(10,2) DEFAULT '0.00',
  `username` varchar(40) DEFAULT NULL,
  `password` varchar(40) DEFAULT NULL,
  `accountNumber` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customers_fk` (`customer_id`),
  CONSTRAINT `customers_fk` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES (15,23,8000.00,20.00,'michael','michael','9265749749'),(16,24,1375.00,400.00,'jim','jim','6466830959'),(17,25,2015.00,200.00,'dwight','dwight','0774720535'),(18,26,620.00,140.00,'pam','pam','5495243422'),(19,27,680.00,30.00,'jan','jan','9075634514'),(20,28,800.00,100.00,'erin','erin','5132860507'),(21,29,630.10,230.00,'andy','andy','5516457162'),(22,30,6971.90,1708.00,'kevin','kevin','3927321529'),(23,31,300.00,0.00,'angela','angela','1202722242'),(24,32,1500.00,0.00,'toby','toby','8224601230'),(25,33,15200.00,0.00,'ryan','ryan','4354821632'),(26,34,5100.00,0.00,'holly','holly','6949455220'),(27,35,4000.00,0.00,'kelly','kelly','6523084083'),(28,36,9800.00,0.00,'darryl','darryl','1670581112'),(29,37,7100.00,0.00,'stanley','stanley','8469388776');
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `balance_history`
--

DROP TABLE IF EXISTS `balance_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `balance_history` (
  `id` int NOT NULL AUTO_INCREMENT,
  `account_id` int DEFAULT NULL,
  `transaction_type` int DEFAULT NULL,
  `transaction_value` decimal(10,2) DEFAULT NULL,
  `transaction_date` date DEFAULT NULL,
  `senderNumber` varchar(10) DEFAULT NULL,
  `title` varchar(100) DEFAULT 'Money tranfer',
  PRIMARY KEY (`id`),
  KEY `account_id` (`account_id`),
  KEY `transaction_type` (`transaction_type`),
  CONSTRAINT `balance_history_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`),
  CONSTRAINT `balance_history_ibfk_2` FOREIGN KEY (`transaction_type`) REFERENCES `transaction_types` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `balance_history`
--

LOCK TABLES `balance_history` WRITE;
/*!40000 ALTER TABLE `balance_history` DISABLE KEYS */;
INSERT INTO `balance_history` VALUES (1,22,2,200.00,'2022-05-18','6466830959','Money Transfer'),(2,16,1,200.00,'2022-05-18','3927321529','Money Transfer'),(3,22,2,20.00,'2022-05-18','5516457162','Money Transfer'),(4,21,1,20.00,'2022-05-18','3927321529','Money Transfer'),(5,16,2,300.00,'2022-05-18','3927321529','Money Transfer'),(6,22,1,300.00,'2022-05-18','6466830959','Money Transfer'),(7,16,2,200.00,'2022-05-18','5516457162','Money Transfer'),(8,21,1,200.00,'2022-05-18','6466830959','Money Transfer'),(9,16,2,10.00,'2022-05-18','5516457162','Money Transfer'),(10,21,1,10.00,'2022-05-18','6466830959','Money Transfer'),(11,21,2,100.00,'2022-05-18','3927321529','Money Transfer'),(12,22,1,100.00,'2022-05-18','5516457162','Money Transfer'),(13,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(14,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(15,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(16,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(17,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(18,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(19,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(20,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(21,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(22,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(23,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(24,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(25,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(26,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(27,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(28,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(29,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(30,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(31,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(32,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(33,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(34,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(35,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(36,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(37,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(38,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(39,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(40,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(41,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(42,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(43,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(44,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(45,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(46,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(47,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(48,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(49,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(50,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(51,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(52,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(53,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(54,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(55,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(56,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(57,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(58,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(59,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(60,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(61,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(62,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(63,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(64,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(65,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(66,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(67,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(68,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(69,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(70,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(71,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(72,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(73,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(74,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(75,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(76,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(77,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(78,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(79,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(80,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(81,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(82,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(83,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(84,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(85,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(86,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(87,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(88,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(89,21,2,20.00,'2022-05-18','3927321529','Money Transfer'),(90,22,1,20.00,'2022-05-18','5516457162','Money Transfer'),(91,22,2,0.10,'2022-05-23','5516457162','Test transfer'),(92,21,1,0.10,'2022-05-23','3927321529','Test transfer'),(93,22,2,10.00,'2022-05-25','6466830959','Test Transfer'),(94,16,1,10.00,'2022-05-25','3927321529','Test Transfer'),(95,22,2,19.00,'2022-05-26','6466830959','bb'),(96,16,1,19.00,'2022-05-26','3927321529','bb'),(97,22,2,10.00,'2022-06-06','6466830959','test'),(98,16,1,10.00,'2022-06-06','3927321529','test');
/*!40000 ALTER TABLE `balance_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_info_history`
--

DROP TABLE IF EXISTS `customer_info_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_info_history` (
  `id` int NOT NULL AUTO_INCREMENT,
  `property` varchar(40) DEFAULT NULL,
  `account_id` int DEFAULT NULL,
  `old_value` varchar(60) DEFAULT NULL,
  `new_value` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `account_id` (`account_id`),
  CONSTRAINT `customer_info_history_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_info_history`
--

LOCK TABLES `customer_info_history` WRITE;
/*!40000 ALTER TABLE `customer_info_history` DISABLE KEYS */;
INSERT INTO `customer_info_history` VALUES (1,'phoneNumber',22,'888999000','567865488'),(2,'pesel',22,'56765678765','00011122233'),(3,'phoneNumber',22,'567865488','999999999'),(4,'firstName',22,'Kevin','Cris'),(5,'firstName',22,'Cris','Kevin');
/*!40000 ALTER TABLE `customer_info_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(40) NOT NULL,
  `lastName` varchar(40) NOT NULL,
  `city` varchar(40) NOT NULL,
  `street` varchar(60) DEFAULT NULL,
  `houseNumber` varchar(15) DEFAULT NULL,
  `pesel` char(11) DEFAULT NULL,
  `emailAddress` varchar(40) DEFAULT NULL,
  `phoneNumber` char(9) DEFAULT NULL,
  `dateOfBirth` date DEFAULT NULL,
  `postCode` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (23,'Michael','Scott','Concord','Emerson Street','54','12312312312','michael@scott.dmc','123123123','1962-08-16','23-232 Concord'),(24,'Jim','Halpert','New York','st. Elizabeth','91','43242342342','jim@halpert.dmc','864589654','1979-10-20','43-200 Boston'),(25,'Dwight','Schrute','Washington','Holiday Street','89','31241583151','dwight@schrute.dmc','479374227','1966-01-20','24-424 Washington'),(26,'Pam','Beesly','Indiana','Fort Wayne Street','68A','85794958722','pam@beesly.dmc','896251934','1974-04-07','25-425 Indiana'),(27,'Jan','Levinson','Houston','Gildart Street','60B','98571759375','jan@levinson.dmc','326499243','1967-06-29','30-320 Houston'),(28,'Erin','Hannon','Kansas City','Koman Street','65','48732874947','erin@hannon.dmc','345678765','1980-05-02','20-310 Kansas '),(29,'Andy','Bernard','Atlanta','st. Paxton','82B','78243782458','andy@bernard.dmc','456787656','1974-01-24','38-424 Atlanta'),(30,'Kevin','Malone','Rzeszow','Celste Street','54B','00011122233','kevin@malone.dmc','999999999','1972-11-29','38-424 Atlanta'),(31,'Angela','Martin','Lafayette','Snyder Street','55A','67898768908','angela@martin.dmc','909876768','1971-06-25','65-900 Lafayette'),(32,'Toby','Flenderson','Westport','Hamilton Street','77','67897654678','toby@flenderson.dmc','213787490','1967-02-22','29-900 Westport'),(33,'Ryan','Howard','Newton','William Street','74B','98767898765','ryan@howard.dmc','789878987','1979-07-31','22-200 Newton'),(34,'Holly','Flax','Flushing','Georgia Street','62D','67857865786','holly@flax.dmc','876578908','1968-05-03','15-230 Flushing'),(35,'Kelly','Kapoor','Cambridge','Katherin Street','63C','98768976578','kelly@kapoor.dmc','766578976','1979-06-24','45-200 Cambridge'),(36,'Darryl','Philbin','Chicago','Saint Xavier Street','44','98765789087','darryl@philbin.dmc','876578907','1971-10-25','27-300 Chicago'),(37,'Stanley','Hudson','Chicago','st. Baker','64','87689657897','stanley@hudson.dmc','879657890','1958-02-19','27-300 Chicago');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `customers_AFTER_UPDATE` AFTER UPDATE ON `customers` FOR EACH ROW BEGIN
	declare account_id int;
    set @colname = "";
    set @oldV = "";
    set @newV = "";

	if NEW.firstName!=OLD.firstName then
		set @colname = 'firstName';
        set @oldV = old.firstName; 
		set @newV = new.firstName;	
    end if;
	if NEW.lastName!=OLD.lastName then
		set @colname = 'lastName';
    set @oldV = old.firstName; 
		set @newV = new.firstName;	
    end if;
    if NEW.city!=OLD.city then
		set @colname = 'city';
		set @oldV = old.city; 
		set @newV = new.city;	
    end if;
    if NEW.street!=OLD.street then
		set @colname = 'street';
		set @oldV = old.street; 
		set @newV = new.street;	
    end if;
    if NEW.houseNumber!=OLD.houseNumber then
		set @colname = 'houseNumber';
		set @oldV = old.houseNumber ; 
		set @newV = new.houseNumber ;	
    end if;
    if NEW.pesel!=OLD.pesel then
		set @colname = 'pesel';
		set @oldV = old.pesel; 
		set @newV = new.pesel;	
    end if;
    if NEW.emailAddress!=OLD.emailAddress then
		set @colname = 'emailAddress';
		set @oldV = old.emailAddress; 
		set @newV = new.emailAddress;	
    end if;
    if NEW.phoneNumber!=OLD.phoneNumber then
		set @colname = 'phoneNumber';
		set @oldV = old.phoneNumber; 
		set @newV = new.phoneNumber;	
    end if;
    if NEW.dateOfBirth!=OLD.dateOfBirth then
		set @colname = 'dateOfBirth';
		set @oldV = old.dateOfBirth; 
		set @newV = new.dateOfBirth;	
    end if;
    if NEW.postCode!=OLD.postCode then
		set @colname = 'postCode';
		set @oldV = old.postCode; 
		set @newV = new.postCode;	
    end if;
	
    select accounts.id into account_id 
    from accounts inner join customers 
    on accounts.customer_id = customers.id 
    where customers.id = old.id;
    
	insert into customer_info_history (property,account_id,old_value,new_value) values
    (@colname, account_id, @oldV, @newV);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `transaction_types`
--

DROP TABLE IF EXISTS `transaction_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction_types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction_types`
--

LOCK TABLES `transaction_types` WRITE;
/*!40000 ALTER TABLE `transaction_types` DISABLE KEYS */;
INSERT INTO `transaction_types` VALUES (1,'incoming'),(2,'outgoing');
/*!40000 ALTER TABLE `transaction_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transactions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `value` decimal(10,2) DEFAULT NULL,
  `sent_by` int DEFAULT NULL,
  `received_by` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sent_by` (`sent_by`),
  KEY `received_by` (`received_by`),
  CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`sent_by`) REFERENCES `accounts` (`id`),
  CONSTRAINT `transactions_ibfk_2` FOREIGN KEY (`received_by`) REFERENCES `accounts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
INSERT INTO `transactions` VALUES (1,1000.00,15,16),(2,100.00,16,21),(3,1000.00,22,27),(4,100.00,22,29),(5,800.00,22,28),(6,100.00,22,26),(7,200.00,22,25),(8,300.00,15,22),(9,140.00,15,22),(10,540.00,15,22),(11,100.00,16,18),(12,320.00,19,18),(13,1.00,22,17),(14,2.00,22,17),(15,3.00,22,17),(16,4.00,22,17),(17,5.00,22,17),(18,5.00,22,16),(19,6.00,22,16),(20,7.00,22,16),(21,8.00,22,16),(22,10.00,22,16),(23,100.00,22,16),(24,100.00,22,16),(25,10.00,22,16),(26,200.00,22,16),(27,20.00,22,21),(28,300.00,16,22),(29,200.00,16,21),(30,10.00,16,21),(31,100.00,21,22),(32,0.10,22,21),(33,10.00,22,16),(34,19.00,22,16),(35,10.00,22,16);
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'mybank'
--

--
-- Dumping routines for database 'mybank'
--
/*!50003 DROP FUNCTION IF EXISTS `delete_account` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `delete_account`(accountID INT) RETURNS int
    DETERMINISTIC
BEGIN
	declare customerID INT; 
    select customer_id into customerID FROM accounts where id = accountID;
	DELETE FROM accounts WHERE id = accountID;
    DELETE FROM customers where id = customerID;
    DELETE FROM balance_history where account_id = accountID;
RETURN 1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `getNameById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `getNameById`(uid varchar(10)) RETURNS varchar(100) CHARSET utf8mb4
    DETERMINISTIC
BEGIN
	declare users_name varchar(100);
    SELECT concat(customers.firstName, " ", customers.lastName)
    into users_name
    from customers inner join accounts on customers.id = accounts.customer_id
    where accounts.accountNumber = uid;
RETURN users_name;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `isUsernameAlreadyTaken` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `isUsernameAlreadyTaken`(fUsername varchar(40)) RETURNS tinyint(1)
    DETERMINISTIC
BEGIN
	declare result int;
    SELECT COUNT(username) into result from accounts where username=fUsername;
RETURN result;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `make_transfer` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `make_transfer`(
	fReceiver varchar(10),
    fSender int,
    fValue decimal(10,2),
    fTitle varchar(100)
) RETURNS tinyint(1)
    DETERMINISTIC
BEGIN
    declare receiver_id int;
	declare senderNumber varchar(10);
    
    update accounts set balance=balance-fValue where id = fSender;
	update accounts set balance=balance+fValue where accountNumber = fReceiver;
	
    select id into receiver_id from accounts where accountNumber = fReceiver;
    
    insert into transactions (value, sent_by, received_by) values 
    (fValue, fSender, receiver_id);
    
    select accountNumber into senderNumber from accounts where id = fSender;
    
    insert into balance_history (account_id, transaction_type, transaction_value, transaction_date, senderNumber, title) values 
    (fSender, 2, fValue, curdate(), fReceiver, fTitle),
    (receiver_id, 1, fValue, curdate(), senderNumber, fTitle);
    
RETURN true;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `new_account` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `new_account`(
	aCustomerId int,
	aUsername varchar(40),
    aPassword varchar(40),
    aAccountNumber varchar(10)
) RETURNS int
    DETERMINISTIC
BEGIN
	insert into accounts (
		`customer_id`,
        `username`,
        `password`,
		`accountNumber`
    )
    values (
		aCustomerId,
        aUsername,
        aPassword,
        aAccountNumber
    );
RETURN 1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `new_customer` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `new_customer`(
	cFirstName varchar(40),
    cLastName varchar(40),
    cCity varchar(40),
    cStreet varchar(60),
    cHouseNumber varchar(15),
    cPesel char(11),
    cEmailAddress varchar(40),
    cPhoneNumber char(9),
    cDateOfBirth date,
    cPostCode varchar(30)
) RETURNS int
    DETERMINISTIC
begin
INSERT INTO `mybank`.`customers` ( 
`firstName`, 
`lastName`, 
`city`, 
`street`, 
`houseNumber`, 
`pesel`, 
`emailAddress`, 
`phoneNumber`,
`dateOfBirth`,
`postCode`
)
VALUES
(
	cFirstName,
	cLastName,
	cCity,
	cStreet,
	cHouseNumber,
	cPesel,
	cEmailAddress,
	cPhoneNumber,
    cDateOfBirth,
    cPostCode
);
return 1;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `pay_out_from_savings` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `pay_out_from_savings`(fId int, fValue decimal(10,2)) RETURNS int
    DETERMINISTIC
BEGIN
	update accounts set balance=balance+fValue where id=fId;
    update accounts set savings=savings-fValue where id=fId;
RETURN 1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `saveMoney` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `saveMoney`(fId int, fValue decimal(10,2)) RETURNS int
    DETERMINISTIC
BEGIN
	update accounts set balance=balance-fValue where id = fId;
    update accounts set savings=savings+fValue where id = fId;
RETURN 1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `user_exist` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `user_exist`(username varchar(40), password varchar(40)) RETURNS int
    DETERMINISTIC
BEGIN
	DECLARE user_id INT;
    
    SELECT id INTO user_id FROM accounts 
    WHERE accounts.username = username AND accounts.password = password;
    RETURN user_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `updateCustomerInfo` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateCustomerInfo`(fProperty varchar(40), fAccount_id int, fNew_value varchar(60))
BEGIN
	declare customer_id int;
    SELECT customers.id into customer_id from customers inner join accounts on accounts.customer_id = customers.id where accounts.id = fAccount_id;
    
    SET @updateStatement = CONCAT('Update customers set ', fProperty, ' = "', fNew_value, '" where id = ', customer_id);
    prepare statement2 from @updateStatement;
    execute statement2;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-06 23:08:59
