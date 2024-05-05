/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // Create a dummy node to serve as the head of the merged list
    let dummy = new ListNode();
    let curr: ListNode | null = dummy;

    // Traverse both lists and merge them
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next as ListNode;
    }

    // Append the remaining nodes of the non-empty list
    if (list1 !== null) {
        curr.next = list1;
    } else {
        curr.next = list2;
    }

    // Return the head of the merged list (dummy.next)
    return dummy.next;
}
