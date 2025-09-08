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

    calcularTarifaNocturna(){
        return 6;   
    }
    aplicarTopeDiario(valor) {
   
    return valor > 50 ? 50 : valor;
}


}


module.exports = Estacionamiento;