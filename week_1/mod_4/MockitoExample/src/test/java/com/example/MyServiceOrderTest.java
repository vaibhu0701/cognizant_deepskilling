package com.example;

import static org.mockito.Mockito.inOrder;

import org.junit.Test;
import org.mockito.InOrder;
import org.mockito.Mockito;

public class MyServiceOrderTest {

    @Test
    public void testInteractionOrder() {

        // Create mock object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Call methods in a specific order
        mockApi.sendData("Hello");
        mockApi.deleteData();

        // Verify interaction order
        InOrder inOrder = inOrder(mockApi);

        inOrder.verify(mockApi).sendData("Hello");
        inOrder.verify(mockApi).deleteData();
    }
}