public class Solution {
    public int TitleToNumber(string columnTitle) {
        
        int result = 0;

        for(int i = 0; i < columnTitle.Length; i++)
        {
           int value = columnTitle[i] - 'A' + 1;

           result = result * 26 + value;
        }
        return result;
    }
}