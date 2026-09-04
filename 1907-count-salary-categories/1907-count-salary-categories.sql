# Write your MySQL query statement below
Select 'Low Salary' As category,
Count(account_id) As accounts_count 
From Accounts
Where income < 20000

Union All

Select 'Average Salary'As category,
Count(account_id) As accounts_count 
From Accounts
Where income Between 20000 And 50000

Union All
 
Select 'High Salary'As category,
Count(account_id) As accounts_count 
From Accounts
Where income > 50000
