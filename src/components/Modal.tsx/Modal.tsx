import { BlurryBackground, StyledModal } from "./Modal.styled";
import { useState, useEffect } from "react";
import { FetchPokemon } from "../../Api/AllData/AllData";
import { PokeApi } from "../../Api/AllData/AllData";

interface StyledCardProps extends React.HTMLAttributes<HTMLDivElement> {
  onDoubleClick: () => void;
  selectedPokemon: number | null;
}

export const Modal: React.FC<StyledCardProps> = ({
  onDoubleClick,
  selectedPokemon,
}) => {
  const [close, setClose] = useState(true);
  const [pokemonInfo, setPokemonInfo] = useState<PokeApi[]>([]);

  const handleClose = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setClose((prev) => !prev);
      console.log("zamknij się");
      onDoubleClick();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (selectedPokemon !== null) {
        const data = await FetchPokemon(selectedPokemon);
        setPokemonInfo(data);
        console.log(data)
        console.log(selectedPokemon)
      }
    };

    fetchData();
  }, [selectedPokemon]);

  return (
    <>
      {close && (
        <BlurryBackground onClick={handleClose}>
          <StyledModal>
            {pokemonInfo
            .filter(poke => poke.id === selectedPokemon)
            .map((singlePoke) => (
              <div key={singlePoke.id}>
                <img src={singlePoke.image} alt="" />
                <ul>
                <li>{singlePoke.abilities}</li>
                <br />
                <li>{singlePoke.moves}</li>
                <li>{singlePoke.type}</li>
                <li>{singlePoke.forms}</li>
                </ul>
              </div>
            ))}
          </StyledModal>
        </BlurryBackground>
      )}
    </>
  );
};
