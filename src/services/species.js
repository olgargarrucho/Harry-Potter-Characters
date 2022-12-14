import {emojify} from 'react-emojione';


const iconSpecies = (specie) => {
    if (specie === 'human'){
      return emojify('π§');
    }
    if (specie === "half-giant"){
        return emojify('π§x2/π§');
    }
    if (specie ==="werewolf"){
        return emojify('πΊ');
    }
    if (specie === "cat"){
        return emojify('π±');
    }
    if (specie === "goblin"){
        return emojify('π§πΌββοΈ');
    }
    if (specie ==="owl"){
        return emojify('π¦');
    }
    if (specie ==="ghost"){
        return emojify('π»');
    }
    if (specie ==="poltergeist"){
        return emojify('π½');
    }
    if (specie ==="three-headed dog"){
        return emojify('πΆ');
    }
    if (specie ==="dragon"){
        return emojify('π');
    }
    if (specie ==="centaur"){
        return emojify('π');
    }
    if (specie ==="house-elf"){
        return emojify('π§πΌββοΈ');
    }
    if (specie ==="acromantula"){
        return emojify('π·');
    }
    if (specie ==="hippogriff"){
        return emojify('π¦');
    }
    if (specie ==="giant"){
        return emojify('π§x2');
    }
    if (specie ==="vampire"){
        return emojify('π§πΌββοΈ');
    }
    if (specie ==="half-human"){
        return emojify('π§ββοΈ/π§');
    }
  }

const species = (specie) => {
    if (specie === "human"){
       return specie = "Humano";
    }
    if (specie === "half-giant"){
        return specie ='Medio gigante';
    }
    if (specie ==="werewolf"){
        return specie ='Hombre lobo';
    }
    if (specie === "cat"){
        return specie ='Gato';
    }
    if (specie === "goblin"){
        return specie ='Duende';
    }
    if (specie ==="owl"){
        return specie ='BΓΊho';
    }
    if (specie ==="ghost"){
        return specie ='Fantasma';
    }
    if (specie ==="poltergeist"){
        return specie ='Duende/Fantasma';
    }
    if (specie ==="three-headed dog"){
        return specie ='Perro de tres cabezas';
    }
    if (specie ==="dragon"){
        return specie ='DragΓ³n';
    }
    if (specie ==="centaur"){
        return specie ='Centauro';
    }
    if (specie ==="house-elf"){
        return specie ='Elfo domΓ©stico';
    }
    if (specie ==="acromantula"){
        return specie ='AcromΓ‘ntula';
    }
    if (specie ==="hippogriff"){
        return specie ='Hipogrifo';
    }
    if (specie ==="giant"){
        return specie ='Gigante';
    }
    if (specie ==="vampire"){
        return specie ='Vampiro';
    }
    if (specie ==="half-human"){
        return specie ='Medio humano';
    }
      
}
  

  const objectToExport = {
    specie: species,
    icon: iconSpecies,
  };
  
  export default objectToExport;