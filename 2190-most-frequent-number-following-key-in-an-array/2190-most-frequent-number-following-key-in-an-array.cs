public class Solution {
    public int MostFrequent(int[] nums, int key) {
        
        int MaxCount = 0;
        int result = 0;

        Dictionary<int , int> frequency = new Dictionary<int , int>();

        for(int i = 0; i < nums.Length -1; i++)
        {
          if(nums[i] == key)
          {
            if(frequency.ContainsKey(nums[i+1]))
            {
                frequency[nums[i+1]]++;
            }
            else
            {
                frequency.Add(nums[i+1],1);
            }
          }
        }

        foreach(var item in frequency)
        {
            if(item.Value > MaxCount)
            {
                MaxCount = item.Value;
                result = item.Key;
            }
        }

        return result;
    }
}