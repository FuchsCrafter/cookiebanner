/*
 * cookie.js
 * 
 * Copyright 2021  FuchsCrafter fuchscrafter.de
 * 
 */
function testDom() { // To test if you use JQuery or Zeptojs
	try {
		$('body').append();
		return true;
	} catch (e) {
		console.error("Dom is not loaded: \n Please load JQuery or Zeptojs \n Type getHelp() in the console for get help.");
		return false;
	}
}

function readCustomSettings() {
	try {
		var text = settings["text"];
		var url = settings["url"];
	} catch (e) {
		console.warn("The settings will be set to the defaults \n Type getHelp() in the console for get help.");
		var text = 'This is YOUR cookie banner. Customize them!';
		var url = 'Your data protection page';
	}
}

function getHelp() { // If you need help, enter this in the console
	console.warn("If this is not working, please enable javascript popups");
	console.error("This is in progress... \n Please make an Issue on the github repo site.");
}

function allowCookies() { // If the button was clicked
	 localStorage.setItem("allowCookies", true);
	 $("#cbanner").hide();
}

document.addEventListener('DOMContentLoaded', (event) => {
	console.log("DOM loaded.");
})

function checkCookieStatus() { // Check if the user subscribe to cookies
	try {
		if (localStorage.getItem("allowCookies")) {
			allowCookies();
		}
	} catch (e) {
		console.log("Cookiecheck...");
	}
}

