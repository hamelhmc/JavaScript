'use strict';
// // Esto es un comentario de una linea
// /** Comentario en bloque  */

// let cuandoEmpezoCovid19 = 2020;

// console.log(cuandoEmpezoCovid19);

// console.log('Hello World');
// console.warn('Warning');
// console.error('Error');

// typeOf para consultar el tipo de variable
// operador ternario
// let frase = edad <= 18 ? 'Es mayor de edad' : 'Es menor de edad';
// function hola(mensaje) {
//    return mensaje;
//  }
const itemNames = ['Camisa', 'Pantalon', 'Calcetines'];
const itemPrices = [13, 27, 100];

class Usuario {
  #cart = [];

  addCart(item) {
    this.#cart.push(item);
  }

  pay() {
    return this.#cart;
  }
}

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  static article(itemNames, itemPrices) {
    let items = itemNames.map((name, index) => {
      return new Item(name, itemPrices[index]);
    });
    return items;
  }
}

class Tienda {
  static comprar(carrito) {
    let resultado = carrito.reduce((accumulator, item) => {
      const product = accumulator.find((data) => {
        return item.name === data.name;
      });
      if (product) {
        product.amount++;
        product.price += product.price;
      } else {
        accumulator.push({
          name: item.name,
          unitPrice: item.price,
          price: item.price,
          amount: 1,
        });
      }
      return accumulator;
    }, []);

    let total = resultado.reduce((accumulator, item) => {
      return accumulator + item.price;
    }, 0);

    for (const item of resultado) {
      console.log(
        `
        nombre del articulo    ${item.name}
        unidades               ${item.amount}
        precio por unidad      ${item.unitPrice}€
        precio de las unidades ${item.price}€
       `
      );
    }
    console.log(
      `
        Total                  ${total}€
       `
    );
  }
}

const myItems = Item.article(itemNames, itemPrices);
const myUsuario = new Usuario();

myUsuario.addCart(myItems[0]);
myUsuario.addCart(myItems[0]);
myUsuario.addCart(myItems[1]);
myUsuario.addCart(myItems[0]);
myUsuario.addCart(myItems[0]);
myUsuario.addCart(myItems[2]);
myUsuario.addCart(myItems[2]);
myUsuario.addCart(myItems[1]);
myUsuario.addCart(myItems[1]);

const myTienda = Tienda.comprar(myUsuario.pay());
