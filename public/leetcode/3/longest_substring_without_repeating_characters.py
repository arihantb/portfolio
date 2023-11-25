class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        used_characters = {}
        length = left = 0

        for right, char in enumerate(s):
            if char in used_characters:
                left = max(left, used_characters[char] + 1)

            used_characters[char] = right
            length = max(length, right - left + 1)

        return length
