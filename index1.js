
// let a = 1;
//1
// let b = a++; //1
//2
// let c = ++a; 
//3
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(a, b, c);


// let arr = [1, 2, 3];
// arr[6] = 3
// arr[a] = 5
// console.log(arr.length);
// arr.a = 0
// console.log(arr.a, console.log(arr[a]));


function printParams(b, a) {
    console.log(a, b);
}
let a = 5;
let b = 3

// printParams(a, b); //3, 5

x = 2;
y = 3;

// console.log(x ** y);

a = '6'
b = 3

// console.log(a - b);
// console.log(a + b);

prop = "age";
person = {[prop]: 30};

// console.log(person.prop);

x = [1, 2, 3, 5];

x.forEach((e) => {
    if (e < 3 || e === 5) {
        // console.log(e, e < 3, e === 5);
        return
    }; 
    // TF/ TF / FF
    // console.log(e);
})

