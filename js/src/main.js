/**
* Main Famer app example
*
* @author Mickael Coelho <mickael@rehabstudio.com>
*/

'use strict';


import utils from './utils';
import BigWheel from 'bigwheel';
import Menu from './components/Menu';

import CarouselSection from './section/CarouselSection';
import AnimateSection from './section/AnimateSection';
import StatesSection from './section/StatesSection';
import DragSection from './section/DragSection';


export default class App {
    constructor(){
        document.ontouchmove = function(event){
            event.preventDefault();
        }
        this.initMain();

        this.framework = new BigWheel( ()=> this.initBigwheel() );
        this.framework.init();

        this.initMenu();

        this.framework.router.onURL = this.onURL;
        this.onResize( null );
        window.addEventListener('resize', (event)=> this.onResize(event) );

        window.addEventListener('hashchange', (event)=> this.onURL(event) );
        this.onURL(null);
    }

    onURL(){
        var hash = (window || this).location.href.match(/#(.*)$/) ;
        hash = hash ? hash[1] : '!/';
        hash = hash.split('!')[1];
        utils.menu.updateMenu( hash );
    }

    initBigwheel(){
        utils.framework = this.framework;
        return {
            routes: {
                autoResize: true,
                pushState: false,
                overlap: true,
                '/': new AnimateSection({name: 'animation', backgroundColor: '#fefefe'}),
                '/states': new StatesSection({name: 'states', backgroundColor: '#fefefe'}),
                '/carousel': new CarouselSection({name: 'carousel', backgroundColor: '#fefefe'}),
                '/draggable': new DragSection({name: 'draggable', backgroundColor: '#fefefe'}),
            }
        };
    }

    initMain(){
        utils.mainLayer = new Layer({ backgroundColor: 'transparent' });
		utils.mainLayer.states.add({
		    menuClosed:{
                brightness: 100,
                // blur: 0,
                x: 0
			}
		});
		utils.mainLayer.states.add({
		    menuOpened:{
                brightness: 50,
                // blur: 1,
                x: 100
			}
		});
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

    onResize(){
        this.background.width = window.innerWidth;
    }
}


new App();
