SELECT CustomerID,
       GetTotalBalance(CustomerID) AS TotalBalance
FROM Customers;