package com.example;

import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.verify;

import org.junit.Test;
import org.mockito.Mockito;

public class MyServiceVoidTest {

    @Test
    public void testVoidMethod() {

        // Create mock object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Stub the void method
        doNothing().when(mockApi).deleteData();

        // Create service object
        MyService service = new MyService(mockApi);

        // Call the method
        service.removeData();

        // Verify interaction
        verify(mockApi).deleteData();
    }
}