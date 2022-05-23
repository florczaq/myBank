package com.florczak.projekt.bazydanych.mybank;

public class Transaction {
    float value;
    String receiverAccountNumber;
    int senderId;

    public Transaction() {
    }

    public Transaction(float value, String receiverAccountNumber, int senderId) {
        this.value = value;
        this.receiverAccountNumber = receiverAccountNumber;
        this.senderId = senderId;
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
