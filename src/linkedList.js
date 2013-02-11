// Note: don't use an array to do this.

// Uses code from my linkedList made with a linked list
var makeLinkedList = function(){
  var linkedList = {    
    head: undefined,  // Item added to linkedList and item to be removed.
    lastTop: undefined,  // Previous item to the head.
    length: 0,           // Length of the linkedList.
    linkedListContents: [],   // Only for the print checking function.

    insert: function (value) {
      var addedNode = {};
      addedNode.lastTop = this.head ? this.head.lastTop + 1 : 0;
      addedNode.length = this.head ? this.head.length + 1 : 1;
      addedNode.contents = value;

      this[addedNode.length] = addedNode;  // Insert the new node into the linkedList object at addedNode.length key.
      this.head = addedNode;

      this.linkedListContents.push(addedNode);   // Only for the print chekcing function.
    },

    contains: function(wanted) {
      var currentNode = this.head;

      while (currentNode) {
        if (currentNode.contents === wanted) {
          return true;
        } else {
          currentNode = this[currentNode.lastTop];
        }
      }
    },

    // NOT TESTED REMOVE.
    remove: function() {
      var topNodeContents = this.head.contents;
      // Delete head from linkedList object???
      this.head = this[this.head.lastTop];
      this.lastTop = this[this.head.lastTop];  // lastTop set to the lastTop of the head becuase of tpNode reassignment
      this.length = this.head.length;

      //this.ListContents.pop(); // Only for the print function.

      return topNodeContents;
    },
      
    size: function() {
      return this.head.length
    },

    // Only for checking the 'contents' of the array.
    print: function() {
      linkedListContentsString = '';
      for (var i = 0, len = this.ListContents.length; i < len; i++) {
        linkedListContentsString += ", " + this.ListContents[i].contents;
      }
      console.log(linkedListContentsString);
    }
  };
  return linkedList;
}