import React from 'react';

import Header from './Header';
import Text from './Text';
import CloseToggle from './CloseToggle';
import '../styles/module.modal.css';


// <h1 className="modal__header">thanks for listening</h1>
// <Text copy={this.props.copy} className={this.props.className} />

let Modal = React.createClass({
	render: function() {
		return (
			<div id="js-modal" className="isHidden modal">
				<Header headline={this.props.headline} />
				<Text copy={this.props.body} className="modal__text">{this.props.body}</Text>
				<CloseToggle />
			</div>
		)
	}
})

export default Modal;