/*global QUnit*/

sap.ui.define([
	"gdsd/FAQ_App/controller/FAQ.controller"
], function (Controller) {
	"use strict";

	QUnit.module("FAQ Controller");

	QUnit.test("I should test the FAQ controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});