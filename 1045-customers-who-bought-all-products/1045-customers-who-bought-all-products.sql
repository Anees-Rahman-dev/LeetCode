# Write your MySQL query statement below
Select Customer_id 
From Customer
Group By customer_id
Having Count(Distinct product_key ) = 
(Select Count(*) From Product)