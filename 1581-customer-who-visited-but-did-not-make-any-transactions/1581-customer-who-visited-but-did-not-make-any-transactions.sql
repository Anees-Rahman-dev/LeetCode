# Write your MySQL query statement below
Select V.customer_id As customer_id ,
Count(V.visit_id) As count_no_trans 
From Visits V
Left Join Transactions T
On V.visit_id = T.visit_id
Where T.visit_id Is Null
Group By V.customer_id;
