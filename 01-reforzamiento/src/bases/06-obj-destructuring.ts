const person = {
    name: 'Adolfo',
    age: 20,
    key: 'Spiderman',
};

/**
 * Declarate destructuring
 */
const { name: nameHero , age, key } = person;

console.log(nameHero, age, key);

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = ({ name, age, key, rank } : Hero ) => {
    return{
        keyName: key,
        user: {
            name,
            age,
        },
        rank: rank,
    }
}

const context = useContext(person);

console.log(context);

const {rank, keyName, user : {name} } = useContext(person);

console.log({rank, keyName, name});