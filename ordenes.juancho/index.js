const orders = [
  {
    buyerName: 'John Doe',
    productDescription: 'Laptop',
    subtotal: 800,
    tax: 80,
    total: 880,
    quantity: 2,
    company: 'TechStore',
    printed: true,
  },
  {
    buyerName: 'Alice Johnson',
    productDescription: 'Smartphone ',
    subtotal: 400,
    tax: 40,
    total: 440,
    quantity: 1,
    company: 'GadgetsRUs',
    printed: true,
  },
  {
    buyerName: 'Bob Smith',
    productDescription: 'Headphones',
    subtotal: 50,
    tax: 5,
    total: 55,
    quantity: 1,
    company: 'AudioTech',
    printed: true,
  },
  {
    buyerName: 'Eva Miller',
    productDescription: 'Tablet',
    subtotal: 300,
    tax: 30,
    total: 330,
    quantity: 2,
    company: 'GadgetWorld',
    printed: true,
  },
  {
    buyerName: 'Charlie Brown',
    productDescription: 'Mouse',
    subtotal: 20,
    tax: 2,
    total: 22,
    quantity: 1,
    company: 'TechAccessories',
    printed: true,
  },

  {
    buyerName: 'Grace Davis',
    productDescription: 'Camera',
    subtotal: 600,
    tax: 60,
    total: 660,
    quantity: 3,
    company: 'PhotographyHub',
    printed: false,
  },
  {
    buyerName: 'Daniel White',
    productDescription: 'Printer',
    subtotal: 150,
    tax: 15,
    total: 165,
    quantity: 1,
    company: 'PrintTech',
    printed: false,
  },
  {
    buyerName: 'Sophia Lee',
    productDescription: 'External Hard Drive',
    subtotal: 120,
    tax: 12,
    total: 132,
    quantity: 2,
    company: 'StorageSolutions',
    printed: false,
  },
  {
    buyerName: 'Sophia',
    productDescription: 'External Hard Drive II',
    subtotal: 120,
    tax: 12,
    total: 132,
    quantity: 2,
    company: 'StorageSolutions',
    printed: false,
  },
  {
    buyerName: 'Pepe Lee',
    productDescription: 'Hard Drive',
    subtotal: 120,
    tax: 12,
    total: 132,
    quantity: 3,
    company: 'StorageSolutions',
    printed: false,
  },

  {
    buyerName: 'Michael Johnson',
    productDescription: 'Keyboard',
    subtotal: 30,
    tax: 3,
    total: 33,
    quantity: 1,
    company: 'InputDevices',
    printed: false,
  },
  {
    buyerName: 'Michael',
    productDescription: 'Keyboard',
    subtotal: 30,
    tax: 3,
    total: 33,
    quantity: 1,
    company: 'InputDevices',
    printed: false,
  },

  {
    buyerName: 'Juan Johnson',
    productDescription: 'Keyboard USB',
    subtotal: 30,
    tax: 3,
    total: 33,
    quantity: 1,
    company: 'InputDevices',
    printed: false,
  },
  {
    buyerName: 'Michael Ortiz',
    productDescription: 'USB memory',
    subtotal: 30,
    tax: 3,
    total: 33,
    quantity: 1,
    company: 'InputDevices',
    printed: false,
  },
  {
    buyerName: 'Sarah Miller',
    productDescription: 'Monitor',
    subtotal: 200,
    tax: 20,
    total: 220,
    quantity: 1,
    company: 'DisplayTech',
    printed: false,
  },
  {
    buyerName: 'David Johnson',
    productDescription: 'Wireless Mouse',
    subtotal: 25,
    tax: 2.5,
    total: 27.5,
    quantity: 1,
    company: 'TechAccessories',
    printed: false,
  },
  {
    buyerName: 'Olivia Davis',
    productDescription: 'USB Flash Drive',
    subtotal: 15,
    tax: 1.5,
    total: 16.5,
    quantity: 1,
    company: 'StorageSolutions',
    printed: false,
  },
  {
    buyerName: 'Ethan Brown',
    productDescription: 'HDMI Cable',
    subtotal: 10,
    tax: 1,
    total: 11,
    quantity: 1,
    company: 'ConnectivityTech',
    printed: false,
  },
  {
    buyerName: 'Sarah Miller',
    productDescription: 'Monitor',
    subtotal: 200,
    tax: 20,
    total: 220,
    quantity: 1,
    company: 'DisplayTech',
    printed: false,
  },
  {
    buyerName: 'David Johnson',
    productDescription: 'Wireless Mouse',
    subtotal: 25,
    tax: 2.5,
    total: 27.5,
    quantity: 1,
    company: 'TechAccessories',
    printed: false,
  },
  {
    buyerName: 'Olivia Davis',
    productDescription: 'USB Flash Drive',
    subtotal: 15,
    tax: 1.5,
    total: 16.5,
    quantity: 1,
    company: 'StorageSolutions',
    printed: false,
  },
  {
    buyerName: 'Ethan Brown',
    productDescription: 'HDMI Cable',
    subtotal: 10,
    tax: 1,
    total: 11,
    quantity: 1,
    company: 'ConnectivityTech',
    printed: false,
  },
  {
    buyerName: 'Emma Wilson',
    productDescription: 'Webcam',
    subtotal: 30,
    tax: 3,
    total: 33,
    quantity: 1,
    company: 'VideoTech',
    printed: false,
  },
  {
    buyerName: 'Christopher Lee',
    productDescription: 'Gaming Mouse',
    subtotal: 40,
    tax: 4,
    total: 44,
    quantity: 1,
    company: 'GamingGear',
    printed: false,
  },
  {
    buyerName: 'Mia Hall',
    productDescription: 'Wireless Keyboard',
    subtotal: 50,
    tax: 5,
    total: 55,
    quantity: 1,
    company: 'InputDevices',
    printed: false,
  },
  {
    buyerName: 'William Turner',
    productDescription: 'External DVD Drive',
    subtotal: 35,
    tax: 3.5,
    total: 38.5,
    quantity: 1,
    company: 'StorageSolutions',
    printed: false,
  },
  {
    buyerName: 'Grace Martinez',
    productDescription: 'Bluetooth Earbuds',
    subtotal: 60,
    tax: 6,
    total: 66,
    quantity: 1,
    company: 'AudioTech',
    printed: false,
  },
  {
    buyerName: 'Ryan Scott',
    productDescription: 'USB Hub',
    subtotal: 18,
    tax: 1.8,
    total: 19.8,
    quantity: 1,
    company: 'ConnectivityTech',
    printed: false,
  },
];

