package com.example;

import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class CalculatorTest {

    Calculator c = new Calculator();

    @Test
    public void testAdd() {
        assertEquals(30, c.add(10, 20));
    }

    @Test
    public void testSubtract() {
        assertEquals(10, c.subtract(20, 10));
    }

    @Test
    public void testMultiply() {
        assertEquals(50, c.multiply(10, 5));
    }
}