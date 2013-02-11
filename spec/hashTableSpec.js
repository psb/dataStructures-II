describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = makeHashTable();
  });

  describe("insert", function() {
    it("should have a method named 'insert'", function() {
      expect(hashTable.insert).toEqual(jasmine.any(Function));
    });

    it("'insert' should add an item to the hash-table at a given array index equal to hash of the key", function() {
      hashTable.insert("hello", "world");
      expect(hashTable.hashFunction("hello", 1000)).toEqual(hashTable.hashFunction("hello", 1000));
    });

  });

  describe("retrieve", function() {
    it("should have a method named 'retrieve'", function() {
      expect(hashTable.retrieve).toEqual(jasmine.any(Function));
    });

    it("'retrieve' should get the correct element at the hash of the given key", function() {
      hashTable.insert("hello", "world");
      hashTable.insert("foo", "bar");
      hashTable.insert("foodybar", "bazbaz");

      expect(hashTable.retrieve("hello")).toEqual("world");
      expect(hashTable.retrieve("foo")).toEqual("bar");
      expect(hashTable.retrieve("foodybar")).toEqual("bazbaz");
    });
  });

  // add more tests here to test the functionality of hashTable
});