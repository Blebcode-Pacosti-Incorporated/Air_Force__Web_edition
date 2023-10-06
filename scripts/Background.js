class Background {
	constructor (ctx) {
		this.ctx = ctx;
		this.width = this.ctx.canvas.width;
		this.height = this.ctx.canvas.height;
	}

	setBackgroundImage (newBackgroundImageSrc, width, height) {
		this.backgroundImageSrc = newBackgroundImageSrc;
		this.imageWidth = width;
		this.imageHeight = height;
	}
	getBackgroundImage () {
		let image = new Image();
		image.src = this.backgroundImageSrc;
		return image;
	}

	render_background() {
		let image = this.getBackgroundImage();
		this.ctx.drawImage(
			image,
			0, 0, this.imageWidth, this.imageHeight, 
			0, 0, this.width, this.height);
	}
}