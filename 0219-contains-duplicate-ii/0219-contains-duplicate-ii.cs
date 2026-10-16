public class Solution {
    public bool ContainsNearbyDuplicate(int[] nums, int k) {

        Dictionary<int , int>  seenNum = new();

        for(int i = 0; i < nums.Length; i++){
          
         int currentNum = nums[i];

         if(seenNum.ContainsKey(currentNum)){
            
            int distance = i - seenNum[currentNum];

            if(distance <= k){
                return true;
            }
           }
           seenNum[currentNum] = i;
          }

        return false;
    }
}