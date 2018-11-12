import React from 'react';


//CSS
import '../../components/SearchBox/SearchBox.css'

const SearchBox = ( {searchfield, searchChange} ) => {
	return(
		<div className="alinhamento">
			<div className='search-box'>
				<input 
					className='search-txt'
					type='text' 
					placeholder='Nome do Alimento'
					onChange={searchChange}
				/>
				<i class="fas fa-search search-btn"></i>
			</div>
		</div>
	);
}
export default SearchBox;