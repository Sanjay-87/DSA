import { createLinkedList, ListNode, print } from "./linkedListSetup.mjs";

var mergeTwoLists = function (list1, list2) {
	const node = new ListNode(0, null);

	while (list1 && list2) {
		list1 = list1.next;
	}
};

const input1 = [1, 2, 4],
	input2 = [1, 3, 4],
	list1 = createLinkedList(input1),
	list2 = createLinkedList(input2);

const result = mergeTwoLists(list1, list2);
// print(result);
