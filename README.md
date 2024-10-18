# *`Please note that the theme is actively work in progress. Below is the description of my final goal.`*

---
---
---

A ReactJS Starter Theme for WordPress headless sites
===================

This theme has the groundwork for turning a WP website into a React-based SPA. This is not intended for production use, but rather as a starting point for building a headless website, inside the theme.

The main idea is to use the WordPress installation for the database and dashboard, while a React-based app lives in the theme. Communication is done through REST API.

## Uses/Includes
- A custom webpack configuration for JSX, TS, SCSS (for now) compilation.
- Custom proxy reload with `browser-sync`
- `React`, `Redux Toolkit`
- `TypeScript` and `Tailwind` integrated

## Technical Details
- Default WP classes are not printed
- Default WP scripts and styles are not loaded.
- Only css that the backend loads is the [normalize.css](https://necolas.github.io/normalize.css/)
- Everyting is redirected to '/'
- Disabled Admin Bar, Gutenberg Editor, 404 status, XML-RPC and RSS
- Added a `vd_react_base_app_content` custom filter, so plugins can render anything inside the `#app` container.

## Installation

- Activate the Theme
- `Plain` permalinks settings will not work, change to anything else

## Included Example
As an example, there is an Map solution with filterable points of interests, built with Mapbox. 
You will need a [Mapbox access token](https://docs.mapbox.com/help/getting-started/access-tokens/) inside an .env file for a working example.
It has:
- A new post type: Points
- Longitude/latitude meta fields for this post type
- A new custom REST API endpoint for filtering
- A new custom REST API endpoint for importing locations

> <small>**Note: Every setup, settings and files related to the map-example are in the `example` folder.**</small>



