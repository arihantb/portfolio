class Solution:
    def longestPalindrome(self, s: str) -> str:
        if s == s[::-1]:
            return s

        longest = 1
        start = 0

        for index in range(1, len(s)):
            even = s[index - longest:index + 1]
            odd = s[index - longest - 1:index + 1]

            if index - longest - 1 >= 0 and odd == odd[::-1]:
                start = index - longest - 1
                longest += 2

            if even == even[::-1]:
                start = index - longest
                longest += 1

        return s[start:start + longest]
