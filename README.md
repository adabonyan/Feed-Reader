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
- You can download this App to your device and run on `localhost` (a local server on your device). To do this follow these instructions (reference also to `github` and your `localhost`):
- On your device, create a folder to hold the app files.
- Go to [Link](https://github.com/adabonyan/Feed-Reader)
- Click `Clone in Desktop` or `Download ZIP` (green button about the middle of the page on the right hand side)
- On your device, open the folder to view files. 
- On your browser, open `localhost` and type in the index.html path (or follow guide on how to use your `localhost`)
- Open `index.html` in your browser.

- This site is also published at `github` [Link](https://adabonyan.github.io/Feed-Reader/) 
