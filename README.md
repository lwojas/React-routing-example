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

To avoid re-rendering the poster list when showing the tool tip I have implemented a flux pattern which binds UI actions directly between components.
