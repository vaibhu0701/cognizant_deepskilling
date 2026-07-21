package com.example;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.verify;

import org.junit.Test;
import org.mockito.Mockito;

public class MyServiceArgumentTest {

    @Test
    public void testArgumentMatching() {

        // Create mock object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Create service object
        MyService service = new MyService(mockApi);

        // Call method with argument
        service.saveData("Hello");

        // Verify using argument matcher
        verify(mockApi).sendData(anyString());
    }
}