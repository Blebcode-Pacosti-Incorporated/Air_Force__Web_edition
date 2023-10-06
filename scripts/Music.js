class Music {
	constructor (pathToAudioFile, start_playing=true) {
		this.setAudio(pathToAudioFile);
		if (start_playing)
			this.play();
	}

	setAudio (newAudioPath) {
		if (this.audio)
			this.pause();
		this.audio = new Audio(newAudioPath);
	}

	play () {
		this.audio.play();
	}

	pause () {
		this.audio.pause();
	}
}