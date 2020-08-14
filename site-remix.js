/*
 *  An example remixing dndbeyond.
 *  Based on code from https://gomakethings.com/getting-html-with-fetch-in-vanilla-js/
 *  Requirements:
 *    Logged into dndbeyond
 *    Purchase of Dragon Heist
 */

document.body = document.createElement('body');

fetch('/sources/wdh/foreword').then(function (response) {
	// The API call was successful!
	return response.text();
}).then(function (html) {

	// Convert the HTML string into a document object
	var parser = new DOMParser();
	var doc = parser.parseFromString(html, 'text/html');
    document.body.append(doc.querySelector('blockquote'))
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
