import { useState, useEffect } from "react";
import { Wrapper, StyledCard } from "./PokeApi.styled";
import { Modal } from "../../components/Modal.tsx/Modal";
import { FetchPokemon } from "../AllData/AllData";
import { PokeApi } from "../AllData/AllData";



export const PokemonList: React.FC = () => {
  const [pokemon, setPokemon] = useState<PokeApi[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedPokemon, setSelectedPokemon] = useState<number | null>(null)
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await FetchPokemon();
      setPokemon(data);
    };

    fetchData();
  }, []);

  const handleModal = (pokeId: number) => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    setSelectedPokemon(pokeId)

    console.log("button state:", isOpen ? "false" : "true");
  };

  const onDoubleClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h1>Pokémon List</h1>
      <Wrapper>
        {pokemon.map((poke) => (
          <StyledCard key={poke.id} onDoubleClick={onDoubleClick}>
            <h3>{`#${poke.id} - ${poke.name ? poke.name.toLocaleUpperCase() : "Unknown"}`}</h3>
            <img src={poke.image} alt={poke.name} />
            <h4>{`Type: ${poke.type}`}</h4>
            <button onClick={() => handleModal(poke.id)}>Read more</button>
          </StyledCard>
        ))}
      </Wrapper>
      {isOpen && <Modal selectedPokemon={selectedPokemon} onDoubleClick={onDoubleClick} />}
    </div>
  );
};
