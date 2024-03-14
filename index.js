"strict mode"
let as  = 5;
if (as === 5){
    let as = 10
};

// console.log(as);

const obj1 = { prop: "value"};
const obj2 = { prop: "value"};
const obj3 = obj1

// console.log('out1', obj1 === obj2); //false diffrent references
// console.log('out2', obj1.prop === obj2.prop); //true same values
// console.log('out3', obj1.prop === obj3.prop); //true same refconst

const myname = 'Dimo';
// console.log(myname.split('').reverse().join(''));

let str = 'Hello';
let result = (function (s) {
    s = 'world';
    return s;
})


let a = [1, 2, 3];
let b = a.map(x => x * 2);
b[0] = 5
// console.log(a[0], b[0]);


let asd = [1, 2, 3];
let bas = a.slice(1, 2);
// console.log(bas);
// bas.push(4)

// console.log(bas, bas.length);

a1 = 5;
// console.log(a1++);
// console.log(a1);

asd.forEach((value, key, arr) => {
    // console.log(value, key, arr);
})

// a = [1, 2, 3, 4, 5];
// b = a.some((num, index) => {
//     return (
//         console.log(num, index),
//         console.log(num % 2 === 0));
// })

// console.log(b);

a = {key: 'value'};
b = {...a, newKey: 'newValue'};

// console.log(Object.keys(b)[1]);

x = 1;
y = 2;

// console.log(x++ + y++);
// console.log(x, y);

x = [1, 2, 3];
y = x.map(x => x.toString());
z = y.join('-');
// console.log(z);


const obj =  {
    value: 10,
    getValue: function() {
        return this.x
    },
};

const unbind = obj.getValue
// const bindValue = obj.getValue.bind(getValue);
// console.log(bindValue());

// console.log([1, 2, 3] + [4, 5, 6]);

x= [1, 2, 3];
y = x;
y.push(4);

// console.log(x.length, + y.length);
// console.log(typeof x === y);

a = (cb) => {
    x = 'hello'
};

// a((arg) => console.log(arg))

p1 = Promise.resolve('one');
p2 = p1.then((r) => r + " two");

// p2.then((x) => console.log('result', x,  x.length));

n = "Bob";
p = {n};
// console.log(p.n);

a1 = [1, 2];
a2 = [3, 4];
c = [...a2, ...a1];

// console.log(c[1]);

a = [
{
name: "Dimo",
age: 43
},
{
name: "ivan",
age:15
}
];

indexToChange = a.findIndex(x => x.name === "ivan");
console.log(indexToChange);

a.splice(indexToChange, 1, 'dimo')

// console.log(a);

// console.log("result",  "5" - 2);


const user = [
    {
        firstName: "Dimo",
        lastName: "Smith"
    },
    {
        firstName: "Jane",
        lastName: "Doe"
    }
];

console.table(user);



