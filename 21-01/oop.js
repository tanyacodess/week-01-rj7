class ListNode {
    var;
    next;
    constructor(val,next = null){
        this.val = val;
        this.next =next;
    }
}
 class TestCase {
    head;
     constructor(head=null){
        this.head = head;
     }

     hasLast(){
        return this.head !==null;
     }

      getLast(){
        if(!this.hasLast()){
            return null;
        }
        let current = this.head;
        while(current.next !== null){
            current =current.next;
        }
        let finalValue = current.val;
         current = this.head; // 1234
            current=current.next;
         }
         current.next.next=null;
         return finalValue;
      }
 }
  let myVariable = new TestCase(
    new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    )
  ); //[1, 2,3,4,5]
  console.log(myVariable.getLast());
  console.log(myVariable.getLast());
  console.log(myVariable.getLast());
  console.log(myVariable.getLast());
  console.log(myVariable.getLast());
  console.log(myVariable.getLast());
  console.log(myVariable.getLast());