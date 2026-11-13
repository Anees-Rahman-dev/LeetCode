/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public IList<int> PreorderTraversal(TreeNode root) {
        
        List<int> result = new List<int>();

        void Traverse(TreeNode node)
        {
            if (node == null)
            {
              return;
            }

            result.Add(node.val);

            Traverse(node.left);

            Traverse(node.right);
        }
        Traverse(root);
        return result;
    }
}