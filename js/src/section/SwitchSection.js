
import RippleButton from '../components/RippleButton';
import SectionBase from './SectionBase';
import utils from '../utils';

class Carousel extends SectionBase{

	constructor(layerOpt) {
		super(layerOpt);
	}

	init(req, done) {
		super.init(req, done);

		this.constraints = new Layer({
			width: this.layer.width * 0.8,
			height: 150,
			backgroundColor: '#112b3c',
			opacity: 0.1,
			borderRadius: 10
		});

		this.layer.addChild(this.constraints);
		this.switch = new Layer({
		  width: this.layer.width * 0.4,
		  height: 150,
		  backgroundColor: '#112b3c',
		  borderRadius: 10
		});
		this.layer.addChild(this.switch);

		this.constraints.center();
		this.switch.centerX(this.switch.width * -0.5);
		this.switch.centerY();

		this.switch.draggable.bounce = false;
		this.switch.draggable.constraints = this.constraints;

		this.switch.draggable.momentumOptions = {
		    friction: 4,
		    tolerance: 2
		};
		this.switch.draggable.vertical = false;
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

module.exports = Carousel;
