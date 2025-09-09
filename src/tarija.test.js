
const Estacionamiento = require("./tarija");

test("Registrar Hora de ingreso", () => {           
        const estacionamiento= new Estacionamiento();
        estacionamiento.horaIngresoVehiculo("08:00");
        expect(estacionamiento.horaIngreso).toBe("08:00");
});
test("Registrar hora de salida", () => {           
    const estacionamiento= new Estacionamiento();
    estacionamiento.horaIngresoVehiculo("08:00");
    estacionamiento.horaSalidaVehiculo("10:00");
    expect(estacionamiento.horaSalida).toBe("10:00");
}   );
test("Indicar ticket perdido"   , () => {        
    const estacionamiento= new Estacionamiento();
    estacionamiento.marcarticketPerdido();
    expect(estacionamiento.ticketPerdido).toBe(true);
} );
test("calcular tarifa base:  1 hora = Bs 10", () => {
    const estacionamiento= new Estacionamiento();
    estacionamiento.horaIngresoVehiculo("08:00");
    estacionamiento.horaSalidaVehiculo("09:00");

    const total = estacionamiento.calcularTarifaBase();
    expect(total).toBe(10);

} );


test("calcular tarifa nocturna 22:00–06:00", () => {
    const estacionamiento = new Estacionamiento();
    estacionamiento.horaIngresoVehiculo("22:30");
    estacionamiento.horaSalidaVehiculo("23:30");  

    const resultado = estacionamiento.calcularTarifaNocturna();
    expect(resultado).toBe(6); 
});
/// test adicionales--------------
test("calcular tarifa nocturna 2 horas = Bs 12", () => {
    const estacionamiento = new Estacionamiento();
    estacionamiento.horaIngresoVehiculo("23:00");
    estacionamiento.horaSalidaVehiculo("01:00"); 

    const resultado = estacionamiento.calcularTarifaNocturna();
    expect(resultado).toBe(12);
});

test("tarifa mixta: 1h normal + 1h nocturna = Bs 16", () => {
    const estacionamiento = new Estacionamiento();
    estacionamiento.horaIngresoVehiculo("21:00");
    estacionamiento.horaSalidaVehiculo("23:00");

    const resultado = estacionamiento.calcularTarifaFinal();
    expect(resultado).toBe(16);
});
///___________________________________________________
test("aplicar tope máximo por día", () => {
    const estacionamiento = new Estacionamiento();
    estacionamiento.horaIngresoVehiculo("08:00");
    estacionamiento.horaSalidaVehiculo("20:00"); 
    estacionamiento.calcularTarifaBase();

    
    const tarifa = estacionamiento.aplicarTopeDiario(100); 
    expect(tarifa).toBe(50); 
});

test("tarifa penalidad por ticket perdido", () => {
    const estacionamiento = new Estacionamiento();
    estacionamiento.marcarticketPerdido();

    const tarifa = estacionamiento.calcularTarifaFinal();
    expect(tarifa).toBe(80);
});
test("validar que hora de salida no sea anterior a ingreso", () => {
    const estacionamiento = new Estacionamiento();
    estacionamiento.horaIngresoVehiculo("10:00");
    estacionamiento.horaSalidaVehiculo("08:00");

    expect(() => {
        estacionamiento.validarHoras();
    }).toThrow("La hora de salida no puede ser anterior a la de ingreso");
});
test("calcular monto total a pagar", () => {
    const estacionamiento = new Estacionamiento();
    estacionamiento.horaIngresoVehiculo("08:00");
    estacionamiento.horaSalidaVehiculo("09:00");
    estacionamiento.calcularTarifaBase();

    const total = estacionamiento.calcularTarifaFinal();
    expect(total).toBe(10); 
});

test("desglose por día para estadía larga", () => {
    const estacionamiento = new Estacionamiento();
    estacionamiento.horaIngresoVehiculo("23:00");
    estacionamiento.horaSalidaVehiculo("02:00"); 
    estacionamiento.calcularTarifaBase();

    const desglose = estacionamiento.desglosePorDia();
    expect(desglose).toEqual([
        { dia: "Día 1", monto: 10 },
        { dia: "Día 2", monto: 10 }
    ]);
});

