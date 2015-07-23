/* jshint node: true */
'use strict';
var childProcess = require('child_process');
var RSVP = require("rsvp");

module.exports = {
  name: 'ember-cli-electron',

  contentFor: function(type, config) {
    if (type === "head") {
      return "<script>" +
        "window.requireNode = window.require;" +
        "delete window.require;" +
        "delete window.module;" +
        "</script>";
    }
  },

  includedCommands: function(){
    return {
      'start-app': {
        name: 'start-app',
        description: 'Runs ember-electron',

        run: function(options, rawArgs){
          childProcess.exec("ember server -p 5000", function(error, bla, blaa) {
            console.log(error);
          });
          return new RSVP.Promise(function(resolve, reject) {
            setTimeout(function() {
              childProcess.exec("electron .", function(error, bla, blaa) {
                resolve();
              });
            }, 2500);
          });
        }
      }
    };
  }
};
