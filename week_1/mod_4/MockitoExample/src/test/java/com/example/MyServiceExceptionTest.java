package com.example;

import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.verify;

import org.junit.Test;
import org.mockito.Mockito;

public class MyServiceExceptionTest {

    @Test(expected = RuntimeException.class)
    public void testVoidMethodWithException() {

        // Create mock object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Stub the void method to throw exception
        doThrow(new RuntimeException("Delete Failed"))
                .when(mockApi)
                .deleteData();

        // Create service object
        MyService service = new MyService(mockApi);

        // Call method
        service.removeData();

        // Verify interaction
        verify(mockApi).deleteData();
    }
}