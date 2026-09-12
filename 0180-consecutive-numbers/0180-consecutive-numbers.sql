# Write your MySQL query statement below
Select Distinct num ConsecutiveNums
 From  
 (Select num,
 Lead (num,1) Over (Order By id) As Next_num,
 Lead (num,2) Over (Order By id) As next_next_num
 From Logs)
 As LogStreaks
 Where num = Next_num And num = next_next_num;
