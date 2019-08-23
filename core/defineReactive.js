const Dep = require('./dep')
// const Observer = require('./observer');
// console.log(Observer)

const defineReactive = function (data, key, val) {
  if(typeof val === 'object') {
    new Observer(val);
  }
  let dep = new Dep();
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function() {
      dep.depend();
      return val
    },
    set: function(newVal) {
      if(val === newVal) return;
      val = newVal;
      dep.notify();
    }
  })
}

// 解决循环引用 临时办法
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

module.exports = defineReactive;