/**
 * Content contains the inputted value. This to allow retreaval of the key value after hashing.
 */
class Content{
    constructor(key, value){
        this.key =key;
        this.value=value;
    }
}

/**
 * Actual class for our Hashmap exercise.
 */
export class HashMap {
    constructor(loadFactor=0.75,capacity=16){
        this.loadFactor=loadFactor;
        this.capacity=capacity;
        this.buckets = Array(this.capacity).fill(null).map(() => []);
        this.size=0;
    }

    /*
    * Increase capacity
    */
    increaseCapacity(){
        console.log(`Check capacity: ${this.length()}/${this.capacity*this.loadFactor}`);
        if(this.length()>this.capacity * this.loadFactor){
            const oldEntries = this.entries();
            console.log(oldEntries);
            this.capacity = this.capacity*2;
            this.clear();
            for(const entrie of oldEntries){
                this.set(entrie.key, entrie.value);
            }
        }
    }

    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
          hashCode = hashCode % this.capacity
        }
 
        return hashCode;
      } 
    
    /*
    * the first is a key, and the second is a value that is assigned to this key. 
    * If a key already exists, then the old value is overwritten, 
    * and we can say that we update the key’s value
    */
    set(key, value){
        const hashKey = this.hash(key);
        this.increaseCapacity();

        if(this.buckets[hashKey] === null || this.buckets[hashKey] === undefined){
            this.buckets[hashKey] = [];
        }

        for (const content of this.buckets[hashKey]) {
            if (content.key === key) {
                content.value = value;
                console.log(`Updated key ${key} with value ${value} at index ${hashKey}`);
                return;
            }
        }

        this.buckets[hashKey].push(new Content(key, value));
        this.size++;
        console.log(`Added key ${key} with value ${value} at index ${hashKey}`);
    }

    /*
    * returns the value that is assigned to this key
    */
    get(key){
        const hashKey = this.hash(key);
        return this.buckets[hashKey];
    }

    /*
    * returns true or false based on whether or not the key is in the hash map
    */
    has(key){
        const hashKey= this.hash(key);
        if(this.buckets[hashKey]===null){
            return false;
        }
        else{
            for (const content of this.buckets[hashKey]) {
                if (content.key === key) {
                    return true;
                }
            }
            return false;
        }
        
    }

    /*
    * Should remove the entry with that key and return true.
    */
    remove(key){
        const hashKey = this.hash(key);
        const bucket = this.buckets[hashKey];
        if (!bucket) return false;
    
        const index = bucket.findIndex(content => content.key === key);
        if (index !== -1) {
            bucket.splice(index, 1);
            this.size--;
            return true;
        }
        return false;
    }

    /*
    * Custom function to ensure flow is correct.
    */

    getCapacity(){
        return this.capacity;
    }

    /*
    * returns the number of stored keys in the hash map
    */
    length(){
        return this.size;
    }

    /*
    * removes all entries in the hash map
    */
    clear(){
        this.buckets = Array(this.capacity).fill(null).map(() => []);
        this.size=0;
    }

    /*
    * returns an array containing all the keys inside the hash map
    */
    keys(){
        let keyArray=[];
        for(const bucket of this.buckets){
            for (let content of bucket) {
                keyArray.push(content.key);
                } 
        }
        return keyArray;
    }

    /*
    * returns an array containing all the values.
    */
    values(){
        let valueArray=[];
        for(const bucket of this.buckets){
            for (let content of bucket) {
                valueArray.push(content.value);
                } 
        }
        return valueArray;
    }

    /*
    * returns an array that contains each key, value pair.
    */
    entries(){
        let entrieArray=[];
        for(let bucket of this.buckets){
            for (let content of bucket) {
                entrieArray.push(content);
                }
        }
        return entrieArray;
    }
} 