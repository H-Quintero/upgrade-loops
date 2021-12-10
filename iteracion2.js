// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. 
// Una vez lo tengas compruébalo con un console.log.

const alumns = [
  {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
  {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
  {name: 'Juan Miranda', T1: false, T2: true, T3: true},
  {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
  {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

let aprobados = (approved) => {
  for(i = 0; i < approved.length; i++) {
    if(approved[i].T1 == true && approved[i].T2 == true ||
       approved[i].T1 == true && approved[i].T3 == true ||
       approved[i].T2 == true && approved[i].T3 == true) {
      alumns[i].isApproved = true
    } else {
      alumns[i].isApproved = false
    }
  }
  return approved
}
let solucion = aprobados(alumns)
console.log(solucion)

