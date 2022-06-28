module.exports = function reverse (n) {
    const num = Math.abs(n);
    
    const numArray = String([num]).split('');
    return numArray.reverse().join('');

}
