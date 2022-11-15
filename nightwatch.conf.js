// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/
//

//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/

module.exports = {
  "page_objects_path": "pageObjects",
    test_runner: {
      // set cucumber as the runner
      type: 'cucumber',  
        
      // define cucumber specific options  
      options: { 
        //set the feature path
        feature_path: '*/*.feature',
        
        // start the webdriver session automatically (enabled by default)
        auto_start_session: true,
      
        // use parallel execution in Cucumber  
        parallel: 2 // set number of workers to use (can also be defined in the cli as --parallel 2
      }
    },
    
    src_folders: ['features/step_definitions'],

    test_settings: {
      use_xpath : true,
      default: {
        webdriver: {
          start_process: true,
          server_path: require('chromedriver').path,
          port: 4444,
          cli_args: ['--port=4444']
        },
        desiredCapabilities: {
          browserName: 'chrome',
          chromeOptions: {
            excludeSwitches: ["enable-automation"],
            args: [
              "start-maximized"
            ],
          },
        },
      }
    }
};
