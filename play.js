// arrow function
// const test = (param) => 
//   console.log(param)


//   test(10);

// const person = {
//   name: 'Max',
//   age: 29,
//   greet() {
//     console.log('Hi, I am ' + this.name);
//   }
// };  


// const printName = ({ name }) => {
//     console.log(name);
// };

// printName(person);

// const { name, age} = person;
// console.log(name, age);

// const copiedPersion = {...person};
// console.log(copiedPersion)

// const hobbies = ['Sports','Cooking'];
// const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2); 

// // for (let hobby of hobbies){
// //   console.log(hobby);
// // }

// // console.log(hobbies.map(hobby => 'Hobby: '+ hobby));
// // console.log(hobbies);

// const copiedArray = [...hobbies];
// console.log(copiedArray);

// const toArray = (...args) => {
//   return args;
// };

//==========================================================================================


const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });

    return promise;
}

setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
        .then(text => {
            console.log(text)
            return fetchData()
    })
        .then(text2 => {
            console.log(text2);
    });
}, 2000);

console.log('Hello!');
console.log('Hi!');