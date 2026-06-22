USE BankDB;

SELECT c.CustomerID,
       c.Name,
       l.LoanID,
       l.EndDate,
       CONCAT('Reminder: Loan ', l.LoanID,
              ' is due on ', l.EndDate) AS ReminderMessage
FROM Customers c
JOIN Loans l
ON c.CustomerID = l.CustomerID
WHERE l.EndDate BETWEEN CURDATE()
                    AND DATE_ADD(CURDATE(), INTERVAL 30 DAY);