# *`About the Map webapp - see below.`*

---
---
---

A ReactJS Starter Theme for WordPress headless sites
===================

This theme has the groundwork for turning a WP website into a React-based SPA. This is not intended for production use, but rather as a starting point for building a headless website, inside the theme.

The main idea is to use the WordPress installation for the database and dashboard, while a React-based app lives in the theme. Communication is done through REST API.

The repository also includes a Mapbox example.

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
You will need a [Mapbox access token](https://docs.mapbox.com/help/getting-started/access-tokens/) inside an .env file for running the example.

> Note: every content and taxonomy used in the example is imported during the first time the website loads. It has a separate popup for this.

#### About:
- A new post type: Locations
- Longitude/latitude meta fields added for Locations, with a custom metabox
- It registers 4 additional taxonomy for Locations
- Filtering is done with the default WordPress REST API endpoint
- A new custom REST API endpoint for importing locations

#### Technical Details
- A custom webpack configuration for JSX, TS, SCSS (for now) compilation.
- Custom proxy reload with `browser-sync`
- `React`, `Redux Toolkit`
- `TypeScript` integrated
- `Tailwind` is planned

> <small>**Note: Every setup, settings and files related to the map-example are in the `example` folder.**</small>



