# Personal boilerplate for building MDX decks

This template is intended for my personal use when building new slideshows.  

If you'd like to use some portion or other, feel free.

---

## Installation

Clone this directory.

`git init`

`npm install`

`npm start`

---

## Deploying to a Subdirectory of a Netlify site

### Doesn't Currently Function! :pensive: I'm Working On It. 

For example, to deploy to `./slides/arguments`:

* Add the following to *gatsby-config.js* (this will tell Gatsby that you don't want your page to live at the site root. See [here](https://www.gatsbyjs.org/docs/path-prefix/).):

	``
	module.exports = {
	  pathPrefix: `/slides/arguments`,
	}
	``
	
	(Note: I can't tell whether this is the right place to put *gatsby-config.js*.  It seems to be doing something though.)

* [Build with the undocumented basepath parameter](https://github.com/jxnblk/mdx-deck/issues/291). e.g. `"mdx-deck build deck.mdx --basepath=\"/slides/arguments\"",`.  You can also run the script called `subbuild` in package.json, but you'll have to go in and manually change the path to whatever you need.  This makes React Router work appropriately and will change the address in the address bar correctly when flipping through slides.

* Restructure your folders to create the directory structure you want, treating *public* as the site's root.  Enter the newly-created *public* folder and manually create a *slides* folder containing an *arguments* folder.  Manually move all other contents of *public* into *arguments*.

* Return to this folder and `netlify deploy`.

* Then, on your actual site, use Netlify's proxying feature to proxy to your slides. (See fool's comments at the end of [this thread](https://github.com/netlify/cli/issues/16).)

* Be aware that [this open issue](https://github.com/jxnblk/mdx-deck/issues/425) suggests that doing this might break the theming.

---

## To Do

* Updating to mdx-deck 3.0 changed the way some components look.  Fix them.  It also switched from using styled-components to emotion, so I should rewrite them in emotion.

* I cannot get the Background Provider to use the background image. Not sure what's wrong.  This might be related to a bug where Gatsby has a problem finding static assets ([link](https://github.com/jxnblk/mdx-deck/issues/458), workaround [here](https://github.com/HoverBaum/bug-mdx-deck-401/blob/master/deck.mdx)), but I can't even get the Provider to color the background a single solid color.  (So I think there are two problems here: getting Providers to work, and using static assets in themes.  I only switched to trying out a Provider when I couldn't get the backgroundImage to work in the theme.)

* Something is wrong with hotloading the dev server. It doesn't always update when I make changes to deck.mdx, and I have to restart it. It's truly annoying.

* mdx-deck 3.0 broke my ability to publish slide decks to a subdirectory and have React Router update the page numbers correctly.  I'm working on it: the above "Deploying to a Subdirectory" section is where I'm at right now, but it's still not working.  (In 2.5.1, I could just use the basepath parameter when building and then restructure my directories.  I didn't need to fool around with gatsby-config.js.)

  	Apparently mdx-deck 3.0 [makes it easy](https://github.com/jxnblk/mdx-deck/blob/master/docs/gatsby.md) to have a single Gatsby site with a collection of decks all contained in a subdirectory.  I would prefer to have the freedom to simply deploy slide decks to a subdirectory without building a new site (and learn Gatsby), but it seems this is the way to go.