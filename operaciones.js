const fs = require('fs');

const leer = () => {
    const citas = fs.readFileSync("citas.json","utf8");
    return citas ? JSON.parse(citas) : [];
}

const registrar = (nombre, edad, tipo, color, enfermedad) => {
    const citasNew = leer();
    const cita = { nombre, edad, tipo, color, enfermedad };
    citasNew.push(cita);
    fs.writeFileSync("citas.json", JSON.stringify(citasNew, null, 2), "utf-8");

}

module.exports = {registrar, leer};