module.exports = function currentTypeOf(value) {
    if(value === null){
        return 'null';
    }
    return typeof value;
}