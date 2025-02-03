// linklist initialisation

// step 1 -- create a node
export function ListNode(val, next = null) {
	this.val = val;
	this.next = next;
}

// create a linkedist from an array
export function createLinkedList(arr) {
	let head = new ListNode(0);
	let current = head;

	for (let num of arr) {
		current.next = new ListNode(num);
		current = current.next;
	}

	return head.next;
}

// function to print linkedlist
export function print(list) {
	let current = list;
	let result = [];

	while (current !== null) {
		result.push(current.val);
		current = current.next;
	}

	console.log(result);
}

// const list = createLinkedList([1,2,3,4]);
