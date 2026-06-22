CALL UpdateCustomer(1, 25000);

SELECT CustomerID,
       Name,
       GetCustomerBalance(CustomerID) AS Balance
FROM Customers;