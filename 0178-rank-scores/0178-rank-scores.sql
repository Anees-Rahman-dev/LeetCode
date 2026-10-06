# Write your MySQL query statement below
Select score, Dense_Rank() Over(Order By score Desc) As 'rank' 
From Scores
Order By score Desc;

