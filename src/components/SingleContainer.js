import React from 'react';
import Image from './Image';
// import SoundManger from 'soundmanger2/';
import sampleData from '../data/sample-data';

// function setAvi(scObject, target) {
// 	console.log(scObject.user.avatar_url);
// 	var avatarURL = scObject.user.avatar_url.replace('-large', '-t200x200');
// 	target.src = avatarURL;
// }

function setArt(scObject, target) {
	console.log(scObject.artwork_url);
	var artworkURL = scObject.artwork_url.replace('-large', '-t500x500');
	target.src = artworkURL;
}

let SingleContainer = React.createClass({
	
	setAvatar: function(scObject) {
		var avatarURL = scObject.user.avatar_url.replace('-large', '-t200x200');
		return avatarURL
	},

	setArt: function(scObject) {
		var artworkURL = scObject.artwork_url.replace('-large', '-t500x500');
		return artworkURL;
	},



	render: function() {
		return (
			<div className="single__wrapper isPlayingVide" id="single">
				
				<div className="single__avatar single__img">
					<Image id="js-avatar" src={this.setAvatar(sampleData)} />
				</div>

				<div className="single__artwork single__img">
					<img id="js-artwork" src={this.setArt(sampleData)} />
				</div>

			</div>
		)
	}
})

export default SingleContainer;