# Personal boilerplate for building MDX decks

This is intended for my own use when building new slideshows, but if you'd like to grab some code, feel free.

---

## Installation

Clone this directory.

`git init`
`npm i -D mdx-deck`
`npm i -D styled-components`

`npm start`

(Or: `npm install` to install dependencies listed in package.json)

---

## To Work On

* Updating to mdx-deck 3.0 changed the way some components look.  Fix them.  It also switched from using styled-components to emotion, so I shoudl rewrite the components in emotion.

* I cannot get the Background Provider to use the background image. Not sure what's wrong.

* mdx-deck 3.0 broke my ability to publish slide decks to a subdirectory and have React Router update the page numbers correctly.

The undocumented basepath parameter is important for React Router: [https://github.com/jxnblk/mdx-deck/issues/291](https://github.com/jxnblk/mdx-deck/issues/291).  (I have currently put the command using basepath in the subbuild script in package.json.  It is `"subbuild": "mdx-deck build deck.mdx --basepath=\"/slides/arguments\"",`)

However, that just has to do with React Router updating the page numbers nicely... I now can't deploy slide decks to subdirectories at all.  I think this has to do with the fact that mdx-deck 3.0 switched to Gatsby, and Gatsby assumes that projects are deployed to the site root unless told.  See [here](https://www.gatsbyjs.org/docs/path-prefix/).

* Once I figure these issues out, I'd like to write a script that would deploy slide decks I make directly into a subdirectory of a single-site hub and then update a menu at the site root page accordingly.
