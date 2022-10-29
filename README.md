# Another Pokedex app

## What is this?

An interactive Pokemon poster / pokedex.

If you want to get technical it's a react app showcasing my use of react hooks, routing and state management.

This app uses data provided by the kind folks at www.pokeapi.com

## How does it work

The lading page (Home) gets a list of (300) Pokemons from the api, with each name is included a unique URL with more details on that specific Pokemon. 

After the list is resolved the app maps through this array and renders a Pokemon component for each name on the list. We pass the URL to the component props. 

The pokmon component then requests further info on the Pokemon from the API which resolves the URL for image of the Pokemon which is then rendered in the component.

## Knowledge showcase

The app uses **useState** and **useEffect** extensively, **axios** is used to fetch from the **API**. The app showcases routing and dynamic routing using React-router-dom.

To avoid unnecessary API calls when navigating back to the Poster page, I have implemented a simple **cache** which is cleared when the page is refreshed. To help with performance this cache can be accessed by a component via 'import'.

To avoid re-rendering the poster list when showing the tool tip I have implemented a **service locator** pattern (I think) which can bind UI actions directly between components.

### Update
After doing some more digging I came across what is known as the 'flux pattern'. Not to sound too boastful but I think I have inadvertedly used this pattern for the Interface.js component. In the component we provide an action pool that other components can access and add actions (functions) to it. A Dispatch method can be called with a string argument, if the string matches the name of an action, the action is called. This provides decoupling between the action pool and subscribers.

### Issues
The cache and interface hooks are not private, my next step would be to implement a robust system of setter and getter methods

