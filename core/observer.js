const defineReactive =  require("./defineReactive");

 class Observer {
  constructor(value) {
    this.value = value;
    if(!Array.isArray(value)) {
      this.walk(value)
    }
  }
  walk(obj) {
    const keys = Object.keys(obj);
    for(let i = 0; i < keys.length; i ++) {
      defineReactive(obj, keys[i], obj[keys[i]])
    }
  }
}
module.exports = Observer;


