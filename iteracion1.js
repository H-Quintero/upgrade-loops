const products = [
  'Camiseta de Pokemon', 
  'Pantalón coquinero', 
  'Gorra de gansta', 
  'Camiseta de Basket', 
  'Cinrurón de Orión', 
  'AC/DC Camiseta']

let productTshirts = (param) => {
  debugger
  let tshirts = []
  for(i = 0; i < param.length; i++)
  if(param[i].includes('Camiseta') == true) {
    tshirts += param[i] + ','
  }
  return tshirts
}

let solucion = productTshirts(products)
console.log(solucion)