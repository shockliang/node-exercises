var square = x => x * x;
console.log(square(9)); 

var user = {
    name: 'shock',
    sayHi: () => {
        //console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayThis:() => console.log(this.name, this)
};

user.sayHi();
user.sayThis();

var f = () => {
    console.log(this === global);
}

f();

var o = {
  traditionalFunc: function () {
    // Normal function, bound as expected
    console.log('traditionalFunc this === o?', this === o);
  },
  arrowFunc: () => {
    // Arrow function, bound to scope where it's created
    console.log('arrowFunc this === o?', this === o);
    console.log('arrowFunc this === global?', this === global);
  }
};

o.traditionalFunc();
// traditionalFunc this === o? true

o.arrowFunc();
// arrowFunc this === o? false
// arrowFunc this === global? true