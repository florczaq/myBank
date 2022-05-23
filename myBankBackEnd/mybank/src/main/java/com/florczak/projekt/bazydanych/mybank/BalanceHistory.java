package com.florczak.projekt.bazydanych.mybank;

import java.sql.Date;

public class BalanceHistory {
    float value = 0.0F;
    java.sql.Date date;
    String transaction_type;
    String senderNumber;
    String title;
    String recipient;

    public BalanceHistory() {
    }

    public BalanceHistory(float value, Date date, String transaction_type, String senderNumber, String title, String recipient) {
        this.value = value;
        this.date = date;
        this.transaction_type = transaction_type;
        this.senderNumber = senderNumber;
        this.title = title;
        this.recipient = recipient;
    }

    @Override
    public String toString() {
        return "BalanceHistory{" +
                "value=" + value +
                ", date=" + date +
                ", transaction_type='" + transaction_type + '\'' +
                ", senderNumber='" + senderNumber + '\'' +
                ", title='" + title + '\'' +
                ", recipient='" + recipient + '\'' +
                '}';
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

    public String getTransaction_type() {
        return transaction_type;
    }

    public void setTransaction_type(String transaction_type) {
        this.transaction_type = transaction_type;
    }

    public String getSenderNumber() {
        return senderNumber;
    }

    public void setSenderNumber(String senderNumber) {
        this.senderNumber = senderNumber;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getRecipient() {
        return recipient;
    }

    public void setRecipient(String recipient) {
        this.recipient = recipient;
    }
}
