
import RippleButton from '../components/RippleButton';
import utils from '../utils';

class SectionBase{

	constructor(layerOpt) {
		if(!layerOpt) layerOpt = {};
		var params = {
			name: (layerOpt.name) ? layerOpt.name : '',
			width: (layerOpt.width) ? layerOpt.width : window.innerWidth,
			height: (layerOpt.height) ? layerOpt.height : window.innerHeight,
			backgroundColor: (layerOpt.backgroundColor) ? layerOpt.backgroundColor : '#f0f0f0'
        }
		this.params = params;
	}

	init(req, done) {
		this.layer = new Layer(this.params);
		this.layer.html = this.params.name;
		this.layer.x = this.params.width;
		utils.viewContainer.addChild(this.layer);
    	done();
	}


	onClickButton(event){
		utils.framework.go('/');
	}

	animateIn(req, done) {
		this.layer.animate({
			properties: {
				opacity: 1,
				x: 0
			},
			curve: 'ease-in-out',
			time: 0.3
		})
		this.layer.on(Events.AnimationEnd, (event) => this.animateInDone(event, done) );
	}

	animateInDone(event, done){
		done();
	}

	resize(width, height) {
		this.layer.width = width;
		this.layer.height= height;
	}

	animateOut(req, done) {
		this.layer.animate({
			properties: {
				x: -100,
				brightness: 80
			},
			curve: 'ease-in-out',
			time: 0.3,
			delay: 0.05
		})
		this.layer.on(Events.AnimationEnd, (event) => this.animateOutDone(event, done) );
	}
	animateOutDone(event, done){
		done();
	}

	destroy(req, done) {
		this.layer.destroy();
		done();
	}

}

module.exports = SectionBase;
