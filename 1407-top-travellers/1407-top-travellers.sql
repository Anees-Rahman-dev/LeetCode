# Write your MySQL query statement below
Select U.name As name, Coalesce(Sum(R.distance),0) As travelled_distance
From Users U
Left Join Rides R
On U.id = R.user_id
Group By U.id,U.name
Order By travelled_distance Desc, name Asc
