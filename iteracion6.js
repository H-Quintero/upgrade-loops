//Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato. 
//Recuerda que puedes usar la función .includes() para comprobarlo.
//Puedes usar este array:

const toys = [
  {id: 5, name: 'Buzz MyYear'}, 
  {id: 11, name: 'Action Woman'}, 
  {id: 23, name: 'Barbie Man'}, 
  {id: 40, name: 'El gato con Guantes'},
  {id: 40, name: 'El gato felix'}
  ]
/* 
 for(let noCats of toys) {
   for(i= 0; i < toys.length; i++) {
      if(toys[i].name.includes('gato') == true) {
       toys.splice(i, 1)
      }
    }
    console.log(noCats)
 } */

 /* for(let noCats of toys) {
  
   if(noCats.name.includes('gato')) {
     toys.splice(toys.indexOf(noCats), 1)
   }
  }
  console.log(toys)
 */
  let test = []
  for(let x of toys) {
     if(x.name.includes("gato")) {
         test.push(x)
     }
  }
  for(let obj of test) {
      let index = toys.indexOf(obj)
      toys.splice(index,1)
  }
 
  for(let final of toys) {
    if(test.name === final.name) {
      debugger
      toys.splice(toys.indexOf, 1)
    }
  }
  console.log(toys) 

  
 