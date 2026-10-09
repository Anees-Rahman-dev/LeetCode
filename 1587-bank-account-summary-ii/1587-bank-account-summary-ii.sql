# Write your MySQL query statement below
Select U.name, Sum(T.amount) balance
From Users U
Inner join Transactions T
On U.account = T.account
Group By U.name
Having Sum(T.amount) > 10000