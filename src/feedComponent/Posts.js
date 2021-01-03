import { Avatar } from '@material-ui/core';
import React from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
//import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
//import { ExpandMoreOutlined } from '@material-ui/icons';
import './Posts.css';

function Posts({ profilePic, image, username, timestamp, message }){
	return (
		<div className='posts'>
			<div className='posts__top'>
				<Avatar src={profilePic} className='posts__avatar' />
				<div className='posts__topInfo'>
					<h3>{username}</h3>
					<p>{timestamp}</p>
				</div>
			</div>
			
			<div className='posts__bottom'>
				<p>{message}</p>
			</div>
			
			<div className='posts__image'>
				<img src={image} alt='' />
			</div>
			
			<div className='posts__options'>
				<div className='posts__option--inner'>
					<ThumbUpIcon />
					<p>Like</p>
				</div>
				<div className='posts__option--inner'>
					<ChatBubbleOutlineIcon />
					<p>Comment</p>
				</div>
				<div className='posts__option--inner'>
					<NearMeIcon />
					<p>Share</p>
				</div>
			</div>
		</div>
	);
}

export default Posts;