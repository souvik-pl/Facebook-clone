import React from 'react';
import './Widgets.css';

function Widgets(){
	return (
		<div className='widgets'>
			<h3>Sponsored</h3>
			
			<iframe src='https://souvikwelcomesyou.wordpress.com/' title='wordpress' height='450' width='100%' frameborder='0' allowTransparency='true' allow='encrypted-media' style={{ marginTop: '10px', border: 'none', overflow: 'hidden' }}>
			</iframe>
		</div>
	);
}

export default Widgets;