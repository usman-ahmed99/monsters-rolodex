import './search-box.styles.css';

const SearchBox = ({className, placeholder, onChangeHandler}) => (
        <input 
            className={`search-box ${className}`} 
            placeholder= {placeholder} 
            type='search' 
            onChange={onChangeHandler}
        />
)






export default SearchBox;