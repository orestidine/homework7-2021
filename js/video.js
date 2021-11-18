var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volume.innerHTML = "100%";
});
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down" + video.playbackRate);
	video.playbackRate *=.95;
});
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up" + video.playbackRate);
	video.playbackRate /=.95;
});
document.querySelector("#skip").addEventListener("click", function() {
	console.log(this)
	if (video.currentTime < video.duration - 15){
		video.currentTime += 15;
}
	else {
		video.currentTime = 0;
		console.log("Skip Ahead");
	}
		video.play();
		console.log(video.duration);
		console.log("currentLocation"+video.currentTime);
});
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		this.innerHTML = "Mute";
	} else{
		 	video.muted = true;
			this.innerHTML = "Unmute";
		}
});
document.querySelector("#slider").addEventListener("change", function() {
	console.log("In Slider");
	console.log(this.value)
	document.querySelector("#volume").innerHTML=this.value + "%";
});
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});
