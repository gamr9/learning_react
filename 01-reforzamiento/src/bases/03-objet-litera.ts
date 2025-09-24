
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
}

interface Address {
    postalCode: string;
    city: string;
}

const person: Person = {
    firstName: 'Gustavo',
    lastName: 'Mora',
    age: 25,
    address: {
        postalCode: '00025',
        city: 'Guadalajara'
    }
}

console.log(person);

/**
 * In this method don't create a structured clon
 *  const user = { ...person };
 */

const user = structuredClone(person);

user.firstName = 'Adolfo';
user.lastName = 'Romero';
user.age = 52;
user.address.postalCode = '98548';
user.address.city = 'Zapopan';

console.log(person, user)