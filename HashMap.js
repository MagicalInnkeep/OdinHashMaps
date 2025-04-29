export class HashMap {
    constructor(loadFactor,capacity){
        this.loadFactor=loadFactor;
        this.capacity=capacity;
    }

    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
 
        return hashCode;
      } 
    
    /*
    * the first is a key, and the second is a value that is assigned to this key. 
    * If a key already exists, then the old value is overwritten, 
    * and we can say that we update the key’s value
    */
    set(key, value){}

    /*
    * returns the value that is assigned to this key
    */
    get(key){}

    /*
    * returns true or false based on whether or not the key is in the hash map
    */
    has(key){}

    /*
    * Should remove the entry with that key and return true.
    */
    remove(key){}

    /*
    * returns the number of stored keys in the hash map
    */
    length(){}

    /*
    * removes all entries in the hash map
    */
    clear(){}

    /*
    * returns an array containing all the keys inside the hash map
    */
    keys(){}

    /*
    * returns an array containing all the values.
    */
    values(){}

    /*
    * returns an array that contains each key, value pair.
    */
    entries(){}
} 