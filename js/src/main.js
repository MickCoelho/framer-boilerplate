/**
* Main Famer app example
*
* @author Mickael Coelho <mickael@rehabstudio.com>
*/

'use strict';


import utils from './utils';
import BigWheel from 'bigwheel';
import Menu from './components/Menu';

import LandingSection from './section/LandingSection';
import AboutSection from './section/AboutSection';

export default class App {
    constructor(options){

        this.initMain();

        this.framework = BigWheel( ()=> this.initBigwheel() );
        this.framework.init();

        this.initMenu();

        this.onResize( null );
        window.addEventListener('resize', (event)=> this.onResize(event) );

    }

    initBigwheel(){
        utils.framework = this.framework;
        return {
            routes: {
                autoResize: true,
                pushState: false,
                overlap: true,
                '/': new LandingSection({name: 'landing', backgroundColor: '#fefefe'}),
                '/about': new AboutSection({name: 'about', backgroundColor: '#cacaca'})
            }
        };
    }

    initMain(){
        utils.mainLayer = new Layer({backgroundColor: 'transparent'});
		utils.mainLayer.states.add({
		    menuClosed:{
                brightness: 100,
                x: 0
			}
		})
		utils.mainLayer.states.add({
		    menuOpened:{
                brightness: 50,
                x: 100
			}
		})
		utils.viewContainer = new Layer({ backgroundColor: 'transparent' });
    	utils.mainLayer.addChild( utils.viewContainer  );
		utils.mainLayer.states.animationOptions = {
    		curve: 'ease-in-out'
		};
		utils.mainLayer.states.switchInstant('menuClosed');
        this.background = new BackgroundLayer({
          backgroundColor: '#ffffff'
        });
    }

    initMenu(){
        utils.menu = new Menu();
    }

    onResize(event){
        this.background.width = window.innerWidth;
    }
}


new App();
