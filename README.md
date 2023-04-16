# Getting Started with Car Shop App

You will need to first of all install a couple of packages before we get started.
First: You'll need react-slick, which is a cool Carousel package, lightweight and easy to use.
Then you'll need to get the styles which are in its documentation.
Second: For convenience I've installed react bootstrap and applied its styles.

Third: You'll need react-redux along with redux toolkit, which I use to store users.

Fourth:You will need axios for api calls.

Most important one, which is a given you'll need react-router-dom.

## What I did here:

I'll document the parts that are a bit hard to read here:

For starters I've used protected routes and public routes to split the content that users can see and what they can't see, which only admins can see.
To add a page to a route, simply go to Lib then Routes folder and find RouteData there.
To add a route to public users you can just specify the path and the component you'll be using like this:
{
    path:'/yourpath'
    element:<YourElement />
}
And thats pretty much it for the routes.

For api calls you'll neeed to go to endpoints and just specify the correct URL along with post method.
To make an api call you'll have to import both api and endpoints from API folder and then simply use api.call(endpoints.YOURENDPOINT, config)
Config isn't a required file but if you do need it here is how:
const config = {
    data:yourData,
    params:yourParams,
    headers:yourHeaders
}


## This section is how I split my code so you can understand better.##

In pages you may find that I have 4 Pages, but here relevant is only the LandingPage and Dashboard.
Dashboard is the protected page, while LandingPage is what the user sees.

LandingPage has 5 components that are split in multiple other components to make code easier to modify and re-use.
The initial image is in the FirstSection along with the carousel.

FirstSection contains a component PreQualify which also contains another component SlickCarousel

SlickCarousel uses React-Slick and the beauty of it is how easy to configure and how lightweight React-Slick is compared to everything else.
You can set up as many slides as you like to show and scroll for users. I personally keep it at 3 and slides to scroll at one.
For Mobile I keep it at one and for Tablet I keep it at 2. You can modify them by changing breakpoints settings and specifying which settings you want and also which breakpoint you want.

## -- ##

LandingPage does keep record of some important divs positions and also keeps record of when the user is scrolling.
This here is done to be very precise about when the user is about to enter the required div position which will trigger some animations depending on where the user is currently positioned.
This is done by passing props to each component that requires it and I get the positions by **useRef** and by **getBoundingClientRect** then update the **useState** all this while being in an **useEffect**, which has a dependency array with **divRef**.


**Rest of it is just easy React and CSS manipulation so I won't waste your time**

**To start the app run 'npm start'**
