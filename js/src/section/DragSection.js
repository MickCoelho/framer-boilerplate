
import RippleButton from '../components/RippleButton';
import SectionBase from './SectionBase';
import utils from '../utils';

class Drag extends SectionBase{

	constructor(layerOpt) {
		super(layerOpt);
	}

	init(req, done) {
		super.init(req, done);


		this.draggableLayer = new Layer({
			width: 150,
			height: 150,
			backgroundColor: '#112b3c',
			borderRadius: 100
		});
		this.layer.addChild( this.draggableLayer );
		this.draggableLayer.center();

		this.draggableLayer.draggable.enabled = true;
		this.draggableLayer.draggable.speedX = 0.3;
		this.draggableLayer.draggable.speedY = 0.3;
	}

	animateIn(req, done) {
		super.animateIn(req, done);
	}

	resize(width, height) {
		super.resize(width, height);
	}

	animateOut(req, done) {
		super.animateOut(req, done);
	}

	destroy(req, done) {
		super.destroy(req, done);
	}
}

module.exports = Drag;
