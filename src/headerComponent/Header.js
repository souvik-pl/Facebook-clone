import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header(){
	return (
		<div className='header'>
		
			<div className='header__left'>
				
				<img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="facebook logo" />
				
				<div className='header__input'>
					<SearchIcon />
					<input type='text' placeholder='Search Facebook' />
				</div>
				
			</div>
			
			<div className='header__center'>
			
				<div className='header__option header__option--active'>
					<HomeIcon fontSize='large' />
				</div>
				
				<div className='header__option'>
					<FlagIcon fontSize='large' />
				</div>
				
				<div className='header__option'>
					<SubscriptionsOutlinedIcon fontSize='large' />
				</div>
				
				<div className='header__option'>
					<StorefrontOutlinedIcon fontSize='large' />
				</div>
				
				<div className='header__option'>
					<SupervisedUserCircleIcon fontSize='large' />
				</div>
				
			</div>
			
			<div className='header__right'>
				
				<div className='header__info'>
					<Avatar src='https://lh3.googleusercontent.com/a-/AOh14GjDKcsv86X2KOQXRvBAEhFKGbOvi6v-k6imekMNXWg=s96-c-rg-br100'/>
					<h4>Souvik</h4>
				</div>
				
				<div className='header__right--icons'>
					<IconButton>
						<AddIcon />
					</IconButton>
				</div>
				<div className='header__right--icons'>
					<IconButton>
						<ForumIcon />
					</IconButton>
				</div>
				<div className='header__right--icons'>
					<IconButton>
						<NotificationsIcon />
					</IconButton>
				</div>
				<div className='header__right--icons'>
					<IconButton>
						<ExpandMoreIcon />
					</IconButton>
				</div>
		
			</div>
			
		</div>
		
	);
}

export default Header;