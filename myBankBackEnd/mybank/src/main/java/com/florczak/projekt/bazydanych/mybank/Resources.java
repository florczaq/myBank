package com.florczak.projekt.bazydanych.mybank;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.ArrayList;

@RestController
@CrossOrigin("http://localhost:3700")
public class Resources {
    private final Connector connector = new Connector();

    @GetMapping("/login/{username}/{password}")
    public ResponseEntity<Integer> getUserId(@PathVariable String username, @PathVariable String password) throws SQLException {
        return connector.userExist(username, password);
    }

    @GetMapping("/{id}/userinfo/account_informations/{parameter}")
    public ResponseEntity<String> getUserSpecificInformation(@PathVariable int id, @PathVariable String parameter) throws SQLException {
        return connector.queryAccountInfo(id, parameter);
    }

    @GetMapping("/{id}/userinfo/account_informations")
    public ResponseEntity<Customer> getUserInfo(@PathVariable int id){
        return connector.getUserInfo(id);
    }

    @GetMapping("/{account_number}/name")
    public ResponseEntity<String> getUsersName(@PathVariable String account_number) throws SQLException {
        return connector.getNameByAccountNumber(account_number);
    }

    @GetMapping("/{id}/balance-history")
    public ResponseEntity<ArrayList> getBalanceHitory(@PathVariable int id){
        return connector.getBalanceHistory(id);
    }

    @GetMapping("/isTaken/{username}")
    public ResponseEntity<Boolean> isUsernameTaken(@PathVariable String username){
        return connector.isUsernameAlreadyTaken(username);
    }

    @PostMapping("/new-transaction")
    public ResponseEntity<Void> makeTransaction(@RequestBody Transaction transaction){
        return connector.makeTransaction(transaction);
    }

    @PostMapping("/register/new-customer")
    public ResponseEntity<Void> getOne(@RequestBody Customer customer){
        return connector.createNewAccount(customer);
    }

    @PutMapping("/{id}/save-money/{value}")
    public ResponseEntity<Void> saveMoney(@PathVariable int id, @PathVariable float value){
        return connector.saveMoney(id, value);
    }

    @PutMapping("/{id}/pay-out-money/{value}")
    public ResponseEntity<Void> payOutSavings(@PathVariable int id, @PathVariable float value){
        return connector.payOutSavings(id, value);
    }

    @PutMapping ("/{id}/update/{valueName}/{newValue}")
    public ResponseEntity<String> updateCustomerInfo( @PathVariable int id, @PathVariable String valueName, @PathVariable String newValue) throws SQLException {
        return connector.updateCustomerInfo(id, valueName, newValue);
    }

    @DeleteMapping("/delete-account/{id}")
    public ResponseEntity<String> deleteAccount(@PathVariable int id){
        return connector.deleteAccount(id);
    }

}