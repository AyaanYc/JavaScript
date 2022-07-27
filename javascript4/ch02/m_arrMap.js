const arr = {
    '0': 5,
    '1': 6,
    '2': 10,
    '3': 11,
    '4': 22,
    '5': 1,
    '6': 7,
    '7': 11,
    'length': 8,
    forEach: function(cb) {
        for(let i=0; i<this.length; i++) {
            cb(this[i], i);
        }
    },
    push: function(item) {
        this[this.length] = item;
        this.length++;
    },
    filter: function(cb) {
        const item = []
        for(let i=0; i<this.length; i++) {
            cb(this[i], i) ? item.push(this[i]) : '';
        }
        return item;
    },
    map: function(cb) {
        const item = []
        for(let i=0; i<this.length; i++) {
            item.push(cb(this[i], i));
        }
        return item;
    }
};
const arr2 = arr.map((item, idx) => {
    return idx <= 3 ? item * item : item;
});
console.log(arr2);
