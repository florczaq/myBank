package com.florczak.projekt.bazydanych.mybank;

public class Transaction {
    float value;
    String receiverAccountNumber;
    int senderId;
    String title;

    public Transaction() {
    }

    public Transaction(float value, String receiverAccountNumber, int senderId, String title) {
        this.value = value;
        this.receiverAccountNumber = receiverAccountNumber;
        this.senderId = senderId;
        this.title = title;
    }


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public float getValue() {
        return value;
    }

    public void setValue(float value) {
        this.value = value;
    }

    public String getReceiverAccountNumber() {
        return receiverAccountNumber;
    }

    public void setReceiverAccountNumber(String receiverAccountNumber) {
        this.receiverAccountNumber = receiverAccountNumber;
    }

    public int getSenderId() {
        return senderId;
    }

    public void setSenderId(int senderId) {
        this.senderId = senderId;
    }
}
