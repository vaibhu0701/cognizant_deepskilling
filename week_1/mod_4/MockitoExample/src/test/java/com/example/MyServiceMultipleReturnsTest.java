package com.example;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.Test;
import org.mockito.Mockito;

public class MyServiceMultipleReturnsTest {

    @Test
    public void testMultipleReturns() {

        // Create mock object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Stub consecutive return values
        when(mockApi.getData())
                .thenReturn("First Data")
                .thenReturn("Second Data");

        // Create service object
        MyService service = new MyService(mockApi);

        // Call fetchData twice
        String result1 = service.fetchData();
        String result2 = service.fetchData();

        // Verify results
        assertEquals("First Data", result1);
        assertEquals("Second Data", result2);
    }
}