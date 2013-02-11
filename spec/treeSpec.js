describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have an array of children", function() {
    expect(tree.children).toEqual(jasmine.any(Array));
  });

  it("should have a parent", function() {
    expect(tree.parent).toNotBe(undefined);
  });  

  it("should have a payload", function() {
    //expect(Object.keys(payload)).toBeDefined(payload);
    expect(Object.keys(tree)).toContain("payload");
  });  

  it("should have a method named 'addChild'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'traverse'", function() {
    expect(tree.traverse).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'contains'", function() {
    expect(tree.contains).toEqual(jasmine.any(Function));
  });

  describe("addChild", function() {

    it("should add a child to the parents children", function() {
      tree.addChild(4);
      
      expect(tree.children.length).toNotBe(0);
    });

  });

  describe("traverse", function() {

    it("should return true after traversing", function() {
      tree.payload = 1;
      tree.addChild("test1");
      tree.addChild("test2");
      tree.addChild("test3");
      
      testTraverse = function(node) {
        console.log(node.payload);
      };

      expect(tree.traverse(testTraverse)).toEqual(true);
    });

  });

  describe("contains", function() {

    it("should return true if tree contains content", function() {
      tree.addChild("test1");
      tree.addChild("test2");
      tree.addChild("test3");
      tree.children[1].addChild("node2Child1");

      expect(tree.contains("node2Child1")).toEqual(true);
    });

    it("should return false if the tree does not contain content", function() {
      tree.addChild("test1");
      tree.addChild("test2");
      tree.addChild("test3");
      tree.children[1].addChild("node2Child1");

      expect(tree.contains("sausage")).toEqual(false);
    });
  });

  describe("remove", function() {

    it("should return the correct children length after removing a child", function() {
      tree.addChild("test1");
      tree.addChild("test2");
      tree.addChild("test3");
      tree.children[1].addChild("node2Child1");
      tree.children[1].addChild("node2Child2");
      tree.children[1].addChild("node2Child3");

      var child = tree.children[1].children[1];
      child.remove();

      expect(tree.children[1].children.length).toEqual(2);
    });

  });


  // Add more tests here to test the functionality of tree.
  // If you're feeling frisky, have your tree trees track their
  // parent and add a function called removeFromParent.
});