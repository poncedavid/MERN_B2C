const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};


const vehicle = {
    type: 'Motorboat',
    wheels: 0,
    isElectric: false,
    topSpeed: 75
}





const { type, wheels, isElectric, topSpeed } = vehicle;
const { email, password } = person;



const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
const [firstAnimal, secondAnimal, thirdAnimal] = animals;

console.log(firstAnimal)







const persona = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
      {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
      },
      {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
      },
      {
        address: '2020 Willow Springs Rd',
        city: 'Killeen',
        zipcode: '76549',
      }
    ],

    createdAt: 1543945177623
  };


const { addresses: [direccion1, direccion2,tres] } = persona;


console.log(tres)






const animales = ['horse', 'dog', 'fish', 'cat', 'bird'];

const [,,animalUno ,...otrosAnimales] = animals;


console.log(otrosAnimales)