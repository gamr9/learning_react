import { heroes, type Hero, type Owner} from "../data/heroes.data"


const getHeroById = (id: number): Hero | undefined => {
    const hero = heroes.find( (hero) => {
        return hero.id === id;
    }) 

    //if ( !hero ){
    //    throw new Error(`No existe un héroe con el id ${id}`);
    //}

    return hero;
}

console.log(getHeroById(2));

/**
 * @param Owner
 * @returns Array
 */
export const getHeroByOwner = (owner: Owner) => {
    const getHeroByOwner = heroes.filter(hero => hero.owner = owner);
    return getHeroByOwner;
}

