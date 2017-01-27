LESS files
=============

[LESS](http://lesscss.org/) is used to generate the css files.

The file 'style.less' contains the calls to the files we need to compile.

To reduce the css size and complexity, and also to generate a better index on the styleguide, the project uses the [BEM](http://getbem.com/introduction/) principles, where the CSS are applied first to the basic elements and them modified by additional classes, avoiding when is possible nesting the CSS rules.


**Comments:**

Because of the use of [KaleyStyleguide](https://github.com/thomasdavis/kaleistyleguide), the comments on the code with ```/*.....*/``` system are used to 'print' the views on the styleguide, so, to real comment something, better to use ```//```