const ordenesNoImpresas = orders.filter((order) => !order.printed);

const ordenesAgrupadas = [];

/**
 * No necesitamos el numero de orden, por eso lo emiline del push
 * lo demas esta bien
 * pendiente:
 * -investigar el destructuring (lo que hiciste en el push con el ...orden)
 * -agregar archivo html
 * -por cada elemento de los grupos de arreglos en el chunk, crear un div de las dimensiones indicadas en la tarea
 * -dentro de cada div, crear div que contengan las informaciones que obtendremos dentro de los grupos de arreglos chunks
 * es decir: si tenemos el primer grupo de elementos de 20, recorrer ese arreglo y crear divs con la info del objeto orden
 */

ordenesNoImpresas.forEach((orden) => {
  if (orden.quantity > 1) {
    for (let i = 0; i < orden.quantity; i++) {
      ordenesAgrupadas.push({ ...orden, quantity: 1 });
    }
  } else {
    ordenesAgrupadas.push({ ...orden, quantity: 1 });
  }
});

// dividir el arreglo en subarreglos de x cantidad
const ordersChunk = (arreglo, cantidad) => {
  const chunkSize = cantidad;
  let arrayChunkOfOrders = [];
  for (let i = 0; i < arreglo.length; i += chunkSize) {
    const chunk = arreglo.slice(i, i + chunkSize);
    arrayChunkOfOrders.push(chunk);
  }
  return arrayChunkOfOrders;
};

let resultado = ordersChunk(ordenesAgrupadas, 20);

document.getElementById('contenedor').innerHTML = resultado;