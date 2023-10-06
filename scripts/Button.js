class Button {
	constructor (text, x=null, y=null) {
		this.button = this.createButton(text);
		if (y)
			this.button.style.top = `${y}px`;
		if (x)
			this.button.style.left = `${x}px`;
		this.parent = document.createElement('div')
		this.parent.append(this.button)
		document.body.prepend(this.parent)
	}

	createButton (text) {
		let div = document.createElement('div')
		div.classList.add('btn')
		div.textContent = text;
		return div;
	}

	setVerticalCentering () {
		this.parent.classList.add('vertical-center')
	}

	setHorizontalCentering () {
		this.parent.classList.add('horizontal-center')
	}
	setHorizontalSpcEvenly () {
		this.parent.classList.add('horizontal-evenly')
	}
	setHorizontalSpcArround () {
		this.parent.classList.add('horizontal-around')
	}
}