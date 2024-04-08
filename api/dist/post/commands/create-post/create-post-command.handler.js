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
exports.CreatePostCommandHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const post_aggregate_service_1 = require("../../aggregate/post-aggregate/post-aggregate.service");
const create_post_command_1 = require("./create-post.command");
let CreatePostCommandHandler = class CreatePostCommandHandler {
    constructor(publisher, manager) {
        this.publisher = publisher;
        this.manager = manager;
    }
    async execute(command) {
        const { postPayload } = command;
        const aggregate = this.publisher.mergeObjectContext(this.manager);
        await aggregate.createPost(postPayload);
        aggregate.commit();
    }
};
exports.CreatePostCommandHandler = CreatePostCommandHandler;
exports.CreatePostCommandHandler = CreatePostCommandHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_post_command_1.CreatePostCommand),
    __metadata("design:paramtypes", [cqrs_1.EventPublisher,
        post_aggregate_service_1.PostAggregateService])
], CreatePostCommandHandler);
//# sourceMappingURL=create-post-command.handler.js.map