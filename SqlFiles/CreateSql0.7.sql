-- MySQL Script generated by MySQL Workbench
-- 07/29/15 14:37:04
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema hr_process
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema hr_process
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `hr_process` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
USE `hr_process` ;

-- -----------------------------------------------------
-- Table `hr_process`.`rs_user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hr_process`.`rs_user` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `username` VARCHAR(45) NOT NULL ,
  `nickname` VARCHAR(45) NOT NULL ,
  `email` VARCHAR(45) NULL ,
  PRIMARY KEY (`id`)  ,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC)  )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hr_process`.`rs_temp_user_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hr_process`.`rs_temp_user_type` (
  `user_id` INT NOT NULL ,
  `type` ENUM('hr', 'leader', 'normal') NOT NULL DEFAULT 'normal' ,
  PRIMARY KEY (`user_id`)  )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hr_process`.`rs_position`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hr_process`.`rs_position` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `name` VARCHAR(45) NOT NULL ,
  PRIMARY KEY (`id`)  )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hr_process`.`rs_resume`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hr_process`.`rs_resume` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `resume_serial_id` VARCHAR(45) NULL ,
  `name` VARCHAR(15) NULL ,
  `education` TINYINT NULL ,
  `age` TINYINT NULL ,
  `sex` TINYINT NULL ,
  `telphone` VARCHAR(15) NULL ,
  `email` VARCHAR(35) NULL ,
  `address` VARCHAR(45) NULL ,
  `position` INT NULL ,
  `worked_duration` TINYINT NULL ,
  `resume_from` VARCHAR(45) NULL ,
  `resume_from_detail` VARCHAR(45) NULL ,
  `resume_name` VARCHAR(45) NULL ,
  `resume_last_edit_date` TIMESTAMP NULL ,
  `resume_state` TINYINT NULL ,
  `resume_create_user` INT NULL ,
  `resume_create_date` TIMESTAMP NULL ,
  `resume_content` VARCHAR(45) NULL ,
  PRIMARY KEY (`id`)  ,
  INDEX `resume_serial_id` (`resume_serial_id` ASC)  )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hr_process`.`rs_resume_process`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hr_process`.`rs_resume_process` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `resume_id` INT NOT NULL ,
  `state` TINYINT NOT NULL ,
  `sender_id` INT NULL ,
  `receiver_id` INT NULL ,
  `information` VARCHAR(256) NULL ,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (`id`)  ,
  INDEX `process_state_receiver` (`state` ASC, `receiver_id` ASC)  ,
  INDEX `process_state_sender` (`state` ASC, `sender_id` ASC)  )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hr_process`.`rs_interview`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hr_process`.`rs_interview` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `process_id` INT NOT NULL ,
  `start_time` DATETIME NULL ,
  `duration` TINYINT NULL DEFAULT 1 ,
  `information` VARCHAR(2048) NULL ,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ,
  `create_user_id` INT NOT NULL ,
  PRIMARY KEY (`id`)  ,
  INDEX `interview_process_id` (`process_id` ASC)  )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hr_process`.`rs_interviewer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hr_process`.`rs_interviewer` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `process_id` INT NOT NULL ,
  `user_id` INT NOT NULL ,
  PRIMARY KEY (`id`)  ,
  INDEX `interviewer_process_id` (`process_id` ASC)  )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hr_process`.`rs_interview_comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hr_process`.`rs_interview_comment` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `interview_id` INT NOT NULL ,
  `interviewer_id` INT NOT NULL ,
  `comment` VARCHAR(1024) NOT NULL ,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (`id`)  ,
  INDEX `comment_interview_id` (`interview_id` ASC)  )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hr_process`.`rs_message`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hr_process`.`rs_message` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `receiver_user_id` INT NOT NULL ,
  `sender_user_id` INT NULL ,
  `content` VARCHAR(256) NULL ,
  `read` TINYINT(1) NULL DEFAULT 0 ,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (`id`)  ,
  INDEX `resume_to_leader_id` (`sender_user_id` ASC)  )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hr_process`.`rs_need`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hr_process`.`rs_need` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `department` VARCHAR(45) NULL ,
  `position` INT NULL ,
  `information` VARCHAR(1024) NULL ,
  `create_user_id` INT NOT NULL ,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  `need_amount` INT NULL ,
  `apply_amount` INT NULL DEFAULT 0 ,
  PRIMARY KEY (`id`)  ,
  INDEX `need_create_user` (`create_user_id` ASC)  )
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
