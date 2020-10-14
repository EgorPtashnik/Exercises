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
        const oModel = new JSONModel([
          {
            name: 'Tanya Sinclair',
            who: 'UX Engineer',
            desc: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
            I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
            excited about the future. ”`,
            img: 'image-tanya.jpg'
          },
          {
            name: 'John Tarkpor',
            who: 'Junior Front-end Developer',
            desc: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
            The depth the instructors go into is incredible. I now feel so confident about 
            starting up as a professional developer. ”`,
            img: 'image-john.jpg'
          }
        ]);
        return oModel;
      }
    };
  });