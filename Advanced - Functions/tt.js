const myFunction = () => {
    let myValue = 2;
    console.log(myValue);

    const childFunction = () => {
         console.log(myValue += 1);
    }

    return childFunction;
}

const result = myFunction();
result();
result();
result();