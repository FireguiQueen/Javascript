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
/* Atribua o valor da propriedade 'nome' a uma variável chamada 'nome' e o valor da propriedade 
   'idade' a uma variável chamada 'idade'. */
const person = { 
    nome: 'Jane', 
    idade: 25 
};
const {nome, idade} = person;



// Considere o seguinte objeto.
// Atribua os valores do objeto às variáveis title e author.
const book = { 
    title: 'The Great Gatsby', 
    author: 'F. Scott Fitzgerald',  
};
const {title, author} = book;



// Considere o seguinte objeto.
// Atribua os valores do objeto às variáveis Fullname, position e department.
const employee = { 
    fullName: 'John Doe', 
    position: 'Manager', 
    department: 'Sales' 
};
const {fullName, position, department} = employee;



// ********************************************************* // 

// Considere o objeto seguinte.
// Crie uma função que o capture e devolve os valores das propriedades de maneira "mastigada".
const worker = {
    nameSurname: 'Adam Doe Lemster',
    gender: 'male',
    age: 36,
    NIN: 'AB123456C',
     
    companyDerpartment: 'Marketing / design',
    worker_id: 41404114,
}


