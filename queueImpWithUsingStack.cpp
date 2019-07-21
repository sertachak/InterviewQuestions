class MyQueue {
public:
    /** Initialize your data structure here. */
    stack<int> stackOne;
    stack<int> stackTwo;
    
    MyQueue() {

    }
    
    /** Push element x to the back of queue. */
    void push(int x) {
        while( !stackOne.empty() )
        {
            stackTwo.push( stackOne.top() );
            stackOne.pop();
        }
        stackTwo.push( x );
    }
    
    /** Removes the element from in front of queue and returns that element. */
    int pop() {
        while( !stackTwo.empty() )
        {
            stackOne.push( stackTwo.top() );
            stackTwo.pop();
        }
        int popedOne = stackOne.top();
        stackOne.pop();
        return popedOne;
    }
    
    /** Get the front element. */
    int peek() {
        if( stackOne.empty() )
        {
            while( !stackTwo.empty() )
            {
                stackOne.push( stackTwo.top() );
                stackTwo.pop();
            }
        }
        return stackOne.top();
    }
    
    /** Returns whether the queue is empty. */
    bool empty() {
        if( stackOne.empty() && stackTwo.empty() )
        {
            return true;
        }
        else
        {
            return false;
        }
    }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue* obj = new MyQueue();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->peek();
 * bool param_4 = obj->empty();
 */