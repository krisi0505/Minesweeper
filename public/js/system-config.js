SystemJS.config({
    // tell SystemJS which transpiler to use
    transpiler: 'plugin-babel',
    // tell SystemJS where to look for the dependencies
    map: {
        'plugin-babel': './node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': './node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',

        //starting script
        'main': './js/main.js',

        //scripts
        'router': './js/router.js',
        'tests': '../tests/tests.js',
        'utilities': './app/utilities.js',
        'beginnerGame': './controllers/easyLevel.js',
        'intermediateGame': './controllers/mediumLevel.js',
        'expertGame': './controllers/hardLevel.js',
        'helpController': './controllers/helpController.js',
        'templates': './app/templates.js',
        'events': './app/events.js',
        'bombs': './bombs.js',

        //libraries
        'jquery': './node_modules/jquery/dist/jquery.min.js',
        'handlebars': './node_modules/handlebars/dist/handlebars.js',
    }
});