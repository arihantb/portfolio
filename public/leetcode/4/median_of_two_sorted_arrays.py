class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        if len(nums1) > len(nums2):
            nums1, nums2 = nums2, nums1

        low = 0
        high = len(nums1)

        while low <= high:
            middle_left = low + ((high - low) >> 1)
            middle_right = ((len(nums1) + len(nums2)) >> 1) - middle_left

            nums1_left = -inf if not middle_left else nums1[middle_left - 1]
            nums2_left = -inf if not middle_right else nums2[middle_right - 1]
            nums1_right = inf if middle_left == len(
                nums1) else nums1[middle_left]
            nums2_right = inf if middle_right == len(
                nums2) else nums2[middle_right]

            if nums1_left > nums2_right:
                high = middle_left - 1
            elif nums2_left > nums1_right:
                low = middle_left + 1
            else:
                return min(nums1_right, nums2_right) if (len(nums1) + len(nums2)) & 1 else (max(nums1_left, nums2_left) + min(nums1_right, nums2_right)) / 2
