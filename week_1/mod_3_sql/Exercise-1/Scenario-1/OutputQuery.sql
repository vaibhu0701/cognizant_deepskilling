USE BankDB;

SELECT c.CustomerID,
       c.Name,
       TIMESTAMPDIFF(YEAR, c.DOB, CURDATE()) AS Age,
       l.InterestRate
FROM Customers c
JOIN Loans l
ON c.CustomerID = l.CustomerID
WHERE TIMESTAMPDIFF(YEAR, c.DOB, CURDATE()) > 60;