public class Solution {
    public int MaxProfit(int[] prices) {
        int minPrice = prices[0];//[7,1,5,3,6,4]
        var maxProfit = 0;

        for (int i = 1; i < prices.Length; i++){
            if(prices[i] < minPrice) { //1 < 7
               minPrice = prices[i];
           }
             int profit = prices[i] - minPrice; // 7 - 1 = 6 
               if(profit > maxProfit){ //6 > 0
                maxProfit = profit;
               }
        }
           return maxProfit;
    }
}