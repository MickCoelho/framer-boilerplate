import utils from '../utils';

class MenuBar extends Layer{

	constructor() {
		var params = {
			name: 'menu-bar',
			width: window.innerWidth,
			height: 60,
			backgroundColor: '#112b3c',
			html: '<p >' + utils.appTitle + utils.currentRoute + '</p>'
		};
		super(params);
	}

}

module.exports = MenuBar
