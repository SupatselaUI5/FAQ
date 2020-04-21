sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("gdsd.FAQ_App.controller.FAQ", {
		onInit: function () {
		},
		
		
formatterSolution: function (SolutionS) {
    var array = {};
    array = SolutionS.split('*');
    
    
   var solution = [];
    for(var i = 1; i<array.length; i++){
    	solution += array[i] + "\n" ;	
    }
    
 return solution;
}


	});
});