import type { CSSProperties } from "react";

const firstName = 'Gustavo';
const lastName = 'Mora';
const favoriteGames = ['Halo', 'Warsone', 'Call of duty', 'Battlefield'];
const isActive = true;

const address = {
    zipCode: 'ABC-123',
    country: 'México',
};

const myStyles: CSSProperties = {
    backgroundColor: '#fafafa',
    borderRadius: 20,
    padding: 10,
    marginTop:30,
}

export function MyAwesomeApp() {
    return (
        <>
            <h1> {firstName} </h1>
            <h3> {lastName} </h3>

            <p> {favoriteGames.join(', ')} </p>

            <h1> {isActive ? 'Activo' : 'Inactivo'} </h1>
            <p style={myStyles}> {JSON.stringify(address)} </p>
        </>
    );
}