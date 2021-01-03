import React from 'react';
import './Stories.css';
import Story from './Story';

function Stories(){
	return (
		<div className='stories'>
			<Story image='https://github.com/souvik-pl/Facebook-clone/blob/main/images/story1.jpg?raw=true' profileSrc='https://github.com/souvik-pl/Facebook-clone/blob/main/images/DSC_0034.jpg?raw=true' title='Maverick' />
			<Story image='https://github.com/souvik-pl/Facebook-clone/blob/main/images/story2.jpg?raw=true' profileSrc='https://github.com/souvik-pl/Facebook-clone/blob/main/images/DSC_10830.jpg?raw=true' title='John' />
			<Story image='https://github.com/souvik-pl/Facebook-clone/blob/main/images/story3.jpg?raw=true' profileSrc='https://github.com/souvik-pl/Facebook-clone/blob/main/images/IMG_20811.jpg?raw=true' title='James' />
			<Story image='https://github.com/souvik-pl/Facebook-clone/blob/main/images/story4.jpg?raw=true' profileSrc='https://github.com/souvik-pl/Facebook-clone/blob/main/images/IMG_3882b.jpg?raw=true' title='Adams' />
			<Story image='https://github.com/souvik-pl/Facebook-clone/blob/main/images/story5.jpg?raw=true' profileSrc='https://github.com/souvik-pl/Facebook-clone/blob/main/images/photo.jpg?raw=true' title='Neil' />
		</div>
	);
}

export default Stories;