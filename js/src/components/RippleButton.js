
import AndroidButton from '../vendor/androidRipple';

class RippleButton extends Layer{

	constructor(opt) {
		var params = {
			width: (opt.width) ? opt.width : 100,
			height: (opt.height) ? opt.height : 100,
			backgroundColor: (opt.backgroundColor) ? opt.backgroundColor : '#fafafa',
			borderRadius: (opt.borderRadius) ? opt.borderRadius : 12,
			shadowX: (opt.shadowX) ? opt.shadowX : 0,
			shadowY: (opt.shadowY) ? opt.shadowY : 6,
			shadowBlur: (opt.shadowBlur) ? opt.shadowBlur : 6,
			shadowColor: (opt.shadowColor) ? opt.shadowColor : 'rgba(0,0,0,0.24)'
        }
		super(params)
        this.clip = true;
        this.on(Events.TapStart, AndroidButton.startRipple);
        this.on(Events.TapEnd, AndroidButton.endRipple);
	}

}

module.exports = RippleButton
