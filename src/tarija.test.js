
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
test("calcular tarifa base", () => {
    const estacionamiento= new Estacionamiento();
    estacionamiento.calcularTarifaBase();

    expect(estacionamiento.tarifaBase).toBe(10);
} );


test("calcular tarifa nocturna 22:00–06:00", () => {
    const estacionamiento = new Estacionamiento();
    estacionamiento.horaIngresoVehiculo("22:30");
    estacionamiento.horaSalidaVehiculo("23:30");  

    const resultado = estacionamiento.calcularTarifaNocturna();
    expect(resultado).toBe(6); 
});
test("aplicar tope máximo por día", () => {
    const estacionamiento = new Estacionamiento();
    estacionamiento.horaIngresoVehiculo("08:00");
    estacionamiento.horaSalidaVehiculo("20:00"); 
    estacionamiento.calcularTarifaBase();

    
    const tarifa = estacionamiento.aplicarTopeDiario(100); 
    expect(tarifa).toBe(50); 
});
