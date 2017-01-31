Smartbox
=============

Code test for [Ancestry.](https://www.ancestry.com/). Visit the test [here](https://torian12321.github.io/ancestry/dist/)

The structure of the files is based on [my template](https://github.com/torian12321/webTemplate)

The templates uses [Progressive Web App](https://developers.google.com/web/updates/2014/11/Support-for-installable-web-apps-with-webapp-manifest-in-chrome-38-for-Android) principles

SetingUp
---------------

Use a php server to run the project

Install [Nodejs](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) with it in the computer.

On the project folder, install the node modules running:

```npm install```


Development phase
---------------

All the web content than should be modified is located on **app** folder.

Any page (HTML or PHP) should be located on **app** root folder, the **views** folder is used for templates or components used for php, angular, etc.


**Scripts and Style**

To compile less and js files **once**, open the console in the project and run:

```gulp build```

To compile less and js files **each time we save a less file**, open the console in the project and run:

```gulp watch ```

For more information on tasks, open **gulpfile.js**


Distribution phase (publish)
---------------

To compile the distribution version of the site, on the root folder run in console:

```gulp build-all```

After this, all the content on 'dist' folder should be ready to directly copy into the server. In that version, php is converted into .html, and *.js *.css and *.html are minified


Styleguide
---------------

To access the styleguide, go to './app/styleguide'

The Styleguide has been configurated to work with the less files from the proyect


Technologies
---------------

- [jQuery](https://jquery.com/)
- [LESS](http://lesscss.org/)
- [KaleyStyleguide](https://github.com/thomasdavis/kaleistyleguide)
- [Gulp](http://gulpjs.com/)


Autor
---------------
[Aitor](torian12321.github.io/my_web)