# Feed Reader Testing Project

This project uses the [Jasmine](http://jasmine.github.io/) development framework to implement unit tests for a JavaScript application that reads RSS feeds.

The tests are located in the [feedreader.js](./jasmine/spec/feedreader.js) file.

## Tests Included
| Test Suite        | Purpose           |
| :------------- |:-------------|
| RSS Feeds      | Ensures that the `allFeeds` variable has been defined and that it is not empty |
| The Menu      | Ensures the menu element is hidden by default |
| Initial Entries | Ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container |
| New Feed Selection | Ensures when a new feed is loaded by the `loadFeed` function that the content actually changes |

## To run the application

1. Download or clone this repository.
2. Open the [./index.html](./index.html) file in a browser.
