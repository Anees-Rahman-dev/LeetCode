public class Solution {
    public int TitleToNumber(string columnTitle) {
        
        int result = 0;

        foreach(char ch in columnTitle)
        {
           int value = ch - 'A' + 1;

           result = result * 26 + value;
        }
        return result;
    }
}