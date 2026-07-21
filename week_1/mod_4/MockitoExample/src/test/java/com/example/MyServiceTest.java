package com.example;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testExternalApi() {

        // Create mock object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Stub method
        when(mockApi.getData()).thenReturn("Mock Data");

        // Create service object
        MyService service = new MyService(mockApi);

        // Call method
        String result = service.fetchData();

        // Verify output
        assertEquals("Mock Data", result);
    }
}