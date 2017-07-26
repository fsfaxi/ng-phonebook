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
var contact_service_1 = require("./Services/contact.service");
var AppComponent = (function () {
    function AppComponent(contactService) {
        this.contactService = contactService;
        this.name = 'Angular';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getContacts();
    };
    AppComponent.prototype.getContacts = function () {
        this.contacts = this.contactService.getContacts();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  \n    <div id=\"app-container\">\n      <h1>Hello {{name}}</h1>\n      <div id=\"app-innercontainer\">\n        <div id=\"app-left\">\n           <pb-list></pb-list>\n        </div>\n        <div id =\"app-right\">\n            <pb-view></pb-view>  \n        </div>\n\n       \n       \n      </div>\n      \n    </div>    \n        \n        \n        \n  ",
        styleUrls: ['./app.component.css'],
        providers: [contact_service_1.ContactService],
    }),
    __metadata("design:paramtypes", [contact_service_1.ContactService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map