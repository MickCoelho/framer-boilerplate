
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
		this.draggableLayer.draggable.speedX = 1;
		this.draggableLayer.draggable.speedY = 1;


		//Add constraints
		this.constraints = new Layer({
			width: this.layer.width * 0.8,
			height: this.layer.height * 0.8,
			backgroundColor: '#f6f6f6'
		});
		this.layer.addChild( this.constraints );
		this.constraints.center();
		this.constraints.sendToBack();
		this.draggableLayer.draggable.constraints = this.constraints;


		//Add friction
		this.draggableLayer.draggable.momentumOptions = {
		    friction: 4,
		    tolerance: 2
		};

		//Add down/up animations
        this.draggableLayer.on(Events.TouchStart, (event) => this.onDownDraggable(event));
        this.draggableLayer.on(Events.DragEnd, (event) => this.onUpDraggable(event));
		this.draggableLayer.states.add({
			down: {
				scale: 0.8
			}
		});
		this.draggableLayer.states.add({
			up: {
				scale: 1
			}
		});
	}

	onDownDraggable(event) {
		console.log('DragStart');
		this.draggableLayer.states.switch('down', {curve: 'ease-in', time: 0.2});
	}

	onUpDraggable(event) {
		console.log('DragEnd');
		this.draggableLayer.states.switch('up', {curve: 'ease-out', time: 0.15});
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
