//Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. 
//Imprime en un console log el array. Puedes usar este array:


const placesToTravel = [
  {id: 5, name: 'Japan'}, 
  {id: 11, name: 'Venecia'}, 
  {id: 23, name: 'Murcia'}, 
  {id: 40, name: 'Santander'}, 
  {id: 44, name: 'Filipinas'}, 
  {id: 59, name: 'Madagascar'}]
  
  //For...of
  
  for(let myPlaces of placesToTravel) {
  
   if(myPlaces.id == 11 || myPlaces.id == 40) {
     
     placesToTravel.splice(placesToTravel.indexOf(myPlaces), 1)
  }
}
console.log(placesToTravel)

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //Eliminando el elemento del array
  for(i = 0; i < placesToTravel.length; i++) {
   if(placesToTravel[i].id == 11 || placesToTravel[i].id == 40) {
     placesToTravel.splice(i, 1)
   }
  }
// console.log(placesToTravel)
 
 //Creando un nuevo array
   let newPlace = []
 for(i = 0; i < placesToTravel.length; i++) {
   if(placesToTravel[i].id != 11 && placesToTravel[i].id != 40) {
     newPlace.push(placesToTravel[i]) 
   }
 }
//  console.log(newPlace)
