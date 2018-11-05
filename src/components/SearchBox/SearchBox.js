import React from 'react';


//CSS
import '../../components/SearchBox/SearchBox.css'

const SearchBox = ( {searchfield, searchChange} ) => {
	return(
		<div>
			<input 
				className='pa3 ba b--green bg-lightest-blue searchstyle'
				type='search' 
				placeholder='Nome do Alimento'
				onChange={searchChange}
			/>
		</div>
	);
}
export default SearchBox;