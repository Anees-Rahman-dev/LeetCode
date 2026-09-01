# Write your MySQL query statement below
Select user_id,
Concat(Upper(Substring(name,1,1)),Lower(Substring(name,2,length(name)))) As name
From Users
Order by user_id