import utils from '../utils';

class MenuItem extends Layer{

	constructor(route, routeParams) {
		var margin = 1;
		var y = utils.menu.contentFrame().height + margin;
		if(y > margin ){
			y += margin;
		}
		var params = {
			name: 'menu-item',
			width: utils.menu.width,
			height: 60,
			y: y,
			backgroundColor: 'rgba(255, 255, 255, 0.05)',
			html: '<p class="menu-link">' + routeParams.name + '</p>'
		};
		super(params);
		this.route = route;
        this.on(Events.Tap, (event) => this.onTapRoute(event));
	}

    onTapRoute(event){
		utils.menu.toggleMenu();
		utils.framework.go(this.route);
    }
}

module.exports = MenuItem
