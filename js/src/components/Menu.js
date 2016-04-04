import utils from '../utils';
import MenuItem from './MenuItem';
import MenuBar from './MenuBar';

class Menu extends Layer{

	constructor(routes) {
		var params = {
			name: 'menu',
			width: 300,
			height: 0,
			backgroundColor: '#112b3c',
			shadowX: 5,
			shadowBlur: 8,
			shadowColor : 'rgba(0,0,0,0.14)'
		};
		super(params);
	    utils.menu = this;

		this.initStates();
		this.initMenuRoutes();
		this.initMenuBackground();
		this.initMenuBar();
	}

	initMenuBackground(){
		this.background = new Layer({
			width: this.width,
			height: window.innerHeight,
			backgroundColor: '#1b394e'
		});
		this.addChild( this.background );
		this.background.sendToBack();
	}

	initStates(){
		this.states.add({
		    open:{
		        x: 0
			}
		});
		this.states.add({
		    closed:{
		        x: this.width * -1 - 10
			}
		});
		this.states.animationOptions = {
    		curve: 'ease-in-out',
			time: 0.3
		};
		this.states.switchInstant('closed');
	}
	toggleMenu(event){
		if(this.states.current == 'open'){
			this.states.switch('closed', {curve: 'ease-in', time: 0.35});
			utils.mainLayer.states.switch('menuClosed', {curve: 'ease-in-out', time: 0.35});
		}else{
			this.states.switch('open', {curve: 'ease-in-out', time: 0.3});
			utils.mainLayer.states.switch('menuOpened', {curve: 'ease-in-out', time: 0.4});
		}
	}
	initMenuRoutes(){
		for (var key of Object.keys(utils.framework.routes) ) {
			var route = utils.framework.routes[key];
			if(route.params){
				let menuItem = new MenuItem(key, route.params);
				this.addChild( menuItem );
			}
		}
	}


	initMenuBar(){
		utils.menuBar = new MenuBar();
        utils.menuBar.on(Events.MouseDown, (event) => this.toggleMenu(event) );
		utils.mainLayer.addChild(utils.menuBar);
	}
}

module.exports = Menu
