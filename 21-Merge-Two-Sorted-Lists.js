/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const isBaseCase1 = list1 === null;
    if (isBaseCase1) return list2;

    const isBaseCase2 = list2 === null;
    if (isBaseCase2) return list1;

    const isL2Greater = list1.val <= list2.val;
    if (isL2Greater) {
        list1.next = mergeTwoLists(list1.next, list2);/* Time O(N + M) | Space O(N + M) */

        return list1;
    }

    const isL2Less = list2.val <= list1.val;
    if (isL2Less) {
        list2.next = mergeTwoLists(list1, list2.next);/* Time O(N + M) | Space O(N + M) */

        return list2;
    }
};