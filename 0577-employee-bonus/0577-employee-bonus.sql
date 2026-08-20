# Write your MySQL query statement below
Select E.name As name, B.bonus As bonus
From Employee E
Left Join Bonus B
On E.empId = B.empId
Where B.bonus < 1000 Or B.bonus Is Null