# Write your MySQL query statement below
Select name As Customers
From Customers C
Left Join Orders O
On C.id = O.customerId
Where O.id IS NULL
