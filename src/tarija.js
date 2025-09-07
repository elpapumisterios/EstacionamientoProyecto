class Estacionamiento{
    constructor(){
        this.horaIngreso = null;
        this.horaSalida = null;
    }
     horaIngresoVehiculo(hora){
        return this.horaIngreso=hora;
    }
    horaSalidaVehiculo(hora){
        return this.horaSalida=hora;    
    }

}


module.exports = Estacionamiento;