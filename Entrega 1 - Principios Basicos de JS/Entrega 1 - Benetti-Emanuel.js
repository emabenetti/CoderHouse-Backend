class Usuario {
    //Constructor que inicializa los atributos
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = new Array(libros)
        this.mascotas = new Array(mascotas)
    }

    //Metodos:

    //Devuelve el nombre completo usando template strings
    getFullName() {
       return(`${this.nombre} ${this.apellido}`)
    }

    //Agrega una mascota al array de mascotas
    addMascota(nombre) {
        this.mascotas.push(nombre)
        return (`Se agregó correctamente nueva mascota: ${nombre}`)
    }

    //Devuelve la cantidad de mascotas actuales del usuario
    countMascotas() {
        return(`Cantidad de mascotas actuales: ${this.mascotas.length}`)
    }

    //Agrega un objeto libro al array de libros del usuario
    addBook(name,author){
        this.libros.push({nombre: name, autor: author})
        return(`Se agregó correctamente el siguiente libro: \nNombre: ${name}\nAutor: ${author}`)
    }

    //Devuelve solo los nombres de los libros en el array de objetos.
    getBookNames(){
        let lista = this.libros.map(a => a.nombre) //esto mapea solo los nombres en una nueva variable
        return lista
    }
}

//Se crean 3 usuarios nuevos. Los libros son obras originales (?
const Usuario1 = new Usuario('Jorge', 'Schmidt', {nombre: "El señor de los Tornillos", autor: "F. R. R. Eteria"}, 'perro')
const Usuario2 = new Usuario('Angelina', 'Jolie', {nombre: "Juego de Tonos", autor: "Jorge Erre Erre Martín"}, 'gato')
const Usuario3 = new Usuario('Jorge', 'Schmidt', {nombre: "El Leon, la bruja y el cenicero", autor: "C. S. Malboro"}, 'erizo')

//Pruebas usuario 1
console.log("##### PRUEBAS USUARIO 1 #####")
console.log(Usuario1.getFullName())
console.log(Usuario1.countMascotas())
console.log(Usuario1.addMascota('loro'))
console.log(Usuario1.countMascotas())
console.log(Usuario1.addBook("Harry Rocher y la fábrica de chocolate", "J. K. Fort"))
console.log(Usuario1.getBookNames())

//Pruebas usuario 2
console.log("##### PRUEBAS USUARIO 2 #####")
console.log(Usuario2.getFullName())
console.log(Usuario2.countMascotas())
console.log(Usuario2.addMascota('pez'))
console.log(Usuario2.addMascota('gallina'))
console.log(Usuario2.addMascota('vaca'))
console.log(Usuario2.countMascotas())
console.log(Usuario2.addBook("Yo, robot", "Mark Zuckerberg"))
console.log(Usuario2.getBookNames())

//Pruebas usuario 3
console.log("##### PRUEBAS USUARIO 3 #####")
console.log(Usuario3.getFullName())
console.log(Usuario3.countMascotas())
console.log(Usuario3.addMascota('hamster'))
console.log(Usuario3.countMascotas())
console.log(Usuario3.addBook("Martin Hierro", "Josh Hermann Dez"))
console.log(Usuario3.addBook("Del Arte de la Hernia", "Nicolas Torciadelo"))
console.log(Usuario3.addBook("El poder del sol", "Lupita Hormigón"))
console.log(Usuario3.getBookNames())