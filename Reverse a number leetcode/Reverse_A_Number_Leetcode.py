class Solution:
    def reverse(self, x: int) -> int:
        rev =int(str(abs(x))[::-1])
        if rev.bit_length()<32 :
            return (-rev if x <0 else rev)
        else:
            return (0)