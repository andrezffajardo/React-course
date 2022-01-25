

//console.log('Hi world');
// Functions in JS

const greet = function( name ) {
  return `Hi, ${ name }`;
}

const greet2 = ( name ) => {
  return `Hi, ${ name }`;
}

const greet3 = ( name ) => `Hi, ${ name }`;

const greet4 = () => `Hi World`;

console.log( greet2('Andres') );
console.log( greet3('Felipe') );
console.log( greet4() );


const getUser = () => ({
    uid: 'ASDF123',
    username: 'El_mejor1452',
  });

const user = getUser();
console.log( user );

//Homework

const getActiveUser = ( name ) => ({
    uid: 'AWER1452',
    username: name,
  });

const activeUser = getActiveUser('Andrew');
console.log( activeUser );






