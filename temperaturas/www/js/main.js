'use strict';
// Temp. menor que 20: fondo verde
// Temp. entre 20 y 30: fondo naranja
// Temp. mayor de 30: fondo rojo
/**
 * Fecha de referencia para cuando se quiere indicar una fecha vacia
 */
export const ReferenceDate = new Date(1900, 1, 1, 0, 0, 0, 0);
/**
 * Utilidades generales para instancias
 *
 * @export
 */
export class UtilHelper {
  /**
   * Devuelve si el valor esta definido o no
   */
  static isDefined(value) {
    return typeof value !== 'undefined';
  }
  /**
   * Devuelve si el valor es un string
   */
  static isString(value) {
    return typeof value === 'string';
  }
  /**
   * Devuelve si el valor es un numero
   */
  static isNumber(value) {
    return typeof value === 'number';
  }
  /**
   * Devuelve si el valor es un string pero con valor vacio o nulo
   */
  static isNullOrEmpty(data) {
    return !(
      UtilHelper.isDefined(data) &&
      data !== null &&
      UtilHelper.isString(data) &&
      data.trim().length > 0
    );
  }
  /**
   * Devuelve si es un objecto sin propiedades
   */
  static isEmptyObject(value) {
    return Object.getOwnPropertyNames(value).length === 0;
  }
  /**
   * Devuelve si es un valor definido y no nulo
   */
  static exist(data) {
    return UtilHelper.isDefined(data) && data !== null;
  }
  /**
   * Devuelve si el valor es un array, pudiendo indicar si tiene que tener datos o no
   */
  static existArray(data, withData = false) {
    return (
      UtilHelper.isDefined(data) &&
      data !== null &&
      Array.isArray(data) &&
      (!withData || data.length > 0)
    );
  }
  /**
   * Devuelve si el valor es un string relleno
   */
  static existString(data) {
    return !UtilHelper.isNullOrEmpty(data);
  }
  /**
   * Devuelve si el valor es un valor numerico finito
   */
  static isFinite(data) {
    return UtilHelper.exist(data) && UtilHelper.isNumber(data) && Number.isFinite(data);
  }
}
const temperaturas = [
  {
    city: 'A Coruña',
    min: 17,
    max: 23,
  },
  {
    city: 'Ferrol',
    min: 15,
    max: 32,
  },
  {
    city: 'Lugo',
    min: -20,
    max: 31,
  },
  {
    city: 'Ourense',
    min: 18,
    max: 35,
  },
  {
    city: 'Pontevedra',
    min: 18,
    max: 29,
  },
];

//
// columna3.classList.add('medium');

function buildTemperatureTable(temperatures) {
  const section = document.querySelector('section');
  const tableTemperatures = document.getElementById('temperaturas');
  section.setAttribute('class', 'temp');
  for (let i = 0; i < temperatures.length; i++) {
    const row = document.createElement('tr');
    const column = document.createElement('td');
    const columnTwo = document.createElement('td');
    const columnThree = document.createElement('td');

    tableTemperatures.appendChild(row);
    row.appendChild(column);
    row.appendChild(columnTwo);
    row.appendChild(columnThree);

    column.textContent = `${temperatures[i].city}`;
    columnTwo.textContent = `${temperatures[i].min}`;
    columnThree.textContent = `${temperatures[i].max}`;

    paintColumn(columnTwo, temperatures[i].min);
    paintColumn(columnThree, temperatures[i].max);
  }
}

function paintColumn(columna, temperature) {
  if (temperature < 20) {
    columna.setAttribute('class', 'low');
  } else if (temperature >= 20 && temperature <= 30) {
    columna.setAttribute('class', 'medium');
  } else {
    columna.setAttribute('class', 'high');
  }
}

buildTemperatureTable(temperaturas);


console.log(UtilHelper.exist(resultado));
