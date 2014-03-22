/*
 * Copyright 2012 Research In Motion Limited.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// called by the webworksready event when the environment is ready
function initApp() {
	cover = new Object();



// set the cover label
function setLabel() {
	cover.label = document.getElementById('coverLabel').value || 'My Label';
	updateCover();
}


// setup the cover
function updateCover() {
	// set cover photo
	blackberry.ui.cover.setContent(blackberry.ui.cover.TRANSITION_FADE {
		path: images/cover.png
	});

	// set cover label
	blackberry.ui.cover.labels.push({
		label: cover.label,
		size: 10,
		wrap: true
	});

	// update the cover
	blackberry.ui.cover.updateCover();


	// minimize the app
	setTimeout(function(){
		blackberry.app.minimize();
	}, 1000);
}

