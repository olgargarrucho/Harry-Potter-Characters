import PropTypes from 'prop-types';

function FilterByAncestry (props) {
    const handleFilterAncestry = (ev) => {
        props.handleFilterByAncestry(ev.target.value);
    }
    
    const listAncestry = props.ancestry
    .map((ancestry, index)=> {
        
      return (
           <li key={index}>
            <label className="form__label" htmlFor={ancestry}>
            <input className="form__input" type="checkbox" name={ancestry} id={ancestry} value={ancestry} onChange={handleFilterAncestry} checked={props.filterAncestry.includes(ancestry)}/>{ancestry}</label> 
           </li>
            );
       
      });
    
    return (
        <div className="form__container ancestry">
            <label className="form__label" htmlFor="ancestry">Filtra por ancestro:</label>
            <ul className="ancestry-list">
            {listAncestry}
            </ul>
        </div>
    );
}

FilterByAncestry.propTypes = {
    ancestry: PropTypes.array.isRequired,
    filterAncestry: PropTypes.array.isRequired,
    handleFilterByAncestry: PropTypes.func.isRequired,
  };

export default FilterByAncestry;