// ==UserScript==
// @name           	Google Play Music Close Prompt
// @description    	If music is playing, it will prompt you before closing the tab
// @version        	0.1
// @grant          	none
// @author         	little-vince
// @namespace      	http://little-vince.tumblr.com/
// @include        	*play.google.com/music/listen*
// ==/UserScript==

// Last edited 25 February 2014

window.onbeforeunload = function() {
	var player = document.querySelector("div.player-middle");
	if (player.querySelector("button.playing")) {
		return "Music is currently playing.";
	}
};
