USE BankDB;

INSERT INTO Transactions(TransactionID, AccountID, Amount, Type)
VALUES (1, 101, 5000, 'DEPOSIT');

SELECT * FROM AuditLog;