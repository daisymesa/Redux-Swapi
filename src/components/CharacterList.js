import React from "react";

import Character from "./Character";

const CharacterList = props => {
  return (
    <div className="placeholder-div">
      {console.log(`array for CharacterList: ${props.characters}`)}
      <h1>Character List Component</h1>
    <ul>
      {/* {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })} */}
    </ul>
    </div>
  );
};

export default CharacterList;
