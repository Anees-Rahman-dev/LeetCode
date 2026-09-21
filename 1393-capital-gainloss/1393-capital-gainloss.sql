# Write your MySQL query statement below
Select stock_name,
Sum(Case
     When operation = 'Buy' Then -price 
     When operation = 'Sell' Then +price
END) As capital_gain_loss 
From Stocks
Group By stock_name