function loadCookieBanner() {
	$('head').append('<link rel="stylesheet" href="http://fuchscrafter.bplaced.net/cookie.css">');
	$('body').append('<section id="cookiebanner"> </section>');
	$('#cookiebanner').replaceWith('<div class="elfsight-app-dc47d86d-4fde-408f-b7fb-7195aec84a7f"><style> .elfsight-app-dc47d86d-4fde-408f-b7fb-7195aec84a7f a:hover { color: red; } .elfsight-app-dc47d86d-4fde-408f-b7fb-7195aec84a7f a { color: black; }</style> <div class="jsx-3044225818 eacc-widget-container eacc-widget-show eacc-widget-box eacc-widget-bottomCenter" id="cbanner"> <div class="jsx-1346626315 eacc-item-container"> <div class="jsx-726563052 eacc-message-component"> <div class="eacc-cookie-icon-component"> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#D5A150"></circle><path fill="#AD712C" d="M32.44 4.34a19.914 19.914 0 0 1 4.34 12.44c0 11.046-8.954 20-20 20a19.914 19.914 0 0 1-12.44-4.34C8.004 37.046 13.657 40 20 40c11.046 0 20-8.954 20-20 0-6.343-2.954-11.996-7.56-15.66z"></path><path fill="#C98A2E" d="M10.903 11.35c-.412 0-.824-.157-1.139-.471a4.432 4.432 0 0 1 0-6.26 4.397 4.397 0 0 1 3.13-1.297c1.183 0 2.294.46 3.13 1.296a1.61 1.61 0 0 1-2.276 2.277 1.2 1.2 0 0 0-.854-.354 1.208 1.208 0 0 0-.854 2.06 1.61 1.61 0 0 1-1.137 2.749z"></path><circle cx="12.894" cy="7.749" r="2.817" fill="#674230"></circle><path fill="#7A5436" d="M10.09 7.48l-.003.032a1.566 1.566 0 0 0 1.624 1.683 2.824 2.824 0 0 0 2.703-2.578 1.566 1.566 0 0 0-1.624-1.683 2.823 2.823 0 0 0-2.7 2.546z"></path><path fill="#C98A2E" d="M4.464 24.227c-.412 0-.824-.157-1.138-.471a4.432 4.432 0 0 1 0-6.26 4.398 4.398 0 0 1 3.13-1.297c1.182 0 2.294.46 3.13 1.297a1.61 1.61 0 0 1-2.277 2.276 1.2 1.2 0 0 0-.853-.353 1.208 1.208 0 0 0-.854 2.06 1.61 1.61 0 0 1-1.138 2.748z"></path><circle cx="6.456" cy="20.626" r="2.817" fill="#674230"></circle><path fill="#7A5436" d="M3.651 20.356a1.566 1.566 0 0 0 1.62 1.716 2.824 2.824 0 0 0 2.703-2.578 1.566 1.566 0 0 0-1.622-1.683 2.824 2.824 0 0 0-2.7 2.546z"></path><path fill="#C98A2E" d="M10.098 32.276c-.412 0-.824-.158-1.138-.472a4.432 4.432 0 0 1 0-6.26 4.397 4.397 0 0 1 3.13-1.297c1.182 0 2.294.46 3.13 1.297a1.61 1.61 0 0 1-2.277 2.276 1.2 1.2 0 0 0-.853-.353 1.208 1.208 0 0 0-.854 2.06 1.61 1.61 0 0 1-1.138 2.749z"></path><circle cx="12.089" cy="28.674" r="2.817" fill="#674230"></circle><path fill="#7A5436" d="M9.285 28.405a1.566 1.566 0 0 0 1.62 1.716 2.824 2.824 0 0 0 2.703-2.578 1.566 1.566 0 0 0-1.622-1.684 2.824 2.824 0 0 0-2.7 2.546z"></path><path fill="#C98A2E" d="M18.95 37.91c-.411 0-.823-.158-1.137-.472a4.432 4.432 0 0 1 0-6.26 4.397 4.397 0 0 1 3.13-1.297c1.182 0 2.294.46 3.13 1.297a1.61 1.61 0 0 1-2.277 2.276 1.2 1.2 0 0 0-.853-.353 1.208 1.208 0 0 0-.854 2.06 1.61 1.61 0 0 1-1.138 2.748z"></path><circle cx="20.942" cy="34.308" r="2.817" fill="#674230"></circle><path fill="#7A5436" d="M18.138 34.038l-.002.033a1.566 1.566 0 0 0 1.623 1.684 2.824 2.824 0 0 0 2.703-2.578 1.566 1.566 0 0 0-1.623-1.684 2.824 2.824 0 0 0-2.7 2.546z"></path><path fill="#C98A2E" d="M20.56 15.385c-.411 0-.823-.157-1.138-.471a4.432 4.432 0 0 1 0-6.26 4.397 4.397 0 0 1 3.13-1.297c1.183 0 2.294.46 3.13 1.296a1.61 1.61 0 0 1-2.276 2.277 1.2 1.2 0 0 0-.854-.354 1.208 1.208 0 0 0-.854 2.06 1.61 1.61 0 0 1-1.137 2.75z"></path><circle cx="22.552" cy="11.784" r="2.817" fill="#674230"></circle><path fill="#7A5436" d="M19.748 11.514l-.003.033a1.566 1.566 0 0 0 1.624 1.683 2.824 2.824 0 0 0 2.703-2.578 1.566 1.566 0 0 0-1.624-1.683 2.823 2.823 0 0 0-2.7 2.546z"></path><path fill="#C98A2E" d="M30.219 29.861c-.412 0-.824-.157-1.139-.471a4.432 4.432 0 0 1 0-6.26 4.397 4.397 0 0 1 3.13-1.297c1.183 0 2.294.46 3.13 1.296a1.61 1.61 0 0 1-2.276 2.277 1.2 1.2 0 0 0-.854-.354 1.208 1.208 0 0 0-.854 2.06 1.61 1.61 0 0 1-1.137 2.75z"></path><circle cx="32.21" cy="26.26" r="2.817" fill="#674230"></circle><path fill="#7A5436" d="M29.406 25.99a1.566 1.566 0 0 0 1.62 1.716 2.824 2.824 0 0 0 2.703-2.578 1.566 1.566 0 0 0-1.623-1.683 2.824 2.824 0 0 0-2.7 2.546z"></path><path fill="#C98A2E" d="M29.414 14.57c-.412 0-.824-.158-1.139-.472a4.432 4.432 0 0 1 0-6.26 4.397 4.397 0 0 1 3.13-1.297c1.183 0 2.295.46 3.13 1.297a1.61 1.61 0 0 1-2.276 2.276 1.2 1.2 0 0 0-.853-.353 1.208 1.208 0 0 0-.854 2.06 1.61 1.61 0 0 1-1.138 2.748z"></path><circle cx="31.405" cy="10.968" r="2.817" fill="#674230"></circle><path fill="#7A5436" d="M28.601 10.698a1.566 1.566 0 0 0 1.62 1.716 2.824 2.824 0 0 0 2.703-2.578 1.566 1.566 0 0 0-1.622-1.683 2.824 2.824 0 0 0-2.7 2.546z"></path><path fill="#C98A2E" d="M17.341 24.227c-.412 0-.824-.157-1.138-.471a4.432 4.432 0 0 1 0-6.26 4.397 4.397 0 0 1 3.13-1.297c1.183 0 2.294.46 3.13 1.297a1.61 1.61 0 0 1-2.276 2.276 1.2 1.2 0 0 0-.854-.354 1.208 1.208 0 0 0-.854 2.06 1.61 1.61 0 0 1-1.138 2.75z"></path><circle cx="19.333" cy="20.626" r="2.817" fill="#674230"></circle><path fill="#7A5436" d="M16.529 20.356l-.003.033a1.566 1.566 0 0 0 1.623 1.684 2.824 2.824 0 0 0 2.703-2.578 1.566 1.566 0 0 0-1.623-1.684 2.824 2.824 0 0 0-2.7 2.546z"></path><g fill="#AD712C" transform="translate(2.656 1.875)"><circle cx="7.485" cy="21.143" r="1"></circle><circle cx="11.509" cy="21.143" r="1"></circle><circle cx="9.497" cy="17.521" r="1"></circle><circle cx="2.253" cy="24.765" r="1"></circle><circle cx="10.301" cy="33.618" r="1"></circle><circle cx="12.716" cy="30.399" r="1"></circle><circle cx="16.74" cy="25.57" r="1"></circle><circle cx="23.179" cy="23.155" r="1"></circle><circle cx="21.569" cy="24.765" r="1"></circle><circle cx="23.984" cy="27.179" r="1"></circle><circle cx="23.984" cy="32.008" r="1"></circle><circle cx="32.837" cy="15.107" r="1"></circle><circle cx="30.422" cy="31.203" r="1"></circle><circle cx="18.35" cy=".62" r="1"></circle><circle cx="3.863" cy="7.863" r="1"></circle><circle cx=".644" cy="12.692" r="1"></circle><circle cx="9.899" cy="13.9" r="1"></circle><circle cx="12.314" cy="12.692" r="1"></circle><circle cx="9.899" cy="11.485" r="1"></circle><circle cx="21.167" cy="17.521" r="1"></circle><circle cx="15.935" cy="5.449" r="1"></circle><circle cx="23.581" cy="12.692" r="1"></circle><circle cx="24.788" cy="16.314" r="1"></circle><circle cx="27.203" cy="16.314" r="1"></circle><circle cx="27.203" cy="18.729" r="1"></circle><circle cx="22.776" cy="4.242" r="1"></circle><circle cx="25.191" cy="3.034" r="1"></circle></g></g></svg> </div> <div class="jsx-726563052 eacc-message-text"> <span class="jsx-726563052 "> ' + settings["text"] + ' </span> <a href="' + settings["url"] +'" target="_blank" class="jsx-726563052 eacc-message-componentMore">Read more</a> </div> </div> <div class="jsx-608316437 eacc-actions-actions"> <div class="jsx-608316437 eacc-actions-confirm eacc-actions-button" onclick="allowCookies();">OK</div> </div> </div> <div class="eacc-popup-container"> <div class="eacc-popup-inner"> <div class="eacc-popup-title">Cookie Policy</div> <div class="eacc-popup-content"> </div> </div> </div> </div>');
}

function addCookieBanner() {
	if (testDom()) {
		readCustomSettings();
		loadCookieBanner();
		checkCookieStatus();
		console.log("\t The Cookiebanner has loaded \n \t Please visit fuchscrafter.de to support me.");
	} else {
		console.warn("The Cookiebanner hasnt loaded.");
	}
}

addCookieBanner();
