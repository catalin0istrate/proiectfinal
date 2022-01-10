# Exercise 7 (Routing) 4p
1. Using `react-router` `Routes` and `Route` components implement the application as fallows
* `/` url to render the `Category` component
* `/breed-:breedId` url to render the `Details` component where `breedId` is a variable used to fetch data from api inside the component
* any other url to render the `NotFound` component
2. Inside `Details` component use the url param hook to get the `breedId` and give it to the api (instead of the one passed by props)
3. Use the proper component instead of `a href` to avoid page reloads on clicking the links

Testing:
* `/` should render the list of breeds
* `/breed-abob` should render the details of the cat breed
* `/random-url` should render the 404 error page
