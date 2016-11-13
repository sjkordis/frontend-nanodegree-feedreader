/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* Tests are placed within the $() function, since some of the tests
 * require DOM elements. This ensures they don't run until the DOM is ready.
 */

$(function() {
	/* This test suite contains a related set of tests for the
	 * RSS feeds definitions, the allFeeds variable in our application.
	*/
	describe('RSS Feeds', function() {
		/* Test to make sure that the allFeeds variable has been
		 * defined and that it is not empty.
		 */
		it('are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});

		/* Test that loops through each feed in the allFeeds object
		 * and ensures it has a URL defined and that the URL is not
		 * null or empty.
		 */
		it('each has a URL defined and the URL is not empty', function() {
			allFeeds.forEach(function(feed) {
				var url = feed.url;
				expect(url).toBeDefined();
				expect(url).not.toBeNull();
				expect(url.length).toBeGreaterThan(0);  // check for empty string
			});
		});

		/* Test that loops through each feed in the allFeeds object
		 * and ensures it has a name defined and that the name is not
		 * null or empty.
		 */
		it('each has a name defined and the name is not empty', function() {
			allFeeds.forEach(function(feed) {
				var name = feed.name;
				expect(name).toBeDefined();
				expect(name).not.toBeNull();
				expect(name.length).toBeGreaterThan(0);  // check for empty string
			});
		});

	});

	/* This test suite contains a related set of tests for the menu.
	*/
	describe('The Menu', function() {

		/* Test that ensures the menu element is hidden by default.
		 * To hide the menu, the CSS translates it 12em to the left
		 */
		it('is hidden by default', function() {
			expect($('body').hasClass('menu-hidden')).toBeTruthy();
		});

		/* Test that ensures the menu changes visibility when the
		 * menu icon is clicked.
		 */
		 it('appears when the hamburger icon is clicked ' +
			'and disappears when the icon is clicked again', function() {
			$('.menu-icon-link').trigger('click');  // Show the menu
			expect($('body').hasClass('menu-hidden')).toBeFalsy();
			$('.menu-icon-link').trigger('click');  // Hide the menu
			expect($('body').hasClass('menu-hidden')).toBeTruthy();
		 });
	});

	/* This test suite checks that the list of feeds gets initially populated */
	describe('Initial Entries', function() {

		/* Test that ensures when the loadFeed function is called
		 * and completes its work, there is at least a single .entry-link
		 * element within the .feed container.
		 */

		beforeEach(function(done) {
			loadFeed(0, done);
		});

		it('has at least one .entry element within the .feed container',
			function() {
			expect($.contains($('.feed')[0], $('.entry')[0])).toBeTruthy();
		});
	});

	/* This test suite checks to see that the content of the feed changes
	 * when a new feed is loaded.
	 */
	describe('New Feed Selection', function() {

		/* Test that ensures when a new feed is loaded by the loadFeed
		 * function that the content actually changes.
		 */

		var oldContent, newContent = null;


		beforeAll(function(done) {
			loadFeed(0,function() {
				oldContent = $('.feed')[0].textContent;
				loadFeed(1,function() {
					newContent = $('.feed')[0].textContent;
					done();
				});
			});
		});

		it('content of the feed changes when a new feed is loaded',
			function(done) {
				console.log('Old content is ' + oldContent);
				console.log('New content is ' + newContent);
				expect(newContent).not.toBe(oldContent);
				done();
		});
	});

}());
