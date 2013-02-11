// Note: don't use an object to store the inserted elements.
var hashFunction;
var makeHashTable = function(){
  var hashTable = {
    store: [],

    hashFunction: hashFunction,

    insert: function(key, value) {
      var location = this.hashFunction(key, 1000);
      this.store[location] = value;
      console.log(location);
      return location;
    },

    retrieve: function(key) {
      var location = this.hashFunction(key, 1000);

      return this.store[location];
    },
  };

  return hashTable;
}


// DON'T WORRY ABOUT CODE BELOW HERE

// hashFunction = function(str, maxResult){
//   var hash = 0;
//   if (this.length == 0) return hash;
//   for (i = 0; i < this.length; i++) {
//     char = this.charCodeAt(i);
//     hash = ((hash<<5) - hash) + char;
//     hash = hash & hash; // Convert to 32bit integer
//   }
//   return hash % maxResult;
// }
hashFunction = function(str, maxResult){
  var hash = 0;
  if (str.length == 0) return hash;
  for (i = 0; i < str.length; i++) {
    char = str.charCodeAt(i);
    hash = ((hash<<5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash % maxResult;
}