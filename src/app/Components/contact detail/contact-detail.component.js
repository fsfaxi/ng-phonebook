"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var contact_selected_service_1 = require("../../Services/contact-selected.service");
var ContactDetailComponent = (function () {
    function ContactDetailComponent(cts) {
        this.cts = cts;
    }
    ContactDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cts.currentCT.subscribe(function (ct) { return _this.ct = ct; });
    };
    return ContactDetailComponent;
}());
ContactDetailComponent = __decorate([
    core_1.Component({
        selector: 'ct-detail',
        templateUrl: './contact-detail.component.html',
        styleUrls: ['./contact-detail.css'],
        providers: [contact_selected_service_1.ContactSelectedService],
    }),
    __metadata("design:paramtypes", [contact_selected_service_1.ContactSelectedService])
], ContactDetailComponent);
exports.ContactDetailComponent = ContactDetailComponent;
//# sourceMappingURL=contact-detail.component.js.map