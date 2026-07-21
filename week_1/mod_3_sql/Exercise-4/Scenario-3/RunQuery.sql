USE BankDB;

SELECT AccountID,
       Balance,
       HasSufficientBalance(AccountID, 5000) AS CanWithdraw5000
FROM Accounts;