import Estacionamiento from "./tarija.js";

document.getElementById("calcular").addEventListener("click", () => {
    const horaIngreso = document.getElementById("hora-ingreso").value;
    const horaSalida = document.getElementById("hora-salida").value;
    const ticketPerdido = document.getElementById("ticket-perdido").checked;

    const estacionamiento = new Estacionamiento();
    estacionamiento.horaIngresoVehiculo(horaIngreso);
    estacionamiento.horaSalidaVehiculo(horaSalida);
    if (ticketPerdido) estacionamiento.marcarticketPerdido();

    try {
        estacionamiento.validarHoras();
        const total = estacionamiento.calcularTarifaFinal();
        const desglose = estacionamiento.desglosePorDia();

        // Mostrar total
        document.getElementById("resultado-total").textContent = `Total a pagar: Bs ${total.toFixed(2)}`;

        // Mostrar desglose por día
        const desgloseDiv = document.getElementById("desglose-dias");
        desgloseDiv.innerHTML = ""; 
        desglose.forEach(d => {
            const p = document.createElement("p");
            p.textContent = `${d.dia}: Bs ${d.monto.toFixed(2)}`;
            desgloseDiv.appendChild(p);
        });

    } catch (error) {
        alert(error.message);
    }
});
