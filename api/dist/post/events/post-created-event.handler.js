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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreatedEventHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const post_service_1 = require("../entities/post.service");
const post_created_event_1 = require("./post-created.event");
let PostCreatedEventHandler = class PostCreatedEventHandler {
    constructor(postService) {
        this.postService = postService;
    }
    async handle(event) {
        const { post } = event;
        return await this.postService.create(post);
    }
};
exports.PostCreatedEventHandler = PostCreatedEventHandler;
exports.PostCreatedEventHandler = PostCreatedEventHandler = __decorate([
    (0, cqrs_1.EventsHandler)(post_created_event_1.PostCreatedEvent),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostCreatedEventHandler);
//# sourceMappingURL=post-created-event.handler.js.map