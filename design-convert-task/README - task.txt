Try to recreate the provided design as accurate as possible (both the smiley + form and the blog articles below) in an angular project and make the feedback form functional

Scenario:
===========
- On a smiley click register a rating value to the form
- On a smiley click the textarea appears into view
- When user clicks on `verzenden`
	- if no info is filled in it should mark the textarea as invalid and show a help text (screenshot v03-error-feedback)
		- at this point the smiley are still clickable and rating value can still change
	- if valid info is filled in then show a feedback message  (screenshot v04-feedback-succes)
		- once feedback is send the smiley are no longer clickable
	- if the form is valid, start an endpoint call with rating and message as body


Extra info:
===========
- Use reactive forms (without form builder) to make the form functional
- You can use whatever you want to create the css but it should be responsive (bootstrap or other design/grid framework)
- The endpoint api call can be done to a dummy (non-existing) url
- the data for the blog can be static
- for the blog article images you can use https://placeholder.com