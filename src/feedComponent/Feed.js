import React from 'react';
import './Feed.css';
import Stories from './Stories';
import MessageSender from './MessageSender';
import Posts from './Posts';

function Feed(){
	return (
		<div className='feed'>
			<Stories />
			<MessageSender />
			<Posts 
				profilePic='https://github.com/souvik-pl/Facebook-clone/blob/main/images/DSC_10830.jpg?raw=true'
				username='John'
				message='Hello World'
				timestamp='5:15 am'
				image='https://github.com/souvik-pl/Facebook-clone/blob/main/images/story2.jpg?raw=true'
			/>
			<Posts 
				profilePic='https://github.com/souvik-pl/Facebook-clone/blob/main/images/IMG_20811.jpg?raw=true'
				username='James'
				message='How are you my facebook friends'
				timestamp='5:20 am'
				image='https://github.com/souvik-pl/Facebook-clone/blob/main/images/story3.jpg?raw=true'
			/>
		</div>
	);
}

export default Feed;