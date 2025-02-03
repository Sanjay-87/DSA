// Given the head of a singly linked list, reverse the list, and return the reversed list.
import { createLinkedList, print } from "./linkedListSetup.mjs";

var reverseList = function (head) {
	let prev = null; // previous pointer initialised to null
	let current = head; // current pointer starts at the head of the list

	while (current !== null) {
		let nextNode = current.next; // store the next node
		current.next = prev;
		prev = current;
		current = nextNode;
	}

	return prev;
};

const input = [1, 2, 3, 4, 5];
const head = createLinkedList(input);
const result = reverseList(head);
print(result);
