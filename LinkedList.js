class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = 0;
        this.size = null;
    }

    append(val) {
        let node = new Node(val),
        current;

        if (this.head === 0) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size ++;
    }

    remove(pos) {
        if (pos > -1 && pos < this.size) {
            let current = this.head,
            previous,
            index = 0;

            if (pos === 0) {
                this.head = current.next;
            } else {
                while (index ++ < pos) {
                    previous = current;
                    current = current.next;
                    previous.next = current.next;
                }
                this.size --;
                return current.val;
            }

        } else {
            return null;
        }
    }

    insert(pos, val){
        if (pos >= 0 && pos <= this.size) {
            let node = new Node(val),
            current = this.head,
            previous,
            index = 0;

            if (pos === 0) {
                node.next = current;
                this.head = node;
            } else {
                while (index++ < pos) {
                    previous = current;
                    while (current.next) {
                        current = current.next;
                    }
                }
                node.next = current;
                previous.next = node;

            }
            this.size ++;

            return true;
        } else {
            return false;
        }
    }

}