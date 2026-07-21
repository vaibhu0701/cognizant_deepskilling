USE BankDB;

-- Test valid deposit
INSERT INTO Transactions(TransactionID, AccountID, Amount, Type)
VALUES (2, 101, 2000, 'DEPOSIT');

-- Test invalid withdrawal (should fail if balance is low)
INSERT INTO Transactions(TransactionID, AccountID, Amount, Type)
VALUES (3, 101, 999999, 'WITHDRAW');

SELECT * FROM Transactions;