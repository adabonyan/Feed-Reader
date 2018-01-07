/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        allFeeds.forEach(function(obj){
            it('have url', function() {
                expect(obj.url).toBeDefined();
                expect(obj.url).not.toBe('');
            })
        })

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        allFeeds.forEach(function(obj){
            it('have name', function() {
                expect(obj.name).toBeDefined();
                expect(obj.name).not.toBe('');
            })
        })
    });


    /* TODO: Write a new test suite named "The menu" */
     describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('are hidden', function() {
            elements = document.getElementsByClassName("menu-hidden");
            nu = elements.length;
            for(var i = 0; i < nu; i++) {
                expect(elements[i].getAttribute("class")).toContain("menu-hidden");
                expect(elements[i].getAttribute("class")).not.toContain("nenu-hidden");
            }           
        });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        body = document.getElementsByClassName("menu-hidden")[0];
        menuIcon = document.getElementsByClassName('menu-icon-link')[0];
        
        $(document).ready(function(){
            $(menuIcon).click(function(){
                if ($(body).hasClass("menu-hidden")) {
                    expect($(body).hasClass("menu-hidden").not.toBeTruthy());
                    expect($(body).hasClass("slide-menu").toBeTruthy());
                }                
            });
        });

        $(document).ready(function(){
            $(menuIcon).click(function(){
                if (!$(body).hasClass("menu-hidden")) {
                    expect($(body).hasClass("menu-hidden").toBeTruthy());
                    expect($(body).hasClass("slide-menu").not.toBeTruthy());
                }                
            });
        });
    });

    /* Write a new test suite named "Initial Entries" */    
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        var nu = document.getElementsByClassName('feed').length;
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('should load feed', function(done) {
            expect(nu).toBeGreaterThan(0);
            done();
        });
    });
        

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */        
        beforeEach(function(done) {            
            loadFeed(0, done);
        });

        it('should load feeds', function(done) {
            old_feed = document.getElementsByClassName('feed').innerHTML;
            expect (old_feed).not.toBe("");
            done();
        });
        
        beforeEach(function(done) {            
            loadFeed(0, done);
        });

        it('should load new feeds', function(done) {
            new_feed = document.getElementsByClassName('feed').innerHTML;
            expect(new_feed).not.toEqual(old_feed);
            done();
        });
    });    
    /*
    describe('Or New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        /*
        var entry1 = document.getElementsByClassName('feed')[0].children[0];
        var entry2 = document.getElementsByClassName('feed')[0].children[1];
        var nu = document.getElementsByClassName('feed')[0].length;
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('should load different feeds', function(done) {
            eect(nu).toBeGreaterThanOrEqual(2);
            expect(entry2.innerHTML).not.toEqual(entry1.innerHTML);
            done();
        });
    });*/
}());
