# Personal boilerplate for building MDX decks

This template is intended for my personal use when building new slideshows.  

If you'd like to use some portion or other, feel free.

---

## Installation

Clone this directory.

`git init`

`npm install`

`npm start`

Choose a theme to import.  All components are imported by default; remove imports of unused components.

---

## To Do

* Updating mdx-deck to 3.0.1 brought along a bunch of problems.  I don't want to be left behind, so I'll try to solve them instead of sticking with 2.5.1.  They're listed below.

* Something is wrong with hotloading the dev server. It doesn't update when I make changes to deck.mdx, and I have to restart it. It's truly annoying. Fix this!  (Could it be related to my having installed and started up a dev server for this boilerplate, such that cloning it presumes something incorrect about the location of deck.mdx?)  Update: [there's an open issue for this](https://github.com/jxnblk/mdx-deck/issues/474)!  Changing the first slide will hotload in the meantime.  

* Updating to mdx-deck 3.0.1 changed the way some components look.  Fix them.  It also switched from using styled-components to emotion, so I should rewrite them in emotion.  Investigate the possibility of having compenents invert colors automatically when the background is inverted rather than having to do it manually.

* I cannot get Providers to work correctly.  Not sure what's wrong.

* mdx-deck 3.0 broke my ability to publish slide decks to a subdirectory and have React Router update the page numbers correctly.  I'm working on it: the "Deploying to a Subdirectory" section below is where I'm at right now, but it's still not working.  (In 2.5.1, I could just use the basepath parameter when building and then restructure my directories.  I didn't need to fool around with gatsby-config.js.  Though it seems like it's the basepath parameter that is broken.)

  	Apparently mdx-deck 3.0 [makes it easy](https://github.com/jxnblk/mdx-deck/blob/master/docs/gatsby.md) to have a single Gatsby site with a collection of decks all contained in a subdirectory.  I would prefer to have the freedom to simply deploy slide decks to a subdirectory without building a new site (and without learning Gatsby!), but this might be the way to go.  Putting my existing decks in a single Gatsby site breaks my styling, for some reason.

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

	(Note: I can't tell whether this is the right place to put *gatsby-config.js*.  It should be at the root of the Gatsby project, but that's cloaked from me... I can't tell whether putting it here should work... but it seems to in most circumstances.)

* [Build with the undocumented basepath parameter](https://github.com/jxnblk/mdx-deck/issues/291). e.g. `"mdx-deck build deck.mdx --basepath=\"/slides/arguments\"",`.  You can also run the script called `subbuild` in package.json, but you'll have to go in and manually change the path to whatever you need.  This makes React Router work appropriately and will change the address in the address bar correctly when flipping through slides.

* Restructure your folders to create the directory structure you want, treating *public* as the site's root.  Enter the newly-created *public* folder and manually create a *slides* folder containing an *arguments* folder.  Manually move all other contents of *public* into *arguments*.

* Return to this folder and `netlify deploy`.

* Then, on your actual site, use Netlify's proxying feature to proxy to your slides. (See fool's comments at the end of [this thread](https://github.com/netlify/cli/issues/16).)

* Be aware that [this open issue](https://github.com/jxnblk/mdx-deck/issues/425) suggests that doing this might break the theming.

---

## Update

mdx-deck has gone on to v4 now (and I'm not sure it's still being updated/maintained); these directions are now stale.  Here's how I now start a new mdx site.  (If you want to make just a single deck, follow the directions on the mdx-deck repo)

`npm i gatsby`

`npm i -D mdx-deck`

`npm i gatsby-theme-mdx-deck`

in `gatsby-config.js` file, add plugin configuration such as the following:

````
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        // enable or disable gatsby-plugin-mdx
        mdx: true,
        // source directory
        contentPath: 'src/decks',
        // base path for routes generate by this theme
        basePath: 'slides'
      }
    }
  ]
}
````
