class hashTable {
  constructor(size = 2) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let Weird_Prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * Weird_Prime + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if(!this.keyMap[index]){
        this.keyMap[index] = [];
    }
    this.keyMap[index].push([key,value]);
    return index;
  }

  get(key){
    let index = this._hash(key);
    if(this.keyMap[index]){
        for(let i=0; i<this.keyMap[index].length; i++){
            if(this.keyMap[index][i][0] === key){
                return this.keyMap[index][i];
            }
        }
    }
    return undefined;
  }
}

let ht = new hashTable();

ht.set("chut", ['akash']);
ht.set("hey", ['papu']);
ht.set("bye", [87]);
ht.set("suck", 63);
ht.set("hut", 34);

console.log(ht);
console.log(ht.get("hey")); 


