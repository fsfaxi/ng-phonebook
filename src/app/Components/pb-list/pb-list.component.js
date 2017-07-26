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
var contact_service_1 = require("../../Services/contact.service");
var contact_selected_service_1 = require("../../Services/contact-selected.service");
var PbListComponent = (function () {
    function PbListComponent(contactService, cts) {
        this.contactService = contactService;
        this.cts = cts;
    }
    PbListComponent.prototype.ngOnInit = function () {
        this.getContacts();
    };
    // onSelect(ct : Contact) : void
    // {
    //     this.selectedContact=ct;        
    // }
    PbListComponent.prototype.getContacts = function () {
        this.contacts = this.contactService.getContacts();
    };
    PbListComponent.prototype.ctChange = function (ct) {
        this.cts.changeCT(ct);
    };
    return PbListComponent;
}());
PbListComponent = __decorate([
    core_1.Component({
        selector: 'pb-list',
        templateUrl: './pb-list.component.html',
        styleUrls: ['./pb-list.component.css'],
        providers: [contact_service_1.ContactService],
    }),
    __metadata("design:paramtypes", [contact_service_1.ContactService, contact_selected_service_1.ContactSelectedService])
], PbListComponent);
exports.PbListComponent = PbListComponent;
//# sourceMappingURL=pb-list.component.js.map