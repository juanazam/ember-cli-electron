/* jshint node: true */
'use strict';

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
  }
};
