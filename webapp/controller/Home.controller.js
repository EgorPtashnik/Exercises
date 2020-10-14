sap.ui.define([
    'ui5/template/controller/BaseController'
  ], function(BaseController) {
    "use strict";

    return BaseController.extend('ui5.template.controller.Home', {
      onInit() {
      },
      onGoToChallenge(sViewId) {
        this.navTo(sViewId);
      }
    });
  });
