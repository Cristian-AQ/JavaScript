class Usuario{
    saludo(nombre){
        return`Hola ${nombre} bienvenido a nuestra tienda`
    }

    info(id){
        if(id==10){
            return `Nombre: Carlos, Edad: 23, Tipo de cliente: VIP`;
        }else if(id==1){
            return `Nombre: Alejandro, Edad: 18, Tipo de cliente: Nuevo`;
        }else{
            return `El usuario con id ${id} no se encuentra registrado`
        }
    }

    tarjeta(nombre, edad){
        if(edad<18){
            return `${nombre}, usted necesita autorizacion para utilizar su tarjeta`
        }else{
            return `${nombre}, su compra y registro realizado con exito`
        }
    }
}

module.exports = Usuario