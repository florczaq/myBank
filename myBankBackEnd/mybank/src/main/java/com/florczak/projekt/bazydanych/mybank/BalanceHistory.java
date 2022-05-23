package com.florczak.projekt.bazydanych.mybank;

import java.sql.Date;

public class BalanceHistory {
    String transaction_type;
    float value = 0.0F;
    java.sql.Date date;
    String senderNumber;

    public BalanceHistory() {
    }

    public BalanceHistory(String transaction_type, float value, Date date, String senderNumber) {
        this.transaction_type = transaction_type;
        this.value = value;
        this.date = date;
        this.senderNumber = senderNumber;
    }

    public String getTransaction_type() {
        return transaction_type;
    }

    public void setTransaction_type(String transaction_type) {
        this.transaction_type = transaction_type;
    }

    public float getValue() {
        return value;
    }

    public void setValue(float value) {
        this.value = value;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getSenderNumber() {
        return senderNumber;
    }

    public void setSenderNumber(String senderNumber) {
        this.senderNumber = senderNumber;
    }

    @Override
    public String toString() {
        return "BalanceHistory{" +
                "transaction_type='" + transaction_type + '\'' +
                ", value=" + value +
                ", date=" + date +
                ", senderNumber='" + senderNumber + '\'' +
                '}';
    }
}
