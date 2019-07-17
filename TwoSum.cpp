Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].


class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        
        std::vector<int> soution;
        sort( nums.begin(), nums.end() );
        std::vector<int>::iterator it = nums.begin();
        std::vector<int>::iterator itEnd = nums.end();
        
        while( it != itEnd )
        {
            if( (*it + *itEnd) == target  )
            {
                solution.push_back( *it );
                solution.push_back( *itEnd );
            }
            else if( (*it + *itEnd ) < target )
            {
                it++;
            }
            else if( (*it + *itEnd) > target )
            {
                itEnd--;
            }
        }
        return solution;
    }
};