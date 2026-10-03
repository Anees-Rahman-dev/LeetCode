# Write your MySQL query statement below
Select P.firstName, P.lastName, A.city, A.state
From Person P
Left Join Address A
On P.personId = A.personId
