# *`Please note that the theme is in a work in progress. Below is the description of my goal of this theme.`*

---
---
---

A ReactJS Starter Theme for WordPress headless sites
===================

This theme has the groundwork for turning a WP website into a React-based SPA. This is not intended for production use, but rather as a starting point for building a headless website, inside the theme.

The main idea is to use the WordPress installation for the database and dashboard, while a React-based app lives in the theme. Communication is done through REST API.

## Uses/Includes
- `@wordpress/scripts` for React
- `@wordpress/data` for Redux-like state management
- TypeScript, Tailwind

## Technical Details
- Default WP classes are not printed
- Default WP scripts and styles are not loaded.
- Only css that the backend loads is the [normalize.css](https://necolas.github.io/normalize.css/)
- Everyting is redirected to '/'
- Disabled Admin Bar, Gutenberg Editor, XML-RPC and RSS

## Included Example
As an example, there is an Map solution with filterable points of interests, built with Azure Maps. 
It has:
- A new post type: Points
- Set up meta fields for this post type
- A new custom REST API endpoint, for filtering the points

> <small>**Note: Every setup, settings and files related to the example are in the `example` folder.**</small>



