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
    }
};

const arr2 = arr.filter((item, idx) => {
    return item % 2 === 1;
});
console.log(arr2);