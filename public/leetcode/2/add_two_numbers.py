class Solution:
    def addTwoNumbers(self, l1, l2):
        carry = 0
        head = current = ListNode(0)

        while l1 or l2 or carry:
            d1 = d2 = 0

            if l1:
                d1 = l1.val
                l1 = l1.next

            if l2:
                d2 = l2.val
                l2 = l2.next

            carry, digit = divmod(d1 + d2 + carry, 10)
            current.next = ListNode(digit)
            current = current.next

        return head.next
