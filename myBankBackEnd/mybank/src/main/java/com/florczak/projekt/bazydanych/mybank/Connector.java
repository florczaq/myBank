package com.florczak.projekt.bazydanych.mybank;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.sql.*;
import java.util.ArrayList;
import java.util.Random;

public class Connector {

    private Connection connection = null;
    private PreparedStatement preparedStatement = null;
    private CallableStatement callableStatement = null;
    private ResultSet resultSet = null;

    Connector() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection
                    ("jdbc:mysql://localhost:3306/mybank", "root", "root");

            System.out.println("+----------------------------------------------------+");
            System.out.printf("\tConnection with database [%s] established. %n", connection.getCatalog());
            System.out.println("+----------------------------------------------------+");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private int getLastCustomerId(){
        try{
            preparedStatement = connection.prepareStatement
                    ("SELECT customers.id from customers order by customers.id DESC limit 1");
            resultSet = preparedStatement.executeQuery();
            if (resultSet.next())
                return resultSet.getInt(1);
        }catch (Exception e){
            e.printStackTrace();
            return -1;
        }
        return -1;
    }

    private String pickNewAccountNumber(){
        int count = 1;
        ResultSet rs = null;
        Random random = new Random();
        StringBuilder result = new StringBuilder();
        try{
            do{
                result = new StringBuilder();
                for (int i = 0; i < 10; i++)
                    result.append(random.nextInt(10));
                preparedStatement = connection.prepareStatement
                            ("SELECT count(accountNumber) FROM accounts WHERE accountNumber = ? ");
                preparedStatement.setString(1, result.toString());
                rs = preparedStatement.executeQuery();
                if (rs.next())
                    count = rs.getInt(1);
            }while(count > 0);
        } catch (Exception e){
            e.printStackTrace();
        }
        return result.toString();
    }

