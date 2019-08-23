/*You are given an unordered array consisting of consecutive integers

[1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. You need to find the minimum number of swaps required to sort the array in ascending order.

For example, given the array
we perform the following steps: */

int minimumSwaps(vector<int> arr) {
    int swapCount = 0;
    /*for( int i = arr.size(); i > 0; i-- )
    {   int max = 0;
        for( int j = 0; j < i; j++ )
        {   
            if( arr[max] < arr[j] )
            {
                max = j;
            }
            if( (j+1) == i && max != (i-1)){
                cout<<max<<endl;
                swap( arr[i-1], arr[max] );
                swapCount++;
            }
        }
    }  not efficient version n^2 complexity */

    //O(n)
    for( int i = 0; i < arr.size(); i++)
    {
        if ( arr[i] != i+1 )
        {
            swap( arr[ arr[i] -1 ], arr[i] );
            swapCount++;
            i--;
        }
    }
    return swapCount;
}