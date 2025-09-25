const characterNames = ['Ironman', 'Dr.strange', 'Hulk', 'Spiderman'];

const [p1] = characterNames;

console.log(p1 );

const returnArrayFn = () => {
    return ['ABC', 123] as const;
}

const [letters, numbers] = returnArrayFn();

console.log(letters, numbers + 100);

//Homework
const useState = (value:string) => {
    return[  
        value, 
        (newValue: string) => {
        console.log(newValue); 
        }
    ] as const;
}

const [name, setName] = useState('hola');
console.log(name);
setName('Vegeta');