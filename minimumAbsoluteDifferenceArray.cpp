Minimum Absolute Difference in an Array  

int minimumAbsoluteDifference(vector<int> arr) {
    sort( begin( arr ), end( arr ));
    adjacent_difference(begin( arr ), end( arr ), begin( arr ), 
    []( int a, int b )
    { 
        return abs(a-b);
    });
    return *min_element(begin( arr )+1, end( arr ));

}