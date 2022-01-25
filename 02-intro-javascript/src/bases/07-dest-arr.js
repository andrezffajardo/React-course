

const characters = ['Hulk', 'Ironman', 'Thor'];

const [ , , c3 ] = characters;

console.log( c3 );

console.log( characters[0] );
console.log( characters[1] );
console.log( characters[2] );


const returnArray = () =>{
  return ['ABC', 123];
}

const [ letters, numbers ] = returnArray();

console.log(letters, numbers);


const setState = ( value ) => {
  return [ value, ()=>{ console.log('Hi World')} ];
}

const [ name, setName ] = setState( 'Hulk' );

console.log( name );
setName();








