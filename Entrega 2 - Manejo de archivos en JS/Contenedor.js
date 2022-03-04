const fs = require('fs')

class Contenedor {
    //Constructor
    constructor(nombre){
        this.nombre = nombre
    }

    //Metodos
    //1- Recibe un objeto, lo guarda en el archivo, devuelve id asignado
    async save(obj){
        try{
            const contenido =  await fs.promises.readFile(this.nombre)
            const contenido_parsed = JSON.parse(contenido)
            //Usando los corchetes en ["id"] se le indica a js que si esa propiedad no existe en el objeto, que la cree
            obj["id"] = (contenido_parsed[contenido_parsed.length -1].id) + 1
            fs.promises.writeFile("./productos.txt",JSON.stringify([...contenido_parsed,obj]))
        }
        catch(err){
            fs.promises.writeFile("./productos.txt",JSON.stringify([{...obj,id: 0}]))
        }
    }

    //2- Recibe un id y devuelve el objeto con ese id, o null si no está.
    async getById(id){
        try {
            const productos = await this.promises.getAll()
            return productos.find(producto => id === producto.id)
        } catch (error) {
            console.log(error)
        }
    }

    //3- Devuelve un array con los objetos presentes en el archivo.
    async getAll(){
        try {
            //Se lee el contenido crudo
            const contenido =  await fs.promises.readFile(this.nombre)
            //Se retorna el contenido parseado en un array
            return JSON.parse(contenido)
        } catch (error) {
            console.log("No se pudo leer el archivo.")
        }
    }

    //4- Elimina del archivo el objeto con el id buscado.
    async deleteById(id){
        //esto está sin terminar
        let productos = await this.promises.getAll()
        productos = productos.filter(function( obj ) {
            return obj.id !== id;
          });
    }

    //5- Elimina todos los objetos presentes en el archivo.
    //Simplemente reemplazo el contenido por un vacío.
    async deleteAll(){
        await fs.promises.writeFileSync("./productos.txt","")
        return "Contenido eliminado correctamente."
    }
} 

const cont1 = new Contenedor("./productos.txt")

//Pruebas de los métodos

cont1.save({                                                                                                                                                    
    title: 'Escuadra',                                                                                                                                 
    price: 123.45,                                                                                                                                     
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',                                     
                                                                                                                                            
  },)

cont1.save({                                                                                                                                                
    title: 'Globo Terráqueo',                                                                                                                          
    price: 345.67,                                                                                                                                     
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',                                                                                       id: null                                                                                  
  },)

cont1.save( {                                                                                                                                                    
    title: 'Calculadora',                                                                                                                              
    price: 234.56,                                                                                                                                     
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',                                                                                                                                                                                     
  },)


console.log(`LISTA COMPLETA DE TODOS LOS ELEMENTOS ACTUALES:\n ${cont1.getAll()}`)

console.log(`BUSCAR ELEMENTO POR ID:\n ${cont1.getById(1)}`)

console.log(`ELIMINAR ELEMENTO POR ID:\n ${cont1.deleteById(1)}`)


console.log(`ELIMINAR TODOS LOS ELEMENTOS:\n ${cont1.deleteAll()}`)
