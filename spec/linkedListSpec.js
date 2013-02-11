describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  describe("head", function() {
    it("should have a head", function() {
      expect(Object.keys(linkedList)).toContain("head");
    });

    it("'head' should have the value of the first item inserted into the list", function() {

      linkedList.insert("first");
      linkedList.insert("second");

      expect(linkedList.head.contents).toEqual("second");
    });
  });

  describe("insert", function() {
    it("should have a method named 'insert'", function() {
      expect(linkedList.insert).toEqual(jasmine.any(Function));
    });

    it("'insert' should add nodes to the linked list and increase the length by one per item added", function() {

      linkedList.insert("first");
      linkedList.insert("second");

      expect(linkedList.size()).toEqual(2);
    });
  });

  describe("contains", function() {
    it("should have a method named 'contains'", function() {
      expect(linkedList.contains).toEqual(jasmine.any(Function));
    });

    it("'contains' should return true if the item is present in the linked list", function() {

      linkedList.insert("first");
      linkedList.insert("second");
      linkedList.insert("third");
      expect(linkedList.contains("first")).toBeTruthy();
    });

    it("'contains' should return false if the item is present in the linked list", function() {

      linkedList.insert("first");
      linkedList.insert("second");

      expect(linkedList.contains("third")).toBeFalsy();
    });
  });
});