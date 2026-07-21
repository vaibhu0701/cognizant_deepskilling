package com.example;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ParameterizedLoggingExample {

    private static final Logger logger =
            LoggerFactory.getLogger(ParameterizedLoggingExample.class);

    public static void main(String[] args) {

        String name = "Harika";
        int age = 20;

        logger.info("Student name is {}", name);
        logger.info("Student {} is {} years old", name, age);
    }
}