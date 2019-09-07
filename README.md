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

## To Do

* Updating to mdx-deck 3.0 changed the way some components look.  Fix them.  It also switched from using styled-components to emotion, so I should rewrite  them in emotion.

* I cannot get the Background Provider to use the background image. Not sure what's wrong.  This might be related to a big where Gatsby has a problem finding static assets ([link](https://github.com/jxnblk/mdx-deck/issues/458)), but I can't even get the Provider to color the background a single color without using an image.

* mdx-deck 3.0 broke my ability to publish slide decks to a subdirectory and have React Router update the page numbers correctly.

  	The undocumented basepath parameter is important for React Router: [https://github.com/jxnblk/mdx-deck/issues/291](https://github.com/jxnblk/mdx-deck/issues/291).  (I have currently put the command using basepath in the subbuild script in package.json.  It is `"subbuild": "mdx-deck build deck.mdx --basepath=\"/slides/arguments\"",`)

  	However, that just has to do with React Router updating the page numbers nicely... I now can't deploy slide decks to subdirectories at all.  I think this has to do with the fact that mdx-deck 3.0 switched to Gatsby, and Gatsby assumes that projects are deployed to the site root unless told.  See [here](https://www.gatsbyjs.org/docs/path-prefix/).  [This open issue](https://github.com/jxnblk/mdx-deck/issues/425) suggests that there's a Gatsby config that'll let me alter the pathing, but I might break the theme in so doing.

* Once I figure these issues out, I'd like to write a script that would deploy slide decks I make directly into a subdirectory of a single-site hub and then update a menu at the site root page accordingly.