const { defineConfig } = require("cypress");



module.exports = defineConfig({
  e2e: {
    specPattern: '**/*.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    
    "baseUrl": "https://serverest.dev",
    "video": false
  
  },
});


 




  

