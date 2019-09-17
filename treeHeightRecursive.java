
//Tree: Height of a Binary Tree
//https://www.hackerrank.com/challenges/tree-height-of-a-binary-tree/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=trees

	public static int height(Node root) {
      	// Write your code here.
        if(root != null ){
            int a = height(root.left);
            int b = height(root.right);
            if( a > b )
                return 1 +  a;
            else
                return 1 + b;
        }
        else
            return -1;
    }
