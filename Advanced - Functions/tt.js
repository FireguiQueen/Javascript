function newObj(name, age){
    return {
       name, 
       age, 
       calcAge(){
         const data = new Date();
         const ano = data.getFullYear();
         return ano - age;
  }
   }
 }


const p1 = newObj('Julia', 17)
console.log(p1.calcAge())