USE BankDB;

SELECT LoanID,
       LoanAmount,
       InterestRate,
       CalculateMonthlyInstallment(LoanAmount, InterestRate, 5) AS MonthlyEMI
FROM Loans;