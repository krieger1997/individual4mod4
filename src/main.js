import { pokemon } from "./pokemon";





 const ordenarPorNombre = ()=>{
  pokemon.sort( function(a,b){
    if(a.name < b.name){
      return -1;
    }
    if(a.name > b.name){
      return 1;
    }
    return 0;    
  })
 }


const  buscaPorId = ( id, callback )=>{
  return new Promise((resolve)=>{      
      setTimeout(() => {
          let filtrado = pokemon.find((elem)=>elem.id == id);
          callback();
          console.log("ORDENADO POR NAME:" )
          console.table(pokemon)
          resolve(filtrado)
      }, 3000);
  })
}

const idBuscar = 1; 


console.log("ESPERE...")
buscaPorId(idBuscar, ordenarPorNombre).then(res=>{
  if(res !== undefined ){
      console.log(res);
  }else{
      console.error("ID NO CORRESPONDE A NINGUN POKÉMON");
  }
  console.log("FIN")

})


