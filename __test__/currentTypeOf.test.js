const currentTypeOf = require('./../currentTypeOf');

describe('currentTypeOf', () => {
  it('should return the typeof the passed in value', () => {
    expect(currentTypeOf(true)).toEqual('boolean');
    expect(currentTypeOf(0)).toEqual('number');
    expect(currentTypeOf('I am a string')).toEqual('string');
    expect(currentTypeOf([])).toEqual('array');
    expect(currentTypeOf(()=>{})).toEqual('function');
    expect(currentTypeOf(Symbol("I don't even know what a Symbol does..."))).toEqual('symbol');
    expect(currentTypeOf(undefined)).toEqual('undefined');
    expect(currentTypeOf(null)).toEqual('null');
  })
});