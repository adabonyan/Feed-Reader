/*feedreader.js
Jasmine will run these tests against this application.
Tests won't run until the DOM is ready.
*/
 
$(function() {
    //Test to ensure allFeeds variable are and not empty
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeTruthy();
        });

        allFeeds.forEach(function(obj){
            it('have url', function() {
                expect(obj.url).toBeTruthy();
            });
        });

        allFeeds.forEach(function(obj){
            it('have name', function() {
                expect(obj.name).toBeTruthy();
            });
        });
    });

    //Test for hidden/display (css toggle) elements
    describe('The menu', function() {
        
        it('are hidden', function() {
            expect($('body').hasClass("menu-hidden")).toBeTruthy(); 
        });

        it('menu toggles', function() {
            //First click dsplays body
          $('.menu-icon-link').eq(0).trigger('click');
          expect($('body').hasClass('menu-hidden')).toBeFalsy();
          //Next click hides body
          $('.menu-icon-link').eq(0).trigger('click');
          expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    });

    // Test for feed functionalty, accurate loading without repeatition    
    describe('Initial Entries', function() {        
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('should have at least one entry', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });

    describe('New Feed Selection', function() {
        beforeEach(function(done) {            
            loadFeed(0, function() {
                firstFeed = $(".feed").text();
                loadFeed(1, function() {
                    secondFeed = $(".feed").text();
                    done();
                });
            });            
        });

        it('should load new feeds', function(done) {            
            expect (firstFeed).not.toBe("");
            expect (secondFeed).not.toBe("");
            expect(secondFeed).not.toEqual(firstFeed);
            done();
        });
    });
}());