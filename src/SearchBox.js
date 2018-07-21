import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className='pa2'>
			<input
				className='pa3 ba b--green bg-lightest-blue br3'
				style={{outline:0}}
				type='search'
				placeholder='search robot'
				onChange = {searchChange}
			/>
		</div>
	);
}

export default SearchBox;
