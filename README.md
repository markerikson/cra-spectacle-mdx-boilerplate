# Creact-React-App + Spectacle + MDX Example

Create-React-App is cool.  Spectacle is cool.  MDX is cool.

They should really all work together.  But out of the box, they don't.

I spent an afternoon making the pieces fit together, so I figured I'd share the results.

It's a standard freshly-created CRA app, with the Webpack config being modified using `react-app-rewired`.  The
changes are visible in `config-overrides.js`.

The MDX loading is handled in `mdx-loader.js`, which is basically the same as what's used in the [spectacle-boilerplate-mdx](https://github.com/FormidableLabs/spectacle-boilerplate-mdx) project.

 The example slides are mostly also copied from `spectacle-boilerplate-mdx`, with a few extra slides
 thrown in to show how to handle multiple MDX files, load images, and import text and code for display
 as code blocks in the slides.
 
 I've also got a custom build of Prism.js with a Monokai theme loaded, and there's some specific
 tweaks to the slide styling.  
 
 The main slide theming is in `./src/presentation/theme/index.js`.
 
 Overall, this repo should be a good starting point for anyone who wants to tweak things further.

