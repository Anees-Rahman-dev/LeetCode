# Write your MySQL query statement below
Select M.name
From Employee M
Join Employee E
On M.id = E.managerId 
Group By M.id, M.name
Having Count(E.id) >= 5;

