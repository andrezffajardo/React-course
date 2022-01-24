

//console.log('Hi world');

const name = 'Andres';
const lastName = 'Fajardo';

//const fullName = name + ' ' + lastName;
const fullName = `${ name } ${ lastName }`;


console.log( fullName );

function getSaludo(name) {
  return 'Hi ' + name;
}

console.log( `This is a text: ${ getSaludo( name ) }` );