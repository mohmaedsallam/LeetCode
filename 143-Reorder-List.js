/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head || !head.next) return head; // Base case for empty list or single node

    // Step 1: Find the middle node using the slow/fast pointer technique
    let slow = head, fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Divide the list into two halves
    const secondHalf = reverseList(slow.next);
    slow.next = null; // Terminate the first half

    // Step 3: Merge the two halves in the desired order
    let p1 = head, p2 = secondHalf;
    while (p2) {
        const temp1 = p1.next;
        const temp2 = p2.next;

        p1.next = p2;
        p2.next = temp1;

        p1 = temp1;
        p2 = temp2;
    }

    return head;
};

// Helper function to reverse a linked list
function reverseList(head) {
    let prev = null, curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}