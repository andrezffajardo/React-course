

//console.log('Hi world');
const person = {
  name: 'Tony',
  lastName: 'Stark',
  age: 46,
  address: {
    city: 'New York',
    zip: 545784457,
    lat: 14.3636,
    lnp: 35.6987,
  }
};

//console.table( person );


//const person2 = person; //Este tipo de asignacion no se puede hacer

const person2 = { ...person };
person2.name = 'Peter';

console.log(person);
console.log(person2);
