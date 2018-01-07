# Project Overview
- This project uses Jasmine (an application to test javascript) to test RSS feeds reader App.
- Jasmine was used to write a number of tests to ascertain the integrity of the RSS feeds reader. 
- DOM techniques and jQuery were employed even though this test can be completely written using DOM technique only

## Initial approach
- Initial tests were written to make the RSS feeds reader App fail. These tests were intentional to test for failure. Such test include spelling error, missing special charaters e.g (), $, " etc. These tests are not included in this final presentation.
- Studied the html, js and css to help understand how the App works. Used developer tools to check the App dynamic (e.g css style changes by javascript, etc.)

## List of tests
- RSS feeds are defined in `allFeeds` and are not empty.
- Each feed in `allFeeds` has a defined name and URL.
- When page load is complete, the navigation menu is hidden.
- The hamburger button (menu icon) toggles navigation menu display/hidden.
- The first feed must have at least one entry.
- A new feed must differ from preceeding feed.

## User Notes.
- You can download this App to your device and run on localhost. To do this follow the instruction on github.
- This site is also published at: https://adabonyan.github.io/Feed-Reader/ 
