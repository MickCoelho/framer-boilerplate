
import RippleButton from '../components/RippleButton';
import SectionBase from './SectionBase';
import utils from '../utils';

class Animate extends SectionBase{

	constructor(layerOpt) {
		super(layerOpt);
	}

	init(req, done) {
		super.init(req, done);
		var bg, layerA, layerB;
		this.shapeA = new Layer({
		  width: 150,
		  height: 150,
		  backgroundColor: "#112b3c",
		  borderRadius: 6
		});
		this.layer.addChild( this.shapeA );
		this.shapeB = new Layer({
		  width: 150,
		  height: 150,
		  backgroundColor: "#112b3c",
		  borderRadius: 150
		});
		this.layer.addChild( this.shapeB );
		this.shapeA.center();
		this.shapeB.center();



		this.shapeA.x -= 90;
		this.shapeB.x += 90;

		this.shapeA.animate({
			properties: {
				rotation: 90
			},
			curve: 'ease',
			delay: 1
		});
		this.shapeB.animate({
			properties: {
				rotation: 90,
				borderRadius: 6
			},
			curve: 'spring(200,30,0)',
			delay: 2
		});


    	done();
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

module.exports = Animate;
