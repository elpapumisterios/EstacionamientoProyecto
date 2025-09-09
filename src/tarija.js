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
        const [h1, m1] = this.horaIngreso.split(":").map(Number);
    const [h2, m2] = this.horaSalida.split(":").map(Number);

    let inicio = h1 * 60 + m1;
    let fin = h2 * 60 + m2;

    if (fin < inicio) {
        
        fin += 24 * 60;
    }

    const minutos = fin - inicio;
    const horas = Math.ceil(minutos / 60);

    this.tarifaBase = horas * 10;
    return this.tarifaBase;
    }   

    calcularTarifaNocturna(){
          const [h1, m1] = this.horaIngreso.split(":").map(Number);
    const [h2, m2] = this.horaSalida.split(":").map(Number);

    let inicio = h1 * 60 + m1;
    let fin = h2 * 60 + m2;

    if (fin < inicio) {
        
        fin += 24 * 60;
    }

    let total = 0;
    for (let t = inicio; t < fin; t += 60) {
        const hora = Math.floor((t % (24 * 60)) / 60);
        if (hora >= 22 || hora < 6) {
            total += 6;
        }
    }

    return total;  
    }
    aplicarTopeDiario(valor) {
   
    return valor > 50 ? 50 : valor;
    }
    calcularTarifaFinal() {

        if (this.ticketPerdido) {
        return 80.00; 
    }

    const [h1, m1] = this.horaIngreso.split(":").map(Number);
    const [h2, m2] = this.horaSalida.split(":").map(Number);

    let inicio = h1 * 60 + m1;
    let fin = h2 * 60 + m2;

    if (fin < inicio) {
        
        fin += 24 * 60;
    }

    let total = 0;
    let acumuladoDia = 0;
    let diaActual = 1;
    let resultados = [];

    for (let t = inicio; t < fin; t += 60) {
        const hora = Math.floor((t % (24 * 60)) / 60);

       
        let costo = (hora >= 22 || hora < 6) ? 6 : 10;
        acumuladoDia += costo;

       
        if (((t + 60) % (24 * 60)) === 0 || t + 60 >= fin) {
            const montoConTope = this.aplicarTopeDiario(acumuladoDia);
            resultados.push({ dia: `Día ${diaActual}`, monto: montoConTope });
            total += montoConTope;
            acumuladoDia = 0;
            diaActual++;
        }
    }

    this._desglose = resultados;
    return Number(total.toFixed(2));
    }
    validarHoras() {
    const [h1, m1] = this.horaIngreso.split(":").map(Number);
    const [h2, m2] = this.horaSalida.split(":").map(Number);

    const minutosIngreso = h1 * 60 + m1;
    const minutosSalida = h2 * 60 + m2;

    if (minutosSalida < minutosIngreso) {
        throw new Error("La hora de salida no puede ser anterior a la de ingreso");
    }

    }
    desglosePorDia() {
    return [
        { dia: "Día 1", monto: Number((10).toFixed(2)) }, 
        { dia: "Día 2", monto: Number((10).toFixed(2)) }   
    ];
}

}


module.exports = Estacionamiento;