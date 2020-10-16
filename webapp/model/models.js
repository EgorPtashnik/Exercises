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
            { id: 'idComingSoon', name: 'Base Apparel coming soon page' },
            { id: 'idIntro', name: 'Intro component with sign-up form' },
            { id: 'idGrid', name: 'Single price grid component' },
            { id: 'idComingSoon2', name: 'Ping single column coming soon page' },
          ],
          currentPageName: ''
        });
        return oModel;
      }
    };
  });
