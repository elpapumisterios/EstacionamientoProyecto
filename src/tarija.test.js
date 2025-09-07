
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