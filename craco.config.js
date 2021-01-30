const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
                '@primary-color': 'red',
                '@layout-header-background' : 'white'
             },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};