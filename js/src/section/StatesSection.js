
import RippleButton from '../components/RippleButton';
import SectionBase from './SectionBase';
import utils from '../utils';

class States extends SectionBase{

	constructor(layerOpt) {
		super(layerOpt);
	}

	init(req, done) {
		super.init(req, done);


		this.shapeA = new Layer({
			backgroundColor: '#112b3c',
			borderRadius: 4
		});
		this.layer.addChild( this.shapeA );
		this.shapeB = new Layer({
			backgroundColor: '#112b3c',
			borderRadius: 4
		});
		this.layer.addChild( this.shapeB );

		this.shapeA.center();
		this.shapeA.x -= 60;

		this.shapeB.center();
		this.shapeB.x += 60;


		var shapes = [this.shapeA, this.shapeB];
		for (var _i = 0 ; _i < shapes.length; _i++) {
			var shape = shapes[_i];
			shape.states.add({
				clicked: {
					scale: 0.9,
					rotation: 90,
					backgroundColor: '#5787a9'
				}
			});

			shape.states.animationOptions = {
				curve: 'spring(400,30,0)'
			};

			console.log(shape);
			shape.on(Events.Click, function(){
				this.states.next();
			});
		}

    	done();
	}

	onClickShape(event, target) {
		console.log(event);
		this.shapeA.states.next();
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

module.exports = States;
