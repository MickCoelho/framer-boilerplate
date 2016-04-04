
import RippleButton from '../components/RippleButton';
import SectionBase from './SectionBase';
import utils from '../utils';

class Carousel extends SectionBase{

	constructor(layerOpt) {
		super(layerOpt);
	}

	init(req, done) {
		super.init(req, done);

		this.cardWidth = this.layer.width * 0.6;
		this.cardHeight = this.layer.height * 0.6;
		this.margin = 20;

		this.page = new PageComponent({
		  width: this.layer.width,
		  height: this.cardHeight,
		  scrollVertical: false,
		  borderRadius: 6
		});
		this.layer.addChild(this.page);
		this.page.center();

		this.createLayers();

		this.page.snapToNextPage();
		this.page.currentPage.opacity = 1;
		this.page.on('change:currentPage', (event) => this.onPageChange(event) );

    	done();
	}

    createLayers(){
		for (let i = 0; i < 8; i++) {
			let layer = new Layer({
				superLayer: this.page.content,
				width: this.cardWidth,
				height: this.cardHeight,
				backgroundColor: '#112b3c',
				borderRadius: 6,
				opacity: 0.2,
				x: (this.cardWidth + this.margin) * i + this.margin
			});
		}
	}
    onPageChange(event){
		 this.page.previousPage.animate({
			properties: {
			  opacity: 0.3
			},
			time: 0.4
		  });
		  return this.page.currentPage.animate({
			properties: {
			  opacity: 1
			},
			time: 0.4
		  });
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
