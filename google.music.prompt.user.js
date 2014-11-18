// ==UserScript==
// @name            Google Play Music Close Prompt
// @description     If music is playing, it will prompt you before closing the tab
// @version         0.1
// @grant           none
// @author          little-vince
// @namespace       http://little-vince.github.io/
// @include         *play.google.com/music/listen*
// @updateURL       https://raw.githubusercontent.com/little-vince/google-music-prompt/master/google.music.prompt.user.js
// @downloadURL     https://raw.githubusercontent.com/little-vince/google-music-prompt/master/google.music.prompt.user.js
// ==/UserScript==

// Last edited 25 February 2014

window.onbeforeunload = function() {
	var player = document.querySelector("div.player-middle");
	if (player.querySelector("button.playing")) {
		return "Music is currently playing.";
	}
};
