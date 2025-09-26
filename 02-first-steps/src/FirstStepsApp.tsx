import { ItemCounter } from "./shopping-cart/ItemCounter";

interface Item {
    productName: string;
    quantity: number;
}

const Items: Item[] = [
    {productName:'Switch', quantity: 4 },
    {productName:'Play', quantity: 5 },
    {productName:'Xbox', quantity: 4}
];

export function FirstStepsApp(){
    return(
        <>
            <h1>Carrito de compras</h1>
            {
                Items.map(({ productName, quantity }) => (
                    <ItemCounter key={productName} name={productName} quantity={quantity} />
                ))
            }
            {/* <ItemCounter name='Switch' quantity={1} />
            <ItemCounter name='Play' quantity={2} />
            <ItemCounter name='Xbox' quantity={3} /> */}
           
        </>
    );
}