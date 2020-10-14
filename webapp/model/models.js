sap.ui.define([
    'sap/ui/model/json/JSONModel',
    'sap/ui/Device',
  ], function(JSONModel, Device) {
    'use strict';

    return {
      createDeviceModel() {
        const oModel = new JSONModel(Device);
        oModel.setDefaultBindingMode('OneWay');
        return oModel;
      },

      createStateModel() {
        const oModel = new JSONModel({
          pages: [
            { id: 'idComingSoon', name: 'Base Apparel coming soon page'}
          ]
        });
        return oModel;
      }
    };
  });
