sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {

            },

            secondValidation: function () {
                let wizardContainer = this.getView().byId("wizardId")
                let name = this.getView().byId("nameId").getValue()
                let age = this.getView().byId("ageId").getValue()

                if (name.length > 6 && age >= 18) {
                    wizardContainer.validateStep(this.getView().byId("secondWizard"))
                } else {
                    wizardContainer.invalidateStep(this.getView().byId("secondWizard"))
                }
            },

            thirdValidation: function () {
                let checkBox = this.getView().byId("confirmationCheckbox").getSelected()
                let wizardContainer = this.getView().byId("wizardId")
                if (checkBox) {
                    wizardContainer.validateStep(this.getView().byId("fourWizard"))
                } else {
                    wizardContainer.invalidateStep(this.getView().byId("fourWizard"))
                }
            },
            onWizardCompleted: function () {
                new sap.m.MessageBox.success("Successfully submitted. Hooray!!")
            }
        });
    });
