// ==UserScript==
// @name            Google Play Music Close Prompt
// @description     If music is playing, it will prompt you before closing the tab
// @version         0.2
// @grant           none
// @author          little-vince
// @namespace       http://little-vince.github.io/
// @include         *play.google.com/music/listen*
// @updateURL       https://raw.githubusercontent.com/little-vince/google-music-prompt/master/google.music.prompt.user.js
// @downloadURL     https://raw.githubusercontent.com/little-vince/google-music-prompt/master/google.music.prompt.user.js
// ==/UserScript==

// Last edited 16 May 2015

window.onbeforeunload = function() {
	if (document.querySelector(".playing")) {
		return "Music is currently playing.";
	}
};
