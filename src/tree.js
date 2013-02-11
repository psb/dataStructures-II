var makeTree = function(){
	
  function createNewNode(input) {
    return {
  	  children: [],
  	  parent: null,
  	  payload: input,
  	  
  	  addChild: function(input) {
	  	var childNode = createNewNode(input)
	  	childNode.parent = this;
	  	childNode.payload = input;
	  	this.children.push(childNode);
	  },
  	  
  	  traverse: function(callback) { 
        callback(this);
	  	for (var i = 0; i < this.children.length; i++){
	  	  this.children[i].traverse(callback);
	  	}
	  	return true;
	  },
      
      contains: function(content) {
	  	var contentsFound = false;
	  	this.traverse(function(node) {
	  	  contentsFound = contentsFound || (node.payload === content);
	  	});
	  	return contentsFound;
	  },

      remove: function() {
        this.parent.children.splice(this.parent.children.indexOf(this), 1);
      },

    };
  }

  return createNewNode();
};
