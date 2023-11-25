class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s

        rows = [''] * numRows
        index = 0
        direction = -1

        for char in s:
            rows[index] += char

            if not index or index == numRows - 1:
                direction *= -1

            index += direction

        return ''.join(rows)
