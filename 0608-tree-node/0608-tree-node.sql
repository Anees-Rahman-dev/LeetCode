# Write your MySQL query statement below
Select id, 
Case 
    When p_id IS NULL Then 'Root'
    When id IN (SELECT p_id FROM Tree) Then 'Inner'
    Else 'Leaf'
    END AS type
FROM Tree;    




