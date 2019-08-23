const Observer =  require('../core/observer')
const Watcher =require('../core/watcher')

let a = {
  b: {
    c: 1
  }
}


new Observer(a);
new Watcher(a, 'b.c', function(newVal, oldVal) {
  console.log(`值变化了，旧值： ${oldVal},新值：${newVal}`)
})

// console.log(observer, watcher)
// console.log(a.b)
// console.log(a.b)


// a.b.c;
a.b.c = 555