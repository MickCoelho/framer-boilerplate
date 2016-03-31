import utils from '../utils';

class MenuBar extends Layer{

	constructor() {
		var params = {
			name: 'menu-bar',
			width: window.innerWidth,
			height: 100,
			backgroundColor: '#9a9a9a',
			html: '<p >' + utils.appTitle + utils.currentRoute + '</p>'
		};
		super(params);
	}

}

module.exports = MenuBar
