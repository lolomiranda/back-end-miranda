-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Mirandamysql
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Mirandamysql
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Mirandamysql` DEFAULT CHARACTER SET utf8 ;
USE `Mirandamysql` ;

-- -----------------------------------------------------
-- Table `Mirandamysql`.`miranda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Mirandamysql`.`miranda` (
  `usuario` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(200) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(200) NOT NULL,
  `endereco` VARCHAR(200) NOT NULL,
  `cpf` VARCHAR(11) NOT NULL,
  `telefone` VARCHAR(18) NOT NULL,
  PRIMARY KEY (`usuario`),
  UNIQUE INDEX `cpf_UNIQUE` (`cpf` ASC) VISIBLE,
  UNIQUE INDEX `telefone_UNIQUE` (`telefone` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;