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


		this.burger = new Layer({
			x: 20,
			y: 24,
			backgroundColor: 'transparent'
		});
		this.addChild(this.burger)
		this.burgerBar1 = new Layer({
			width: 20,
			height: 1,
			x: 0,
			y: 0,
			backgroundColor: '#cecece'
		});
		this.burgerBar2 = new Layer({
			width: 20,
			height: 1,
			x: 0,
			y: 6,
			backgroundColor: '#cecece'
		});
		this.burgerBar3 = new Layer({
			width: 20,
			height: 1,
			x: 0,
			y: 12,
			backgroundColor: '#cecece'
		});
		this.burger.addChild(this.burgerBar1)
		this.burger.addChild(this.burgerBar2)
		this.burger.addChild(this.burgerBar3)
		// this.burger.centerY();
	}

}

module.exports = MenuBar
