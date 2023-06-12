import { axiosInstance } from "../api/axiosInstance";

const getPokemonImg = (sprites) => {

    const firstOption = sprites.other.dream_world.front_default;
    const secondOption = sprites.other['official-artwork'].front_default;
    const thirdOption = sprites.other.home.front_default;

     if (firstOption) return firstOption;
     if (secondOption) return secondOption;
     if (thirdOption) return thirdOption;
}

export const getPokemonById = async (id) => {
    try {
        const res = await axiosInstance.get(`pokemon/${id}`);
        const pokemonData = {
            id: res.data.id,
            name: res.data.name[0].toUpperCase() + res.data.name.slice(1),
            types: res.data.types.map((typeInfo)=> typeInfo.type.name),
            stats: res.data.stats.map((statInfo)=> ({name: statInfo.stat.name, value: statInfo.base_stat, })),
            image: getPokemonImg(res.data.sprites),
            weight: res.data.weight,
            height: res.data.height,
            abilities: res.data.abilities.map((ability)=>ability.ability.name),
            moves: res.data.moves.map((moveData)=>moveData.move.name),

        }

        return pokemonData;
    } catch (error) {
        console.error(error);
    }
}