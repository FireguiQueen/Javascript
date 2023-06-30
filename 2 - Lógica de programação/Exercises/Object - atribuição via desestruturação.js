// Considere o seguinte objeto.
// Atribua os valores do objeto às variáveis name, age e city.
const person_01 = { 
    name: 'John', 
    age: 30, 
    city: 'New York' 
};
const {name, age, city} = person_01;



// Considere o seguinte objeto.
// Atribua os valores do objeto às variáveis brand, model e year.
const car = { 
    brand: 'Toyota', 
    model: 'Camry', 
    year: 2022 
};
const {brand, model, year} = car;



// Considere o seguinte objeto.
/*  Atribua o valor da propriedade 'name' a uma variável chamada studentName e o valor da 
    propriedade grade a uma variável chamada studentGrade. */
const student = { 
    name: 'Alice', 
    grade: 9.5, 
    school: 'High School' 
};
const {name: studentName, grade: studentGrade} = student;
console.log(studentName, studentGrade)



// Considere o seguinte objeto.
/* Atribua o valor da propriedade name a uma variável chamada name e o valor da propriedade age a uma variável chamada age.
const person = { 
    name: 'Jane', 
    age: 25 
};

// Considere o seguinte objeto.
// Atribua os valores do objeto às variáveis title, author e year.
const book = { 
    title: 'The Great Gatsby', 
    author: 'F. Scott Fitzgerald', 
    year: 1925 
};




// Considere o seguinte objeto.
// Atribua os valores do objeto às variáveis name, position e department.
const employee = { 
    name: 'John Doe', 
    position: 'Manager', 
    department: 'Sales' 
};
