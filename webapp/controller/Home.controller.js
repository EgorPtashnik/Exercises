sap.ui.define([
    'ui5/template/controller/BaseController'
  ], function(BaseController) {
    "use strict";
  
    return BaseController.extend('ui5.template.controller.Home', {
      onInit() {
        BaseController.prototype.onInit.apply(this, arguments);
      },

      showActions(oEvent) {
        if (!this._popover) this._popover = this.byId('idPopover');
        this._popover.openBy(oEvent.getSource());
      }
    });
  });
  