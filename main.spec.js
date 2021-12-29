const {it, expect} = require('@jest/globals')
const Usuario = require('./main')

describe('Datos Persona',()=>{
    const datos = new Usuario();
    it('Se obtiene saludo',()=>{
        const rNombre = datos.saludo('Sara');
        expect(rNombre).toBe('Hola Sara bienvenido a nuestra tienda');
    })
    it('Se obtiene datos por identificador',()=>{
        const rNombre = datos.info(10);
        expect(rNombre).toBe('Nombre: Carlos, Edad: 23, Tipo de cliente: VIP');
    })
    it('Comprobando edad',()=>{
        const rNombre = datos.tarjeta('Rosa',23);
        expect(rNombre).toBe('Rosa, su compra y registro realizado con exito');
    })
})