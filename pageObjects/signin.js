const { functionsIn } = require("lodash");

module.exports = {
    elements: {
        signInButton: {
            selector: '#sign-in-button'
          },
          username:{
            selector: '#username'
          },
          password:{
            selector: '#sign-in-password'
          },
    },
    commands: [{
        dologin(email,password){
            return this
                    .setValue('@username',email)
                    .setValue('@password',password)
                    .click('@signInButton')
        }
    }]
  };