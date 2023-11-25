class Solution:
    def reverse(self, x: int) -> int:
        reversed_integer = 0
        sign = -1 if x < 0 else 1
        x *= sign

        while x:
            reversed_integer = reversed_integer * 10 + x % 10
            x //= 10

        return sign * reversed_integer if -2 ** 31 <= reversed_integer < 2 ** 31 else 0
