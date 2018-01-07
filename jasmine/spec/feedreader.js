/*feedreader.js
Jasmine will run these tests against this application.
Tests won't run until the DOM is ready.
*/
 
$(function() {
    //Test to ensure allFeeds variable are and not empty
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        allFeeds.forEach(function(obj){
            it('have url', function() {
                expect(obj.url).toBeDefined();
                expect(obj.url).not.toBe('');
            })
        })

        allFeeds.forEach(function(obj){
            it('have name', function() {
                expect(obj.name).toBeDefined();
                expect(obj.name).not.toBe('');
            })
        })
    });

    //Test for hidden/display (css toggle) elements
    describe('The menu', function() {
        
        it('are hidden', function() {
            elements = document.getElementsByClassName("menu-hidden");
            nu = elements.length;
            for(var i = 0; i < nu; i++) {
                expect(elements[i].getAttribute("class")).toContain("menu-hidden");
                expect(elements[i].getAttribute("class")).not.toContain("nenu-hidden");
            }           
        });

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

    // Test for feed functionalty, accurate loading without repeatition    
    describe('Initial Entries', function() {        
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('should load feed', function(done) {
            expect($(".feed").children().length).toBeGreaterThan(0);
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
