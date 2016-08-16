import React from 'react';

let Header = React.createClass ({
	render: function() {
		return <h1 className="modal__header">{this.props.headline}</h1>
	}
});

export default Header;