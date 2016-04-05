
import SectionBase from './SectionBase';

class Switch extends SectionBase{

	constructor(layerOpt) {
		super(layerOpt);
	}

	init(req, done) {
		super.init(req, done);

		//Create constraints
		this.constraints = new Layer({
			width: this.layer.width * 0.8,
			height: 150,
			backgroundColor: '#dfdfe4',
			// opacity: 0.1,
			borderRadius: 10
		});
		this.layer.addChild(this.constraints);

		//Create switchLayer btn
		this.switchLayer = new Layer({
		  width: this.layer.width * 0.4,
		  height: 150,
		  backgroundColor: '#112b3c',
		  borderRadius: 10
		});
		this.constraints.addChild(this.switchLayer);

		//Layout
		this.constraints.center();
		this.switchLayer.centerX();

		//Draggable settings
		this.switchLayer.draggable.bounce = false;
		this.switchLayer.draggable.constraints = this.constraints;
		this.switchLayer.draggable.momentumOptions = {
		    friction: 4,
		    tolerance: 2
		};
		this.switchLayer.draggable.vertical = false;

		//Add states
		this.switchLayer.states.add({
			off: {
				x: 0,
				backgroundColor: '#802525'
			}
		});
		this.switchLayer.states.add({
			on: {
				x: this.switchLayer.width,
				backgroundColor: '#478025'
			}
		});

		//Add on/off drag
        this.switchLayer.on(Events.DragEnd, (event) => this.onDragEnd(event));
	}

	onDragEnd(event){
		if(this.switchLayer.x > this.switchLayer.width * 0.5){
			this.switchLayer.states.switch('on', {curve: 'ease-in', time: 0.2});
		}else{
			this.switchLayer.states.switch('off', {curve: 'ease-in', time: 0.03});
		}
	}
}

module.exports = Switch;
