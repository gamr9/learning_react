function great(name:string): string {
    return `Hola ${name}`;
}

const greatSecond = (name:string): string => {
    return `Hola ${name}`;
}
const greatSecond2 = (name:string): string => `Hola ${name}`;



const message = great('Gustavo');

const messageSecond = greatSecond('Adolfo');
const messageSecond2 = greatSecond2('Adolfo');

console.log(message, messageSecond, messageSecond2);




function getUser() {
    return{
        uid: 'EXP-011',
        username: 'Example',
    }
}

const getUser2 = () => {
    return {
        uid: 'EXP-011',
        username: 'Example',
    };
}

const getUser22 = () => ({
        uid: 'EXP-011',
        username: 'Example',
    });

const user1 = getUser();
const user2 = getUser2();
const user3 = getUser22();

console.log(user1, user2, user3);

const myNumbers: number[] = [1, 2, 3, 5];

myNumbers.forEach(function  (value){
    console.log({value})
});

myNumbers.forEach( (value) =>  console.log({value}) );