

//console.log('Hi world');

// Destructuring
const person = {
  name: 'Tony',
  age: 46,
  password: 'Ironman',
};

const { name, age, password } = person;

console.log( person.name );
console.log( person.age );
console.log( person.password );

console.log( name );
console.log( age );
console.log( password );

const setContext = ({ password, name, age, range = 'Captain' }) => {

  console.log(name, age, range);
  return {
    nPassword: password,
    birth: age,
    latlng: {
      lat: 16.2351,
      lng: 14.89221,
    }

  }

}

const { nPassword, birth, latlng: { lat, lng } } = setContext( person );

console.log(nPassword, birth);
console.log(lat,lng);





