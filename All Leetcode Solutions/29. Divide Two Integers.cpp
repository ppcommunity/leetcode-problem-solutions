class Solution {
public:
    int divide(int dividend, int divisor) {
        if(dividend == -2147483648 && divisor == -1) return (dividend + 1) / divisor;
        else return dividend / divisor;
    }
};