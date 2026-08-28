# Write your MySQL query statement below

Select P.project_id, Round(Avg(E.experience_years),2) As average_years 
From Project P
Inner Join Employee E
On P.employee_id = E.employee_id
Group By P.project_id 
