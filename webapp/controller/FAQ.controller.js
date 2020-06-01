sap.ui.define([
	"sap/ui/core/mvc/Controller",
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
    	
    	if(array[12]===" • http://www.npo.gov.za/PublicNpo/WebApplicationCase/Register " || array[2]===" • http://www.npo.gov.za " || array[8]===" • https://www.gauteng.gov.za/ ") 
    	{
    			solution += array[i-2] + "\n" ;
    	}
    	else
    	solution += array[i] + "\n" ;
    	
    }
 return solution;
},

	
formatterLinkS: function (SolutionS) {
    var array = {};
    array = SolutionS.split('*');
    
    if(array[12]===" • http://www.npo.gov.za/PublicNpo/WebApplicationCase/Register "){
    
   var solution2 = [];
    for(var i = 1; i<array.length; i++){
    	solution2 =  array[12];
    }
    }
 return solution2;
},

formatterLinkM: function (SolutionS) {
    var array = {};
    array = SolutionS.split('*');
    
    if(array[2]===" • http://www.npo.gov.za "){
   var solution3 = [];
    for(var i = 1; i<array.length; i++){
    	solution3 = array[2] ;
    }
    }
   
 return solution3;
},
 
 
 formatterLinkG: function (SolutionS) {
    var array = {};
    array = SolutionS.split('*');
    
   if (array[8]===" • https://www.gauteng.gov.za/ ") {
    	var solution4 = [];
    	  for(var i = 1; i<array.length; i++){
    	solution4 = array[8] ;
    }
    }
 return solution4;
},





	});
});