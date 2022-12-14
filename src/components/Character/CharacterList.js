import CharacterItem from './CharacterItem';
import '../../styles/layout/characterList.scss';
import PropTypes from 'prop-types';

function CharacterList (props) {
    
    const list = props.dataCharacters
    .filter((character) => {
        if(props.filterAncestry.length !== 0){
            return (props.filterAncestry.includes(character.ancestry));
        } return true;
    })
    .filter((character) => {
        if(props.filterHouse !== 'Todas'){
            return (character.house === props.filterHouse);
        } return true;
    })
    .filter ((character) => {
        if (props.filterGender !== "all"){
            return (character.gender === props.filterGender);
        } return true;
       
    })
    .filter((character) => {
        if (props.filterName !== ''){
         return (character.name.toLowerCase().includes(props.filterName));
        }return true;
        
    });
    const renderHtml = () => {
        if (list.length > 0){
          return list.map((character, index) => {
            return (
                <CharacterItem dataCharacters={character} key={index}/>
            );    
        })  
        } return (
            <p className='textNotfound'>
              No hay ningún personaje que coincida con la palabra "{props.filterName}".
            </p>
          );
    }
    
    
    return (
        <section className='characterList'>
            
                <ul className="cards">
                {renderHtml()}
                </ul>
                <div className={`flat flat__${props.filterHouse.toLowerCase()}`}></div>
                
        </section>

    );
};

CharacterList.defaultProps = {
    filterGender: 'all',
    filterHouse: 'Gryffindor',
    filterName: '',
    filterAncestry: '',
}

CharacterList.propTypes = {
    dataCharacters: PropTypes.array.isRequired,
    filterAncestry: PropTypes.array.isRequired,
    filterHouse: PropTypes.string.isRequired,
    filterName: PropTypes.string.isRequired,
    filterGender: PropTypes.string.isRequired,
  };

export default CharacterList;