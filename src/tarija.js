class Estacionamiento{
    constructor(){
        this.horaIngreso = null;
        this.horaSalida = null;
        this.ticketPerdido = false;
        this.tarifaBase = 0;
    }
     horaIngresoVehiculo(hora){
        return this.horaIngreso=hora;
    }
    horaSalidaVehiculo(hora){
        return this.horaSalida=hora;    
    }
    marcarticketPerdido(){
         this.ticketPerdido=true;
    }
    calcularTarifaBase(){
        this.tarifaBase=10;
    }   

}


module.exports = Estacionamiento;