    public void refreshConnection(){
        try {
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/mybank", "root", "root");
            if (preparedStatement!=null) preparedStatement.close();
            if (resultSet!=null) resultSet.close();
            PreparedStatement preparedStatement = null;
            ResultSet resultSet = null;
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public ResponseEntity<Void> createNewAccount(Customer customer) {
        try{
            preparedStatement = connection.prepareStatement(
                String.format(
                    "SELECT new_customer('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')",
                        customer.getFirstName(),
                        customer.getLastName(),
                        customer.getCity(),
                        customer.getStreet(),
                        customer.getHouseNumber(),
                        customer.getPesel(),
                        customer.getEmail(),
                        customer.getPhoneNumber(),
                        new java.sql.Date(customer.getDateOfBirth().getTime()),
                        customer.getPostCode()
                ));

            preparedStatement.execute();

            int newCustomerId = this.getLastCustomerId();
            if(newCustomerId!=-1){
                String accountNewNumber = pickNewAccountNumber();
                preparedStatement = connection.prepareStatement("SELECT new_account(?,?,?,?)");
                preparedStatement.setInt(1, newCustomerId);
                preparedStatement.setString(2, customer.getUsername());
                preparedStatement.setString(3, customer.getPassword());
                preparedStatement.setString(4, accountNewNumber)  ;
                preparedStatement.execute();
                System.out.println(accountNewNumber);
                return new ResponseEntity<>(HttpStatus.OK);
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<Integer> userExist(String username, String password) throws SQLException {
        try{
            preparedStatement = connection.prepareStatement("SELECT user_exist(?,?)");
            preparedStatement.setString(1, username);
            preparedStatement.setString(2, password);
            resultSet = preparedStatement.executeQuery();
            if(resultSet.next()){
                return resultSet.getString(1) != null ?
                new ResponseEntity<>(resultSet.getInt(1), HttpStatus.OK) :
                new ResponseEntity<>(-1, HttpStatus.BAD_REQUEST);
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        finally {
            if(resultSet!=null)
                resultSet.close();
        }
        return new ResponseEntity<>(-1, HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<String> queryAccountInfo(int id, String param) throws SQLException {
        PreparedStatement ps;
        ResultSet rs = null;
        try{
            ps = connection.prepareStatement
                    (String.format("SELECT %s from accounts WHERE id = ?", param));
            ps.setInt(1, id);
            rs = ps.executeQuery();
            if (rs.next()){
                return new ResponseEntity<>(rs.getString(1), HttpStatus.OK);
            }
        } catch (Exception e){
            e.printStackTrace();
        }
        finally {
            if(rs!=null)
                rs.close();
        }
        return null;
    }

    public ResponseEntity<String> getNameByAccountNumber(String accountNumber) throws SQLException {
        ResultSet rs = null;
        try{
            preparedStatement = connection.prepareStatement
                    ("SELECT getNameById(?)");
            preparedStatement.setString(1, accountNumber);
            rs = preparedStatement.executeQuery();
            if(rs.next())
                return new ResponseEntity<>(rs.getString(1), HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
        }
        finally {
            if(rs!=null)
                rs.close();
        }
        return null;
    }

    public ResponseEntity<Customer> getUserInfo(int id){
        String query =
                "SELECT c.firstName, c.lastName, c.city, c.street, c.houseNumber, c.pesel, c.emailAddress, c.phoneNumber, "+
                "c.dateOfBirth, c.postCode, a.username, a.password, a.accountNumber " +
                "FROM accounts as a INNER JOIN customers as c ON a.customer_id = c.id WHERE a.id = ?" ;
        try{
            preparedStatement = connection.prepareStatement(query);
            preparedStatement.setInt(1, id);
            resultSet = preparedStatement.executeQuery();
            if(resultSet.next()){
                return new ResponseEntity<>(
                    new Customer(
                        resultSet.getString(1),
                        resultSet.getString(2),
                        resultSet.getString(3),
                        resultSet.getString(4),
                        resultSet.getString(5),
                        resultSet.getString(6),
                        resultSet.getString(7),
                        resultSet.getString(8),
                        resultSet.getDate(9),
                        resultSet.getString(10),
                        resultSet.getString(11),
                        resultSet.getString(12),
                        resultSet.getString(13)
                    ), HttpStatus.OK
                );
            }
        }catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(new Customer(), HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<Void> makeTransaction(Transaction transaction){
        try{
            preparedStatement = connection.prepareStatement("SELECT make_transfer(?,?,?,?)");
            preparedStatement.setString(1,transaction.getReceiverAccountNumber());
            preparedStatement.setInt(2,transaction.getSenderId());
            preparedStatement.setFloat(3,transaction.getValue());
            preparedStatement.setString(4,transaction.getTitle());
            preparedStatement.execute();
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<Void> saveMoney(int id, float value){
        try {
            preparedStatement = connection.prepareStatement("SELECT saveMoney(?,?)");
            preparedStatement.setInt(1,id);
            preparedStatement.setFloat(2,value);
            preparedStatement.execute();
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<Void> payOutSavings(int id, float value){
        try {
            preparedStatement = connection.prepareStatement("SELECT pay_out_from_savings(?,?)");
            preparedStatement.setInt(1,id);
            preparedStatement.setFloat(2,value);
            preparedStatement.execute();
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<ArrayList> getBalanceHistory(int id){
        ResultSet rs = null;
        PreparedStatement ps = null;
        try {
            ps = connection.prepareStatement
                    (
                    "SELECT tt.name AS 'Type', "+
                        "bh.transaction_value AS 'Value', "+
                        "bh.transaction_date AS 'Date', " +
                        "bh.senderNumber AS 'SenderNumber', "+
                        "bh.title AS 'Title' " +
                        "FROM transaction_types  AS tt INNER JOIN "+
                        "balance_history AS bh ON bh.transaction_type = tt.id "+
                        "WHERE bh.account_id = ?  "+
                        "ORDER BY bh.id DESC"
                    );
            ps.setInt(1,id);
            rs = ps.executeQuery();
            ArrayList<BalanceHistory> balanceHistoryList = new ArrayList<>();
            String recipient;
            while (rs.next()){
                recipient = this.getNameByAccountNumber(rs.getString("SenderNumber")).getBody();
                balanceHistoryList.add(
                        new BalanceHistory(
                                rs.getFloat("Value"),
                                rs.getDate("Date"),
                                rs.getString("Type"),
                                rs.getString("SenderNumber"),
                                rs.getString("Title"),
                                recipient
                        ));
            }
            return new ResponseEntity<>(balanceHistoryList, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<Boolean> isUsernameAlreadyTaken (String username){
        try{
            preparedStatement = connection.prepareStatement(
                    String.format(
                        "SELECT isUsernameAlreadyTaken('%s') AS matchingUsernames",username)
                    );
            resultSet = preparedStatement.executeQuery();
            if(resultSet.next())
                return new ResponseEntity<>(
                    resultSet.getInt ("matchingUsernames") != 0,
                    HttpStatus.OK
                );
        }catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<String> updateCustomerInfo(int id, String valueName, String newValue) throws SQLException {
        PreparedStatement ps = null;
        String customer_id = this.queryAccountInfo(id, "customer_id").getBody();
        String query = String.format("UPDATE customers SET %s='%s' WHERE id=%s", valueName, newValue, customer_id);
        try{
            ps = connection.prepareStatement(query);
            ps.execute();
            return new ResponseEntity<>("Updated.", HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>("Something went wrong.", HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<String> deleteAccount (int id){
        try{
            preparedStatement = connection.prepareStatement(String.format("SELECT delete_account(%s)", id));
            preparedStatement.execute();
            return new ResponseEntity<>("Account Deleted Successfully", HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>("We couldn't delete you account. Contact support.", HttpStatus.BAD_REQUEST);
    }
}

/*
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
*/