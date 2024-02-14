/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/administration/administration.module.ts":
/*!*****************************************************!*\
  !*** ./src/administration/administration.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdministrationModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const administration_service_1 = __webpack_require__(/*! ./administration.service */ "./src/administration/administration.service.ts");
const administration_resolver_1 = __webpack_require__(/*! ./administration.resolver */ "./src/administration/administration.resolver.ts");
let AdministrationModule = class AdministrationModule {
};
AdministrationModule = __decorate([
    common_1.Module({
        providers: [administration_resolver_1.AdministrationResolver, administration_service_1.AdministrationService],
    })
], AdministrationModule);
exports.AdministrationModule = AdministrationModule;


/***/ }),

/***/ "./src/administration/administration.resolver.ts":
/*!*******************************************************!*\
  !*** ./src/administration/administration.resolver.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdministrationResolver = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const administration_service_1 = __webpack_require__(/*! ./administration.service */ "./src/administration/administration.service.ts");
const administration_entity_1 = __webpack_require__(/*! ./entities/administration.entity */ "./src/administration/entities/administration.entity.ts");
const create_administration_input_1 = __webpack_require__(/*! ./dto/create-administration.input */ "./src/administration/dto/create-administration.input.ts");
const update_administration_input_1 = __webpack_require__(/*! ./dto/update-administration.input */ "./src/administration/dto/update-administration.input.ts");
let AdministrationResolver = class AdministrationResolver {
    constructor(administrationService) {
        this.administrationService = administrationService;
    }
    createAdministration(createAdministrationInput) {
        return this.administrationService.create(createAdministrationInput);
    }
    findAll() {
        return this.administrationService.findAll();
    }
    findOne(id) {
        return this.administrationService.findOne(id);
    }
    updateAdministration(updateAdministrationInput) {
        return this.administrationService.update(updateAdministrationInput.id, updateAdministrationInput);
    }
    removeAdministration(id) {
        return this.administrationService.remove(id);
    }
};
__decorate([
    graphql_1.Mutation(() => administration_entity_1.Administration),
    __param(0, graphql_1.Args('createAdministrationInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_administration_input_1.CreateAdministrationInput !== "undefined" && create_administration_input_1.CreateAdministrationInput) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], AdministrationResolver.prototype, "createAdministration", null);
__decorate([
    graphql_1.Query(() => [administration_entity_1.Administration], { name: 'administration' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdministrationResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => administration_entity_1.Administration, { name: 'administration' }),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AdministrationResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation(() => administration_entity_1.Administration),
    __param(0, graphql_1.Args('updateAdministrationInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof update_administration_input_1.UpdateAdministrationInput !== "undefined" && update_administration_input_1.UpdateAdministrationInput) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], AdministrationResolver.prototype, "updateAdministration", null);
__decorate([
    graphql_1.Mutation(() => administration_entity_1.Administration),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AdministrationResolver.prototype, "removeAdministration", null);
AdministrationResolver = __decorate([
    graphql_1.Resolver(() => administration_entity_1.Administration),
    __metadata("design:paramtypes", [typeof (_c = typeof administration_service_1.AdministrationService !== "undefined" && administration_service_1.AdministrationService) === "function" ? _c : Object])
], AdministrationResolver);
exports.AdministrationResolver = AdministrationResolver;


/***/ }),

/***/ "./src/administration/administration.service.ts":
/*!******************************************************!*\
  !*** ./src/administration/administration.service.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdministrationService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AdministrationService = class AdministrationService {
    create(createAdministrationInput) {
        return 'This action adds a new administration';
    }
    findAll() {
        return `This action returns all administration`;
    }
    findOne(id) {
        return `This action returns a #${id} administration`;
    }
    update(id, updateAdministrationInput) {
        return `This action updates a #${id} administration`;
    }
    remove(id) {
        return `This action removes a #${id} administration`;
    }
};
AdministrationService = __decorate([
    common_1.Injectable()
], AdministrationService);
exports.AdministrationService = AdministrationService;


/***/ }),

/***/ "./src/administration/dto/create-administration.input.ts":
/*!***************************************************************!*\
  !*** ./src/administration/dto/create-administration.input.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateAdministrationInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let CreateAdministrationInput = class CreateAdministrationInput {
};
__decorate([
    graphql_1.Field(() => graphql_1.Int, { description: 'Example field (placeholder)' }),
    __metadata("design:type", Number)
], CreateAdministrationInput.prototype, "exampleField", void 0);
CreateAdministrationInput = __decorate([
    graphql_1.InputType()
], CreateAdministrationInput);
exports.CreateAdministrationInput = CreateAdministrationInput;


/***/ }),

/***/ "./src/administration/dto/update-administration.input.ts":
/*!***************************************************************!*\
  !*** ./src/administration/dto/update-administration.input.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateAdministrationInput = void 0;
const create_administration_input_1 = __webpack_require__(/*! ./create-administration.input */ "./src/administration/dto/create-administration.input.ts");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let UpdateAdministrationInput = class UpdateAdministrationInput extends graphql_1.PartialType(create_administration_input_1.CreateAdministrationInput) {
};
__decorate([
    graphql_1.Field(() => graphql_1.Int),
    __metadata("design:type", Number)
], UpdateAdministrationInput.prototype, "id", void 0);
UpdateAdministrationInput = __decorate([
    graphql_1.InputType()
], UpdateAdministrationInput);
exports.UpdateAdministrationInput = UpdateAdministrationInput;


/***/ }),

/***/ "./src/administration/entities/administration.entity.ts":
/*!**************************************************************!*\
  !*** ./src/administration/entities/administration.entity.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Administration = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let Administration = class Administration {
};
__decorate([
    graphql_1.Field(() => graphql_1.Int, { description: 'Example field (placeholder)' }),
    __metadata("design:type", Number)
], Administration.prototype, "exampleField", void 0);
Administration = __decorate([
    graphql_1.ObjectType()
], Administration);
exports.Administration = Administration;


/***/ }),

/***/ "./src/app.controller.ts":
/*!*******************************!*\
  !*** ./src/app.controller.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const fs_1 = __webpack_require__(/*! fs */ "fs");
const path_1 = __webpack_require__(/*! path */ "path");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./src/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getFile(filename, res) {
        const file = fs_1.createReadStream(path_1.join(process.cwd(), 'uploads', filename));
        file.pipe(res);
    }
};
__decorate([
    common_1.Get('/stream/:file'),
    __param(0, common_1.Param('file')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getFile", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const apollo_1 = __webpack_require__(/*! @nestjs/apollo */ "@nestjs/apollo");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
const path_1 = __webpack_require__(/*! path */ "path");
const administration_module_1 = __webpack_require__(/*! ./administration/administration.module */ "./src/administration/administration.module.ts");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./src/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./src/app.service.ts");
const auth_module_1 = __webpack_require__(/*! ./auth/auth.module */ "./src/auth/auth.module.ts");
const bundle_module_1 = __webpack_require__(/*! ./bundle/bundle.module */ "./src/bundle/bundle.module.ts");
const chatbot_module_1 = __webpack_require__(/*! ./chatbot/chatbot.module */ "./src/chatbot/chatbot.module.ts");
const commerce_module_1 = __webpack_require__(/*! ./commerce/commerce.module */ "./src/commerce/commerce.module.ts");
const default_config_module_1 = __webpack_require__(/*! ./default-config/default-config.module */ "./src/default-config/default-config.module.ts");
const feedback_module_1 = __webpack_require__(/*! ./feedback/feedback.module */ "./src/feedback/feedback.module.ts");
const notification_module_1 = __webpack_require__(/*! ./notification/notification.module */ "./src/notification/notification.module.ts");
const progress_module_1 = __webpack_require__(/*! ./progress/progress.module */ "./src/progress/progress.module.ts");
const report_module_1 = __webpack_require__(/*! ./report/report.module */ "./src/report/report.module.ts");
const review_module_1 = __webpack_require__(/*! ./review/review.module */ "./src/review/review.module.ts");
const stats_module_1 = __webpack_require__(/*! ./stats/stats.module */ "./src/stats/stats.module.ts");
const suggestion_module_1 = __webpack_require__(/*! ./suggestion/suggestion.module */ "./src/suggestion/suggestion.module.ts");
const trip_module_1 = __webpack_require__(/*! ./trip/trip.module */ "./src/trip/trip.module.ts");
const user_module_1 = __webpack_require__(/*! ./user/user.module */ "./src/user/user.module.ts");
const configuration_1 = __webpack_require__(/*! ./utils/config/configuration */ "./src/utils/config/configuration.ts");
const supplier_module_1 = __webpack_require__(/*! ./supplier/supplier.module */ "./src/supplier/supplier.module.ts");
const backup_service_1 = __webpack_require__(/*! ./utils/backup.service */ "./src/utils/backup.service.ts");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const meta_data_module_1 = __webpack_require__(/*! ./meta-data/meta-data.module */ "./src/meta-data/meta-data.module.ts");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Global(),
    common_1.Module({
        imports: [
            schedule_1.ScheduleModule.forRoot(),
            auth_module_1.AuthModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [configuration_1.default],
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    uri: configService.get("db.connectionUrl"),
                }),
                inject: [config_1.ConfigService],
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                formatError: (err) => ({
                    message: err.message,
                    status: err.status || 500,
                }),
                uploads: {
                    maxFileSize: 2000000000,
                    maxFiles: 10,
                },
                playground: true,
                context: ({ req, connection }) => connection
                    ? {
                        req: {
                            headers: Object.assign(Object.assign({}, connection.context), { authorization: connection.context["Authorization"] ||
                                    req.headers["authorization"] }),
                        },
                    }
                    : { req },
                installSubscriptionHandlers: true,
                autoSchemaFile: path_1.join(process.cwd(), "src/schema.gql"),
            }),
            user_module_1.UserModule,
            notification_module_1.NotificationModule,
            commerce_module_1.BaseCommerceModule,
            administration_module_1.AdministrationModule,
            review_module_1.ReviewModule,
            bundle_module_1.BundleModule,
            trip_module_1.TripModule,
            chatbot_module_1.ChatbotModule,
            suggestion_module_1.SuggestionModule,
            feedback_module_1.FeedbackModule,
            report_module_1.ReportModule,
            progress_module_1.ProgressModule,
            stats_module_1.StatsModule,
            default_config_module_1.DefaultConfigModule,
            supplier_module_1.SupplierModule,
            meta_data_module_1.MetaDataModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: "PUB_SUB",
                useValue: new apollo_server_express_1.PubSub(),
            },
            backup_service_1.BackupService,
        ],
        exports: ["PUB_SUB"],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app.service.ts":
/*!****************************!*\
  !*** ./src/app.service.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./src/auth/auth.controller.ts":
/*!*************************************!*\
  !*** ./src/auth/auth.controller.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/auth/auth.service.ts");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    localLogin(req) {
        return this.authService.login(req.user);
    }
    facebookLogin() { }
    facebookCallback(req) {
        return this.authService.login(req.user);
    }
    googleLogin() { }
    googleCallback(req) {
        return this.authService.login(req.user);
    }
    facebookToken(req) {
        return this.authService.login(req.user);
    }
    googleToken(req) {
        return this.authService.login(req.user);
    }
    appleToken(req) {
        return common_1.HttpStatus.OK;
    }
    async redirect(payload) {
        console.log({ payload });
        if (payload.id_token) {
            return this.authService.registerByIDtoken(payload);
        }
        throw new common_1.UnauthorizedException("Unauthorized");
    }
};
__decorate([
    common_1.Get("local/login"),
    common_1.UseGuards(passport_1.AuthGuard("local")),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "localLogin", null);
__decorate([
    common_1.Get("facebook/login"),
    common_1.UseGuards(passport_1.AuthGuard("facebook")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "facebookLogin", null);
__decorate([
    common_1.Get("facebook/callback"),
    common_1.UseGuards(passport_1.AuthGuard("facebook")),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "facebookCallback", null);
__decorate([
    common_1.Get("google/login"),
    common_1.UseGuards(passport_1.AuthGuard("google")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "googleLogin", null);
__decorate([
    common_1.Get("google/callback"),
    common_1.UseGuards(passport_1.AuthGuard("google")),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "googleCallback", null);
__decorate([
    common_1.Get("facebook/token"),
    common_1.UseGuards(passport_1.AuthGuard("facebook-token")),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "facebookToken", null);
__decorate([
    common_1.Post("google/token"),
    common_1.UseGuards(passport_1.AuthGuard("google-id-token")),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "googleToken", null);
__decorate([
    common_1.Get("apple/token"),
    common_1.UseGuards(passport_1.AuthGuard("apple")),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "appleToken", null);
__decorate([
    common_1.Post("apple/callback"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], AuthController.prototype, "redirect", null);
AuthController = __decorate([
    common_1.Controller("auth"),
    __metadata("design:paramtypes", [typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _b : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),

/***/ "./src/auth/auth.module.ts":
/*!*********************************!*\
  !*** ./src/auth/auth.module.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./src/auth/auth.controller.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/auth/auth.service.ts");
const jwt_strategy_1 = __webpack_require__(/*! ./strategies/jwt.strategy */ "./src/auth/strategies/jwt.strategy.ts");
const local_strategy_1 = __webpack_require__(/*! ./strategies/local.strategy */ "./src/auth/strategies/local.strategy.ts");
const user_module_1 = __webpack_require__(/*! src/user/user.module */ "./src/user/user.module.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const auth_resolver_1 = __webpack_require__(/*! ./auth.resolver */ "./src/auth/auth.resolver.ts");
const appleToken_strategy_1 = __webpack_require__(/*! ./strategies/appleToken.strategy */ "./src/auth/strategies/appleToken.strategy.ts");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [
            common_1.forwardRef(() => passport_1.PassportModule),
            common_1.forwardRef(() => user_module_1.UserModule),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    secret: configService.get("jwt.secret"),
                    signOptions: { expiresIn: "2d" },
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_resolver_1.AuthenticationResolver,
            auth_service_1.AuthService,
            local_strategy_1.LocalStrategy,
            jwt_strategy_1.JwtStrategy,
            appleToken_strategy_1.AppleStrategy,
        ],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./src/auth/auth.resolver.ts":
/*!***********************************!*\
  !*** ./src/auth/auth.resolver.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthenticationResolver = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const create_user_input_1 = __webpack_require__(/*! src/user/dto/create-user.input */ "./src/user/dto/create-user.input.ts");
const user_entity_1 = __webpack_require__(/*! src/user/entities/user.entity */ "./src/user/entities/user.entity.ts");
const user_service_1 = __webpack_require__(/*! src/user/user.service */ "./src/user/user.service.ts");
const current_user_decorator_1 = __webpack_require__(/*! src/utils/guards/current-user.decorator */ "./src/utils/guards/current-user.decorator.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! src/utils/guards/jwt-auth.guard */ "./src/utils/guards/jwt-auth.guard.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/auth/auth.service.ts");
const login_user_input_1 = __webpack_require__(/*! ./inputs/login-user.input */ "./src/auth/inputs/login-user.input.ts");
let AuthenticationResolver = class AuthenticationResolver {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    async login(authInfo) {
        const user = await this.authService.validateUserLocal(authInfo.email, authInfo.password);
        if (user)
            return await this.authService.login({ user: user.toJSON() });
        else
            return null;
    }
    async signup(createLocalUserInput) {
        return this.userService.create(createLocalUserInput);
    }
    async sendConfirmationCode(user) {
        return this.userService.sendConfirmationCode(user.id);
    }
    async activateAccount(user, code) {
        return this.userService.activateAcount(user.id, code);
    }
    async refresh(user) {
    }
};
__decorate([
    graphql_1.Mutation(() => login_user_input_1.AuthResponse, { nullable: true }),
    __param(0, graphql_1.Args('authInfo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof login_user_input_1.AuthInfo !== "undefined" && login_user_input_1.AuthInfo) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], AuthenticationResolver.prototype, "login", null);
__decorate([
    graphql_1.Mutation(() => user_entity_1.User),
    __param(0, graphql_1.Args('informations')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_user_input_1.CreateUserInput !== "undefined" && create_user_input_1.CreateUserInput) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AuthenticationResolver.prototype, "signup", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.GqlAuthGuard),
    graphql_1.Mutation(() => graphql_1.Int),
    __param(0, current_user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthenticationResolver.prototype, "sendConfirmationCode", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.GqlAuthGuard),
    graphql_1.Mutation(() => graphql_1.Int),
    __param(0, current_user_decorator_1.CurrentUser()),
    __param(1, graphql_1.Args('code', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AuthenticationResolver.prototype, "activateAccount", null);
__decorate([
    graphql_1.Mutation(() => String),
    __param(0, current_user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthenticationResolver.prototype, "refresh", null);
AuthenticationResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [typeof (_c = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _c : Object, typeof (_d = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _d : Object])
], AuthenticationResolver);
exports.AuthenticationResolver = AuthenticationResolver;


/***/ }),

/***/ "./src/auth/auth.service.ts":
/*!**********************************!*\
  !*** ./src/auth/auth.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = exports.LoginType = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const user_service_1 = __webpack_require__(/*! src/user/user.service */ "./src/user/user.service.ts");
const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
var LoginType;
(function (LoginType) {
    LoginType["facebook"] = "Facebook";
    LoginType["google"] = "Google";
    LoginType["local"] = "Local";
})(LoginType = exports.LoginType || (exports.LoginType = {}));
let AuthService = class AuthService {
    constructor(jwtService, userService) {
        this.jwtService = jwtService;
        this.userService = userService;
    }
    async validateUserLocal(email, password) {
        const user = await this.userService.findByEmail(email);
        if (user && user.password != null) {
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                return user;
            }
            return null;
        }
        return null;
    }
    async login(payload) {
        const userEntity = await this.userService.findByEmail(payload.user.email);
        const { _id, email, username } = payload.user;
        return {
            token: this.jwtService.sign({ _id, email, username }),
            role: "none",
            user: userEntity,
        };
    }
    async register(informations) {
        const user = await this.userService.findByEmail(informations.email);
        if (user) {
            return await this.userService.update(user._id, informations);
        }
        else {
            return await this.userService.create(informations);
        }
    }
    async registerByIDtoken(payload) {
        if (payload.hasOwnProperty("id_token")) {
            let email, firstName, lastName = "";
            const decodedObj = await this.jwtService.decode(payload.id_token);
            const accountId = decodedObj.sub || "";
            console.info(`Apple Account ID: ${accountId}`);
            if (decodedObj.hasOwnProperty("email")) {
                email = decodedObj["email"];
                console.info(`Apple Email: ${email}`);
            }
            if (payload.hasOwnProperty("user")) {
                const userData = JSON.parse(payload.user);
                const { firstName, lastName } = userData.name || {};
            }
            const user = await this.userService.findByEmail(email);
            if (user) {
                return {
                    token: this.jwtService.sign({ _id: user.id, email, username: email }),
                    role: "none",
                    user: user,
                };
            }
            else {
                return await this.userService.create({ username: email, email });
            }
        }
        throw new common_1.UnauthorizedException("Unauthorized");
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _b : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/auth/inputs/login-user.input.ts":
/*!*********************************************!*\
  !*** ./src/auth/inputs/login-user.input.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthResponse = exports.AuthInfo = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const user_entity_1 = __webpack_require__(/*! src/user/entities/user.entity */ "./src/user/entities/user.entity.ts");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
let AuthInfo = class AuthInfo {
};
__decorate([
    class_validator_1.IsEmail(),
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], AuthInfo.prototype, "email", void 0);
__decorate([
    class_validator_1.Length(8),
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], AuthInfo.prototype, "password", void 0);
AuthInfo = __decorate([
    graphql_1.InputType()
], AuthInfo);
exports.AuthInfo = AuthInfo;
let AuthResponse = class AuthResponse {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], AuthResponse.prototype, "token", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], AuthResponse.prototype, "role", void 0);
__decorate([
    graphql_1.Field(() => user_entity_1.User),
    __metadata("design:type", typeof (_a = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _a : Object)
], AuthResponse.prototype, "user", void 0);
AuthResponse = __decorate([
    graphql_1.ObjectType()
], AuthResponse);
exports.AuthResponse = AuthResponse;


/***/ }),

/***/ "./src/auth/strategies/appleToken.strategy.ts":
/*!****************************************************!*\
  !*** ./src/auth/strategies/appleToken.strategy.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppleStrategy = void 0;
const nestjs_passport_apple_1 = __webpack_require__(/*! @arendajaelu/nestjs-passport-apple */ "@arendajaelu/nestjs-passport-apple");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const auth_service_1 = __webpack_require__(/*! ../auth.service */ "./src/auth/auth.service.ts");
const fs = __webpack_require__(/*! fs */ "fs");
let AppleStrategy = class AppleStrategy extends passport_1.PassportStrategy(nestjs_passport_apple_1.Strategy, "apple") {
    constructor(authService, configService, jwtService) {
        super({
            clientID: configService.get("auth.apple.clientID"),
            teamID: configService.get("auth.apple.teamID"),
            keyID: configService.get("auth.apple.keyID"),
            keyFilePath: "./AuthKey_YP3V9VY8D9.p8",
            callbackURL: "https://tynass.com/auth/apple/callback",
            passReqToCallback: false,
            scope: ["email", "name"],
        });
        this.authService = authService;
        this.configService = configService;
        this.jwtService = jwtService;
        console.log(configService.get("auth.apple.clientID"));
        console.log(configService.get("auth.apple.teamID"));
        console.log(configService.get("auth.apple.keyID"));
    }
};
AppleStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object, typeof (_c = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _c : Object])
], AppleStrategy);
exports.AppleStrategy = AppleStrategy;


/***/ }),

/***/ "./src/auth/strategies/jwt.strategy.ts":
/*!*********************************************!*\
  !*** ./src/auth/strategies/jwt.strategy.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let JwtStrategy = class JwtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy) {
    constructor(configService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('jwt.secret')
        });
        this.configService = configService;
    }
    async validate(payload) {
        return {
            id: payload._id,
            username: payload.username,
            email: payload.email,
        };
    }
};
JwtStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


/***/ }),

/***/ "./src/auth/strategies/local.strategy.ts":
/*!***********************************************!*\
  !*** ./src/auth/strategies/local.strategy.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const passport_local_1 = __webpack_require__(/*! passport-local */ "passport-local");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ../auth.service */ "./src/auth/auth.service.ts");
let LocalStrategy = class LocalStrategy extends passport_1.PassportStrategy(passport_local_1.Strategy) {
    constructor(authService) {
        super({
            usernameField: 'email',
            passwordField: 'password',
        });
        this.authService = authService;
    }
    async validate(username, password) {
        const user = await this.authService.validateUserLocal(username, password);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
};
LocalStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], LocalStrategy);
exports.LocalStrategy = LocalStrategy;


/***/ }),

/***/ "./src/bundle/bundle.module.ts":
/*!*************************************!*\
  !*** ./src/bundle/bundle.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BundleModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const bundle_service_1 = __webpack_require__(/*! ./bundle.service */ "./src/bundle/bundle.service.ts");
const bundle_resolver_1 = __webpack_require__(/*! ./bundle.resolver */ "./src/bundle/bundle.resolver.ts");
const bundle_entity_1 = __webpack_require__(/*! ./entities/bundle.entity */ "./src/bundle/entities/bundle.entity.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const filter_entity_1 = __webpack_require__(/*! ./entities/filter.entity */ "./src/bundle/entities/filter.entity.ts");
const model_entity_1 = __webpack_require__(/*! ./entities/model.entity */ "./src/bundle/entities/model.entity.ts");
const modelViewer_entity_1 = __webpack_require__(/*! ./entities/modelViewer.entity */ "./src/bundle/entities/modelViewer.entity.ts");
let BundleModule = class BundleModule {
};
BundleModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: bundle_entity_1.Bundle.name, schema: bundle_entity_1.BundleSchema },
                { name: filter_entity_1.Filter.name, schema: filter_entity_1.FilterSchema },
                { name: model_entity_1.Model.name, schema: model_entity_1.ModelSchema },
                { name: modelViewer_entity_1.ModelViewer.name, schema: modelViewer_entity_1.ModelViewerSchema }
            ]),
        ],
        exports: [bundle_service_1.BundleService],
        providers: [bundle_resolver_1.BundleResolver, bundle_service_1.BundleService],
    })
], BundleModule);
exports.BundleModule = BundleModule;


/***/ }),

/***/ "./src/bundle/bundle.resolver.ts":
/*!***************************************!*\
  !*** ./src/bundle/bundle.resolver.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BundleResolver = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const bundle_service_1 = __webpack_require__(/*! ./bundle.service */ "./src/bundle/bundle.service.ts");
const bundle_entity_1 = __webpack_require__(/*! ./entities/bundle.entity */ "./src/bundle/entities/bundle.entity.ts");
const create_bundle_input_1 = __webpack_require__(/*! ./dto/create-bundle.input */ "./src/bundle/dto/create-bundle.input.ts");
const update_bundle_input_1 = __webpack_require__(/*! ./dto/update-bundle.input */ "./src/bundle/dto/update-bundle.input.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const file_interceptor_1 = __webpack_require__(/*! src/utils/file.interceptor */ "./src/utils/file.interceptor.ts");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
const filter_entity_1 = __webpack_require__(/*! ./entities/filter.entity */ "./src/bundle/entities/filter.entity.ts");
const model_entity_1 = __webpack_require__(/*! ./entities/model.entity */ "./src/bundle/entities/model.entity.ts");
const create_model_input_1 = __webpack_require__(/*! ./dto/create-model.input */ "./src/bundle/dto/create-model.input.ts");
const create_filter_input_1 = __webpack_require__(/*! ./dto/create-filter.input */ "./src/bundle/dto/create-filter.input.ts");
const create_modelViewer_input_1 = __webpack_require__(/*! ./dto/create-modelViewer.input */ "./src/bundle/dto/create-modelViewer.input.ts");
const modelViewer_entity_1 = __webpack_require__(/*! ./entities/modelViewer.entity */ "./src/bundle/entities/modelViewer.entity.ts");
let BundleResolver = class BundleResolver {
    constructor(bundleService) {
        this.bundleService = bundleService;
    }
    createBundle(createBundleInput) {
        return this.bundleService.createBundle(createBundleInput);
    }
    findAllBundle() {
        return this.bundleService.findAllBundles();
    }
    findOneBundle(id) {
        return this.bundleService.findOneBundle(id);
    }
    createFilter(createFilterInput) {
        return this.bundleService.createFilter(createFilterInput);
    }
    findAllFilter() {
        return this.bundleService.findAllFilters();
    }
    findOneFilter(id) {
        return this.bundleService.findOneFilter(id);
    }
    createModel(createModelInput) {
        return this.bundleService.createModel(createModelInput);
    }
    findAllModel() {
        return this.bundleService.findAllModels();
    }
    findOneModel(id) {
        return this.bundleService.findOneModel(id);
    }
    createModelViewer(createModelViewerInput) {
        return this.bundleService.createModelViewer(createModelViewerInput);
    }
    findAllModelViewer() {
        return this.bundleService.findAllModelViewers();
    }
    findOneModelViewer(id) {
        return this.bundleService.findOneModelViewer(id);
    }
    updateBundle(updateBundleInput) {
        return this.bundleService.update(updateBundleInput.id, updateBundleInput);
    }
    removeBundle(id) {
        return this.bundleService.remove(id);
    }
    async uploadBundle(files) {
        return true;
    }
};
__decorate([
    graphql_1.Mutation(() => bundle_entity_1.Bundle),
    __param(0, graphql_1.Args('createBundleInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_bundle_input_1.CreateBundleInput !== "undefined" && create_bundle_input_1.CreateBundleInput) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], BundleResolver.prototype, "createBundle", null);
__decorate([
    graphql_1.Query(() => [bundle_entity_1.Bundle], { name: 'bundle' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BundleResolver.prototype, "findAllBundle", null);
__decorate([
    graphql_1.Query(() => bundle_entity_1.Bundle, { name: 'bundle' }),
    __param(0, graphql_1.Args('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BundleResolver.prototype, "findOneBundle", null);
__decorate([
    graphql_1.Mutation(() => filter_entity_1.Filter),
    __param(0, graphql_1.Args('createFilterInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_filter_input_1.CreateFilterInput !== "undefined" && create_filter_input_1.CreateFilterInput) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], BundleResolver.prototype, "createFilter", null);
__decorate([
    graphql_1.Query(() => [filter_entity_1.Filter], { name: 'filters' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BundleResolver.prototype, "findAllFilter", null);
__decorate([
    graphql_1.Query(() => filter_entity_1.Filter, { name: 'filter' }),
    __param(0, graphql_1.Args('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BundleResolver.prototype, "findOneFilter", null);
__decorate([
    common_1.UseInterceptors(file_interceptor_1.GraphqlFiles(['createModelInput.file'])),
    graphql_1.Mutation(() => model_entity_1.Model),
    __param(0, graphql_1.Args('createModelInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof create_model_input_1.CreateModelInput !== "undefined" && create_model_input_1.CreateModelInput) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], BundleResolver.prototype, "createModel", null);
__decorate([
    graphql_1.Query(() => [model_entity_1.Model], { name: 'models' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BundleResolver.prototype, "findAllModel", null);
__decorate([
    graphql_1.Query(() => model_entity_1.Model, { name: 'model' }),
    __param(0, graphql_1.Args('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BundleResolver.prototype, "findOneModel", null);
__decorate([
    common_1.UseInterceptors(file_interceptor_1.GraphqlFiles(['createModelViewerInput.file'])),
    graphql_1.Mutation(() => modelViewer_entity_1.ModelViewer),
    __param(0, graphql_1.Args('createModelViewerInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof create_modelViewer_input_1.CreateModelViewerInput !== "undefined" && create_modelViewer_input_1.CreateModelViewerInput) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], BundleResolver.prototype, "createModelViewer", null);
__decorate([
    graphql_1.Query(() => [modelViewer_entity_1.ModelViewer], { name: 'modelViewers' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BundleResolver.prototype, "findAllModelViewer", null);
__decorate([
    graphql_1.Query(() => modelViewer_entity_1.ModelViewer, { name: 'modelViewer' }),
    __param(0, graphql_1.Args('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BundleResolver.prototype, "findOneModelViewer", null);
__decorate([
    graphql_1.Mutation(() => bundle_entity_1.Bundle),
    __param(0, graphql_1.Args('updateBundleInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof update_bundle_input_1.UpdateBundleInput !== "undefined" && update_bundle_input_1.UpdateBundleInput) === "function" ? _e : Object]),
    __metadata("design:returntype", void 0)
], BundleResolver.prototype, "updateBundle", null);
__decorate([
    graphql_1.Mutation(() => bundle_entity_1.Bundle),
    __param(0, graphql_1.Args('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BundleResolver.prototype, "removeBundle", null);
__decorate([
    common_1.UseInterceptors(file_interceptor_1.GraphqlFiles(['bundle'])),
    graphql_1.Mutation(() => Boolean),
    __param(0, graphql_1.Args('bundle', { type: () => file_schema_1.UploadMedia })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BundleResolver.prototype, "uploadBundle", null);
BundleResolver = __decorate([
    graphql_1.Resolver(() => bundle_entity_1.Bundle),
    __metadata("design:paramtypes", [typeof (_f = typeof bundle_service_1.BundleService !== "undefined" && bundle_service_1.BundleService) === "function" ? _f : Object])
], BundleResolver);
exports.BundleResolver = BundleResolver;


/***/ }),

/***/ "./src/bundle/bundle.service.ts":
/*!**************************************!*\
  !*** ./src/bundle/bundle.service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BundleService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const bundle_entity_1 = __webpack_require__(/*! ./entities/bundle.entity */ "./src/bundle/entities/bundle.entity.ts");
const filter_entity_1 = __webpack_require__(/*! ./entities/filter.entity */ "./src/bundle/entities/filter.entity.ts");
const TModel = __webpack_require__(/*! ./entities/model.entity */ "./src/bundle/entities/model.entity.ts");
const modelViewer_entity_1 = __webpack_require__(/*! ./entities/modelViewer.entity */ "./src/bundle/entities/modelViewer.entity.ts");
let BundleService = class BundleService {
    constructor(BundleModel, FilterModel, TmodelModel, ModelViewerModel) {
        this.BundleModel = BundleModel;
        this.FilterModel = FilterModel;
        this.TmodelModel = TmodelModel;
        this.ModelViewerModel = ModelViewerModel;
    }
    createBundle(bundle) {
        return (new this.BundleModel(bundle)).save();
    }
    createFilter(filter) {
        return (new this.FilterModel(filter)).save();
    }
    createModel(model) {
        return (new this.TmodelModel(model)).save();
    }
    createModelViewer(ModelViewer) {
        return (new this.ModelViewerModel(ModelViewer)).save();
    }
    findAllBundles() {
        return this.BundleModel.find();
    }
    findAllModelViewers() {
        return this.ModelViewerModel.find();
    }
    findAllFilters() {
        return this.FilterModel.find();
    }
    findAllModels() {
        return this.TmodelModel.find();
    }
    findOneBundle(id) {
        return this.BundleModel.findById(id);
    }
    findOneModelViewer(id) {
        return this.ModelViewerModel.findById(id);
    }
    findOneFilter(id) {
        return this.FilterModel.findById(id);
    }
    findOneModel(id) {
        return this.TmodelModel.findById(id);
    }
    update(id, updateBundleInput) {
        return `This action updates a #${id} bundle`;
    }
    remove(id) {
        return `This action removes a #${id} bundle`;
    }
    compile() { }
};
BundleService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(bundle_entity_1.Bundle.name)),
    __param(1, mongoose_1.InjectModel(filter_entity_1.Filter.name)),
    __param(2, mongoose_1.InjectModel(TModel.Model.name)),
    __param(3, mongoose_1.InjectModel(modelViewer_entity_1.ModelViewer.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object, typeof (_d = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _d : Object])
], BundleService);
exports.BundleService = BundleService;


/***/ }),

/***/ "./src/bundle/dto/create-bundle.input.ts":
/*!***********************************************!*\
  !*** ./src/bundle/dto/create-bundle.input.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateBundleInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let CreateBundleInput = class CreateBundleInput {
};
__decorate([
    graphql_1.Field(() => graphql_1.Int, { description: 'Example field (placeholder)' }),
    __metadata("design:type", Number)
], CreateBundleInput.prototype, "exampleField", void 0);
CreateBundleInput = __decorate([
    graphql_1.InputType()
], CreateBundleInput);
exports.CreateBundleInput = CreateBundleInput;


/***/ }),

/***/ "./src/bundle/dto/create-filter.input.ts":
/*!***********************************************!*\
  !*** ./src/bundle/dto/create-filter.input.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateFilterInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let CreateFilterInput = class CreateFilterInput {
};
__decorate([
    graphql_1.Field(() => String, { description: "Filter's name" }),
    __metadata("design:type", String)
], CreateFilterInput.prototype, "title", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Filter's icon" }),
    __metadata("design:type", String)
], CreateFilterInput.prototype, "icon", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Filter's thumbnail" }),
    __metadata("design:type", String)
], CreateFilterInput.prototype, "thumbnail", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Filter's description" }),
    __metadata("design:type", String)
], CreateFilterInput.prototype, "description", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Filter's intent url" }),
    __metadata("design:type", String)
], CreateFilterInput.prototype, "intent", void 0);
CreateFilterInput = __decorate([
    graphql_1.InputType()
], CreateFilterInput);
exports.CreateFilterInput = CreateFilterInput;


/***/ }),

/***/ "./src/bundle/dto/create-model.input.ts":
/*!**********************************************!*\
  !*** ./src/bundle/dto/create-model.input.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateModelInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
let CreateModelInput = class CreateModelInput {
};
__decorate([
    graphql_1.Field(() => String, { description: "Model's name" }),
    __metadata("design:type", String)
], CreateModelInput.prototype, "title", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Model's thumbnail" }),
    __metadata("design:type", String)
], CreateModelInput.prototype, "thumbnail", void 0);
__decorate([
    graphql_1.Field(() => file_schema_1.UploadMedia, { description: "Model's file" }),
    __metadata("design:type", Object)
], CreateModelInput.prototype, "file", void 0);
CreateModelInput = __decorate([
    graphql_1.InputType()
], CreateModelInput);
exports.CreateModelInput = CreateModelInput;


/***/ }),

/***/ "./src/bundle/dto/create-modelViewer.input.ts":
/*!****************************************************!*\
  !*** ./src/bundle/dto/create-modelViewer.input.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateModelViewerInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
let CreateModelViewerInput = class CreateModelViewerInput {
};
__decorate([
    graphql_1.Field(() => String, { description: "ModelViewer's title" }),
    __metadata("design:type", String)
], CreateModelViewerInput.prototype, "title", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "ModelViewer's subtitle" }),
    __metadata("design:type", String)
], CreateModelViewerInput.prototype, "subtitle", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "ModelViewer's description" }),
    __metadata("design:type", String)
], CreateModelViewerInput.prototype, "description", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "ModelViewer's thumbnail" }),
    __metadata("design:type", String)
], CreateModelViewerInput.prototype, "thumbnail", void 0);
__decorate([
    graphql_1.Field(() => file_schema_1.UploadMedia, { description: "ModelViewer's file" }),
    __metadata("design:type", Object)
], CreateModelViewerInput.prototype, "file", void 0);
CreateModelViewerInput = __decorate([
    graphql_1.InputType()
], CreateModelViewerInput);
exports.CreateModelViewerInput = CreateModelViewerInput;


/***/ }),

/***/ "./src/bundle/dto/update-bundle.input.ts":
/*!***********************************************!*\
  !*** ./src/bundle/dto/update-bundle.input.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateBundleInput = void 0;
const create_bundle_input_1 = __webpack_require__(/*! ./create-bundle.input */ "./src/bundle/dto/create-bundle.input.ts");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let UpdateBundleInput = class UpdateBundleInput extends graphql_1.PartialType(create_bundle_input_1.CreateBundleInput) {
};
__decorate([
    graphql_1.Field(() => graphql_1.Int),
    __metadata("design:type", Number)
], UpdateBundleInput.prototype, "id", void 0);
UpdateBundleInput = __decorate([
    graphql_1.InputType()
], UpdateBundleInput);
exports.UpdateBundleInput = UpdateBundleInput;


/***/ }),

/***/ "./src/bundle/entities/bundle.entity.ts":
/*!**********************************************!*\
  !*** ./src/bundle/entities/bundle.entity.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BundleSchema = exports.Bundle = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
let Bundle = class Bundle extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], Bundle.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Bundle's name" }),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Bundle.prototype, "sceneName", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Bundle's description" }),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Bundle.prototype, "description", void 0);
__decorate([
    graphql_1.Field(() => file_schema_1.File, { description: "Bundle's file" }),
    mongoose_1.Prop(),
    __metadata("design:type", typeof (_a = typeof file_schema_1.File !== "undefined" && file_schema_1.File) === "function" ? _a : Object)
], Bundle.prototype, "path", void 0);
Bundle = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], Bundle);
exports.Bundle = Bundle;
exports.BundleSchema = mongoose_1.SchemaFactory.createForClass(Bundle);


/***/ }),

/***/ "./src/bundle/entities/filter.entity.ts":
/*!**********************************************!*\
  !*** ./src/bundle/entities/filter.entity.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FilterSchema = exports.Filter = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let Filter = class Filter extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], Filter.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Filter's name" }),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Filter.prototype, "title", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Filter's icon" }),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Filter.prototype, "icon", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Filter's thumbnail" }),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Filter.prototype, "thumbnail", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Filter's description" }),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Filter.prototype, "description", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Filter's intent url" }),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Filter.prototype, "intent", void 0);
Filter = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], Filter);
exports.Filter = Filter;
exports.FilterSchema = mongoose_1.SchemaFactory.createForClass(Filter);


/***/ }),

/***/ "./src/bundle/entities/model.entity.ts":
/*!*********************************************!*\
  !*** ./src/bundle/entities/model.entity.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModelSchema = exports.Model = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
let Model = class Model extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], Model.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Model's name" }),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Model.prototype, "title", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Model's thumbnail" }),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Model.prototype, "thumbnail", void 0);
__decorate([
    graphql_1.Field(() => file_schema_1.File, { description: "Model's file" }),
    mongoose_1.Prop(),
    __metadata("design:type", typeof (_a = typeof file_schema_1.File !== "undefined" && file_schema_1.File) === "function" ? _a : Object)
], Model.prototype, "file", void 0);
Model = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], Model);
exports.Model = Model;
exports.ModelSchema = mongoose_1.SchemaFactory.createForClass(Model);


/***/ }),

/***/ "./src/bundle/entities/modelViewer.entity.ts":
/*!***************************************************!*\
  !*** ./src/bundle/entities/modelViewer.entity.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModelViewerSchema = exports.ModelViewer = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
let ModelViewer = class ModelViewer extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], ModelViewer.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "ModelViewer's title" }),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ModelViewer.prototype, "title", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "ModelViewer's subtitle" }),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ModelViewer.prototype, "subtitle", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "ModelViewer's description" }),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ModelViewer.prototype, "description", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "ModelViewer's thumbnail" }),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ModelViewer.prototype, "thumbnail", void 0);
__decorate([
    graphql_1.Field(() => file_schema_1.File, { description: "ModelViewer's file" }),
    mongoose_1.Prop(),
    __metadata("design:type", typeof (_a = typeof file_schema_1.File !== "undefined" && file_schema_1.File) === "function" ? _a : Object)
], ModelViewer.prototype, "file", void 0);
ModelViewer = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], ModelViewer);
exports.ModelViewer = ModelViewer;
exports.ModelViewerSchema = mongoose_1.SchemaFactory.createForClass(ModelViewer);


/***/ }),

/***/ "./src/chatbot/chatbot.module.ts":
/*!***************************************!*\
  !*** ./src/chatbot/chatbot.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatbotModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const chatbot_service_1 = __webpack_require__(/*! ./chatbot.service */ "./src/chatbot/chatbot.service.ts");
const chatbot_resolver_1 = __webpack_require__(/*! ./chatbot.resolver */ "./src/chatbot/chatbot.resolver.ts");
const user_module_1 = __webpack_require__(/*! src/user/user.module */ "./src/user/user.module.ts");
let ChatbotModule = class ChatbotModule {
};
ChatbotModule = __decorate([
    common_1.Module({
        imports: [common_1.forwardRef(() => user_module_1.UserModule)],
        providers: [chatbot_resolver_1.ChatbotResolver, chatbot_service_1.ChatbotService]
    })
], ChatbotModule);
exports.ChatbotModule = ChatbotModule;


/***/ }),

/***/ "./src/chatbot/chatbot.resolver.ts":
/*!*****************************************!*\
  !*** ./src/chatbot/chatbot.resolver.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatbotResolver = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const jwt_auth_guard_1 = __webpack_require__(/*! src/utils/guards/jwt-auth.guard */ "./src/utils/guards/jwt-auth.guard.ts");
const chatbot_entity_1 = __webpack_require__(/*! ./entities/chatbot.entity */ "./src/chatbot/entities/chatbot.entity.ts");
let ChatbotResolver = class ChatbotResolver {
    constructor() { }
};
ChatbotResolver = __decorate([
    common_1.UseGuards(jwt_auth_guard_1.GqlAuthGuard),
    graphql_1.Resolver(() => chatbot_entity_1.Chatbot),
    __metadata("design:paramtypes", [])
], ChatbotResolver);
exports.ChatbotResolver = ChatbotResolver;


/***/ }),

/***/ "./src/chatbot/chatbot.service.ts":
/*!****************************************!*\
  !*** ./src/chatbot/chatbot.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatbotService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let ChatbotService = class ChatbotService {
};
ChatbotService = __decorate([
    common_1.Injectable()
], ChatbotService);
exports.ChatbotService = ChatbotService;


/***/ }),

/***/ "./src/chatbot/entities/chatbot.entity.ts":
/*!************************************************!*\
  !*** ./src/chatbot/entities/chatbot.entity.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Chatbot = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let Chatbot = class Chatbot {
};
__decorate([
    graphql_1.Field(() => graphql_1.Int, { description: 'Example field (placeholder)' }),
    __metadata("design:type", Number)
], Chatbot.prototype, "exampleField", void 0);
Chatbot = __decorate([
    graphql_1.ObjectType()
], Chatbot);
exports.Chatbot = Chatbot;


/***/ }),

/***/ "./src/commerce/commerce.module.ts":
/*!*****************************************!*\
  !*** ./src/commerce/commerce.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseCommerceModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const commerce_service_1 = __webpack_require__(/*! ./commerce.service */ "./src/commerce/commerce.service.ts");
const commerce_resolver_1 = __webpack_require__(/*! ./commerce.resolver */ "./src/commerce/commerce.resolver.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const bar_entity_1 = __webpack_require__(/*! ./entities/profiles/bar.entity */ "./src/commerce/entities/profiles/bar.entity.ts");
const restaurant_entity_1 = __webpack_require__(/*! ./entities/profiles/restaurant.entity */ "./src/commerce/entities/profiles/restaurant.entity.ts");
const hotel_entity_1 = __webpack_require__(/*! ./entities/profiles/hotel.entity */ "./src/commerce/entities/profiles/hotel.entity.ts");
const guesthouse_entity_1 = __webpack_require__(/*! ./entities/profiles/guesthouse.entity */ "./src/commerce/entities/profiles/guesthouse.entity.ts");
const shop_entity_1 = __webpack_require__(/*! ./entities/profiles/shop.entity */ "./src/commerce/entities/profiles/shop.entity.ts");
const jwajemshop_entity_1 = __webpack_require__(/*! ./entities/profiles/jwajemshop.entity */ "./src/commerce/entities/profiles/jwajemshop.entity.ts");
const juiceshop_entity_1 = __webpack_require__(/*! ./entities/profiles/juiceshop.entity */ "./src/commerce/entities/profiles/juiceshop.entity.ts");
const base_commerce_entity_1 = __webpack_require__(/*! ./entities/base-commerce.entity */ "./src/commerce/entities/base-commerce.entity.ts");
const restaurant_service_1 = __webpack_require__(/*! ./services/restaurant.service */ "./src/commerce/services/restaurant.service.ts");
const bar_service_1 = __webpack_require__(/*! ./services/bar.service */ "./src/commerce/services/bar.service.ts");
const cafe_service_1 = __webpack_require__(/*! ./services/cafe.service */ "./src/commerce/services/cafe.service.ts");
const hotel_service_1 = __webpack_require__(/*! ./services/hotel.service */ "./src/commerce/services/hotel.service.ts");
const guesthouse_service_1 = __webpack_require__(/*! ./services/guesthouse.service */ "./src/commerce/services/guesthouse.service.ts");
const jwajemshop_service_1 = __webpack_require__(/*! ./services/jwajemshop.service */ "./src/commerce/services/jwajemshop.service.ts");
const juiceshop_service_1 = __webpack_require__(/*! ./services/juiceshop.service */ "./src/commerce/services/juiceshop.service.ts");
const shop_service_1 = __webpack_require__(/*! ./services/shop.service */ "./src/commerce/services/shop.service.ts");
const cafe_entity_1 = __webpack_require__(/*! ./entities/profiles/cafe.entity */ "./src/commerce/entities/profiles/cafe.entity.ts");
const dish_entity_1 = __webpack_require__(/*! ./entities/items/dish.entity */ "./src/commerce/entities/items/dish.entity.ts");
const review_module_1 = __webpack_require__(/*! src/review/review.module */ "./src/review/review.module.ts");
const category_entity_1 = __webpack_require__(/*! ./entities/items/category.entity */ "./src/commerce/entities/items/category.entity.ts");
const dish_category_service_1 = __webpack_require__(/*! ./services/dish-category.service */ "./src/commerce/services/dish-category.service.ts");
const restaurant_resolver_1 = __webpack_require__(/*! ./resolvers/restaurant.resolver */ "./src/commerce/resolvers/restaurant.resolver.ts");
const shop_resolver_1 = __webpack_require__(/*! ./resolvers/shop.resolver */ "./src/commerce/resolvers/shop.resolver.ts");
const bar_resolver_1 = __webpack_require__(/*! ./resolvers/bar.resolver */ "./src/commerce/resolvers/bar.resolver.ts");
const hotel_resolver_1 = __webpack_require__(/*! ./resolvers/hotel.resolver */ "./src/commerce/resolvers/hotel.resolver.ts");
const cafe_resolver_1 = __webpack_require__(/*! ./resolvers/cafe.resolver */ "./src/commerce/resolvers/cafe.resolver.ts");
const guesthouse_resolver_1 = __webpack_require__(/*! ./resolvers/guesthouse.resolver */ "./src/commerce/resolvers/guesthouse.resolver.ts");
const juiceshop_resolver_1 = __webpack_require__(/*! ./resolvers/juiceshop.resolver */ "./src/commerce/resolvers/juiceshop.resolver.ts");
const jawjemshop_resolver_1 = __webpack_require__(/*! ./resolvers/jawjemshop.resolver */ "./src/commerce/resolvers/jawjemshop.resolver.ts");
const drink_entity_1 = __webpack_require__(/*! ./entities/items/drink.entity */ "./src/commerce/entities/items/drink.entity.ts");
const room_entity_1 = __webpack_require__(/*! ./entities/items/room.entity */ "./src/commerce/entities/items/room.entity.ts");
const rooftop_entity_1 = __webpack_require__(/*! ./entities/profiles/rooftop.entity */ "./src/commerce/entities/profiles/rooftop.entity.ts");
const activity_entity_1 = __webpack_require__(/*! ./entities/profiles/activity.entity */ "./src/commerce/entities/profiles/activity.entity.ts");
const mansion_entity_1 = __webpack_require__(/*! ./entities/profiles/mansion.entity */ "./src/commerce/entities/profiles/mansion.entity.ts");
const landmark_entity_1 = __webpack_require__(/*! ./entities/profiles/landmark.entity */ "./src/commerce/entities/profiles/landmark.entity.ts");
const mansion_service_1 = __webpack_require__(/*! ./services/mansion.service */ "./src/commerce/services/mansion.service.ts");
const rooftop_service_1 = __webpack_require__(/*! ./services/rooftop.service */ "./src/commerce/services/rooftop.service.ts");
const activity_service_1 = __webpack_require__(/*! ./services/activity.service */ "./src/commerce/services/activity.service.ts");
const landmark_service_1 = __webpack_require__(/*! ./services/landmark.service */ "./src/commerce/services/landmark.service.ts");
let BaseCommerceModule = class BaseCommerceModule {
};
BaseCommerceModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: base_commerce_entity_1.Commerce.name, schema: base_commerce_entity_1.CommerceSchema },
                { name: cafe_entity_1.Cafe.name, schema: cafe_entity_1.CafeSchema },
                { name: bar_entity_1.Bar.name, schema: bar_entity_1.BarSchema },
                { name: restaurant_entity_1.Restaurant.name, schema: restaurant_entity_1.RestaurantSchema },
                { name: hotel_entity_1.Hotel.name, schema: hotel_entity_1.HotelSchema },
                { name: guesthouse_entity_1.GuestHouse.name, schema: guesthouse_entity_1.GuestHouseSchema },
                { name: shop_entity_1.Shop.name, schema: shop_entity_1.ShopSchema },
                { name: jwajemshop_entity_1.JwajemShop.name, schema: jwajemshop_entity_1.JwajemShopSchema },
                { name: juiceshop_entity_1.JuiceShop.name, schema: juiceshop_entity_1.JuiceShopSchema },
                { name: mansion_entity_1.Mansion.name, schema: mansion_entity_1.MansionSchema },
                { name: rooftop_entity_1.RoofTop.name, schema: rooftop_entity_1.RoofTopSchema },
                { name: activity_entity_1.Activity.name, schema: activity_entity_1.ActivitySchema },
                { name: landmark_entity_1.Landmark.name, schema: landmark_entity_1.LandmarkSchema },
                { name: dish_entity_1.Dish.name, schema: dish_entity_1.DishSchema },
                { name: room_entity_1.Room.name, schema: room_entity_1.RoomSchema },
                { name: drink_entity_1.Drink.name, schema: drink_entity_1.DrinkSchema },
                { name: category_entity_1.DishCategory.name, schema: category_entity_1.DishCategorySchema },
            ]),
            common_1.forwardRef(() => review_module_1.ReviewModule),
        ],
        providers: [
            commerce_resolver_1.CommerceResolver,
            commerce_service_1.CommerceService,
            mansion_service_1.MansionService,
            rooftop_service_1.RooftopService,
            activity_service_1.ActivityService,
            landmark_service_1.LandmarkService,
            restaurant_service_1.RestaurantService,
            bar_service_1.BarService,
            cafe_service_1.CafeService,
            hotel_service_1.HotelService,
            dish_category_service_1.DishCategoryService,
            guesthouse_service_1.GuesthouseService,
            jwajemshop_service_1.JwajemshopService,
            juiceshop_service_1.JuiceshopService,
            shop_service_1.ShopService,
            restaurant_resolver_1.RestaurantResolver,
            shop_resolver_1.ShopResolver,
            bar_resolver_1.BarResolver,
            hotel_resolver_1.HotelResolver,
            cafe_resolver_1.CafeResolver,
            guesthouse_resolver_1.GuesthouseResolver,
            juiceshop_resolver_1.JuiceshopResolver,
            jawjemshop_resolver_1.JawjemshopResolver,
        ],
        exports: [
            mansion_service_1.MansionService,
            rooftop_service_1.RooftopService,
            activity_service_1.ActivityService,
            landmark_service_1.LandmarkService,
            commerce_service_1.CommerceService,
            restaurant_service_1.RestaurantService,
            bar_service_1.BarService,
            cafe_service_1.CafeService,
            hotel_service_1.HotelService,
            guesthouse_service_1.GuesthouseService,
            jwajemshop_service_1.JwajemshopService,
            juiceshop_service_1.JuiceshopService,
            shop_service_1.ShopService,
            dish_category_service_1.DishCategoryService,
        ],
    })
], BaseCommerceModule);
exports.BaseCommerceModule = BaseCommerceModule;


/***/ }),

/***/ "./src/commerce/commerce.resolver.ts":
/*!*******************************************!*\
  !*** ./src/commerce/commerce.resolver.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommerceResolver = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const commerce_service_1 = __webpack_require__(/*! ./commerce.service */ "./src/commerce/commerce.service.ts");
const base_commerce_entity_1 = __webpack_require__(/*! ./entities/base-commerce.entity */ "./src/commerce/entities/base-commerce.entity.ts");
const create_base_commerce_input_1 = __webpack_require__(/*! ./dto/create-base-commerce.input */ "./src/commerce/dto/create-base-commerce.input.ts");
const update_base_commerce_input_1 = __webpack_require__(/*! ./dto/update-base-commerce.input */ "./src/commerce/dto/update-base-commerce.input.ts");
const create_review_input_1 = __webpack_require__(/*! src/review/dto/create-review.input */ "./src/review/dto/create-review.input.ts");
const current_user_decorator_1 = __webpack_require__(/*! src/utils/guards/current-user.decorator */ "./src/utils/guards/current-user.decorator.ts");
const review_entity_1 = __webpack_require__(/*! src/review/entities/review.entity */ "./src/review/entities/review.entity.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! src/utils/guards/jwt-auth.guard */ "./src/utils/guards/jwt-auth.guard.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const file_interceptor_1 = __webpack_require__(/*! src/utils/file.interceptor */ "./src/utils/file.interceptor.ts");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
const add_include_input_1 = __webpack_require__(/*! ./dto/add-include.input */ "./src/commerce/dto/add-include.input.ts");
const room_entity_1 = __webpack_require__(/*! ./entities/items/room.entity */ "./src/commerce/entities/items/room.entity.ts");
const public_decorator_1 = __webpack_require__(/*! src/utils/guards/public.decorator */ "./src/utils/guards/public.decorator.ts");
let CommerceResolver = class CommerceResolver {
    constructor(commerceService) {
        this.commerceService = commerceService;
    }
    async createCommerce(createBaseCommerceInput) {
        return this.commerceService.create(createBaseCommerceInput);
    }
    findAll() {
        return this.commerceService.findAll();
    }
    findOne(id) {
        return this.commerceService.findOne(id);
    }
    updateCommerce(updateBaseCommerceInput) {
        return this.commerceService.update(updateBaseCommerceInput.id, updateBaseCommerceInput);
    }
    removeCommerce(id) {
        return this.commerceService.remove(id);
    }
    allCommerceByType(type) {
        return this.commerceService.AllCommerceType(type);
    }
    async reviewCommerce(review, user) {
        return this.commerceService.reviewCommerce(Object.assign(Object.assign({}, review), { user: user.id }));
    }
    async removeReviewCommerce(id, user) {
        return this.commerceService.removeReviewCommerce({
            reviewId: id,
            userId: user.id,
        });
    }
    removeImageCommerce(id, idx) {
        return this.commerceService.removeImage(id, idx);
    }
    addStoriesToProfile(id, stories) {
        return this.commerceService.addStories({ commerceId: id, stories });
    }
    addMenuToProfile(id, menu) {
        return this.commerceService.addMenu({ commerceId: id, menu });
    }
    async reviewCommerceRoom(review, user) {
        return this.commerceService.reviewRoom(Object.assign(Object.assign({}, review), { user: user.id }));
    }
    async addIncludesToProfile(addition) {
        return this.commerceService.addIncludes(addition);
    }
    async findRoom(id) {
        return this.commerceService.findRoom(id);
    }
    async addPaymentsToProfile(addition) {
        return this.commerceService.addPayments(addition);
    }
    async addTargetImage(id, image) {
        return this.commerceService.addTargetImage(id, image);
    }
    commerceSearch(searchParams) {
        return this.commerceService.search(searchParams);
    }
    allDiscover() {
        return this.commerceService.allDiscover();
    }
    businessSearch(searchParams) {
        return this.commerceService.businessSearch(searchParams);
    }
    discoverSearch(searchParams) {
        return this.commerceService.discoverSearch(searchParams);
    }
    removeReview(id, user) {
        return this.commerceService.removeReviewCommerce(id);
    }
    removeRoomReview(id, user) {
        return this.commerceService.removeReviewRoom(id);
    }
};
__decorate([
    common_1.UseInterceptors(file_interceptor_1.GraphqlFiles(['createBaseCommerceInput.images'])),
    graphql_1.Mutation(() => base_commerce_entity_1.Commerce),
    __param(0, graphql_1.Args('createBaseCommerceInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_base_commerce_input_1.CreateBaseCommerceInput !== "undefined" && create_base_commerce_input_1.CreateBaseCommerceInput) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], CommerceResolver.prototype, "createCommerce", null);
__decorate([
    public_decorator_1.Public(),
    graphql_1.Query(() => [base_commerce_entity_1.Commerce], { name: 'commerces' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CommerceResolver.prototype, "findAll", null);
__decorate([
    public_decorator_1.Public(),
    graphql_1.Query(() => base_commerce_entity_1.Commerce, { name: 'commerce' }),
    __param(0, graphql_1.Args('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommerceResolver.prototype, "findOne", null);
__decorate([
    common_1.UseInterceptors(file_interceptor_1.GraphqlFiles(['updateBaseCommerceInput.images'])),
    graphql_1.Mutation(() => base_commerce_entity_1.Commerce),
    __param(0, graphql_1.Args('updateBaseCommerceInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof update_base_commerce_input_1.UpdateBaseCommerceInput !== "undefined" && update_base_commerce_input_1.UpdateBaseCommerceInput) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], CommerceResolver.prototype, "updateCommerce", null);
__decorate([
    graphql_1.Mutation(() => base_commerce_entity_1.Commerce),
    __param(0, graphql_1.Args('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommerceResolver.prototype, "removeCommerce", null);
__decorate([
    public_decorator_1.Public(),
    graphql_1.Query(() => [base_commerce_entity_1.Commerce]),
    __param(0, graphql_1.Args('type', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommerceResolver.prototype, "allCommerceByType", null);
__decorate([
    common_1.UseInterceptors(file_interceptor_1.GraphqlFiles(['reviewInput.image'])),
    graphql_1.Mutation(() => review_entity_1.Review),
    __param(0, graphql_1.Args('reviewInput')),
    __param(1, current_user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof create_review_input_1.CreateReviewInput !== "undefined" && create_review_input_1.CreateReviewInput) === "function" ? _c : Object, Object]),
    __metadata("design:returntype", Promise)
], CommerceResolver.prototype, "reviewCommerce", null);
__decorate([
    graphql_1.Mutation(() => review_entity_1.Review),
    __param(0, graphql_1.Args('id', { type: () => String })),
    __param(1, current_user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CommerceResolver.prototype, "removeReviewCommerce", null);
__decorate([
    graphql_1.Mutation(() => base_commerce_entity_1.Commerce),
    __param(0, graphql_1.Args('id', { type: () => String })),
    __param(1, graphql_1.Args('idx', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], CommerceResolver.prototype, "removeImageCommerce", null);
__decorate([
    common_1.UseInterceptors(file_interceptor_1.GraphqlFiles(['stories'])),
    graphql_1.Mutation(() => base_commerce_entity_1.Commerce),
    __param(0, graphql_1.Args('commerceId', { type: () => String })),
    __param(1, graphql_1.Args('stories', { type: () => file_schema_1.UploadMedia })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CommerceResolver.prototype, "addStoriesToProfile", null);
__decorate([
    common_1.UseInterceptors(file_interceptor_1.GraphqlFiles(['menu'])),
    graphql_1.Mutation(() => base_commerce_entity_1.Commerce),
    __param(0, graphql_1.Args('commerceId', { type: () => String })),
    __param(1, graphql_1.Args('menu', { type: () => file_schema_1.UploadMedia })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CommerceResolver.prototype, "addMenuToProfile", null);
__decorate([
    common_1.UseInterceptors(file_interceptor_1.GraphqlFiles(['reviewInput.image'])),
    graphql_1.Mutation(() => review_entity_1.Review),
    __param(0, graphql_1.Args('reviewInput')),
    __param(1, current_user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof create_review_input_1.CreateReviewRoomInput !== "undefined" && create_review_input_1.CreateReviewRoomInput) === "function" ? _d : Object, Object]),
    __metadata("design:returntype", Promise)
], CommerceResolver.prototype, "reviewCommerceRoom", null);
__decorate([
    common_1.UseInterceptors(file_interceptor_1.GraphqlFiles(['additionInput.addition.icon'])),
    graphql_1.Mutation(() => base_commerce_entity_1.Commerce),
    __param(0, graphql_1.Args('additionInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof add_include_input_1.CreateAdditionInput !== "undefined" && add_include_input_1.CreateAdditionInput) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], CommerceResolver.prototype, "addIncludesToProfile", null);
__decorate([
    public_decorator_1.Public(),
    graphql_1.Query(() => room_entity_1.Room),
    __param(0, graphql_1.Args('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommerceResolver.prototype, "findRoom", null);
__decorate([
    common_1.UseInterceptors(file_interceptor_1.GraphqlFiles(['paymentInput.addition.icon'])),
    graphql_1.Mutation(() => base_commerce_entity_1.Commerce),
    __param(0, graphql_1.Args('paymentInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof add_include_input_1.CreateAdditionInput !== "undefined" && add_include_input_1.CreateAdditionInput) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], CommerceResolver.prototype, "addPaymentsToProfile", null);
__decorate([
    common_1.UseInterceptors(file_interceptor_1.GraphqlFiles(['image'], '/targetImages')),
    graphql_1.Mutation(() => base_commerce_entity_1.Commerce),
    __param(0, graphql_1.Args('id', { type: () => String })),
    __param(1, graphql_1.Args('image', { type: () => file_schema_1.UploadMedia })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CommerceResolver.prototype, "addTargetImage", null);
__decorate([
    public_decorator_1.Public(),
    graphql_1.Query(() => [base_commerce_entity_1.Commerce]),
    __param(0, graphql_1.Args('searchParams')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof create_base_commerce_input_1.SearchParamsInput !== "undefined" && create_base_commerce_input_1.SearchParamsInput) === "function" ? _g : Object]),
    __metadata("design:returntype", void 0)
], CommerceResolver.prototype, "commerceSearch", null);
__decorate([
    public_decorator_1.Public(),
    graphql_1.Query(() => [base_commerce_entity_1.Commerce]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CommerceResolver.prototype, "allDiscover", null);
__decorate([
    public_decorator_1.Public(),
    graphql_1.Query(() => [base_commerce_entity_1.Commerce]),
    __param(0, graphql_1.Args('searchParams')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof create_base_commerce_input_1.SearchParamsInput !== "undefined" && create_base_commerce_input_1.SearchParamsInput) === "function" ? _h : Object]),
    __metadata("design:returntype", void 0)
], CommerceResolver.prototype, "businessSearch", null);
__decorate([
    public_decorator_1.Public(),
    graphql_1.Query(() => [base_commerce_entity_1.Commerce]),
    __param(0, graphql_1.Args('searchParams')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof create_base_commerce_input_1.SearchParamsInput !== "undefined" && create_base_commerce_input_1.SearchParamsInput) === "function" ? _j : Object]),
    __metadata("design:returntype", void 0)
], CommerceResolver.prototype, "discoverSearch", null);
__decorate([
    graphql_1.Mutation(() => review_entity_1.Review),
    __param(0, graphql_1.Args('id', { type: () => String })), __param(1, current_user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof String !== "undefined" && String) === "function" ? _k : Object, Object]),
    __metadata("design:returntype", void 0)
], CommerceResolver.prototype, "removeReview", null);
__decorate([
    graphql_1.Mutation(() => review_entity_1.Review),
    __param(0, graphql_1.Args('id', { type: () => String })), __param(1, current_user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof String !== "undefined" && String) === "function" ? _l : Object, Object]),
    __metadata("design:returntype", void 0)
], CommerceResolver.prototype, "removeRoomReview", null);
CommerceResolver = __decorate([
    common_1.UseGuards(jwt_auth_guard_1.GqlAuthGuard),
    graphql_1.Resolver(() => base_commerce_entity_1.Commerce),
    __metadata("design:paramtypes", [typeof (_m = typeof commerce_service_1.CommerceService !== "undefined" && commerce_service_1.CommerceService) === "function" ? _m : Object])
], CommerceResolver);
exports.CommerceResolver = CommerceResolver;


/***/ }),

/***/ "./src/commerce/commerce.service.ts":
/*!******************************************!*\
  !*** ./src/commerce/commerce.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommerceService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const child_process_1 = __webpack_require__(/*! child_process */ "child_process");
const fs_1 = __webpack_require__(/*! fs */ "fs");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const path_1 = __webpack_require__(/*! path */ "path");
const review_service_1 = __webpack_require__(/*! src/review/review.service */ "./src/review/review.service.ts");
const base_commerce_entity_1 = __webpack_require__(/*! ./entities/base-commerce.entity */ "./src/commerce/entities/base-commerce.entity.ts");
const commerce_enum_1 = __webpack_require__(/*! ./entities/commerce.enum */ "./src/commerce/entities/commerce.enum.ts");
const activity_service_1 = __webpack_require__(/*! ./services/activity.service */ "./src/commerce/services/activity.service.ts");
const bar_service_1 = __webpack_require__(/*! ./services/bar.service */ "./src/commerce/services/bar.service.ts");
const cafe_service_1 = __webpack_require__(/*! ./services/cafe.service */ "./src/commerce/services/cafe.service.ts");
const guesthouse_service_1 = __webpack_require__(/*! ./services/guesthouse.service */ "./src/commerce/services/guesthouse.service.ts");
const hotel_service_1 = __webpack_require__(/*! ./services/hotel.service */ "./src/commerce/services/hotel.service.ts");
const juiceshop_service_1 = __webpack_require__(/*! ./services/juiceshop.service */ "./src/commerce/services/juiceshop.service.ts");
const jwajemshop_service_1 = __webpack_require__(/*! ./services/jwajemshop.service */ "./src/commerce/services/jwajemshop.service.ts");
const landmark_service_1 = __webpack_require__(/*! ./services/landmark.service */ "./src/commerce/services/landmark.service.ts");
const mansion_service_1 = __webpack_require__(/*! ./services/mansion.service */ "./src/commerce/services/mansion.service.ts");
const restaurant_service_1 = __webpack_require__(/*! ./services/restaurant.service */ "./src/commerce/services/restaurant.service.ts");
const rooftop_service_1 = __webpack_require__(/*! ./services/rooftop.service */ "./src/commerce/services/rooftop.service.ts");
const shop_service_1 = __webpack_require__(/*! ./services/shop.service */ "./src/commerce/services/shop.service.ts");
let CommerceService = class CommerceService {
    constructor(BaseCommerceModel, reviewService, restaurantService, cafeService, barService, jwajemshopService, juiceshopService, hotelService, guesthouseService, shopService, lanmarkService, rooftopService, activityService, mansionService) {
        this.BaseCommerceModel = BaseCommerceModel;
        this.reviewService = reviewService;
        this.restaurantService = restaurantService;
        this.cafeService = cafeService;
        this.barService = barService;
        this.jwajemshopService = jwajemshopService;
        this.juiceshopService = juiceshopService;
        this.hotelService = hotelService;
        this.guesthouseService = guesthouseService;
        this.shopService = shopService;
        this.lanmarkService = lanmarkService;
        this.rooftopService = rooftopService;
        this.activityService = activityService;
        this.mansionService = mansionService;
    }
    async create(createBaseCommerceInput) {
        let profile;
        switch (createBaseCommerceInput.type) {
            case commerce_enum_1.CommerceType.Bar:
                {
                    profile = await this.barService.create();
                }
                break;
            case commerce_enum_1.CommerceType.Cafe:
                {
                    profile = await this.cafeService.create();
                }
                break;
            case commerce_enum_1.CommerceType.GuestHouse:
                {
                    profile = await this.guesthouseService.create();
                }
                break;
            case commerce_enum_1.CommerceType.Hotel:
                {
                    profile = await this.hotelService.create();
                }
                break;
            case commerce_enum_1.CommerceType.JuiceShop:
                {
                    profile = await this.juiceshopService.create();
                }
                break;
            case commerce_enum_1.CommerceType.JwajemShop:
                {
                    profile = await this.jwajemshopService.create();
                }
                break;
            case commerce_enum_1.CommerceType.Shop:
                {
                    profile = await this.shopService.create();
                }
                break;
            case commerce_enum_1.CommerceType.Restaurant:
                {
                    profile = await this.restaurantService.create();
                }
                break;
            case commerce_enum_1.CommerceType.Landmark:
                {
                    profile = await this.lanmarkService.create();
                }
                break;
            case commerce_enum_1.CommerceType.RoofTop:
                {
                    profile = await this.rooftopService.create();
                }
                break;
            case commerce_enum_1.CommerceType.Mansion:
                {
                    profile = await this.mansionService.create();
                }
                break;
            case commerce_enum_1.CommerceType.Activity:
                {
                    profile = await this.activityService.create();
                }
                break;
        }
        const collectionType = createBaseCommerceInput.type in commerce_enum_1.BusinessType ? commerce_enum_1.CollectionType.Business : commerce_enum_1.CollectionType.Discover;
        const commerce = new this.BaseCommerceModel(Object.assign(Object.assign({}, createBaseCommerceInput), { collectionType, profile: profile._id })).save();
        return commerce;
    }
    findAll() {
        return this.BaseCommerceModel.find({ collectionType: commerce_enum_1.CollectionType.Business })
            .populate({ path: 'reviews', populate: ['user'] })
            .populate({ path: 'profile', populate: { path: 'rooms', populate: { path: 'reviews' } } })
            .populate({ path: 'profile', populate: ['menu'] });
    }
    findAllGroupByType() {
        return this.BaseCommerceModel.aggregate([{ $group: { _id: 'type' } }]);
    }
    findByProfileId(id) {
        return this.BaseCommerceModel.findOne({
            $or: [{ profile: mongoose_2.Types.ObjectId(id) }, { profile: id }],
        });
    }
    findOne(id) {
        return this.BaseCommerceModel.findById(id)
            .populate({ path: 'reviews', populate: ['user'] })
            .populate({ path: 'profile', populate: { path: 'rooms', populate: { path: 'reviews' } } })
            .populate({ path: 'profile', populate: ['menu'] });
    }
    async update(id, updateBaseCommerceInput) {
        const commerce = await this.BaseCommerceModel.findById(id);
        updateBaseCommerceInput.images = [
            ...commerce.images,
            ...updateBaseCommerceInput.images,
        ];
        return this.BaseCommerceModel.findByIdAndUpdate(commerce._id, updateBaseCommerceInput);
    }
    async reviewRoom(reviewInfo) {
        const room = await this.hotelService.findRoomById(reviewInfo.roomId).populate('reviews');
        const review = await this.reviewService.create(Object.assign(Object.assign({}, reviewInfo), { reviewed: reviewInfo.roomId }));
        room.reviews.push(review._id);
        room.rate =
            (room.rate * (room.reviews.length - 1) + review.rating) /
                room.reviews.length;
        await room.save();
        return review;
    }
    async removeReviewRoom(id) {
        const review = await this.reviewService.findOne(id);
        const room = await this.hotelService.findRoomById(review.reviewed).populate('reviews');
        room.rate = (room.reviews.length - 1 == 0) ? 0 : (room.rate * room.reviews.length - review.rating) / (room.reviews.length - 1);
        await this.reviewService.remove(review._id, review.user);
        await room.save();
        return review;
    }
    findRoom(id) {
        return this.hotelService.findRoomById(id);
    }
    remove(id) {
        return this.BaseCommerceModel.findByIdAndDelete(id)
            .populate({ path: 'reviews', populate: ['user'] })
            .populate({ path: 'profile', populate: { path: 'rooms', populate: { path: 'reviews' } } })
            .populate({ path: 'profile', populate: ['menu'] });
    }
    AllCommerceType(type) {
        return this.BaseCommerceModel.find({ type: type })
            .populate({ path: 'reviews', populate: ['user'] })
            .populate({ path: 'profile', populate: { path: 'rooms', populate: { path: 'reviews' } } })
            .populate({ path: 'profile', populate: ['menu'] });
    }
    async reviewCommerce(reviewInfo) {
        const commerce = await this.BaseCommerceModel.findById(reviewInfo.commerceId).populate('reviews');
        const review = await this.reviewService.create(Object.assign(Object.assign({}, reviewInfo), { reviewed: reviewInfo.commerceId }));
        commerce.reviews.push(review._id);
        commerce.generalRating = (commerce.generalRating * (commerce.reviews.length - 1) + review.rating) /
            commerce.reviews.length;
        if (reviewInfo.detailRating) {
            commerce.generalDetailRating.food = Math.round((commerce.generalDetailRating.food * (commerce.reviews.length - 1) + reviewInfo.detailRating.food) / commerce.reviews.length);
            commerce.generalDetailRating.hospitality = Math.round((commerce.generalDetailRating.hospitality * (commerce.reviews.length - 1) + reviewInfo.detailRating.hospitality) / commerce.reviews.length);
            commerce.generalDetailRating.comfortability = Math.round((commerce.generalDetailRating.comfortability * (commerce.reviews.length - 1) + reviewInfo.detailRating.comfortability) / commerce.reviews.length);
            commerce.generalDetailRating.atmosphere = Math.round((commerce.generalDetailRating.atmosphere * (commerce.reviews.length - 1) + reviewInfo.detailRating.atmosphere) / commerce.reviews.length);
        }
        await this.BaseCommerceModel.findByIdAndUpdate(reviewInfo.commerceId, commerce);
        return review;
    }
    async removeReviewCommerce(id) {
        const review = await this.reviewService.findOne(id);
        const commerce = await this.BaseCommerceModel.findById(review.reviewed).populate('reviews');
        commerce.generalRating = (commerce.reviews.length - 1 == 0) ? 0 : ((commerce.generalRating * commerce.reviews.length) - review.rating) / (commerce.reviews.length - 1);
        if (review.travlerRating) {
            commerce.generalDetailRating.food = (commerce.reviews.length - 1 == 0) ? 0 : Math.round((commerce.generalDetailRating.food * commerce.reviews.length - review.travlerRating.food) / (commerce.reviews.length - 1));
            commerce.generalDetailRating.hospitality = (commerce.reviews.length - 1 == 0) ? 0 : Math.round((commerce.generalDetailRating.hospitality * commerce.reviews.length - review.travlerRating.hospitality) / (commerce.reviews.length - 1));
            commerce.generalDetailRating.comfortability = (commerce.reviews.length - 1 == 0) ? 0 : Math.round((commerce.generalDetailRating.comfortability * commerce.reviews.length - review.travlerRating.comfortability) / (commerce.reviews.length - 1));
            commerce.generalDetailRating.atmosphere = (commerce.reviews.length - 1 == 0) ? 0 : Math.round((commerce.generalDetailRating.atmosphere * commerce.reviews.length - review.travlerRating.atmosphere) / (commerce.reviews.length - 1));
        }
        await this.reviewService.remove(review._id, review.user);
        await this.BaseCommerceModel.findByIdAndUpdate(review.reviewed, commerce);
        return review;
    }
    async removeImage(id, idx) {
        const commerce = await this.BaseCommerceModel.findById(id);
        commerce.images.splice(idx, 1);
        return await this.BaseCommerceModel.findByIdAndUpdate(commerce._id, commerce);
    }
    async updateDynamic(type, entity) {
        switch (type) {
            case commerce_enum_1.CommerceType.Bar: {
                return await this.barService.update(entity);
            }
            case commerce_enum_1.CommerceType.Cafe: {
                return await this.cafeService.update(entity);
            }
            case commerce_enum_1.CommerceType.GuestHouse: {
                return await this.guesthouseService.update(entity);
            }
            case commerce_enum_1.CommerceType.Hotel: {
                return await this.hotelService.update(entity);
            }
            case commerce_enum_1.CommerceType.JuiceShop: {
                return await this.juiceshopService.update(entity);
            }
            case commerce_enum_1.CommerceType.JwajemShop: {
                return await this.jwajemshopService.update(entity);
            }
            case commerce_enum_1.CommerceType.Shop: {
                return await this.shopService.update(entity);
            }
            case commerce_enum_1.CommerceType.Restaurant: {
                return await this.restaurantService.update(entity);
            }
            case commerce_enum_1.CommerceType.Landmark: {
                return await this.lanmarkService.update(entity);
            }
            case commerce_enum_1.CommerceType.RoofTop: {
                return await this.rooftopService.update(entity);
            }
            case commerce_enum_1.CommerceType.Mansion: {
                return await this.mansionService.update(entity);
            }
            case commerce_enum_1.CommerceType.Activity: {
                return await this.activityService.update(entity);
            }
        }
    }
    async getProfile(id, type) {
        let profile;
        switch (type) {
            case commerce_enum_1.CommerceType.Bar:
                {
                    profile = await this.barService.findById(id);
                }
                break;
            case commerce_enum_1.CommerceType.Cafe:
                {
                    profile = await this.cafeService.findById(id);
                }
                break;
            case commerce_enum_1.CommerceType.GuestHouse:
                {
                    profile = await this.guesthouseService.findById(id);
                }
                break;
            case commerce_enum_1.CommerceType.Hotel:
                {
                    profile = await this.hotelService.findById(id);
                }
                break;
            case commerce_enum_1.CommerceType.JuiceShop:
                {
                    profile = await this.juiceshopService.findById(id);
                }
                break;
            case commerce_enum_1.CommerceType.JwajemShop:
                {
                    profile = await this.jwajemshopService.findById(id);
                }
                break;
            case commerce_enum_1.CommerceType.Shop:
                {
                    profile = await this.shopService.findById(id);
                }
                break;
            case commerce_enum_1.CommerceType.Restaurant:
                {
                    profile = await this.restaurantService.findById(id);
                }
                break;
            case commerce_enum_1.CommerceType.Landmark:
                {
                    profile = await this.lanmarkService.findById(id);
                }
                break;
            case commerce_enum_1.CommerceType.RoofTop:
                {
                    profile = await this.rooftopService.findById(id);
                }
                break;
            case commerce_enum_1.CommerceType.Mansion:
                {
                    profile = await this.mansionService.findById(id);
                }
                break;
            case commerce_enum_1.CommerceType.Activity:
                {
                    profile = await this.activityService.findById(id);
                }
                break;
        }
        return profile;
    }
    async addStories(info) {
        const commerce = await this.BaseCommerceModel.findById(info.commerceId);
        const profile = await this.getProfile(commerce.profile, commerce.type);
        if (profile.stories) {
            profile.stories = [...profile.stories, ...info.stories];
            await this.updateDynamic(commerce.type, profile);
            return this.BaseCommerceModel.findById(commerce._id);
        }
    }
    async addMenu(info) {
        const commerce = await this.BaseCommerceModel.findById(info.commerceId);
        const profile = await this.getProfile(commerce.profile, commerce.type);
        if (profile.menuRaw) {
            profile.menuRaw = [...profile.menuRaw, ...info.menu];
            await this.updateDynamic(commerce.type, profile);
            return this.BaseCommerceModel.findById(commerce._id);
        }
    }
    async addIncludes(include) {
        const commerce = await this.BaseCommerceModel.findById(include.commerceId);
        if (commerce.type != commerce_enum_1.CommerceType.Shop) {
            const profile = await this.getProfile(commerce.profile, commerce.type);
            profile.includes.push(include.addition);
            await this.updateDynamic(commerce.type, profile);
            return this.BaseCommerceModel.findById(commerce._id);
        }
        return new common_1.HttpException(" the Shop doesn't have includes ", 400);
    }
    async addPayments(include) {
        const commerce = await this.BaseCommerceModel.findById(include.commerceId);
        if (commerce.type != commerce_enum_1.CommerceType.Shop) {
            const profile = await this.getProfile(commerce.profile, commerce.type);
            profile.payments.push(include.addition);
            await this.updateDynamic(commerce.type, profile);
            return this.BaseCommerceModel.findById(commerce._id);
        }
        return new common_1.HttpException(" the Shop doesn't have includes ", 400);
    }
    async search(searchParams) {
        return this.BaseCommerceModel.find({
            name: { $regex: searchParams.name ? new RegExp("" + searchParams.name.toLowerCase().replace(' ', '|') + "", "i") : /.*/ },
            type: searchParams.category || /.*/
        })
            .sort({ updatedAt: -1 })
            .skip(searchParams.start)
            .limit(searchParams.limit)
            .populate({ path: 'reviews', populate: ['user'] })
            .populate({ path: 'profile', populate: ['menu', 'rooms'] });
    }
    async discoverSearch(searchParams) {
        return this.BaseCommerceModel.find({ name: { $regex: searchParams.name ? new RegExp("" + searchParams.name.toLowerCase().replace(' ', '|') + "", "i") : /.*/, }, type: searchParams.category || /.*/, collectionType: commerce_enum_1.CollectionType.Discover })
            .sort({ updatedAt: -1 })
            .skip(searchParams.start)
            .limit(searchParams.limit)
            .populate({ path: 'reviews', populate: ['user'] })
            .populate({ path: 'profile', populate: ['menu', 'rooms'] });
    }
    async businessSearch(searchParams) {
        return this.BaseCommerceModel.find({ name: { $regex: searchParams.name ? new RegExp("" + searchParams.name.toLowerCase().replace(' ', '|') + "", "i") : /.*/, }, type: searchParams.category || /.*/, collectionType: commerce_enum_1.CollectionType.Business })
            .sort({ updatedAt: -1 })
            .skip(searchParams.start)
            .limit(searchParams.limit)
            .populate({ path: 'reviews', populate: ['user'] })
            .populate({ path: 'profile', populate: ['menu', 'rooms'] });
    }
    allDiscover() {
        return this.BaseCommerceModel.find({ collectionType: commerce_enum_1.CollectionType.Discover })
            .populate({ path: 'reviews', populate: ['user'] })
            .populate({ path: 'profile', populate: ['menu', 'rooms'] });
    }
    async addTargetImage(id, image) {
        const path = path_1.join(process.cwd(), `uploads/targetImages`);
        const name = '/' + id + path_1.extname(image.url);
        try {
            fs_1.renameSync(path + image.url, path + name);
        }
        catch (e) {
            console.log(e);
        }
        image.url = name;
        const commerce = await this.BaseCommerceModel.findByIdAndUpdate(id, { targetImage: image });
        this.createImageDatabase();
        return commerce;
    }
    async createImageDatabase() {
        child_process_1.exec(`~/arcore/tools/arcoreimg/linux/arcoreimg build-db --input_images_directory=${path_1.join(process.cwd(), 'uploads/targetImages')} --output_db_path=${'uploads/database.imgdb'}`);
    }
};
CommerceService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(base_commerce_entity_1.Commerce.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof review_service_1.ReviewService !== "undefined" && review_service_1.ReviewService) === "function" ? _b : Object, typeof (_c = typeof restaurant_service_1.RestaurantService !== "undefined" && restaurant_service_1.RestaurantService) === "function" ? _c : Object, typeof (_d = typeof cafe_service_1.CafeService !== "undefined" && cafe_service_1.CafeService) === "function" ? _d : Object, typeof (_e = typeof bar_service_1.BarService !== "undefined" && bar_service_1.BarService) === "function" ? _e : Object, typeof (_f = typeof jwajemshop_service_1.JwajemshopService !== "undefined" && jwajemshop_service_1.JwajemshopService) === "function" ? _f : Object, typeof (_g = typeof juiceshop_service_1.JuiceshopService !== "undefined" && juiceshop_service_1.JuiceshopService) === "function" ? _g : Object, typeof (_h = typeof hotel_service_1.HotelService !== "undefined" && hotel_service_1.HotelService) === "function" ? _h : Object, typeof (_j = typeof guesthouse_service_1.GuesthouseService !== "undefined" && guesthouse_service_1.GuesthouseService) === "function" ? _j : Object, typeof (_k = typeof shop_service_1.ShopService !== "undefined" && shop_service_1.ShopService) === "function" ? _k : Object, typeof (_l = typeof landmark_service_1.LandmarkService !== "undefined" && landmark_service_1.LandmarkService) === "function" ? _l : Object, typeof (_m = typeof rooftop_service_1.RooftopService !== "undefined" && rooftop_service_1.RooftopService) === "function" ? _m : Object, typeof (_o = typeof activity_service_1.ActivityService !== "undefined" && activity_service_1.ActivityService) === "function" ? _o : Object, typeof (_p = typeof mansion_service_1.MansionService !== "undefined" && mansion_service_1.MansionService) === "function" ? _p : Object])
], CommerceService);
exports.CommerceService = CommerceService;


/***/ }),

/***/ "./src/commerce/dto/add-include.input.ts":
/*!***********************************************!*\
  !*** ./src/commerce/dto/add-include.input.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateAdditionInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const create_base_commerce_input_1 = __webpack_require__(/*! ./create-base-commerce.input */ "./src/commerce/dto/create-base-commerce.input.ts");
let CreateAdditionInput = class CreateAdditionInput {
};
__decorate([
    graphql_1.Field(() => String, { description: "Commerce's id" }),
    __metadata("design:type", Object)
], CreateAdditionInput.prototype, "commerceId", void 0);
__decorate([
    graphql_1.Field(() => create_base_commerce_input_1.AdditionInput, { description: "Profile's addition" }),
    __metadata("design:type", Object)
], CreateAdditionInput.prototype, "addition", void 0);
CreateAdditionInput = __decorate([
    graphql_1.InputType()
], CreateAdditionInput);
exports.CreateAdditionInput = CreateAdditionInput;


/***/ }),

/***/ "./src/commerce/dto/create-base-commerce.input.ts":
/*!********************************************************!*\
  !*** ./src/commerce/dto/create-base-commerce.input.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DishSearchParamsInput = exports.SearchParamsInput = exports.AddDishToResturant = exports.OpeningTimeInput = exports.PositionInput = exports.AdditionInput = exports.CreateBaseCommerceInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
let CreateBaseCommerceInput = class CreateBaseCommerceInput {
};
__decorate([
    graphql_1.Field(() => String, { description: "Commerce's name" }),
    __metadata("design:type", Object)
], CreateBaseCommerceInput.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Commerce's description" }),
    __metadata("design:type", Object)
], CreateBaseCommerceInput.prototype, "description", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Commerce's telephone" }),
    __metadata("design:type", Object)
], CreateBaseCommerceInput.prototype, "tel", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Commerce's address" }),
    __metadata("design:type", Object)
], CreateBaseCommerceInput.prototype, "address", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Commerce's type", nullable: true }),
    __metadata("design:type", Object)
], CreateBaseCommerceInput.prototype, "type", void 0);
__decorate([
    graphql_1.Field(() => file_schema_1.UploadMedia, { description: "Commerce's images" }),
    __metadata("design:type", Object)
], CreateBaseCommerceInput.prototype, "images", void 0);
__decorate([
    graphql_1.Field(() => OpeningTimeInput, { description: "Commerce's opening time" }),
    __metadata("design:type", Object)
], CreateBaseCommerceInput.prototype, "openingTime", void 0);
__decorate([
    graphql_1.Field(() => PositionInput, { description: "Commerce's postion" }),
    __metadata("design:type", Object)
], CreateBaseCommerceInput.prototype, "position", void 0);
CreateBaseCommerceInput = __decorate([
    graphql_1.InputType()
], CreateBaseCommerceInput);
exports.CreateBaseCommerceInput = CreateBaseCommerceInput;
let AdditionInput = class AdditionInput {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], AdditionInput.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => file_schema_1.UploadMedia),
    __metadata("design:type", Object)
], AdditionInput.prototype, "icon", void 0);
AdditionInput = __decorate([
    graphql_1.InputType()
], AdditionInput);
exports.AdditionInput = AdditionInput;
let PositionInput = class PositionInput {
};
__decorate([
    graphql_1.Field(() => graphql_1.Float),
    __metadata("design:type", Object)
], PositionInput.prototype, "longitude", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float),
    __metadata("design:type", Object)
], PositionInput.prototype, "latitude", void 0);
PositionInput = __decorate([
    graphql_1.InputType()
], PositionInput);
exports.PositionInput = PositionInput;
let OpeningTimeInput = class OpeningTimeInput {
};
__decorate([
    graphql_1.Field(() => Date),
    __metadata("design:type", Object)
], OpeningTimeInput.prototype, "startTime", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], OpeningTimeInput.prototype, "startDay", void 0);
__decorate([
    graphql_1.Field(() => Date),
    __metadata("design:type", Object)
], OpeningTimeInput.prototype, "endtTime", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], OpeningTimeInput.prototype, "endtDay", void 0);
OpeningTimeInput = __decorate([
    graphql_1.InputType()
], OpeningTimeInput);
exports.OpeningTimeInput = OpeningTimeInput;
let AddDishToResturant = class AddDishToResturant {
};
__decorate([
    graphql_1.Field(() => String, { description: "Dish's resturantId" }),
    __metadata("design:type", Object)
], AddDishToResturant.prototype, "restaurant", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Dish's category" }),
    __metadata("design:type", Object)
], AddDishToResturant.prototype, "category", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Dish's name" }),
    __metadata("design:type", Object)
], AddDishToResturant.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Dish's description" }),
    __metadata("design:type", Object)
], AddDishToResturant.prototype, "description", void 0);
__decorate([
    graphql_1.Field(() => file_schema_1.UploadMedia, { description: "Dish's images" }),
    __metadata("design:type", Object)
], AddDishToResturant.prototype, "images", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { description: "Dish's price" }),
    __metadata("design:type", Number)
], AddDishToResturant.prototype, "price", void 0);
AddDishToResturant = __decorate([
    graphql_1.InputType()
], AddDishToResturant);
exports.AddDishToResturant = AddDishToResturant;
let SearchParamsInput = class SearchParamsInput {
};
__decorate([
    graphql_1.Field(() => String, { description: "Commerce's category", nullable: true }),
    __metadata("design:type", Object)
], SearchParamsInput.prototype, "category", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Commerce's name", nullable: true }),
    __metadata("design:type", Object)
], SearchParamsInput.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { description: "Commerce's start num", defaultValue: 0 }),
    __metadata("design:type", Object)
], SearchParamsInput.prototype, "start", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { description: "Commerce's array limit", defaultValue: 15 }),
    __metadata("design:type", Object)
], SearchParamsInput.prototype, "limit", void 0);
SearchParamsInput = __decorate([
    graphql_1.InputType()
], SearchParamsInput);
exports.SearchParamsInput = SearchParamsInput;
let DishSearchParamsInput = class DishSearchParamsInput {
};
__decorate([
    graphql_1.Field(() => String, { description: "Commerce's category", nullable: true }),
    __metadata("design:type", Object)
], DishSearchParamsInput.prototype, "category", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Commerce's name", nullable: true }),
    __metadata("design:type", Object)
], DishSearchParamsInput.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { description: "Commerce's start num", defaultValue: 0 }),
    __metadata("design:type", Object)
], DishSearchParamsInput.prototype, "start", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { description: "Commerce's array limit", defaultValue: 15 }),
    __metadata("design:type", Object)
], DishSearchParamsInput.prototype, "limit", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { description: "Commerce's start num", defaultValue: 0 }),
    __metadata("design:type", Object)
], DishSearchParamsInput.prototype, "min", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { description: "Commerce's array limit", defaultValue: 1000000 }),
    __metadata("design:type", Object)
], DishSearchParamsInput.prototype, "max", void 0);
DishSearchParamsInput = __decorate([
    graphql_1.InputType()
], DishSearchParamsInput);
exports.DishSearchParamsInput = DishSearchParamsInput;


/***/ }),

/***/ "./src/commerce/dto/create-dishcat.input.ts":
/*!**************************************************!*\
  !*** ./src/commerce/dto/create-dishcat.input.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DishCategoryInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
let DishCategoryInput = class DishCategoryInput {
};
__decorate([
    graphql_1.Field(() => String, { description: "Category's name" }),
    __metadata("design:type", Object)
], DishCategoryInput.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => file_schema_1.UploadMedia, { description: "Category's icon" }),
    __metadata("design:type", Object)
], DishCategoryInput.prototype, "icon", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Category's description" }),
    __metadata("design:type", Object)
], DishCategoryInput.prototype, "description", void 0);
DishCategoryInput = __decorate([
    graphql_1.InputType()
], DishCategoryInput);
exports.DishCategoryInput = DishCategoryInput;


/***/ }),

/***/ "./src/commerce/dto/create-drink.input.ts":
/*!************************************************!*\
  !*** ./src/commerce/dto/create-drink.input.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateDrinkInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
let CreateDrinkInput = class CreateDrinkInput {
};
__decorate([
    graphql_1.Field(() => String, { description: "Drink's name" }),
    __metadata("design:type", Object)
], CreateDrinkInput.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Drink's description" }),
    __metadata("design:type", Object)
], CreateDrinkInput.prototype, "description", void 0);
__decorate([
    graphql_1.Field(() => file_schema_1.UploadMedia, { description: "Drink's images" }),
    __metadata("design:type", Object)
], CreateDrinkInput.prototype, "images", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { description: "Drink's price" }),
    __metadata("design:type", Object)
], CreateDrinkInput.prototype, "price", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Drink's shop" }),
    __metadata("design:type", Object)
], CreateDrinkInput.prototype, "shop", void 0);
CreateDrinkInput = __decorate([
    graphql_1.InputType()
], CreateDrinkInput);
exports.CreateDrinkInput = CreateDrinkInput;


/***/ }),

/***/ "./src/commerce/dto/create-room.input.ts":
/*!***********************************************!*\
  !*** ./src/commerce/dto/create-room.input.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoomInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
let RoomInput = class RoomInput {
};
__decorate([
    graphql_1.Field(() => String, { description: "Room's name" }),
    __metadata("design:type", Object)
], RoomInput.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Room's description" }),
    __metadata("design:type", Object)
], RoomInput.prototype, "description", void 0);
__decorate([
    graphql_1.Field(() => file_schema_1.UploadMedia, { description: "Room's images" }),
    __metadata("design:type", Object)
], RoomInput.prototype, "images", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { description: "Room's capacity" }),
    __metadata("design:type", Object)
], RoomInput.prototype, "capacity", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { description: "Room's price" }),
    __metadata("design:type", Object)
], RoomInput.prototype, "price", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Room's commerce" }),
    __metadata("design:type", Object)
], RoomInput.prototype, "commerce", void 0);
RoomInput = __decorate([
    graphql_1.InputType()
], RoomInput);
exports.RoomInput = RoomInput;


/***/ }),

/***/ "./src/commerce/dto/update-base-commerce.input.ts":
/*!********************************************************!*\
  !*** ./src/commerce/dto/update-base-commerce.input.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateBaseCommerceInput = void 0;
const create_base_commerce_input_1 = __webpack_require__(/*! ./create-base-commerce.input */ "./src/commerce/dto/create-base-commerce.input.ts");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
let UpdateBaseCommerceInput = class UpdateBaseCommerceInput {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], UpdateBaseCommerceInput.prototype, "id", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Commerce's name", nullable: true }),
    __metadata("design:type", Object)
], UpdateBaseCommerceInput.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => String, {
        description: "Commerce's description",
        nullable: true,
    }),
    __metadata("design:type", Object)
], UpdateBaseCommerceInput.prototype, "description", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Commerce's telephone", nullable: true }),
    __metadata("design:type", Object)
], UpdateBaseCommerceInput.prototype, "tel", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Commerce's address", nullable: true }),
    __metadata("design:type", Object)
], UpdateBaseCommerceInput.prototype, "address", void 0);
__decorate([
    graphql_1.Field(() => file_schema_1.UploadMedia, {
        description: "Commerce's images",
        nullable: true,
    }),
    __metadata("design:type", Object)
], UpdateBaseCommerceInput.prototype, "images", void 0);
__decorate([
    graphql_1.Field(() => create_base_commerce_input_1.OpeningTimeInput, {
        description: "Commerce's opening time",
        nullable: true,
    }),
    __metadata("design:type", Object)
], UpdateBaseCommerceInput.prototype, "openingTime", void 0);
__decorate([
    graphql_1.Field(() => create_base_commerce_input_1.PositionInput, {
        description: "Commerce's postion",
        nullable: true,
    }),
    __metadata("design:type", Object)
], UpdateBaseCommerceInput.prototype, "position", void 0);
UpdateBaseCommerceInput = __decorate([
    graphql_1.InputType()
], UpdateBaseCommerceInput);
exports.UpdateBaseCommerceInput = UpdateBaseCommerceInput;


/***/ }),

/***/ "./src/commerce/entities/base-commerce.entity.ts":
/*!*******************************************************!*\
  !*** ./src/commerce/entities/base-commerce.entity.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommerceSchema = exports.Commerce = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const commerce_entity_1 = __webpack_require__(/*! ./commerce.entity */ "./src/commerce/entities/commerce.entity.ts");
const review_entity_1 = __webpack_require__(/*! src/review/entities/review.entity */ "./src/review/entities/review.entity.ts");
const commerce_enum_1 = __webpack_require__(/*! ./commerce.enum */ "./src/commerce/entities/commerce.enum.ts");
class PostionType {
}
class OpeningTimeType {
}
let Commerce = class Commerce extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], Commerce.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Commerce's name" }),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Commerce.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Commerce's description" }),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Commerce.prototype, "description", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Commerce's telephone" }),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Commerce.prototype, "tel", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Commerce's address" }),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Commerce.prototype, "address", void 0);
__decorate([
    graphql_1.Field(() => [file_schema_1.File], { description: "Commerce's images" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], Commerce.prototype, "images", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { description: "Commerce's rating" }),
    mongoose_1.Prop({ default: 0 }),
    __metadata("design:type", Number)
], Commerce.prototype, "generalRating", void 0);
__decorate([
    graphql_1.Field(() => review_entity_1.DetailRating, { description: "Commerce's rating" }),
    mongoose_1.Prop({ default: { food: 0, hospitality: 0, comfortability: 0, atmosphere: 0 } }),
    __metadata("design:type", typeof (_a = typeof review_entity_1.DetailRating !== "undefined" && review_entity_1.DetailRating) === "function" ? _a : Object)
], Commerce.prototype, "generalDetailRating", void 0);
__decorate([
    graphql_1.Field(() => commerce_entity_1.OpeningTime, { description: "Commerce's opening time" }),
    mongoose_1.Prop({}),
    __metadata("design:type", OpeningTimeType)
], Commerce.prototype, "openingTime", void 0);
__decorate([
    graphql_1.Field(() => commerce_entity_1.Postion, { description: "Commerce's postion" }),
    mongoose_1.Prop({}),
    __metadata("design:type", PostionType)
], Commerce.prototype, "position", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Commerce's type" }),
    mongoose_1.Prop({ type: String, enum: commerce_enum_1.CommerceType, default: commerce_enum_1.CommerceType.Restaurant }),
    __metadata("design:type", Object)
], Commerce.prototype, "type", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Commerce's type" }),
    mongoose_1.Prop({ type: String, enum: commerce_enum_1.CollectionType, default: commerce_enum_1.CollectionType.Business }),
    __metadata("design:type", Object)
], Commerce.prototype, "collectionType", void 0);
__decorate([
    graphql_1.Field(() => commerce_entity_1.Profile, { description: "Commerce's Profile" }),
    mongoose_1.Prop({ type: mongoose_2.Types.ObjectId, refPath: 'type' }),
    __metadata("design:type", Object)
], Commerce.prototype, "profile", void 0);
__decorate([
    graphql_1.Field(() => [review_entity_1.Review], { description: "Commerce's reviews" }),
    mongoose_1.Prop({ type: [{ type: mongoose_2.Types.ObjectId, ref: () => review_entity_1.Review }], default: [] }),
    __metadata("design:type", Object)
], Commerce.prototype, "reviews", void 0);
__decorate([
    graphql_1.Field(() => file_schema_1.File, { description: "Commerce's AI image" }),
    mongoose_1.Prop({}),
    __metadata("design:type", typeof (_b = typeof file_schema_1.File !== "undefined" && file_schema_1.File) === "function" ? _b : Object)
], Commerce.prototype, "targetImage", void 0);
__decorate([
    graphql_1.Field(() => Boolean, { description: "Commerce's reserveable" }),
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], Commerce.prototype, "isReservable", void 0);
Commerce = __decorate([
    mongoose_1.Schema({ timestamps: true, strict: false }),
    graphql_1.ObjectType()
], Commerce);
exports.Commerce = Commerce;
exports.CommerceSchema = mongoose_1.SchemaFactory.createForClass(Commerce);


/***/ }),

/***/ "./src/commerce/entities/commerce.entity.ts":
/*!**************************************************!*\
  !*** ./src/commerce/entities/commerce.entity.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Addition = exports.Postion = exports.Profile = exports.OpeningTime = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const bar_entity_1 = __webpack_require__(/*! ./profiles/bar.entity */ "./src/commerce/entities/profiles/bar.entity.ts");
const cafe_entity_1 = __webpack_require__(/*! ./profiles/cafe.entity */ "./src/commerce/entities/profiles/cafe.entity.ts");
const guesthouse_entity_1 = __webpack_require__(/*! ./profiles/guesthouse.entity */ "./src/commerce/entities/profiles/guesthouse.entity.ts");
const hotel_entity_1 = __webpack_require__(/*! ./profiles/hotel.entity */ "./src/commerce/entities/profiles/hotel.entity.ts");
const juiceshop_entity_1 = __webpack_require__(/*! ./profiles/juiceshop.entity */ "./src/commerce/entities/profiles/juiceshop.entity.ts");
const jwajemshop_entity_1 = __webpack_require__(/*! ./profiles/jwajemshop.entity */ "./src/commerce/entities/profiles/jwajemshop.entity.ts");
const restaurant_entity_1 = __webpack_require__(/*! ./profiles/restaurant.entity */ "./src/commerce/entities/profiles/restaurant.entity.ts");
const shop_entity_1 = __webpack_require__(/*! ./profiles/shop.entity */ "./src/commerce/entities/profiles/shop.entity.ts");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
const commerce_enum_1 = __webpack_require__(/*! ./commerce.enum */ "./src/commerce/entities/commerce.enum.ts");
const landmark_entity_1 = __webpack_require__(/*! ./profiles/landmark.entity */ "./src/commerce/entities/profiles/landmark.entity.ts");
const mansion_entity_1 = __webpack_require__(/*! ./profiles/mansion.entity */ "./src/commerce/entities/profiles/mansion.entity.ts");
const activity_entity_1 = __webpack_require__(/*! ./profiles/activity.entity */ "./src/commerce/entities/profiles/activity.entity.ts");
const rooftop_entity_1 = __webpack_require__(/*! ./profiles/rooftop.entity */ "./src/commerce/entities/profiles/rooftop.entity.ts");
let OpeningTime = class OpeningTime {
};
__decorate([
    graphql_1.Field(() => Date),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], OpeningTime.prototype, "startTime", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], OpeningTime.prototype, "startDay", void 0);
__decorate([
    graphql_1.Field(() => Date),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], OpeningTime.prototype, "endtTime", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], OpeningTime.prototype, "endtDay", void 0);
OpeningTime = __decorate([
    graphql_1.ObjectType()
], OpeningTime);
exports.OpeningTime = OpeningTime;
exports.Profile = graphql_1.createUnionType({
    name: 'Profile',
    types: () => [
        restaurant_entity_1.Restaurant,
        bar_entity_1.Bar,
        cafe_entity_1.Cafe,
        guesthouse_entity_1.GuestHouse,
        hotel_entity_1.Hotel,
        juiceshop_entity_1.JuiceShop,
        jwajemshop_entity_1.JwajemShop,
        shop_entity_1.Shop,
        landmark_entity_1.Landmark,
        mansion_entity_1.Mansion,
        activity_entity_1.Activity,
        rooftop_entity_1.RoofTop
    ],
    resolveType(value) {
        const profile = value[0] || value;
        switch (profile.ObjecType) {
            case commerce_enum_1.CommerceType.Restaurant:
                return restaurant_entity_1.Restaurant;
            case commerce_enum_1.CommerceType.Bar:
                return bar_entity_1.Bar;
            case commerce_enum_1.CommerceType.Cafe:
                return cafe_entity_1.Cafe;
            case commerce_enum_1.CommerceType.GuestHouse:
                return guesthouse_entity_1.GuestHouse;
            case commerce_enum_1.CommerceType.Hotel:
                return hotel_entity_1.Hotel;
            case commerce_enum_1.CommerceType.JuiceShop:
                return juiceshop_entity_1.JuiceShop;
            case commerce_enum_1.CommerceType.JwajemShop:
                return jwajemshop_entity_1.JwajemShop;
            case commerce_enum_1.CommerceType.RoofTop:
                return rooftop_entity_1.RoofTop;
            case commerce_enum_1.CommerceType.Mansion:
                return mansion_entity_1.Mansion;
            case commerce_enum_1.CommerceType.Activity:
                return activity_entity_1.Activity;
            case commerce_enum_1.CommerceType.Landmark:
                return landmark_entity_1.Landmark;
            case commerce_enum_1.CommerceType.Shop:
                return shop_entity_1.Shop;
            default:
                return null;
        }
    },
});
let Postion = class Postion {
};
__decorate([
    graphql_1.Field(() => graphql_1.Float),
    __metadata("design:type", Number)
], Postion.prototype, "longitude", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float),
    __metadata("design:type", Number)
], Postion.prototype, "latitude", void 0);
Postion = __decorate([
    graphql_1.ObjectType()
], Postion);
exports.Postion = Postion;
let Addition = class Addition {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], Addition.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => file_schema_1.File),
    __metadata("design:type", typeof (_c = typeof file_schema_1.File !== "undefined" && file_schema_1.File) === "function" ? _c : Object)
], Addition.prototype, "icon", void 0);
Addition = __decorate([
    graphql_1.ObjectType()
], Addition);
exports.Addition = Addition;


/***/ }),

/***/ "./src/commerce/entities/commerce.enum.ts":
/*!************************************************!*\
  !*** ./src/commerce/entities/commerce.enum.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommerceType = exports.DiscoverType = exports.BusinessType = exports.CollectionType = void 0;
var CollectionType;
(function (CollectionType) {
    CollectionType["Business"] = "Business";
    CollectionType["Discover"] = "Discover";
})(CollectionType = exports.CollectionType || (exports.CollectionType = {}));
var BusinessType;
(function (BusinessType) {
    BusinessType["Restaurant"] = "Restaurant";
    BusinessType["Shop"] = "Shop";
    BusinessType["Bar"] = "Bar";
    BusinessType["Cafe"] = "Cafe";
    BusinessType["Hotel"] = "Hotel";
    BusinessType["GuestHouse"] = "GuestHouse";
    BusinessType["JwajemShop"] = "JwajemShop";
    BusinessType["JuiceShop"] = "JuiceShop";
})(BusinessType = exports.BusinessType || (exports.BusinessType = {}));
var DiscoverType;
(function (DiscoverType) {
    DiscoverType["Landmark"] = "Landmark";
    DiscoverType["RoofTop"] = "RoofTop";
    DiscoverType["Mansion"] = "Mansion";
    DiscoverType["Activity"] = "Activity";
})(DiscoverType = exports.DiscoverType || (exports.DiscoverType = {}));
exports.CommerceType = Object.assign(Object.assign({}, BusinessType), DiscoverType);


/***/ }),

/***/ "./src/commerce/entities/items/category.entity.ts":
/*!********************************************************!*\
  !*** ./src/commerce/entities/items/category.entity.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DishCategorySchema = exports.DishCategory = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const dish_entity_1 = __webpack_require__(/*! ./dish.entity */ "./src/commerce/entities/items/dish.entity.ts");
let DishCategory = class DishCategory extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], DishCategory.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Category's name" }),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DishCategory.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => file_schema_1.File, { description: "Category's icon" }),
    mongoose_1.Prop(),
    __metadata("design:type", typeof (_a = typeof file_schema_1.File !== "undefined" && file_schema_1.File) === "function" ? _a : Object)
], DishCategory.prototype, "icon", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Category's description" }),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DishCategory.prototype, "description", void 0);
__decorate([
    graphql_1.Field(() => [dish_entity_1.Dish], { description: "Category's dishs" }),
    mongoose_1.Prop({ type: [{ type: mongoose_2.Types.ObjectId, ref: () => dish_entity_1.Dish }], default: [] }),
    __metadata("design:type", Object)
], DishCategory.prototype, "dishs", void 0);
DishCategory = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], DishCategory);
exports.DishCategory = DishCategory;
exports.DishCategorySchema = mongoose_1.SchemaFactory.createForClass(DishCategory);


/***/ }),

/***/ "./src/commerce/entities/items/dish.entity.ts":
/*!****************************************************!*\
  !*** ./src/commerce/entities/items/dish.entity.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DishSchema = exports.Dish = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const base_commerce_entity_1 = __webpack_require__(/*! ../base-commerce.entity */ "./src/commerce/entities/base-commerce.entity.ts");
const category_entity_1 = __webpack_require__(/*! ./category.entity */ "./src/commerce/entities/items/category.entity.ts");
let Dish = class Dish extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], Dish.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Dish's name" }),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Dish.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Dish's description" }),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Dish.prototype, "description", void 0);
__decorate([
    graphql_1.Field(() => [file_schema_1.File], { description: "Dish's images" }),
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], Dish.prototype, "images", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { description: "Dish's rating" }),
    mongoose_1.Prop({ default: 0 }),
    __metadata("design:type", Number)
], Dish.prototype, "rate", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { description: "Dish's price" }),
    mongoose_1.Prop({ default: 0 }),
    __metadata("design:type", Number)
], Dish.prototype, "price", void 0);
__decorate([
    graphql_1.Field(() => base_commerce_entity_1.Commerce, { description: "Dish's resturant" }),
    mongoose_1.Prop({ type: mongoose_2.Types.ObjectId, ref: () => base_commerce_entity_1.Commerce }),
    __metadata("design:type", Object)
], Dish.prototype, "restaurant", void 0);
__decorate([
    graphql_1.Field(() => category_entity_1.DishCategory, { description: "Dish's category" }),
    mongoose_1.Prop({ type: mongoose_2.Types.ObjectId, ref: () => category_entity_1.DishCategory }),
    __metadata("design:type", Object)
], Dish.prototype, "category", void 0);
Dish = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], Dish);
exports.Dish = Dish;
exports.DishSchema = mongoose_1.SchemaFactory.createForClass(Dish);


/***/ }),

/***/ "./src/commerce/entities/items/drink.entity.ts":
/*!*****************************************************!*\
  !*** ./src/commerce/entities/items/drink.entity.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrinkSchema = exports.Drink = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const base_commerce_entity_1 = __webpack_require__(/*! ../base-commerce.entity */ "./src/commerce/entities/base-commerce.entity.ts");
let Drink = class Drink extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], Drink.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Drink's name" }),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Drink.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Drink's description" }),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Drink.prototype, "description", void 0);
__decorate([
    graphql_1.Field(() => [file_schema_1.File], { description: "Drink's images" }),
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], Drink.prototype, "images", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { description: "Drink's rating" }),
    mongoose_1.Prop({ default: 0 }),
    __metadata("design:type", Number)
], Drink.prototype, "rate", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { description: "Drink's price" }),
    mongoose_1.Prop({ default: 0 }),
    __metadata("design:type", Number)
], Drink.prototype, "price", void 0);
__decorate([
    graphql_1.Field(() => base_commerce_entity_1.Commerce, { description: "Drink's shop" }),
    mongoose_1.Prop({ type: mongoose_2.Types.ObjectId, ref: () => base_commerce_entity_1.Commerce }),
    __metadata("design:type", Object)
], Drink.prototype, "shop", void 0);
Drink = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], Drink);
exports.Drink = Drink;
exports.DrinkSchema = mongoose_1.SchemaFactory.createForClass(Drink);


/***/ }),

/***/ "./src/commerce/entities/items/room.entity.ts":
/*!****************************************************!*\
  !*** ./src/commerce/entities/items/room.entity.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoomSchema = exports.Room = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const base_commerce_entity_1 = __webpack_require__(/*! ../base-commerce.entity */ "./src/commerce/entities/base-commerce.entity.ts");
const commerce_entity_1 = __webpack_require__(/*! ../commerce.entity */ "./src/commerce/entities/commerce.entity.ts");
const review_entity_1 = __webpack_require__(/*! src/review/entities/review.entity */ "./src/review/entities/review.entity.ts");
let Room = class Room extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], Room.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Room's name" }),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Room.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Room's description" }),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Room.prototype, "description", void 0);
__decorate([
    graphql_1.Field(() => [file_schema_1.File], { description: "Room's images" }),
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], Room.prototype, "images", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { description: "Room's rating" }),
    mongoose_1.Prop({ default: 0 }),
    __metadata("design:type", Number)
], Room.prototype, "rate", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { description: "Room's capacity" }),
    mongoose_1.Prop({ default: 0 }),
    __metadata("design:type", Number)
], Room.prototype, "capacity", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float, { description: "Room's price" }),
    mongoose_1.Prop({ default: 0 }),
    __metadata("design:type", Number)
], Room.prototype, "price", void 0);
__decorate([
    graphql_1.Field(() => [commerce_entity_1.Addition], { description: "Room's includes" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], Room.prototype, "includes", void 0);
__decorate([
    graphql_1.Field(() => base_commerce_entity_1.Commerce, { description: "Room's commerce" }),
    mongoose_1.Prop({ type: mongoose_2.Types.ObjectId, ref: () => base_commerce_entity_1.Commerce }),
    __metadata("design:type", Object)
], Room.prototype, "commerce", void 0);
__decorate([
    graphql_1.Field(() => [review_entity_1.Review], { description: "Room's reviews" }),
    mongoose_1.Prop({ type: [{ type: mongoose_2.Types.ObjectId, ref: () => review_entity_1.Review }], default: [] }),
    __metadata("design:type", Object)
], Room.prototype, "reviews", void 0);
Room = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], Room);
exports.Room = Room;
exports.RoomSchema = mongoose_1.SchemaFactory.createForClass(Room);


/***/ }),

/***/ "./src/commerce/entities/profiles/activity.entity.ts":
/*!***********************************************************!*\
  !*** ./src/commerce/entities/profiles/activity.entity.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActivitySchema = exports.Activity = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const commerce_entity_1 = __webpack_require__(/*! ../commerce.entity */ "./src/commerce/entities/commerce.entity.ts");
const commerce_enum_1 = __webpack_require__(/*! ../commerce.enum */ "./src/commerce/entities/commerce.enum.ts");
const drink_entity_1 = __webpack_require__(/*! ../items/drink.entity */ "./src/commerce/entities/items/drink.entity.ts");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
let Activity = class Activity extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], Activity.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => [file_schema_1.File], { description: "Bar's stories" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], Activity.prototype, "stories", void 0);
__decorate([
    graphql_1.Field(() => [drink_entity_1.Drink], { description: "Bar's drinks" }),
    mongoose_1.Prop({ type: [{ type: mongoose_2.Types.ObjectId, ref: () => drink_entity_1.Drink }], default: [] }),
    __metadata("design:type", Object)
], Activity.prototype, "services", void 0);
__decorate([
    graphql_1.Field(() => [commerce_entity_1.Addition], { description: "Bar's includes" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], Activity.prototype, "includes", void 0);
__decorate([
    graphql_1.Field(() => [commerce_entity_1.Addition], { description: "Bar's payments" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], Activity.prototype, "payments", void 0);
__decorate([
    mongoose_1.Prop({ type: String, enum: commerce_enum_1.CommerceType, default: commerce_enum_1.CommerceType.Activity }),
    __metadata("design:type", Object)
], Activity.prototype, "ObjecType", void 0);
Activity = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], Activity);
exports.Activity = Activity;
exports.ActivitySchema = mongoose_1.SchemaFactory.createForClass(Activity);


/***/ }),

/***/ "./src/commerce/entities/profiles/bar.entity.ts":
/*!******************************************************!*\
  !*** ./src/commerce/entities/profiles/bar.entity.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BarSchema = exports.Bar = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const commerce_entity_1 = __webpack_require__(/*! ../commerce.entity */ "./src/commerce/entities/commerce.entity.ts");
const commerce_enum_1 = __webpack_require__(/*! ../commerce.enum */ "./src/commerce/entities/commerce.enum.ts");
const drink_entity_1 = __webpack_require__(/*! ../items/drink.entity */ "./src/commerce/entities/items/drink.entity.ts");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
let Bar = class Bar extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], Bar.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => [file_schema_1.File], { description: "Bar's stories" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], Bar.prototype, "stories", void 0);
__decorate([
    graphql_1.Field(() => [drink_entity_1.Drink], { description: "Bar's drinks" }),
    mongoose_1.Prop({ type: [{ type: mongoose_2.Types.ObjectId, ref: () => drink_entity_1.Drink }], default: [] }),
    __metadata("design:type", Object)
], Bar.prototype, "menu", void 0);
__decorate([
    graphql_1.Field(() => [file_schema_1.File], { description: "Menu Images" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], Bar.prototype, "menuRaw", void 0);
__decorate([
    graphql_1.Field(() => [commerce_entity_1.Addition], { description: "Bar's includes" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], Bar.prototype, "includes", void 0);
__decorate([
    graphql_1.Field(() => [commerce_entity_1.Addition], { description: "Bar's payments" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], Bar.prototype, "payments", void 0);
__decorate([
    mongoose_1.Prop({ type: String, enum: commerce_enum_1.CommerceType, default: commerce_enum_1.CommerceType.Bar }),
    __metadata("design:type", Object)
], Bar.prototype, "ObjecType", void 0);
Bar = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], Bar);
exports.Bar = Bar;
exports.BarSchema = mongoose_1.SchemaFactory.createForClass(Bar);


/***/ }),

/***/ "./src/commerce/entities/profiles/cafe.entity.ts":
/*!*******************************************************!*\
  !*** ./src/commerce/entities/profiles/cafe.entity.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CafeSchema = exports.Cafe = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const commerce_entity_1 = __webpack_require__(/*! ../commerce.entity */ "./src/commerce/entities/commerce.entity.ts");
const commerce_enum_1 = __webpack_require__(/*! ../commerce.enum */ "./src/commerce/entities/commerce.enum.ts");
const drink_entity_1 = __webpack_require__(/*! ../items/drink.entity */ "./src/commerce/entities/items/drink.entity.ts");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
let Cafe = class Cafe extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], Cafe.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => [file_schema_1.File], { description: "Bar's stories" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], Cafe.prototype, "stories", void 0);
__decorate([
    graphql_1.Field(() => [drink_entity_1.Drink], { description: "Bar's drinks" }),
    mongoose_1.Prop({ type: [{ type: mongoose_2.Types.ObjectId, ref: () => drink_entity_1.Drink }], default: [] }),
    __metadata("design:type", Object)
], Cafe.prototype, "menu", void 0);
__decorate([
    graphql_1.Field(() => [file_schema_1.File], { description: "Menu Images" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], Cafe.prototype, "menuRaw", void 0);
__decorate([
    graphql_1.Field(() => [commerce_entity_1.Addition], { description: "Bar's includes" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], Cafe.prototype, "includes", void 0);
__decorate([
    graphql_1.Field(() => [commerce_entity_1.Addition], { description: "Bar's payments" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], Cafe.prototype, "payments", void 0);
__decorate([
    mongoose_1.Prop({ type: String, enum: commerce_enum_1.CommerceType, default: commerce_enum_1.CommerceType.Cafe }),
    __metadata("design:type", Object)
], Cafe.prototype, "ObjecType", void 0);
Cafe = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], Cafe);
exports.Cafe = Cafe;
exports.CafeSchema = mongoose_1.SchemaFactory.createForClass(Cafe);


/***/ }),

/***/ "./src/commerce/entities/profiles/guesthouse.entity.ts":
/*!*************************************************************!*\
  !*** ./src/commerce/entities/profiles/guesthouse.entity.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GuestHouseSchema = exports.GuestHouse = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const commerce_entity_1 = __webpack_require__(/*! ../commerce.entity */ "./src/commerce/entities/commerce.entity.ts");
const commerce_enum_1 = __webpack_require__(/*! ../commerce.enum */ "./src/commerce/entities/commerce.enum.ts");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
const room_entity_1 = __webpack_require__(/*! ../items/room.entity */ "./src/commerce/entities/items/room.entity.ts");
let GuestHouse = class GuestHouse extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], GuestHouse.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => [file_schema_1.File], { description: "Guesthouse's stories" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], GuestHouse.prototype, "stories", void 0);
__decorate([
    graphql_1.Field(() => [room_entity_1.Room], { description: "Guesthouse's rooms" }),
    mongoose_1.Prop({ type: [{ type: mongoose_2.Types.ObjectId, ref: () => room_entity_1.Room }], default: [] }),
    __metadata("design:type", Object)
], GuestHouse.prototype, "rooms", void 0);
__decorate([
    graphql_1.Field(() => [commerce_entity_1.Addition], { description: "Guesthouse's includes" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], GuestHouse.prototype, "includes", void 0);
__decorate([
    graphql_1.Field(() => [commerce_entity_1.Addition], { description: "Guesthouse's payments" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], GuestHouse.prototype, "payments", void 0);
__decorate([
    mongoose_1.Prop({ type: String, enum: commerce_enum_1.CommerceType, default: commerce_enum_1.CommerceType.GuestHouse }),
    __metadata("design:type", Object)
], GuestHouse.prototype, "ObjecType", void 0);
GuestHouse = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], GuestHouse);
exports.GuestHouse = GuestHouse;
exports.GuestHouseSchema = mongoose_1.SchemaFactory.createForClass(GuestHouse);


/***/ }),

/***/ "./src/commerce/entities/profiles/hotel.entity.ts":
/*!********************************************************!*\
  !*** ./src/commerce/entities/profiles/hotel.entity.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HotelSchema = exports.Hotel = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const commerce_entity_1 = __webpack_require__(/*! ../commerce.entity */ "./src/commerce/entities/commerce.entity.ts");
const commerce_enum_1 = __webpack_require__(/*! ../commerce.enum */ "./src/commerce/entities/commerce.enum.ts");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
const room_entity_1 = __webpack_require__(/*! ../items/room.entity */ "./src/commerce/entities/items/room.entity.ts");
let Hotel = class Hotel extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], Hotel.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => [file_schema_1.File], { description: "Hotel's stories" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], Hotel.prototype, "stories", void 0);
__decorate([
    graphql_1.Field(() => [room_entity_1.Room], { description: "Hotel's rooms" }),
    mongoose_1.Prop({ type: [{ type: mongoose_2.Types.ObjectId, ref: () => room_entity_1.Room }], default: [] }),
    __metadata("design:type", Object)
], Hotel.prototype, "rooms", void 0);
__decorate([
    graphql_1.Field(() => [commerce_entity_1.Addition], { description: "Hotel's includes" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], Hotel.prototype, "includes", void 0);
__decorate([
    graphql_1.Field(() => [commerce_entity_1.Addition], { description: "Hotel's payments" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], Hotel.prototype, "payments", void 0);
__decorate([
    mongoose_1.Prop({ type: String, enum: commerce_enum_1.CommerceType, default: commerce_enum_1.CommerceType.Hotel }),
    __metadata("design:type", Object)
], Hotel.prototype, "ObjecType", void 0);
Hotel = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], Hotel);
exports.Hotel = Hotel;
exports.HotelSchema = mongoose_1.SchemaFactory.createForClass(Hotel);


/***/ }),

/***/ "./src/commerce/entities/profiles/juiceshop.entity.ts":
/*!************************************************************!*\
  !*** ./src/commerce/entities/profiles/juiceshop.entity.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JuiceShopSchema = exports.JuiceShop = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const commerce_entity_1 = __webpack_require__(/*! ../commerce.entity */ "./src/commerce/entities/commerce.entity.ts");
const commerce_enum_1 = __webpack_require__(/*! ../commerce.enum */ "./src/commerce/entities/commerce.enum.ts");
const drink_entity_1 = __webpack_require__(/*! ../items/drink.entity */ "./src/commerce/entities/items/drink.entity.ts");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
let JuiceShop = class JuiceShop extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], JuiceShop.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => [file_schema_1.File], { description: "Bar's stories" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], JuiceShop.prototype, "stories", void 0);
__decorate([
    graphql_1.Field(() => [drink_entity_1.Drink], { description: "Bar's drinks" }),
    mongoose_1.Prop({ type: [{ type: mongoose_2.Types.ObjectId, ref: () => drink_entity_1.Drink }], default: [] }),
    __metadata("design:type", Object)
], JuiceShop.prototype, "menu", void 0);
__decorate([
    graphql_1.Field(() => [file_schema_1.File], { description: "Menu Images" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], JuiceShop.prototype, "menuRaw", void 0);
__decorate([
    graphql_1.Field(() => [commerce_entity_1.Addition], { description: "Bar's includes" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], JuiceShop.prototype, "includes", void 0);
__decorate([
    graphql_1.Field(() => [commerce_entity_1.Addition], { description: "Bar's payments" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], JuiceShop.prototype, "payments", void 0);
__decorate([
    mongoose_1.Prop({ type: String, enum: commerce_enum_1.CommerceType, default: commerce_enum_1.CommerceType.JuiceShop }),
    __metadata("design:type", Object)
], JuiceShop.prototype, "ObjecType", void 0);
JuiceShop = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], JuiceShop);
exports.JuiceShop = JuiceShop;
exports.JuiceShopSchema = mongoose_1.SchemaFactory.createForClass(JuiceShop);


/***/ }),

/***/ "./src/commerce/entities/profiles/jwajemshop.entity.ts":
/*!*************************************************************!*\
  !*** ./src/commerce/entities/profiles/jwajemshop.entity.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwajemShopSchema = exports.JwajemShop = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const commerce_entity_1 = __webpack_require__(/*! ../commerce.entity */ "./src/commerce/entities/commerce.entity.ts");
const commerce_enum_1 = __webpack_require__(/*! ../commerce.enum */ "./src/commerce/entities/commerce.enum.ts");
const drink_entity_1 = __webpack_require__(/*! ../items/drink.entity */ "./src/commerce/entities/items/drink.entity.ts");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
let JwajemShop = class JwajemShop extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], JwajemShop.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => [file_schema_1.File], { description: "Bar's stories" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], JwajemShop.prototype, "stories", void 0);
__decorate([
    graphql_1.Field(() => [drink_entity_1.Drink], { description: "Bar's drinks" }),
    mongoose_1.Prop({ type: [{ type: mongoose_2.Types.ObjectId, ref: () => drink_entity_1.Drink }], default: [] }),
    __metadata("design:type", Object)
], JwajemShop.prototype, "menu", void 0);
__decorate([
    graphql_1.Field(() => [file_schema_1.File], { description: "Menu Images" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], JwajemShop.prototype, "menuRaw", void 0);
__decorate([
    graphql_1.Field(() => [commerce_entity_1.Addition], { description: "Bar's includes" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], JwajemShop.prototype, "includes", void 0);
__decorate([
    graphql_1.Field(() => [commerce_entity_1.Addition], { description: "Bar's payments" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], JwajemShop.prototype, "payments", void 0);
__decorate([
    mongoose_1.Prop({ type: String, enum: commerce_enum_1.CommerceType, default: commerce_enum_1.CommerceType.JwajemShop }),
    __metadata("design:type", Object)
], JwajemShop.prototype, "ObjecType", void 0);
JwajemShop = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], JwajemShop);
exports.JwajemShop = JwajemShop;
exports.JwajemShopSchema = mongoose_1.SchemaFactory.createForClass(JwajemShop);


/***/ }),

/***/ "./src/commerce/entities/profiles/landmark.entity.ts":
/*!***********************************************************!*\
  !*** ./src/commerce/entities/profiles/landmark.entity.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LandmarkSchema = exports.Landmark = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const commerce_entity_1 = __webpack_require__(/*! ../commerce.entity */ "./src/commerce/entities/commerce.entity.ts");
const commerce_enum_1 = __webpack_require__(/*! ../commerce.enum */ "./src/commerce/entities/commerce.enum.ts");
let Landmark = class Landmark extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], Landmark.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => [commerce_entity_1.Addition], { description: "Bar's includes" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], Landmark.prototype, "includes", void 0);
__decorate([
    graphql_1.Field(() => [commerce_entity_1.Addition], { description: "Bar's payments" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], Landmark.prototype, "payments", void 0);
__decorate([
    mongoose_1.Prop({ type: String, enum: commerce_enum_1.CommerceType, default: commerce_enum_1.CommerceType.Landmark }),
    __metadata("design:type", Object)
], Landmark.prototype, "ObjecType", void 0);
Landmark = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], Landmark);
exports.Landmark = Landmark;
exports.LandmarkSchema = mongoose_1.SchemaFactory.createForClass(Landmark);


/***/ }),

/***/ "./src/commerce/entities/profiles/mansion.entity.ts":
/*!**********************************************************!*\
  !*** ./src/commerce/entities/profiles/mansion.entity.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MansionSchema = exports.Mansion = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
const commerce_entity_1 = __webpack_require__(/*! ../commerce.entity */ "./src/commerce/entities/commerce.entity.ts");
const commerce_enum_1 = __webpack_require__(/*! ../commerce.enum */ "./src/commerce/entities/commerce.enum.ts");
let Mansion = class Mansion extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], Mansion.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => [file_schema_1.File], { description: "Restaurant's stories" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], Mansion.prototype, "stories", void 0);
__decorate([
    graphql_1.Field(() => [commerce_entity_1.Addition], { description: "Restaurant's includes" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], Mansion.prototype, "includes", void 0);
__decorate([
    graphql_1.Field(() => [commerce_entity_1.Addition], { description: "Restaurant's payments" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], Mansion.prototype, "payments", void 0);
__decorate([
    mongoose_1.Prop({ type: String, enum: commerce_enum_1.CommerceType, default: commerce_enum_1.CommerceType.Mansion }),
    __metadata("design:type", Object)
], Mansion.prototype, "ObjecType", void 0);
Mansion = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], Mansion);
exports.Mansion = Mansion;
exports.MansionSchema = mongoose_1.SchemaFactory.createForClass(Mansion);


/***/ }),

/***/ "./src/commerce/entities/profiles/restaurant.entity.ts":
/*!*************************************************************!*\
  !*** ./src/commerce/entities/profiles/restaurant.entity.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RestaurantSchema = exports.Restaurant = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
const commerce_entity_1 = __webpack_require__(/*! ../commerce.entity */ "./src/commerce/entities/commerce.entity.ts");
const commerce_enum_1 = __webpack_require__(/*! ../commerce.enum */ "./src/commerce/entities/commerce.enum.ts");
const dish_entity_1 = __webpack_require__(/*! ../items/dish.entity */ "./src/commerce/entities/items/dish.entity.ts");
let Restaurant = class Restaurant extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], Restaurant.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => [file_schema_1.File], { description: "Restaurant's stories" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], Restaurant.prototype, "stories", void 0);
__decorate([
    graphql_1.Field(() => [dish_entity_1.Dish], { description: "Restaurant's dishs" }),
    mongoose_1.Prop({ type: [{ type: mongoose_2.Types.ObjectId, ref: () => dish_entity_1.Dish }], default: [] }),
    __metadata("design:type", Object)
], Restaurant.prototype, "menu", void 0);
__decorate([
    graphql_1.Field(() => [file_schema_1.File], { description: "Menu Images" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], Restaurant.prototype, "menuRaw", void 0);
__decorate([
    graphql_1.Field(() => [commerce_entity_1.Addition], { description: "Restaurant's includes" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], Restaurant.prototype, "includes", void 0);
__decorate([
    graphql_1.Field(() => [commerce_entity_1.Addition], { description: "Restaurant's payments" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], Restaurant.prototype, "payments", void 0);
__decorate([
    mongoose_1.Prop({ type: String, enum: commerce_enum_1.CommerceType, default: commerce_enum_1.CommerceType.Restaurant }),
    __metadata("design:type", Object)
], Restaurant.prototype, "ObjecType", void 0);
Restaurant = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], Restaurant);
exports.Restaurant = Restaurant;
exports.RestaurantSchema = mongoose_1.SchemaFactory.createForClass(Restaurant);


/***/ }),

/***/ "./src/commerce/entities/profiles/rooftop.entity.ts":
/*!**********************************************************!*\
  !*** ./src/commerce/entities/profiles/rooftop.entity.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoofTopSchema = exports.RoofTop = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const commerce_entity_1 = __webpack_require__(/*! ../commerce.entity */ "./src/commerce/entities/commerce.entity.ts");
const commerce_enum_1 = __webpack_require__(/*! ../commerce.enum */ "./src/commerce/entities/commerce.enum.ts");
const drink_entity_1 = __webpack_require__(/*! ../items/drink.entity */ "./src/commerce/entities/items/drink.entity.ts");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
let RoofTop = class RoofTop extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], RoofTop.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => [file_schema_1.File], { description: "Bar's stories" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], RoofTop.prototype, "stories", void 0);
__decorate([
    graphql_1.Field(() => [drink_entity_1.Drink], { description: "Bar's drinks" }),
    mongoose_1.Prop({ type: [{ type: mongoose_2.Types.ObjectId, ref: () => drink_entity_1.Drink }], default: [] }),
    __metadata("design:type", Object)
], RoofTop.prototype, "services", void 0);
__decorate([
    graphql_1.Field(() => [commerce_entity_1.Addition], { description: "Bar's includes" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], RoofTop.prototype, "includes", void 0);
__decorate([
    graphql_1.Field(() => [commerce_entity_1.Addition], { description: "Bar's payments" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], RoofTop.prototype, "payments", void 0);
__decorate([
    mongoose_1.Prop({ type: String, enum: commerce_enum_1.CommerceType, default: commerce_enum_1.CommerceType.RoofTop }),
    __metadata("design:type", Object)
], RoofTop.prototype, "ObjecType", void 0);
RoofTop = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], RoofTop);
exports.RoofTop = RoofTop;
exports.RoofTopSchema = mongoose_1.SchemaFactory.createForClass(RoofTop);


/***/ }),

/***/ "./src/commerce/entities/profiles/shop.entity.ts":
/*!*******************************************************!*\
  !*** ./src/commerce/entities/profiles/shop.entity.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShopSchema = exports.Shop = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const commerce_enum_1 = __webpack_require__(/*! ../commerce.enum */ "./src/commerce/entities/commerce.enum.ts");
let Shop = class Shop extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], Shop.prototype, "_id", void 0);
__decorate([
    mongoose_1.Prop({ type: String, enum: commerce_enum_1.CommerceType, default: commerce_enum_1.CommerceType.Shop }),
    __metadata("design:type", Object)
], Shop.prototype, "ObjecType", void 0);
Shop = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], Shop);
exports.Shop = Shop;
exports.ShopSchema = mongoose_1.SchemaFactory.createForClass(Shop);


/***/ }),

/***/ "./src/commerce/resolvers/bar.resolver.ts":
/*!************************************************!*\
  !*** ./src/commerce/resolvers/bar.resolver.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BarResolver = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const file_interceptor_1 = __webpack_require__(/*! src/utils/file.interceptor */ "./src/utils/file.interceptor.ts");
const create_drink_input_1 = __webpack_require__(/*! ../dto/create-drink.input */ "./src/commerce/dto/create-drink.input.ts");
const drink_entity_1 = __webpack_require__(/*! ../entities/items/drink.entity */ "./src/commerce/entities/items/drink.entity.ts");
const bar_service_1 = __webpack_require__(/*! ../services/bar.service */ "./src/commerce/services/bar.service.ts");
let BarResolver = class BarResolver {
    constructor(barService) {
        this.barService = barService;
    }
    async addDrinkToBar(info) {
        return this.barService.addDrink(info);
    }
};
__decorate([
    common_1.UseInterceptors(file_interceptor_1.GraphqlFiles(['addDrink.images'])),
    graphql_1.Mutation(() => drink_entity_1.Drink),
    __param(0, graphql_1.Args('addDrink')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_drink_input_1.CreateDrinkInput !== "undefined" && create_drink_input_1.CreateDrinkInput) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], BarResolver.prototype, "addDrinkToBar", null);
BarResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [typeof (_b = typeof bar_service_1.BarService !== "undefined" && bar_service_1.BarService) === "function" ? _b : Object])
], BarResolver);
exports.BarResolver = BarResolver;


/***/ }),

/***/ "./src/commerce/resolvers/cafe.resolver.ts":
/*!*************************************************!*\
  !*** ./src/commerce/resolvers/cafe.resolver.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CafeResolver = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const file_interceptor_1 = __webpack_require__(/*! src/utils/file.interceptor */ "./src/utils/file.interceptor.ts");
const create_drink_input_1 = __webpack_require__(/*! ../dto/create-drink.input */ "./src/commerce/dto/create-drink.input.ts");
const drink_entity_1 = __webpack_require__(/*! ../entities/items/drink.entity */ "./src/commerce/entities/items/drink.entity.ts");
const cafe_service_1 = __webpack_require__(/*! ../services/cafe.service */ "./src/commerce/services/cafe.service.ts");
let CafeResolver = class CafeResolver {
    constructor(cafeService) {
        this.cafeService = cafeService;
    }
    async addDrinkToCafe(info) {
        return this.cafeService.addDrink(info);
    }
};
__decorate([
    common_1.UseInterceptors(file_interceptor_1.GraphqlFiles(['addDrink.images'])),
    graphql_1.Mutation(() => drink_entity_1.Drink),
    __param(0, graphql_1.Args('addDrink')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_drink_input_1.CreateDrinkInput !== "undefined" && create_drink_input_1.CreateDrinkInput) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], CafeResolver.prototype, "addDrinkToCafe", null);
CafeResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [typeof (_b = typeof cafe_service_1.CafeService !== "undefined" && cafe_service_1.CafeService) === "function" ? _b : Object])
], CafeResolver);
exports.CafeResolver = CafeResolver;


/***/ }),

/***/ "./src/commerce/resolvers/guesthouse.resolver.ts":
/*!*******************************************************!*\
  !*** ./src/commerce/resolvers/guesthouse.resolver.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GuesthouseResolver = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const file_interceptor_1 = __webpack_require__(/*! src/utils/file.interceptor */ "./src/utils/file.interceptor.ts");
const create_room_input_1 = __webpack_require__(/*! ../dto/create-room.input */ "./src/commerce/dto/create-room.input.ts");
const room_entity_1 = __webpack_require__(/*! ../entities/items/room.entity */ "./src/commerce/entities/items/room.entity.ts");
const guesthouse_service_1 = __webpack_require__(/*! ../services/guesthouse.service */ "./src/commerce/services/guesthouse.service.ts");
let GuesthouseResolver = class GuesthouseResolver {
    constructor(guesthouseService) {
        this.guesthouseService = guesthouseService;
    }
    async addRoomToGuestHouse(info) {
        return this.guesthouseService.addRoom(info);
    }
};
__decorate([
    common_1.UseInterceptors(file_interceptor_1.GraphqlFiles(['addRoom.images'])),
    graphql_1.Mutation(() => room_entity_1.Room),
    __param(0, graphql_1.Args('addRoom')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_room_input_1.RoomInput !== "undefined" && create_room_input_1.RoomInput) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], GuesthouseResolver.prototype, "addRoomToGuestHouse", null);
GuesthouseResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [typeof (_b = typeof guesthouse_service_1.GuesthouseService !== "undefined" && guesthouse_service_1.GuesthouseService) === "function" ? _b : Object])
], GuesthouseResolver);
exports.GuesthouseResolver = GuesthouseResolver;


/***/ }),

/***/ "./src/commerce/resolvers/hotel.resolver.ts":
/*!**************************************************!*\
  !*** ./src/commerce/resolvers/hotel.resolver.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HotelResolver = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const file_interceptor_1 = __webpack_require__(/*! src/utils/file.interceptor */ "./src/utils/file.interceptor.ts");
const create_room_input_1 = __webpack_require__(/*! ../dto/create-room.input */ "./src/commerce/dto/create-room.input.ts");
const room_entity_1 = __webpack_require__(/*! ../entities/items/room.entity */ "./src/commerce/entities/items/room.entity.ts");
const hotel_service_1 = __webpack_require__(/*! ../services/hotel.service */ "./src/commerce/services/hotel.service.ts");
let HotelResolver = class HotelResolver {
    constructor(hotelService) {
        this.hotelService = hotelService;
    }
    async addRoomToHotel(info) {
        return this.hotelService.addRoom(info);
    }
};
__decorate([
    common_1.UseInterceptors(file_interceptor_1.GraphqlFiles(['addRoom.images'])),
    graphql_1.Mutation(() => room_entity_1.Room),
    __param(0, graphql_1.Args('addRoom')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_room_input_1.RoomInput !== "undefined" && create_room_input_1.RoomInput) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], HotelResolver.prototype, "addRoomToHotel", null);
HotelResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [typeof (_b = typeof hotel_service_1.HotelService !== "undefined" && hotel_service_1.HotelService) === "function" ? _b : Object])
], HotelResolver);
exports.HotelResolver = HotelResolver;


/***/ }),

/***/ "./src/commerce/resolvers/jawjemshop.resolver.ts":
/*!*******************************************************!*\
  !*** ./src/commerce/resolvers/jawjemshop.resolver.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JawjemshopResolver = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const file_interceptor_1 = __webpack_require__(/*! src/utils/file.interceptor */ "./src/utils/file.interceptor.ts");
const create_drink_input_1 = __webpack_require__(/*! ../dto/create-drink.input */ "./src/commerce/dto/create-drink.input.ts");
const drink_entity_1 = __webpack_require__(/*! ../entities/items/drink.entity */ "./src/commerce/entities/items/drink.entity.ts");
const jwajemshop_service_1 = __webpack_require__(/*! ../services/jwajemshop.service */ "./src/commerce/services/jwajemshop.service.ts");
let JawjemshopResolver = class JawjemshopResolver {
    constructor(jwajemshopService) {
        this.jwajemshopService = jwajemshopService;
    }
    async addDrinkToJuiceshop(info) {
        return this.jwajemshopService.addDrink(info);
    }
};
__decorate([
    common_1.UseInterceptors(file_interceptor_1.GraphqlFiles(['addDrink.images'])),
    graphql_1.Mutation(() => drink_entity_1.Drink),
    __param(0, graphql_1.Args('addDrink')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_drink_input_1.CreateDrinkInput !== "undefined" && create_drink_input_1.CreateDrinkInput) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], JawjemshopResolver.prototype, "addDrinkToJuiceshop", null);
JawjemshopResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [typeof (_b = typeof jwajemshop_service_1.JwajemshopService !== "undefined" && jwajemshop_service_1.JwajemshopService) === "function" ? _b : Object])
], JawjemshopResolver);
exports.JawjemshopResolver = JawjemshopResolver;


/***/ }),

/***/ "./src/commerce/resolvers/juiceshop.resolver.ts":
/*!******************************************************!*\
  !*** ./src/commerce/resolvers/juiceshop.resolver.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JuiceshopResolver = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const file_interceptor_1 = __webpack_require__(/*! src/utils/file.interceptor */ "./src/utils/file.interceptor.ts");
const create_drink_input_1 = __webpack_require__(/*! ../dto/create-drink.input */ "./src/commerce/dto/create-drink.input.ts");
const drink_entity_1 = __webpack_require__(/*! ../entities/items/drink.entity */ "./src/commerce/entities/items/drink.entity.ts");
const juiceshop_service_1 = __webpack_require__(/*! ../services/juiceshop.service */ "./src/commerce/services/juiceshop.service.ts");
let JuiceshopResolver = class JuiceshopResolver {
    constructor(juiceshopService) {
        this.juiceshopService = juiceshopService;
    }
    async addDrinkToJuiceshop(info) {
        return this.juiceshopService.addDrink(info);
    }
};
__decorate([
    common_1.UseInterceptors(file_interceptor_1.GraphqlFiles(['addDrink.images'])),
    graphql_1.Mutation(() => drink_entity_1.Drink),
    __param(0, graphql_1.Args('addDrink')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_drink_input_1.CreateDrinkInput !== "undefined" && create_drink_input_1.CreateDrinkInput) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], JuiceshopResolver.prototype, "addDrinkToJuiceshop", null);
JuiceshopResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [typeof (_b = typeof juiceshop_service_1.JuiceshopService !== "undefined" && juiceshop_service_1.JuiceshopService) === "function" ? _b : Object])
], JuiceshopResolver);
exports.JuiceshopResolver = JuiceshopResolver;


/***/ }),

/***/ "./src/commerce/resolvers/restaurant.resolver.ts":
/*!*******************************************************!*\
  !*** ./src/commerce/resolvers/restaurant.resolver.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RestaurantResolver = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const file_interceptor_1 = __webpack_require__(/*! src/utils/file.interceptor */ "./src/utils/file.interceptor.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! src/utils/guards/jwt-auth.guard */ "./src/utils/guards/jwt-auth.guard.ts");
const public_decorator_1 = __webpack_require__(/*! src/utils/guards/public.decorator */ "./src/utils/guards/public.decorator.ts");
const create_base_commerce_input_1 = __webpack_require__(/*! ../dto/create-base-commerce.input */ "./src/commerce/dto/create-base-commerce.input.ts");
const create_dishcat_input_1 = __webpack_require__(/*! ../dto/create-dishcat.input */ "./src/commerce/dto/create-dishcat.input.ts");
const category_entity_1 = __webpack_require__(/*! ../entities/items/category.entity */ "./src/commerce/entities/items/category.entity.ts");
const dish_entity_1 = __webpack_require__(/*! ../entities/items/dish.entity */ "./src/commerce/entities/items/dish.entity.ts");
const restaurant_entity_1 = __webpack_require__(/*! ../entities/profiles/restaurant.entity */ "./src/commerce/entities/profiles/restaurant.entity.ts");
const dish_category_service_1 = __webpack_require__(/*! ../services/dish-category.service */ "./src/commerce/services/dish-category.service.ts");
const restaurant_service_1 = __webpack_require__(/*! ../services/restaurant.service */ "./src/commerce/services/restaurant.service.ts");
let RestaurantResolver = class RestaurantResolver {
    constructor(resturantService, dishCategoryService) {
        this.resturantService = resturantService;
        this.dishCategoryService = dishCategoryService;
    }
    async addDishToRestaurant(info) {
        return this.resturantService.createDish(info);
    }
    async removeDish(id) {
        return this.resturantService.removeDish(id);
    }
    async createDishCategory(dishCategory) {
        return this.dishCategoryService.create(dishCategory);
    }
    async removeDishCategory(id) {
        return this.dishCategoryService.remove(id);
    }
    allDishCategory() {
        return this.dishCategoryService.findAll();
    }
    getDishCategory(id) {
        return this.dishCategoryService.find(id);
    }
    dishSearch(searchParams) {
        return this.resturantService.serach(searchParams);
    }
};
__decorate([
    common_1.UseInterceptors(file_interceptor_1.GraphqlFiles(['addDish.images'])),
    graphql_1.Mutation(() => dish_entity_1.Dish),
    __param(0, graphql_1.Args('addDish')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_base_commerce_input_1.AddDishToResturant !== "undefined" && create_base_commerce_input_1.AddDishToResturant) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], RestaurantResolver.prototype, "addDishToRestaurant", null);
__decorate([
    graphql_1.Mutation(() => dish_entity_1.Dish),
    __param(0, graphql_1.Args('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RestaurantResolver.prototype, "removeDish", null);
__decorate([
    common_1.UseInterceptors(file_interceptor_1.GraphqlFiles(['dishCategoryInput.icon'])),
    graphql_1.Mutation(() => restaurant_entity_1.Restaurant),
    __param(0, graphql_1.Args('dishCategoryInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_dishcat_input_1.DishCategoryInput !== "undefined" && create_dishcat_input_1.DishCategoryInput) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], RestaurantResolver.prototype, "createDishCategory", null);
__decorate([
    graphql_1.Mutation(() => restaurant_entity_1.Restaurant),
    __param(0, graphql_1.Args('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RestaurantResolver.prototype, "removeDishCategory", null);
__decorate([
    public_decorator_1.Public(),
    graphql_1.Query(() => [category_entity_1.DishCategory]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RestaurantResolver.prototype, "allDishCategory", null);
__decorate([
    public_decorator_1.Public(),
    graphql_1.Query(() => category_entity_1.DishCategory),
    __param(0, graphql_1.Args('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RestaurantResolver.prototype, "getDishCategory", null);
__decorate([
    public_decorator_1.Public(),
    graphql_1.Query(() => [dish_entity_1.Dish]),
    __param(0, graphql_1.Args('searchParams')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof create_base_commerce_input_1.DishSearchParamsInput !== "undefined" && create_base_commerce_input_1.DishSearchParamsInput) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], RestaurantResolver.prototype, "dishSearch", null);
RestaurantResolver = __decorate([
    common_1.UseGuards(jwt_auth_guard_1.GqlAuthGuard),
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [typeof (_d = typeof restaurant_service_1.RestaurantService !== "undefined" && restaurant_service_1.RestaurantService) === "function" ? _d : Object, typeof (_e = typeof dish_category_service_1.DishCategoryService !== "undefined" && dish_category_service_1.DishCategoryService) === "function" ? _e : Object])
], RestaurantResolver);
exports.RestaurantResolver = RestaurantResolver;


/***/ }),

/***/ "./src/commerce/resolvers/shop.resolver.ts":
/*!*************************************************!*\
  !*** ./src/commerce/resolvers/shop.resolver.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShopResolver = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let ShopResolver = class ShopResolver {
};
ShopResolver = __decorate([
    graphql_1.Resolver()
], ShopResolver);
exports.ShopResolver = ShopResolver;


/***/ }),

/***/ "./src/commerce/services/activity.service.ts":
/*!***************************************************!*\
  !*** ./src/commerce/services/activity.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActivityService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const commerce_service_1 = __webpack_require__(/*! ../commerce.service */ "./src/commerce/commerce.service.ts");
const activity_entity_1 = __webpack_require__(/*! ../entities/profiles/activity.entity */ "./src/commerce/entities/profiles/activity.entity.ts");
let ActivityService = class ActivityService {
    constructor(ActivityModel, commerceService) {
        this.ActivityModel = ActivityModel;
        this.commerceService = commerceService;
    }
    create() {
        return new this.ActivityModel().save();
    }
    findAll() {
        return this.ActivityModel.find().populate({ path: 'rooms' });
    }
    async addIncludes(include) {
        const activity = await this.ActivityModel.findById(include.profileId);
        activity.includes.push(include.addition);
        return await this.ActivityModel.findByIdAndUpdate(activity._id, activity).populate({ path: 'rooms' });
    }
    async addPayments(include) {
        const activity = await this.ActivityModel.findById(include.profileId);
        activity.payments.push(include.addition);
        return await this.ActivityModel.findByIdAndUpdate(activity._id, activity).populate({ path: 'rooms' });
    }
    findById(id) {
        return this.ActivityModel.findById(id);
    }
    update(info) {
        return this.ActivityModel.findByIdAndUpdate(info._id, info);
    }
};
ActivityService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(activity_entity_1.Activity.name)),
    __param(1, common_1.Inject(common_1.forwardRef(() => commerce_service_1.CommerceService))),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof commerce_service_1.CommerceService !== "undefined" && commerce_service_1.CommerceService) === "function" ? _b : Object])
], ActivityService);
exports.ActivityService = ActivityService;


/***/ }),

/***/ "./src/commerce/services/bar.service.ts":
/*!**********************************************!*\
  !*** ./src/commerce/services/bar.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BarService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const commerce_service_1 = __webpack_require__(/*! ../commerce.service */ "./src/commerce/commerce.service.ts");
const drink_entity_1 = __webpack_require__(/*! ../entities/items/drink.entity */ "./src/commerce/entities/items/drink.entity.ts");
const bar_entity_1 = __webpack_require__(/*! ../entities/profiles/bar.entity */ "./src/commerce/entities/profiles/bar.entity.ts");
let BarService = class BarService {
    constructor(BarModel, commerceService, DrinkModel) {
        this.BarModel = BarModel;
        this.commerceService = commerceService;
        this.DrinkModel = DrinkModel;
    }
    create() {
        return new this.BarModel().save();
    }
    findAll() {
        return this.BarModel.find().populate({ path: 'menu' });
    }
    findById(id) {
        return this.BarModel.findById(id);
    }
    update(info) {
        return this.BarModel.findByIdAndUpdate(info._id, info);
    }
    async addDrink(drinkInfo) {
        const bar = await this.BarModel.findById(drinkInfo.commerce);
        const commerce = await this.commerceService.findByProfileId(drinkInfo.commerce);
        if (bar) {
            drinkInfo.commerce = commerce._id;
            const drink = await new this.DrinkModel(drinkInfo).save();
            bar.menu.push(drink._id);
            return await this.BarModel.findByIdAndUpdate(bar._id, bar).populate({
                path: 'menu',
            });
        }
    }
    async addIncludes(include) {
        const bar = await this.BarModel.findById(include.profileId);
        bar.includes.push(include.addition);
        return await this.BarModel.findByIdAndUpdate(bar._id, bar).populate({
            path: 'rooms',
        });
    }
    async addPayments(include) {
        const bar = await this.BarModel.findById(include.profileId);
        bar.payments.push(include.addition);
        return await this.BarModel.findByIdAndUpdate(bar._id, bar).populate({
            path: 'rooms',
        });
    }
};
BarService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(bar_entity_1.Bar.name)),
    __param(1, common_1.Inject(common_1.forwardRef(() => commerce_service_1.CommerceService))),
    __param(2, mongoose_1.InjectModel(drink_entity_1.Drink.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof commerce_service_1.CommerceService !== "undefined" && commerce_service_1.CommerceService) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object])
], BarService);
exports.BarService = BarService;


/***/ }),

/***/ "./src/commerce/services/cafe.service.ts":
/*!***********************************************!*\
  !*** ./src/commerce/services/cafe.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CafeService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const commerce_service_1 = __webpack_require__(/*! ../commerce.service */ "./src/commerce/commerce.service.ts");
const drink_entity_1 = __webpack_require__(/*! ../entities/items/drink.entity */ "./src/commerce/entities/items/drink.entity.ts");
const cafe_entity_1 = __webpack_require__(/*! ../entities/profiles/cafe.entity */ "./src/commerce/entities/profiles/cafe.entity.ts");
let CafeService = class CafeService {
    constructor(CafeModel, commerceService, DrinkModel) {
        this.CafeModel = CafeModel;
        this.commerceService = commerceService;
        this.DrinkModel = DrinkModel;
    }
    create() {
        return new this.CafeModel().save();
    }
    findAll() {
        return this.CafeModel.find().populate({ path: 'menu' });
    }
    findById(id) {
        return this.CafeModel.findById(id);
    }
    update(info) {
        return this.CafeModel.findByIdAndUpdate(info._id, info);
    }
    async addDrink(drinkInfo) {
        const cafe = await this.CafeModel.findById(drinkInfo.commerce);
        const commerce = await this.commerceService.findByProfileId(drinkInfo.commerce);
        if (cafe) {
            drinkInfo.commerce = commerce._id;
            const drink = await new this.DrinkModel(drinkInfo).save();
            cafe.menu.push(drink._id);
            return await this.CafeModel.findByIdAndUpdate(cafe._id, cafe).populate({
                path: 'menu',
            });
        }
    }
    async addIncludes(include) {
        const cafe = await this.CafeModel.findById(include.profileId);
        cafe.includes.push(include.addition);
        return await this.CafeModel.findByIdAndUpdate(cafe._id, cafe).populate({
            path: 'rooms',
        });
    }
    async addPayments(include) {
        const cafe = await this.CafeModel.findById(include.profileId);
        cafe.payments.push(include.addition);
        return await this.CafeModel.findByIdAndUpdate(cafe._id, cafe).populate({
            path: 'rooms',
        });
    }
};
CafeService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(cafe_entity_1.Cafe.name)),
    __param(1, common_1.Inject(common_1.forwardRef(() => commerce_service_1.CommerceService))),
    __param(2, mongoose_1.InjectModel(drink_entity_1.Drink.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof commerce_service_1.CommerceService !== "undefined" && commerce_service_1.CommerceService) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object])
], CafeService);
exports.CafeService = CafeService;


/***/ }),

/***/ "./src/commerce/services/dish-category.service.ts":
/*!********************************************************!*\
  !*** ./src/commerce/services/dish-category.service.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DishCategoryService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const category_entity_1 = __webpack_require__(/*! ../entities/items/category.entity */ "./src/commerce/entities/items/category.entity.ts");
let DishCategoryService = class DishCategoryService {
    constructor(DishCategoryModel) {
        this.DishCategoryModel = DishCategoryModel;
    }
    async create(category) {
        return await new this.DishCategoryModel(category).save();
    }
    remove(id) {
        return this.DishCategoryModel.findByIdAndRemove(id);
    }
    update(category) {
        return this.DishCategoryModel.findByIdAndUpdate(category._id, category);
    }
    find(id) {
        return this.DishCategoryModel.findById(id).populate({
            path: 'dishs',
            populate: { path: 'restaurant' },
        });
    }
    findAll() {
        return this.DishCategoryModel.find().populate({
            path: 'dishs',
            populate: { path: 'restaurant' },
        });
    }
};
DishCategoryService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(category_entity_1.DishCategory.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], DishCategoryService);
exports.DishCategoryService = DishCategoryService;


/***/ }),

/***/ "./src/commerce/services/guesthouse.service.ts":
/*!*****************************************************!*\
  !*** ./src/commerce/services/guesthouse.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GuesthouseService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const commerce_service_1 = __webpack_require__(/*! ../commerce.service */ "./src/commerce/commerce.service.ts");
const room_entity_1 = __webpack_require__(/*! ../entities/items/room.entity */ "./src/commerce/entities/items/room.entity.ts");
const guesthouse_entity_1 = __webpack_require__(/*! ../entities/profiles/guesthouse.entity */ "./src/commerce/entities/profiles/guesthouse.entity.ts");
let GuesthouseService = class GuesthouseService {
    constructor(GuesthouseModel, commerceService, RoomModel) {
        this.GuesthouseModel = GuesthouseModel;
        this.commerceService = commerceService;
        this.RoomModel = RoomModel;
    }
    create() {
        return new this.GuesthouseModel().save();
    }
    findAll() {
        return this.GuesthouseModel.find().populate({ path: 'rooms' });
    }
    async addRoom(roomInfo) {
        const guesthouse = await this.GuesthouseModel.findById(roomInfo.commerce);
        const commerce = await this.commerceService.findByProfileId(roomInfo.commerce);
        if (guesthouse) {
            roomInfo.commerce = commerce._id;
            const room = await new this.RoomModel(roomInfo).save();
            guesthouse.rooms.push(room._id);
            return await this.GuesthouseModel.findByIdAndUpdate(guesthouse._id, guesthouse).populate({ path: 'rooms' });
        }
    }
    async addIncludes(include) {
        const guesthouse = await this.GuesthouseModel.findById(include.profileId);
        guesthouse.includes.push(include.addition);
        return await this.GuesthouseModel.findByIdAndUpdate(guesthouse._id, guesthouse).populate({ path: 'rooms' });
    }
    async addPayments(include) {
        const guesthouse = await this.GuesthouseModel.findById(include.profileId);
        guesthouse.payments.push(include.addition);
        return await this.GuesthouseModel.findByIdAndUpdate(guesthouse._id, guesthouse).populate({ path: 'rooms' });
    }
    findById(id) {
        return this.GuesthouseModel.findById(id);
    }
    update(info) {
        return this.GuesthouseModel.findByIdAndUpdate(info._id, info);
    }
};
GuesthouseService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(guesthouse_entity_1.GuestHouse.name)),
    __param(1, common_1.Inject(common_1.forwardRef(() => commerce_service_1.CommerceService))),
    __param(2, mongoose_1.InjectModel(room_entity_1.Room.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof commerce_service_1.CommerceService !== "undefined" && commerce_service_1.CommerceService) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object])
], GuesthouseService);
exports.GuesthouseService = GuesthouseService;


/***/ }),

/***/ "./src/commerce/services/hotel.service.ts":
/*!************************************************!*\
  !*** ./src/commerce/services/hotel.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HotelService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const room_entity_1 = __webpack_require__(/*! ../entities/items/room.entity */ "./src/commerce/entities/items/room.entity.ts");
const hotel_entity_1 = __webpack_require__(/*! ../entities/profiles/hotel.entity */ "./src/commerce/entities/profiles/hotel.entity.ts");
const commerce_service_1 = __webpack_require__(/*! ../commerce.service */ "./src/commerce/commerce.service.ts");
let HotelService = class HotelService {
    constructor(HotelModel, commerceService, RoomModel) {
        this.HotelModel = HotelModel;
        this.commerceService = commerceService;
        this.RoomModel = RoomModel;
    }
    create() {
        return new this.HotelModel().save();
    }
    findAll() {
        return this.HotelModel.find().populate({ path: 'rooms' });
    }
    async addRoom(roomInfo) {
        const hotel = await this.HotelModel.findById(roomInfo.commerce);
        const commerce = await this.commerceService.findByProfileId(roomInfo.commerce);
        if (hotel) {
            roomInfo.commerce = commerce._id;
            const room = await new this.RoomModel(roomInfo).save();
            hotel.rooms.push(room._id);
            return await this.HotelModel.findByIdAndUpdate(hotel._id, hotel).populate({ path: 'rooms' });
        }
    }
    findRoomById(id) {
        return this.RoomModel.findById(id).populate(['commerce']).populate({ path: 'reviews', populate: { path: 'user' } });
    }
    findById(id) {
        return this.HotelModel.findById(id);
    }
    update(info) {
        return this.HotelModel.findByIdAndUpdate(info._id, info);
    }
};
HotelService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(hotel_entity_1.Hotel.name)),
    __param(1, common_1.Inject(common_1.forwardRef(() => commerce_service_1.CommerceService))),
    __param(2, mongoose_1.InjectModel(room_entity_1.Room.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof commerce_service_1.CommerceService !== "undefined" && commerce_service_1.CommerceService) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object])
], HotelService);
exports.HotelService = HotelService;


/***/ }),

/***/ "./src/commerce/services/juiceshop.service.ts":
/*!****************************************************!*\
  !*** ./src/commerce/services/juiceshop.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JuiceshopService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const commerce_service_1 = __webpack_require__(/*! ../commerce.service */ "./src/commerce/commerce.service.ts");
const drink_entity_1 = __webpack_require__(/*! ../entities/items/drink.entity */ "./src/commerce/entities/items/drink.entity.ts");
const juiceshop_entity_1 = __webpack_require__(/*! ../entities/profiles/juiceshop.entity */ "./src/commerce/entities/profiles/juiceshop.entity.ts");
let JuiceshopService = class JuiceshopService {
    constructor(JuiceshopModel, commerceService, DrinkModel) {
        this.JuiceshopModel = JuiceshopModel;
        this.commerceService = commerceService;
        this.DrinkModel = DrinkModel;
    }
    create() {
        return new this.JuiceshopModel().save();
    }
    findAll() {
        return this.JuiceshopModel.find().populate({ path: 'menu' });
    }
    findById(id) {
        return this.JuiceshopModel.findById(id);
    }
    update(info) {
        return this.JuiceshopModel.findByIdAndUpdate(info._id, info);
    }
    async addDrink(drinkInfo) {
        const juiceshop = await this.JuiceshopModel.findById(drinkInfo.commerce);
        const commerce = await this.commerceService.findByProfileId(drinkInfo.commerce);
        if (juiceshop) {
            drinkInfo.commerce = commerce._id;
            const drink = await new this.DrinkModel(drinkInfo).save();
            juiceshop.menu.push(drink._id);
            return await this.JuiceshopModel.findByIdAndUpdate(juiceshop._id, juiceshop).populate({ path: 'menu' });
        }
    }
};
JuiceshopService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(juiceshop_entity_1.JuiceShop.name)),
    __param(1, common_1.Inject(common_1.forwardRef(() => commerce_service_1.CommerceService))),
    __param(2, mongoose_1.InjectModel(drink_entity_1.Drink.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof commerce_service_1.CommerceService !== "undefined" && commerce_service_1.CommerceService) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object])
], JuiceshopService);
exports.JuiceshopService = JuiceshopService;


/***/ }),

/***/ "./src/commerce/services/jwajemshop.service.ts":
/*!*****************************************************!*\
  !*** ./src/commerce/services/jwajemshop.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwajemshopService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const commerce_service_1 = __webpack_require__(/*! ../commerce.service */ "./src/commerce/commerce.service.ts");
const drink_entity_1 = __webpack_require__(/*! ../entities/items/drink.entity */ "./src/commerce/entities/items/drink.entity.ts");
const jwajemshop_entity_1 = __webpack_require__(/*! ../entities/profiles/jwajemshop.entity */ "./src/commerce/entities/profiles/jwajemshop.entity.ts");
let JwajemshopService = class JwajemshopService {
    constructor(JwajemshopModel, commerceService, DrinkModel) {
        this.JwajemshopModel = JwajemshopModel;
        this.commerceService = commerceService;
        this.DrinkModel = DrinkModel;
    }
    async create() {
        return await new this.JwajemshopModel().save();
    }
    findAll() {
        return this.JwajemshopModel.find().populate({ path: 'menu' });
    }
    async addDrink(drinkInfo) {
        const jwajemshop = await this.JwajemshopModel.findById(drinkInfo.commerce);
        const commerce = await this.commerceService.findByProfileId(drinkInfo.commerce);
        if (jwajemshop) {
            drinkInfo.commerce = commerce._id;
            const drink = await new this.DrinkModel(drinkInfo).save();
            jwajemshop.menu.push(drink._id);
            return await this.JwajemshopModel.findByIdAndUpdate(jwajemshop._id, jwajemshop).populate({ path: 'menu' });
        }
    }
    findById(id) {
        return this.JwajemshopModel.findById(id);
    }
    update(info) {
        return this.JwajemshopModel.findByIdAndUpdate(info._id, info);
    }
    async addIncludes(include) {
        const jwajemshop = await this.JwajemshopModel.findById(include.profileId);
        jwajemshop.includes.push(include.addition);
        return await this.JwajemshopModel.findByIdAndUpdate(jwajemshop._id, jwajemshop).populate({ path: 'rooms' });
    }
    async addPayments(include) {
        const jwajemshop = await this.JwajemshopModel.findById(include.profileId);
        jwajemshop.payments.push(include.addition);
        return await this.JwajemshopModel.findByIdAndUpdate(jwajemshop._id, jwajemshop).populate({ path: 'rooms' });
    }
};
JwajemshopService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(jwajemshop_entity_1.JwajemShop.name)),
    __param(1, common_1.Inject(common_1.forwardRef(() => commerce_service_1.CommerceService))),
    __param(2, mongoose_1.InjectModel(drink_entity_1.Drink.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof commerce_service_1.CommerceService !== "undefined" && commerce_service_1.CommerceService) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object])
], JwajemshopService);
exports.JwajemshopService = JwajemshopService;


/***/ }),

/***/ "./src/commerce/services/landmark.service.ts":
/*!***************************************************!*\
  !*** ./src/commerce/services/landmark.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LandmarkService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const commerce_service_1 = __webpack_require__(/*! ../commerce.service */ "./src/commerce/commerce.service.ts");
const landmark_entity_1 = __webpack_require__(/*! ../entities/profiles/landmark.entity */ "./src/commerce/entities/profiles/landmark.entity.ts");
let LandmarkService = class LandmarkService {
    constructor(LandmarkModel, commerceService) {
        this.LandmarkModel = LandmarkModel;
        this.commerceService = commerceService;
    }
    create() {
        return new this.LandmarkModel().save();
    }
    findAll() {
        return this.LandmarkModel.find().populate({ path: 'menu' });
    }
    findById(id) {
        return this.LandmarkModel.findById(id);
    }
    update(info) {
        return this.LandmarkModel.findByIdAndUpdate(info._id, info);
    }
    async addIncludes(include) {
        const landmark = await this.LandmarkModel.findById(include.profileId);
        landmark.includes.push(include.addition);
        return await this.LandmarkModel.findByIdAndUpdate(landmark._id, landmark).populate({
            path: 'rooms',
        });
    }
    async addPayments(include) {
        const landmark = await this.LandmarkModel.findById(include.profileId);
        landmark.payments.push(include.addition);
        return await this.LandmarkModel.findByIdAndUpdate(landmark._id, landmark).populate({
            path: 'rooms',
        });
    }
};
LandmarkService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(landmark_entity_1.Landmark.name)),
    __param(1, common_1.Inject(common_1.forwardRef(() => commerce_service_1.CommerceService))),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof commerce_service_1.CommerceService !== "undefined" && commerce_service_1.CommerceService) === "function" ? _b : Object])
], LandmarkService);
exports.LandmarkService = LandmarkService;


/***/ }),

/***/ "./src/commerce/services/mansion.service.ts":
/*!**************************************************!*\
  !*** ./src/commerce/services/mansion.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MansionService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const commerce_service_1 = __webpack_require__(/*! ../commerce.service */ "./src/commerce/commerce.service.ts");
const mansion_entity_1 = __webpack_require__(/*! ../entities/profiles/mansion.entity */ "./src/commerce/entities/profiles/mansion.entity.ts");
let MansionService = class MansionService {
    constructor(MansionModel, commerceService) {
        this.MansionModel = MansionModel;
        this.commerceService = commerceService;
    }
    create() {
        return new this.MansionModel().save();
    }
    findAll() {
        return this.MansionModel.find().populate({ path: 'rooms' });
    }
    findById(id) {
        return this.MansionModel.findById(id);
    }
    update(info) {
        return this.MansionModel.findByIdAndUpdate(info._id, info);
    }
};
MansionService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(mansion_entity_1.Mansion.name)),
    __param(1, common_1.Inject(common_1.forwardRef(() => commerce_service_1.CommerceService))),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof commerce_service_1.CommerceService !== "undefined" && commerce_service_1.CommerceService) === "function" ? _b : Object])
], MansionService);
exports.MansionService = MansionService;


/***/ }),

/***/ "./src/commerce/services/restaurant.service.ts":
/*!*****************************************************!*\
  !*** ./src/commerce/services/restaurant.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RestaurantService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const dish_category_service_1 = __webpack_require__(/*! ./dish-category.service */ "./src/commerce/services/dish-category.service.ts");
const dish_entity_1 = __webpack_require__(/*! ../entities/items/dish.entity */ "./src/commerce/entities/items/dish.entity.ts");
const restaurant_entity_1 = __webpack_require__(/*! ../entities/profiles/restaurant.entity */ "./src/commerce/entities/profiles/restaurant.entity.ts");
const commerce_service_1 = __webpack_require__(/*! ../commerce.service */ "./src/commerce/commerce.service.ts");
let RestaurantService = class RestaurantService {
    constructor(RestaurantModel, DishModel, commerceService, dishCategoryService) {
        this.RestaurantModel = RestaurantModel;
        this.DishModel = DishModel;
        this.commerceService = commerceService;
        this.dishCategoryService = dishCategoryService;
    }
    create() {
        return new this.RestaurantModel().save();
    }
    findAll() {
        return this.RestaurantModel.find();
    }
    async createDish(dishInfo) {
        const category = await this.dishCategoryService.find(dishInfo.category);
        const restaurant = await this.RestaurantModel.findById(dishInfo.restaurant);
        const commerce = await this.commerceService.findByProfileId(dishInfo.restaurant);
        if (category && restaurant) {
            dishInfo.restaurant = commerce._id;
            const dish = await new this.DishModel(dishInfo).save();
            restaurant.menu.push(dish._id);
            category.dishs.push(dish._id);
            await this.dishCategoryService.update(category);
            await this.RestaurantModel.findByIdAndUpdate(restaurant._id, restaurant);
            return dish;
        }
        throw new common_1.HttpException("category or restaurant doesn't exist", 400);
    }
    removeDish(id) {
        return this.DishModel.findByIdAndRemove(id);
    }
    findById(id) {
        return this.RestaurantModel.findById(id);
    }
    update(info) {
        return this.RestaurantModel.findByIdAndUpdate(info._id, info);
    }
    async serach(searchParams) {
        return this.DishModel.find({
            name: { $regex: searchParams.name ? new RegExp("^.*" + searchParams.name.toLowerCase() + "*", "i") : /.*/, },
            category: searchParams.category || /.*/,
            price: { $gte: searchParams.min, $lte: searchParams.max }
        })
            .sort({ updatedAt: -1 })
            .skip(searchParams.start)
            .limit(searchParams.limit);
    }
};
RestaurantService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(restaurant_entity_1.Restaurant.name)),
    __param(1, mongoose_1.InjectModel(dish_entity_1.Dish.name)),
    __param(2, common_1.Inject(common_1.forwardRef(() => commerce_service_1.CommerceService))),
    __param(3, common_1.Inject(common_1.forwardRef(() => dish_category_service_1.DishCategoryService))),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof commerce_service_1.CommerceService !== "undefined" && commerce_service_1.CommerceService) === "function" ? _c : Object, typeof (_d = typeof dish_category_service_1.DishCategoryService !== "undefined" && dish_category_service_1.DishCategoryService) === "function" ? _d : Object])
], RestaurantService);
exports.RestaurantService = RestaurantService;


/***/ }),

/***/ "./src/commerce/services/rooftop.service.ts":
/*!**************************************************!*\
  !*** ./src/commerce/services/rooftop.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RooftopService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const commerce_service_1 = __webpack_require__(/*! ../commerce.service */ "./src/commerce/commerce.service.ts");
const rooftop_entity_1 = __webpack_require__(/*! ../entities/profiles/rooftop.entity */ "./src/commerce/entities/profiles/rooftop.entity.ts");
let RooftopService = class RooftopService {
    constructor(RoofTopModel, commerceService) {
        this.RoofTopModel = RoofTopModel;
        this.commerceService = commerceService;
    }
    create() {
        return new this.RoofTopModel().save();
    }
    findAll() {
        return this.RoofTopModel.find().populate({ path: 'menu' });
    }
    findById(id) {
        return this.RoofTopModel.findById(id);
    }
    update(info) {
        return this.RoofTopModel.findByIdAndUpdate(info._id, info);
    }
    async addIncludes(include) {
        const roofTop = await this.RoofTopModel.findById(include.profileId);
        roofTop.includes.push(include.addition);
        return await this.RoofTopModel.findByIdAndUpdate(roofTop._id, roofTop).populate({
            path: 'rooms',
        });
    }
    async addPayments(include) {
        const roofTop = await this.RoofTopModel.findById(include.profileId);
        roofTop.payments.push(include.addition);
        return await this.RoofTopModel.findByIdAndUpdate(roofTop._id, roofTop).populate({
            path: 'rooms',
        });
    }
};
RooftopService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(rooftop_entity_1.RoofTop.name)),
    __param(1, common_1.Inject(common_1.forwardRef(() => commerce_service_1.CommerceService))),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof commerce_service_1.CommerceService !== "undefined" && commerce_service_1.CommerceService) === "function" ? _b : Object])
], RooftopService);
exports.RooftopService = RooftopService;


/***/ }),

/***/ "./src/commerce/services/shop.service.ts":
/*!***********************************************!*\
  !*** ./src/commerce/services/shop.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShopService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const shop_entity_1 = __webpack_require__(/*! ../entities/profiles/shop.entity */ "./src/commerce/entities/profiles/shop.entity.ts");
let ShopService = class ShopService {
    constructor(ShopModel) {
        this.ShopModel = ShopModel;
    }
    create() {
        return new this.ShopModel().save();
    }
    findAll() {
        return this.ShopModel.find();
    }
    findById(id) {
        return this.ShopModel.findById(id);
    }
    update(info) {
        return this.ShopModel.findByIdAndUpdate(info._id, info);
    }
};
ShopService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(shop_entity_1.Shop.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], ShopService);
exports.ShopService = ShopService;


/***/ }),

/***/ "./src/default-config/default-config.module.ts":
/*!*****************************************************!*\
  !*** ./src/default-config/default-config.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultConfigModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const trip_module_1 = __webpack_require__(/*! src/trip/trip.module */ "./src/trip/trip.module.ts");
const default_config_resolver_1 = __webpack_require__(/*! ./default-config.resolver */ "./src/default-config/default-config.resolver.ts");
const default_config_service_1 = __webpack_require__(/*! ./default-config.service */ "./src/default-config/default-config.service.ts");
const default_config_entity_1 = __webpack_require__(/*! ./entities/default-config.entity */ "./src/default-config/entities/default-config.entity.ts");
let DefaultConfigModule = class DefaultConfigModule {
};
DefaultConfigModule = __decorate([
    common_1.Module({
        imports: [
            common_1.forwardRef(() => trip_module_1.TripModule),
            mongoose_1.MongooseModule.forFeature([
                { name: default_config_entity_1.DefaultConfig.name, schema: default_config_entity_1.DefaultConfigSchema },
            ]),
        ],
        providers: [default_config_resolver_1.DefaultConfigResolver, default_config_service_1.DefaultConfigService],
        exports: [default_config_service_1.DefaultConfigService]
    })
], DefaultConfigModule);
exports.DefaultConfigModule = DefaultConfigModule;


/***/ }),

/***/ "./src/default-config/default-config.resolver.ts":
/*!*******************************************************!*\
  !*** ./src/default-config/default-config.resolver.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultConfigResolver = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const default_config_service_1 = __webpack_require__(/*! ./default-config.service */ "./src/default-config/default-config.service.ts");
const create_default_config_input_1 = __webpack_require__(/*! ./dto/create-default-config.input */ "./src/default-config/dto/create-default-config.input.ts");
const default_config_entity_1 = __webpack_require__(/*! ./entities/default-config.entity */ "./src/default-config/entities/default-config.entity.ts");
let DefaultConfigResolver = class DefaultConfigResolver {
    constructor(defaultConfigService) {
        this.defaultConfigService = defaultConfigService;
    }
    createDefaultConfig(createDefaultConfigInput) {
        return this.defaultConfigService.create(createDefaultConfigInput);
    }
};
__decorate([
    graphql_1.Mutation(() => default_config_entity_1.DefaultConfig),
    __param(0, graphql_1.Args('createDefaultConfigInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_default_config_input_1.CreateDefaultConfigInput !== "undefined" && create_default_config_input_1.CreateDefaultConfigInput) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], DefaultConfigResolver.prototype, "createDefaultConfig", null);
DefaultConfigResolver = __decorate([
    graphql_1.Resolver(() => default_config_entity_1.DefaultConfig),
    __metadata("design:paramtypes", [typeof (_b = typeof default_config_service_1.DefaultConfigService !== "undefined" && default_config_service_1.DefaultConfigService) === "function" ? _b : Object])
], DefaultConfigResolver);
exports.DefaultConfigResolver = DefaultConfigResolver;


/***/ }),

/***/ "./src/default-config/default-config.service.ts":
/*!******************************************************!*\
  !*** ./src/default-config/default-config.service.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultConfigService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const trip_service_1 = __webpack_require__(/*! src/trip/trip.service */ "./src/trip/trip.service.ts");
const default_config_entity_1 = __webpack_require__(/*! ./entities/default-config.entity */ "./src/default-config/entities/default-config.entity.ts");
let DefaultConfigService = class DefaultConfigService {
    constructor(DefaultConfigModel, tripService) {
        this.DefaultConfigModel = DefaultConfigModel;
        this.tripService = tripService;
    }
    async create(createDefaultConfigInput) {
        const trip = await this.tripService.findOne(createDefaultConfigInput.defaultSelectedTripId);
        if (!trip)
            throw new common_1.BadRequestException('Trip not found for provided defaultSelectedTripId', { cause: new Error(), description: 'Some error description' });
        const config = await this.DefaultConfigModel.findOne();
        if (config) {
            await this.DefaultConfigModel.updateOne({ _id: config.id }, { defaultSelectedTripId: createDefaultConfigInput.defaultSelectedTripId }, { upsert: true });
            return config;
        }
        else {
            return (new this.DefaultConfigModel(createDefaultConfigInput)).save();
        }
    }
};
DefaultConfigService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(default_config_entity_1.DefaultConfig.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof trip_service_1.TripService !== "undefined" && trip_service_1.TripService) === "function" ? _b : Object])
], DefaultConfigService);
exports.DefaultConfigService = DefaultConfigService;


/***/ }),

/***/ "./src/default-config/dto/create-default-config.input.ts":
/*!***************************************************************!*\
  !*** ./src/default-config/dto/create-default-config.input.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateDefaultConfigInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let CreateDefaultConfigInput = class CreateDefaultConfigInput {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], CreateDefaultConfigInput.prototype, "defaultSelectedTripId", void 0);
CreateDefaultConfigInput = __decorate([
    graphql_1.InputType()
], CreateDefaultConfigInput);
exports.CreateDefaultConfigInput = CreateDefaultConfigInput;


/***/ }),

/***/ "./src/default-config/entities/default-config.entity.ts":
/*!**************************************************************!*\
  !*** ./src/default-config/entities/default-config.entity.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultConfigSchema = exports.DefaultConfig = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let DefaultConfig = class DefaultConfig extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], DefaultConfig.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => String),
    mongoose_1.Prop({}),
    __metadata("design:type", String)
], DefaultConfig.prototype, "defaultSelectedTripId", void 0);
DefaultConfig = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], DefaultConfig);
exports.DefaultConfig = DefaultConfig;
exports.DefaultConfigSchema = mongoose_1.SchemaFactory.createForClass(DefaultConfig);


/***/ }),

/***/ "./src/feedback/dto/create-feedback.input.ts":
/*!***************************************************!*\
  !*** ./src/feedback/dto/create-feedback.input.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateFeedbackInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let CreateFeedbackInput = class CreateFeedbackInput {
};
__decorate([
    graphql_1.Field(() => String, { description: 'Report type' }),
    __metadata("design:type", String)
], CreateFeedbackInput.prototype, "type", void 0);
__decorate([
    graphql_1.Field(() => String, { description: 'Reporting reason' }),
    __metadata("design:type", String)
], CreateFeedbackInput.prototype, "feedback", void 0);
CreateFeedbackInput = __decorate([
    graphql_1.InputType()
], CreateFeedbackInput);
exports.CreateFeedbackInput = CreateFeedbackInput;


/***/ }),

/***/ "./src/feedback/dto/update-feedback.input.ts":
/*!***************************************************!*\
  !*** ./src/feedback/dto/update-feedback.input.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateFeedbackInput = void 0;
const create_feedback_input_1 = __webpack_require__(/*! ./create-feedback.input */ "./src/feedback/dto/create-feedback.input.ts");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let UpdateFeedbackInput = class UpdateFeedbackInput extends graphql_1.PartialType(create_feedback_input_1.CreateFeedbackInput) {
};
__decorate([
    graphql_1.Field(() => graphql_1.Int),
    __metadata("design:type", Number)
], UpdateFeedbackInput.prototype, "id", void 0);
UpdateFeedbackInput = __decorate([
    graphql_1.InputType()
], UpdateFeedbackInput);
exports.UpdateFeedbackInput = UpdateFeedbackInput;


/***/ }),

/***/ "./src/feedback/entities/feedback.entity.ts":
/*!**************************************************!*\
  !*** ./src/feedback/entities/feedback.entity.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FeedbackSchema = exports.Feedback = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const user_entity_1 = __webpack_require__(/*! src/user/entities/user.entity */ "./src/user/entities/user.entity.ts");
var reporType;
(function (reporType) {
    reporType["AccessIssue"] = "AccessIssue";
    reporType["TechnicalIssue"] = "TechnicalIssue";
    reporType["TripIssue"] = "TripIssue";
    reporType["Other"] = "Other";
    reporType["Feedback"] = "Feedback";
})(reporType || (reporType = {}));
let Feedback = class Feedback extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], Feedback.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => user_entity_1.User),
    mongoose_1.Prop({ type: mongoose_2.Types.ObjectId, ref: () => user_entity_1.User }),
    __metadata("design:type", Object)
], Feedback.prototype, "reporter", void 0);
__decorate([
    graphql_1.Field(() => String, { description: 'type of report' }),
    mongoose_1.Prop({ type: String, required: true, enum: reporType }),
    __metadata("design:type", Object)
], Feedback.prototype, "type", void 0);
__decorate([
    graphql_1.Field(() => String),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Feedback.prototype, "feedback", void 0);
Feedback = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], Feedback);
exports.Feedback = Feedback;
exports.FeedbackSchema = mongoose_1.SchemaFactory.createForClass(Feedback);


/***/ }),

/***/ "./src/feedback/feedback.module.ts":
/*!*****************************************!*\
  !*** ./src/feedback/feedback.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FeedbackModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const feedback_service_1 = __webpack_require__(/*! ./feedback.service */ "./src/feedback/feedback.service.ts");
const feedback_resolver_1 = __webpack_require__(/*! ./feedback.resolver */ "./src/feedback/feedback.resolver.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const user_module_1 = __webpack_require__(/*! src/user/user.module */ "./src/user/user.module.ts");
const feedback_entity_1 = __webpack_require__(/*! ./entities/feedback.entity */ "./src/feedback/entities/feedback.entity.ts");
let FeedbackModule = class FeedbackModule {
};
FeedbackModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: feedback_entity_1.Feedback.name, schema: feedback_entity_1.FeedbackSchema }]),
            common_1.forwardRef(() => user_module_1.UserModule)
        ],
        providers: [feedback_resolver_1.FeedbackResolver, feedback_service_1.FeedbackService]
    })
], FeedbackModule);
exports.FeedbackModule = FeedbackModule;


/***/ }),

/***/ "./src/feedback/feedback.resolver.ts":
/*!*******************************************!*\
  !*** ./src/feedback/feedback.resolver.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FeedbackResolver = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const current_user_decorator_1 = __webpack_require__(/*! src/utils/guards/current-user.decorator */ "./src/utils/guards/current-user.decorator.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! src/utils/guards/jwt-auth.guard */ "./src/utils/guards/jwt-auth.guard.ts");
const create_feedback_input_1 = __webpack_require__(/*! ./dto/create-feedback.input */ "./src/feedback/dto/create-feedback.input.ts");
const update_feedback_input_1 = __webpack_require__(/*! ./dto/update-feedback.input */ "./src/feedback/dto/update-feedback.input.ts");
const feedback_entity_1 = __webpack_require__(/*! ./entities/feedback.entity */ "./src/feedback/entities/feedback.entity.ts");
const feedback_service_1 = __webpack_require__(/*! ./feedback.service */ "./src/feedback/feedback.service.ts");
let FeedbackResolver = class FeedbackResolver {
    constructor(feedbackService) {
        this.feedbackService = feedbackService;
    }
    createFeedback(createFeedbackInput, user) {
        return this.feedbackService.create(Object.assign(Object.assign({}, createFeedbackInput), { reporter: user.id }));
    }
    findAll() {
        return this.feedbackService.findAll();
    }
    findOne(id) {
        return this.feedbackService.findOne(id);
    }
    updateFeedback(updateFeedbackInput) {
        return this.feedbackService.update(updateFeedbackInput.id, updateFeedbackInput);
    }
    removeFeedback(id) {
        return this.feedbackService.remove(id);
    }
};
__decorate([
    graphql_1.Mutation(() => feedback_entity_1.Feedback),
    __param(0, graphql_1.Args('createFeedbackInput')), __param(1, current_user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_feedback_input_1.CreateFeedbackInput !== "undefined" && create_feedback_input_1.CreateFeedbackInput) === "function" ? _a : Object, Object]),
    __metadata("design:returntype", void 0)
], FeedbackResolver.prototype, "createFeedback", null);
__decorate([
    graphql_1.Query(() => [feedback_entity_1.Feedback], { name: 'feedbacks' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FeedbackResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => feedback_entity_1.Feedback, { name: 'feedback' }),
    __param(0, graphql_1.Args('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FeedbackResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation(() => feedback_entity_1.Feedback),
    __param(0, graphql_1.Args('updateFeedbackInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof update_feedback_input_1.UpdateFeedbackInput !== "undefined" && update_feedback_input_1.UpdateFeedbackInput) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], FeedbackResolver.prototype, "updateFeedback", null);
__decorate([
    graphql_1.Mutation(() => feedback_entity_1.Feedback),
    __param(0, graphql_1.Args('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FeedbackResolver.prototype, "removeFeedback", null);
FeedbackResolver = __decorate([
    common_1.UseGuards(jwt_auth_guard_1.GqlAuthGuard),
    graphql_1.Resolver(() => feedback_entity_1.Feedback),
    __metadata("design:paramtypes", [typeof (_c = typeof feedback_service_1.FeedbackService !== "undefined" && feedback_service_1.FeedbackService) === "function" ? _c : Object])
], FeedbackResolver);
exports.FeedbackResolver = FeedbackResolver;


/***/ }),

/***/ "./src/feedback/feedback.service.ts":
/*!******************************************!*\
  !*** ./src/feedback/feedback.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FeedbackService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const user_service_1 = __webpack_require__(/*! src/user/user.service */ "./src/user/user.service.ts");
const feedback_entity_1 = __webpack_require__(/*! ./entities/feedback.entity */ "./src/feedback/entities/feedback.entity.ts");
let FeedbackService = class FeedbackService {
    constructor(FeedbackModel, userService) {
        this.FeedbackModel = FeedbackModel;
        this.userService = userService;
    }
    async create(createFeedbackInput) {
        return await new this.FeedbackModel(createFeedbackInput).save();
    }
    async findAll() {
        return await this.FeedbackModel.find().populate(['reporter']);
    }
    async findOne(id) {
        return await this.FeedbackModel.findOne({ id: id }).populate(['reporter']);
    }
    async update(id, updateReportInput) {
    }
    async remove(id) {
        return await this.FeedbackModel.findOneAndRemove({ id: id }).populate(['reporter']);
    }
};
FeedbackService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(feedback_entity_1.Feedback.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _b : Object])
], FeedbackService);
exports.FeedbackService = FeedbackService;


/***/ }),

/***/ "./src/meta-data/entities/country.entity.ts":
/*!**************************************************!*\
  !*** ./src/meta-data/entities/country.entity.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CountrySchema = exports.Country = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let Country = class Country extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], Country.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => String),
    mongoose_1.Prop({ type: () => String }),
    __metadata("design:type", Object)
], Country.prototype, "name", void 0);
Country = __decorate([
    mongoose_1.Schema(),
    graphql_1.ObjectType()
], Country);
exports.Country = Country;
exports.CountrySchema = mongoose_1.SchemaFactory.createForClass(Country);


/***/ }),

/***/ "./src/meta-data/meta-data.module.ts":
/*!*******************************************!*\
  !*** ./src/meta-data/meta-data.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MetaDataModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const country_entity_1 = __webpack_require__(/*! ./entities/country.entity */ "./src/meta-data/entities/country.entity.ts");
const meta_data_resolver_1 = __webpack_require__(/*! ./meta-data.resolver */ "./src/meta-data/meta-data.resolver.ts");
const meta_data_service_1 = __webpack_require__(/*! ./meta-data.service */ "./src/meta-data/meta-data.service.ts");
let MetaDataModule = class MetaDataModule {
};
MetaDataModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: country_entity_1.Country.name, schema: country_entity_1.CountrySchema },
            ]),
        ],
        providers: [meta_data_resolver_1.MetaDataResolver, meta_data_service_1.MetaDataService],
    })
], MetaDataModule);
exports.MetaDataModule = MetaDataModule;


/***/ }),

/***/ "./src/meta-data/meta-data.resolver.ts":
/*!*********************************************!*\
  !*** ./src/meta-data/meta-data.resolver.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MetaDataResolver = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const country_entity_1 = __webpack_require__(/*! ./entities/country.entity */ "./src/meta-data/entities/country.entity.ts");
const meta_data_service_1 = __webpack_require__(/*! ./meta-data.service */ "./src/meta-data/meta-data.service.ts");
let MetaDataResolver = class MetaDataResolver {
    constructor(metaDataService) {
        this.metaDataService = metaDataService;
    }
    findAll() {
        return this.metaDataService.findAll();
    }
};
__decorate([
    graphql_1.Query(() => [country_entity_1.Country], { name: "countries" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MetaDataResolver.prototype, "findAll", null);
MetaDataResolver = __decorate([
    graphql_1.Resolver(() => country_entity_1.Country),
    __metadata("design:paramtypes", [typeof (_a = typeof meta_data_service_1.MetaDataService !== "undefined" && meta_data_service_1.MetaDataService) === "function" ? _a : Object])
], MetaDataResolver);
exports.MetaDataResolver = MetaDataResolver;


/***/ }),

/***/ "./src/meta-data/meta-data.service.ts":
/*!********************************************!*\
  !*** ./src/meta-data/meta-data.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MetaDataService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const country_entity_1 = __webpack_require__(/*! ./entities/country.entity */ "./src/meta-data/entities/country.entity.ts");
let MetaDataService = class MetaDataService {
    constructor(CountryModel) {
        this.CountryModel = CountryModel;
    }
    findAll() {
        return this.CountryModel.find();
    }
};
MetaDataService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(country_entity_1.Country.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], MetaDataService);
exports.MetaDataService = MetaDataService;


/***/ }),

/***/ "./src/notification/dto/notification.input.ts":
/*!****************************************************!*\
  !*** ./src/notification/dto/notification.input.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationUserInput = exports.NotificationCronInput = exports.NotificationInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let NotificationInput = class NotificationInput {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], NotificationInput.prototype, "title", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], NotificationInput.prototype, "body", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", Object)
], NotificationInput.prototype, "image", void 0);
NotificationInput = __decorate([
    graphql_1.InputType()
], NotificationInput);
exports.NotificationInput = NotificationInput;
let NotificationCronInput = class NotificationCronInput {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], NotificationCronInput.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], NotificationCronInput.prototype, "cronTime", void 0);
__decorate([
    graphql_1.Field(() => NotificationInput),
    __metadata("design:type", Object)
], NotificationCronInput.prototype, "notification", void 0);
NotificationCronInput = __decorate([
    graphql_1.InputType()
], NotificationCronInput);
exports.NotificationCronInput = NotificationCronInput;
let NotificationUserInput = class NotificationUserInput {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], NotificationUserInput.prototype, "id", void 0);
__decorate([
    graphql_1.Field(() => NotificationInput),
    __metadata("design:type", Object)
], NotificationUserInput.prototype, "notification", void 0);
NotificationUserInput = __decorate([
    graphql_1.InputType()
], NotificationUserInput);
exports.NotificationUserInput = NotificationUserInput;


/***/ }),

/***/ "./src/notification/entities/notification.entity.ts":
/*!**********************************************************!*\
  !*** ./src/notification/entities/notification.entity.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationSchema = exports.Notification = exports.NotificationEvent = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let NotificationEvent = class NotificationEvent {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], NotificationEvent.prototype, "message", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], NotificationEvent.prototype, "type", void 0);
NotificationEvent = __decorate([
    graphql_1.ObjectType()
], NotificationEvent);
exports.NotificationEvent = NotificationEvent;
let Notification = class Notification extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], Notification.prototype, "_id", void 0);
Notification = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], Notification);
exports.Notification = Notification;
exports.NotificationSchema = mongoose_1.SchemaFactory.createForClass(Notification);


/***/ }),

/***/ "./src/notification/notification.module.ts":
/*!*************************************************!*\
  !*** ./src/notification/notification.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const notification_service_1 = __webpack_require__(/*! ./notification.service */ "./src/notification/notification.service.ts");
const notification_resolver_1 = __webpack_require__(/*! ./notification.resolver */ "./src/notification/notification.resolver.ts");
const notification_entity_1 = __webpack_require__(/*! ./entities/notification.entity */ "./src/notification/entities/notification.entity.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
let NotificationModule = class NotificationModule {
};
NotificationModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: notification_entity_1.Notification.name, schema: notification_entity_1.NotificationSchema },
            ]),
            schedule_1.ScheduleModule.forRoot(),
        ],
        providers: [notification_resolver_1.NotificationResolver, notification_service_1.NotificationService],
        exports: [notification_service_1.NotificationService],
    })
], NotificationModule);
exports.NotificationModule = NotificationModule;


/***/ }),

/***/ "./src/notification/notification.resolver.ts":
/*!***************************************************!*\
  !*** ./src/notification/notification.resolver.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationResolver = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const notification_service_1 = __webpack_require__(/*! ./notification.service */ "./src/notification/notification.service.ts");
const notification_entity_1 = __webpack_require__(/*! ./entities/notification.entity */ "./src/notification/entities/notification.entity.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
const jwt_auth_guard_1 = __webpack_require__(/*! src/utils/guards/jwt-auth.guard */ "./src/utils/guards/jwt-auth.guard.ts");
const current_user_decorator_1 = __webpack_require__(/*! src/utils/guards/current-user.decorator */ "./src/utils/guards/current-user.decorator.ts");
const notification_input_1 = __webpack_require__(/*! ./dto/notification.input */ "./src/notification/dto/notification.input.ts");
let NotificationResolver = class NotificationResolver {
    constructor(notificationService, pubSub) {
        this.notificationService = notificationService;
        this.pubSub = pubSub;
    }
    handleNotification() {
        return this.pubSub.asyncIterator('notification');
    }
    async registerDevice(id, user) {
        return this.notificationService.register(id, user.id);
    }
    async notify(notificationUser) {
        return this.notificationService.notifyUser(notificationUser.id, notificationUser.notification);
    }
    async notifyAll(notification) {
        return this.notificationService.notifyUsers(notification);
    }
    async notifyAllOnTime(cronNotification) {
        return this.notificationService.notifyUsersCron(cronNotification.name, cronNotification.cronTime, cronNotification.notification);
    }
    async getNotifications() {
        return this.notificationService.getScheduleNotifications();
    }
    async removeNotifications(id) {
        return this.notificationService.removeScheduleNotification(id);
    }
};
__decorate([
    graphql_1.Subscription(() => notification_entity_1.NotificationEvent, {
        name: 'notification',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NotificationResolver.prototype, "handleNotification", null);
__decorate([
    graphql_1.Mutation(() => graphql_1.Int),
    __param(0, graphql_1.Args('id', { type: () => String })), __param(1, current_user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], NotificationResolver.prototype, "registerDevice", null);
__decorate([
    graphql_1.Mutation(() => graphql_1.Int),
    __param(0, graphql_1.Args('notificationUserInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof notification_input_1.NotificationUserInput !== "undefined" && notification_input_1.NotificationUserInput) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], NotificationResolver.prototype, "notify", null);
__decorate([
    graphql_1.Mutation(() => graphql_1.Int),
    __param(0, graphql_1.Args('notificationInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof notification_input_1.NotificationInput !== "undefined" && notification_input_1.NotificationInput) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], NotificationResolver.prototype, "notifyAll", null);
__decorate([
    graphql_1.Mutation(() => graphql_1.Int),
    __param(0, graphql_1.Args('notificationCronInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof notification_input_1.NotificationCronInput !== "undefined" && notification_input_1.NotificationCronInput) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], NotificationResolver.prototype, "notifyAllOnTime", null);
__decorate([
    graphql_1.Query(() => [String]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotificationResolver.prototype, "getNotifications", null);
__decorate([
    graphql_1.Mutation(() => graphql_1.Int),
    __param(0, graphql_1.Args('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationResolver.prototype, "removeNotifications", null);
NotificationResolver = __decorate([
    common_1.UseGuards(jwt_auth_guard_1.GqlAuthGuard),
    graphql_1.Resolver(() => notification_entity_1.Notification),
    __param(1, common_1.Inject('PUB_SUB')),
    __metadata("design:paramtypes", [typeof (_d = typeof notification_service_1.NotificationService !== "undefined" && notification_service_1.NotificationService) === "function" ? _d : Object, typeof (_e = typeof apollo_server_express_1.PubSub !== "undefined" && apollo_server_express_1.PubSub) === "function" ? _e : Object])
], NotificationResolver);
exports.NotificationResolver = NotificationResolver;


/***/ }),

/***/ "./src/notification/notification.service.ts":
/*!**************************************************!*\
  !*** ./src/notification/notification.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
const cron_1 = __webpack_require__(/*! cron */ "cron");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const notification_entity_1 = __webpack_require__(/*! ./entities/notification.entity */ "./src/notification/entities/notification.entity.ts");
const FCM = __webpack_require__(/*! fcm-node */ "fcm-node");
const serverKey = __webpack_require__(/*! ../../tynass-demo-app-4005e90495b2.json */ "./tynass-demo-app-4005e90495b2.json");
let NotificationService = class NotificationService {
    constructor(NotificationModel, schedulerRegistry, pubSub) {
        this.NotificationModel = NotificationModel;
        this.schedulerRegistry = schedulerRegistry;
        this.pubSub = pubSub;
        this.ids = [];
        this.fcm = new FCM(serverKey);
    }
    async create() {
        return await new this.NotificationModel().save();
    }
    async notifyUser(id, notification) {
        notification.to = this.ids[id];
        return this.sendNotification(notification).then(() => 200).catch(e => 400);
    }
    async notifyUsers(notification) {
        notification.to = '/topics/notificationAll';
        return this.sendNotification(notification).then(() => 200).catch(e => 400);
    }
    async notifyUsersCron(name, time, notification) {
        notification.to = '/topics/notificationAll';
        const job = new cron_1.CronJob(time, () => this.sendNotification(notification).then(() => 200).catch(e => 400));
        this.schedulerRegistry.addCronJob(`${name}-${Date.now()}`, job);
        return 200;
    }
    removeScheduleNotification(id) {
        this.schedulerRegistry.deleteCronJob(id);
        return 200;
    }
    getScheduleNotifications() {
        return this.schedulerRegistry.getCronJobs().keys();
    }
    register(device_id, user_id) {
        this.ids[user_id] = device_id;
        return 200;
    }
    sendNotification(notification) {
        return new Promise((resolve, reject) => {
            this.fcm.send(notification, function (err, response) {
                if (err)
                    return reject(err);
                resolve(response);
            });
        });
    }
};
NotificationService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(notification_entity_1.Notification.name)),
    __param(2, common_1.Inject('PUB_SUB')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof schedule_1.SchedulerRegistry !== "undefined" && schedule_1.SchedulerRegistry) === "function" ? _b : Object, typeof (_c = typeof apollo_server_express_1.PubSub !== "undefined" && apollo_server_express_1.PubSub) === "function" ? _c : Object])
], NotificationService);
exports.NotificationService = NotificationService;


/***/ }),

/***/ "./src/progress/entities/progress.entity.ts":
/*!**************************************************!*\
  !*** ./src/progress/entities/progress.entity.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChapterProgressSchema = exports.ProgressSchema = exports.Progress = exports.ChapterProgress = exports.PlaceStatus = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const trip_entity_1 = __webpack_require__(/*! src/trip/entities/trip.entity */ "./src/trip/entities/trip.entity.ts");
let PlaceStatus = class PlaceStatus {
};
__decorate([
    graphql_1.Field(() => String, { description: 'place ID' }),
    __metadata("design:type", Object)
], PlaceStatus.prototype, "id", void 0);
__decorate([
    graphql_1.Field(() => Boolean, { description: 'place status' }),
    __metadata("design:type", Object)
], PlaceStatus.prototype, "status", void 0);
PlaceStatus = __decorate([
    graphql_1.ObjectType()
], PlaceStatus);
exports.PlaceStatus = PlaceStatus;
let ChapterProgress = class ChapterProgress {
};
__decorate([
    graphql_1.Field(() => String, { description: 'ID' }),
    __metadata("design:type", String)
], ChapterProgress.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => String, { description: 'chapter ID' }),
    mongoose_1.Prop({ default: '' }),
    __metadata("design:type", String)
], ChapterProgress.prototype, "id", void 0);
__decorate([
    graphql_1.Field(() => [String], { description: 'places done' }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], ChapterProgress.prototype, "places", void 0);
__decorate([
    graphql_1.Field(() => String, { description: 'progree id' }),
    mongoose_1.Prop({ default: '' }),
    __metadata("design:type", String)
], ChapterProgress.prototype, "progress", void 0);
ChapterProgress = __decorate([
    mongoose_1.Schema({ timestamps: true, strict: false }),
    graphql_1.ObjectType()
], ChapterProgress);
exports.ChapterProgress = ChapterProgress;
let Progress = class Progress extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String, { description: 'ID' }),
    __metadata("design:type", Object)
], Progress.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => trip_entity_1.Trip, { description: 'Trip' }),
    mongoose_1.Prop({ type: mongoose_2.Types.ObjectId, ref: () => trip_entity_1.Trip }),
    __metadata("design:type", Object)
], Progress.prototype, "trip", void 0);
__decorate([
    graphql_1.Field(() => [ChapterProgress], { description: 'Trip' }),
    mongoose_1.Prop({ type: [{ type: mongoose_2.Types.ObjectId, ref: () => ChapterProgress }] }),
    __metadata("design:type", Object)
], Progress.prototype, "chapters", void 0);
__decorate([
    graphql_1.Field(() => String, { description: 'UserId' }),
    mongoose_1.Prop({ default: '' }),
    __metadata("design:type", String)
], Progress.prototype, "userId", void 0);
__decorate([
    graphql_1.Field(() => [String], { description: 'places done' }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], Progress.prototype, "placesId", void 0);
Progress = __decorate([
    mongoose_1.Schema({ timestamps: true, strict: false }),
    graphql_1.ObjectType()
], Progress);
exports.Progress = Progress;
exports.ProgressSchema = mongoose_1.SchemaFactory.createForClass(Progress);
exports.ChapterProgressSchema = mongoose_1.SchemaFactory.createForClass(ChapterProgress);


/***/ }),

/***/ "./src/progress/progress.module.ts":
/*!*****************************************!*\
  !*** ./src/progress/progress.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProgressModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const progress_service_1 = __webpack_require__(/*! ./progress.service */ "./src/progress/progress.service.ts");
const progress_resolver_1 = __webpack_require__(/*! ./progress.resolver */ "./src/progress/progress.resolver.ts");
const progress_entity_1 = __webpack_require__(/*! ./entities/progress.entity */ "./src/progress/entities/progress.entity.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
let ProgressModule = class ProgressModule {
};
ProgressModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: progress_entity_1.Progress.name, schema: progress_entity_1.ProgressSchema }, { name: progress_entity_1.ChapterProgress.name, schema: progress_entity_1.ChapterProgressSchema }]),
        ],
        providers: [progress_resolver_1.ProgressResolver, progress_service_1.ProgressService],
        exports: [progress_service_1.ProgressService]
    })
], ProgressModule);
exports.ProgressModule = ProgressModule;


/***/ }),

/***/ "./src/progress/progress.resolver.ts":
/*!*******************************************!*\
  !*** ./src/progress/progress.resolver.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProgressResolver = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const current_user_decorator_1 = __webpack_require__(/*! src/utils/guards/current-user.decorator */ "./src/utils/guards/current-user.decorator.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! src/utils/guards/jwt-auth.guard */ "./src/utils/guards/jwt-auth.guard.ts");
const progress_entity_1 = __webpack_require__(/*! ./entities/progress.entity */ "./src/progress/entities/progress.entity.ts");
const progress_service_1 = __webpack_require__(/*! ./progress.service */ "./src/progress/progress.service.ts");
let ProgressResolver = class ProgressResolver {
    constructor(progressService) {
        this.progressService = progressService;
    }
    getPlaceStatus(tripId, placeId, user) {
        return this.progressService.getPlaceStatus(user.id, tripId, placeId);
    }
};
__decorate([
    graphql_1.Query(() => progress_entity_1.PlaceStatus, { name: 'getPlaceStatus' }),
    __param(0, graphql_1.Args('tripId', { type: () => String })), __param(1, graphql_1.Args('placeId', { type: () => String })), __param(2, current_user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], ProgressResolver.prototype, "getPlaceStatus", null);
ProgressResolver = __decorate([
    common_1.UseGuards(jwt_auth_guard_1.GqlAuthGuard),
    graphql_1.Resolver(() => progress_entity_1.Progress),
    __metadata("design:paramtypes", [typeof (_a = typeof progress_service_1.ProgressService !== "undefined" && progress_service_1.ProgressService) === "function" ? _a : Object])
], ProgressResolver);
exports.ProgressResolver = ProgressResolver;


/***/ }),

/***/ "./src/progress/progress.service.ts":
/*!******************************************!*\
  !*** ./src/progress/progress.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProgressService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const progress_entity_1 = __webpack_require__(/*! ./entities/progress.entity */ "./src/progress/entities/progress.entity.ts");
let ProgressService = class ProgressService {
    constructor(ProgressModel, ChapterProgressModel) {
        this.ProgressModel = ProgressModel;
        this.ChapterProgressModel = ChapterProgressModel;
    }
    async create(createProgressInput) {
        return await (new this.ProgressModel(createProgressInput)).save();
    }
    findAll() {
        return `This action returns all progress`;
    }
    findByUserAndTrip(userId, tripId) {
        return this.ProgressModel.findOne({ userId, trip: mongoose_2.Types.ObjectId(tripId) });
    }
    update(id, progress) {
        return this.ProgressModel.findByIdAndUpdate(id, progress);
    }
    remove(id) {
        return `This action removes a #${id} progress`;
    }
    async getPlaceStatus(userId, tripId, placeId) {
        const progress = await this.findByUserAndTrip(userId, tripId);
        if (progress) {
            return { id: placeId, status: progress.placesId.includes(placeId) };
        }
    }
};
ProgressService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(progress_entity_1.Progress.name)),
    __param(1, mongoose_1.InjectModel(progress_entity_1.ChapterProgress.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object])
], ProgressService);
exports.ProgressService = ProgressService;


/***/ }),

/***/ "./src/report/dto/create-report.input.ts":
/*!***********************************************!*\
  !*** ./src/report/dto/create-report.input.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateReportInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let CreateReportInput = class CreateReportInput {
};
__decorate([
    graphql_1.Field(() => String, { description: 'Reported id' }),
    __metadata("design:type", String)
], CreateReportInput.prototype, "reported", void 0);
__decorate([
    graphql_1.Field(() => String, { description: 'Report type' }),
    __metadata("design:type", String)
], CreateReportInput.prototype, "type", void 0);
__decorate([
    graphql_1.Field(() => String, { description: 'Reporting reason' }),
    __metadata("design:type", String)
], CreateReportInput.prototype, "reason", void 0);
CreateReportInput = __decorate([
    graphql_1.InputType()
], CreateReportInput);
exports.CreateReportInput = CreateReportInput;


/***/ }),

/***/ "./src/report/dto/update-report.input.ts":
/*!***********************************************!*\
  !*** ./src/report/dto/update-report.input.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateReportInput = void 0;
const create_report_input_1 = __webpack_require__(/*! ./create-report.input */ "./src/report/dto/create-report.input.ts");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let UpdateReportInput = class UpdateReportInput extends graphql_1.PartialType(create_report_input_1.CreateReportInput) {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], UpdateReportInput.prototype, "id", void 0);
UpdateReportInput = __decorate([
    graphql_1.InputType()
], UpdateReportInput);
exports.UpdateReportInput = UpdateReportInput;


/***/ }),

/***/ "./src/report/entities/report.entity.ts":
/*!**********************************************!*\
  !*** ./src/report/entities/report.entity.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReportSchema = exports.Report = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const user_entity_1 = __webpack_require__(/*! src/user/entities/user.entity */ "./src/user/entities/user.entity.ts");
var reporType;
(function (reporType) {
    reporType["FakeIdentity"] = "FakeIdentity";
    reporType["Spam"] = "Spam";
    reporType["FalseInformation"] = "FalseInformation";
    reporType["Harassment"] = "Harassment";
})(reporType || (reporType = {}));
let Report = class Report extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], Report.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => user_entity_1.User),
    mongoose_1.Prop({ type: mongoose_2.Types.ObjectId, ref: () => user_entity_1.User }),
    __metadata("design:type", Object)
], Report.prototype, "reporter", void 0);
__decorate([
    graphql_1.Field(() => user_entity_1.User),
    mongoose_1.Prop({ type: mongoose_2.Types.ObjectId, ref: () => user_entity_1.User }),
    __metadata("design:type", Object)
], Report.prototype, "reported", void 0);
__decorate([
    graphql_1.Field(() => String, { description: 'type of report' }),
    mongoose_1.Prop({ type: String, required: true, enum: reporType }),
    __metadata("design:type", Object)
], Report.prototype, "type", void 0);
__decorate([
    graphql_1.Field(() => String),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Report.prototype, "reason", void 0);
Report = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], Report);
exports.Report = Report;
exports.ReportSchema = mongoose_1.SchemaFactory.createForClass(Report);


/***/ }),

/***/ "./src/report/report.module.ts":
/*!*************************************!*\
  !*** ./src/report/report.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReportModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const report_service_1 = __webpack_require__(/*! ./report.service */ "./src/report/report.service.ts");
const report_resolver_1 = __webpack_require__(/*! ./report.resolver */ "./src/report/report.resolver.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const report_entity_1 = __webpack_require__(/*! ./entities/report.entity */ "./src/report/entities/report.entity.ts");
const user_module_1 = __webpack_require__(/*! src/user/user.module */ "./src/user/user.module.ts");
let ReportModule = class ReportModule {
};
ReportModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: report_entity_1.Report.name, schema: report_entity_1.ReportSchema }]),
            common_1.forwardRef(() => user_module_1.UserModule)
        ],
        providers: [report_resolver_1.ReportResolver, report_service_1.ReportService],
        exports: [report_service_1.ReportService]
    })
], ReportModule);
exports.ReportModule = ReportModule;


/***/ }),

/***/ "./src/report/report.resolver.ts":
/*!***************************************!*\
  !*** ./src/report/report.resolver.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReportResolver = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const current_user_decorator_1 = __webpack_require__(/*! src/utils/guards/current-user.decorator */ "./src/utils/guards/current-user.decorator.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! src/utils/guards/jwt-auth.guard */ "./src/utils/guards/jwt-auth.guard.ts");
const create_report_input_1 = __webpack_require__(/*! ./dto/create-report.input */ "./src/report/dto/create-report.input.ts");
const update_report_input_1 = __webpack_require__(/*! ./dto/update-report.input */ "./src/report/dto/update-report.input.ts");
const report_entity_1 = __webpack_require__(/*! ./entities/report.entity */ "./src/report/entities/report.entity.ts");
const report_service_1 = __webpack_require__(/*! ./report.service */ "./src/report/report.service.ts");
let ReportResolver = class ReportResolver {
    constructor(reportService) {
        this.reportService = reportService;
    }
    createReport(createReportInput, user) {
        return this.reportService.create(Object.assign(Object.assign({}, createReportInput), { reporter: user.id }));
    }
    findAll() {
        return this.reportService.findAll();
    }
    findOne(id) {
        return this.reportService.findOne(id);
    }
    updateReport(updateReportInput) {
        return this.reportService.update(updateReportInput.id, updateReportInput);
    }
    removeReport(id) {
        return this.reportService.remove(id);
    }
};
__decorate([
    graphql_1.Mutation(() => report_entity_1.Report),
    __param(0, graphql_1.Args('createReportInput')), __param(1, current_user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_report_input_1.CreateReportInput !== "undefined" && create_report_input_1.CreateReportInput) === "function" ? _a : Object, Object]),
    __metadata("design:returntype", void 0)
], ReportResolver.prototype, "createReport", null);
__decorate([
    graphql_1.Query(() => [report_entity_1.Report], { name: 'reports' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReportResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => report_entity_1.Report, { name: 'report' }),
    __param(0, graphql_1.Args('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReportResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation(() => report_entity_1.Report),
    __param(0, graphql_1.Args('updateReportInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof update_report_input_1.UpdateReportInput !== "undefined" && update_report_input_1.UpdateReportInput) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], ReportResolver.prototype, "updateReport", null);
__decorate([
    graphql_1.Mutation(() => report_entity_1.Report),
    __param(0, graphql_1.Args('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReportResolver.prototype, "removeReport", null);
ReportResolver = __decorate([
    common_1.UseGuards(jwt_auth_guard_1.GqlAuthGuard),
    graphql_1.Resolver(() => report_entity_1.Report),
    __metadata("design:paramtypes", [typeof (_c = typeof report_service_1.ReportService !== "undefined" && report_service_1.ReportService) === "function" ? _c : Object])
], ReportResolver);
exports.ReportResolver = ReportResolver;


/***/ }),

/***/ "./src/report/report.service.ts":
/*!**************************************!*\
  !*** ./src/report/report.service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReportService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const user_service_1 = __webpack_require__(/*! src/user/user.service */ "./src/user/user.service.ts");
const report_entity_1 = __webpack_require__(/*! ./entities/report.entity */ "./src/report/entities/report.entity.ts");
let ReportService = class ReportService {
    constructor(ReportModel, userService) {
        this.ReportModel = ReportModel;
        this.userService = userService;
    }
    async create(createReportInput) {
        return await new this.ReportModel(createReportInput).save();
    }
    async findAll() {
        return await this.ReportModel.find().populate(['reported', 'reporter']);
    }
    async findOne(id) {
        return await this.ReportModel.findOne({ id: id });
    }
    async update(id, updateReportInput) {
    }
    async remove(id) {
        return await this.ReportModel.findOneAndRemove({ id: id });
    }
};
ReportService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(report_entity_1.Report.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _b : Object])
], ReportService);
exports.ReportService = ReportService;


/***/ }),

/***/ "./src/review/dto/create-review.input.ts":
/*!***********************************************!*\
  !*** ./src/review/dto/create-review.input.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateReviewRoomInput = exports.CreateReviewInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
let DetailRatingInput = class DetailRatingInput {
};
__decorate([
    graphql_1.Field(() => graphql_1.Int),
    __metadata("design:type", Number)
], DetailRatingInput.prototype, "food", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int),
    __metadata("design:type", Number)
], DetailRatingInput.prototype, "hospitality", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int),
    __metadata("design:type", Number)
], DetailRatingInput.prototype, "comfortability", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int),
    __metadata("design:type", Number)
], DetailRatingInput.prototype, "atmosphere", void 0);
DetailRatingInput = __decorate([
    graphql_1.InputType()
], DetailRatingInput);
let CreateReviewInput = class CreateReviewInput {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], CreateReviewInput.prototype, "commerceId", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], CreateReviewInput.prototype, "feedback", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float),
    __metadata("design:type", Object)
], CreateReviewInput.prototype, "rating", void 0);
__decorate([
    graphql_1.Field(() => file_schema_1.UploadMedia, { description: "Review's media", nullable: true }),
    __metadata("design:type", Object)
], CreateReviewInput.prototype, "image", void 0);
__decorate([
    graphql_1.Field(() => DetailRatingInput, { description: "Review's media" }),
    __metadata("design:type", Object)
], CreateReviewInput.prototype, "detailRating", void 0);
CreateReviewInput = __decorate([
    graphql_1.InputType()
], CreateReviewInput);
exports.CreateReviewInput = CreateReviewInput;
let CreateReviewRoomInput = class CreateReviewRoomInput {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], CreateReviewRoomInput.prototype, "roomId", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], CreateReviewRoomInput.prototype, "feedback", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float),
    __metadata("design:type", Object)
], CreateReviewRoomInput.prototype, "rating", void 0);
__decorate([
    graphql_1.Field(() => file_schema_1.UploadMedia, { description: "Review's media", nullable: true }),
    __metadata("design:type", Object)
], CreateReviewRoomInput.prototype, "image", void 0);
__decorate([
    graphql_1.Field(() => DetailRatingInput, { description: "Review's media" }),
    __metadata("design:type", Object)
], CreateReviewRoomInput.prototype, "detailRating", void 0);
CreateReviewRoomInput = __decorate([
    graphql_1.InputType()
], CreateReviewRoomInput);
exports.CreateReviewRoomInput = CreateReviewRoomInput;


/***/ }),

/***/ "./src/review/dto/update-review.input.ts":
/*!***********************************************!*\
  !*** ./src/review/dto/update-review.input.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateReviewInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let UpdateReviewInput = class UpdateReviewInput {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], UpdateReviewInput.prototype, "reviewId", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], UpdateReviewInput.prototype, "feedback", void 0);
UpdateReviewInput = __decorate([
    graphql_1.InputType()
], UpdateReviewInput);
exports.UpdateReviewInput = UpdateReviewInput;


/***/ }),

/***/ "./src/review/entities/review.entity.ts":
/*!**********************************************!*\
  !*** ./src/review/entities/review.entity.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReviewSchema = exports.Review = exports.DetailRating = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const user_entity_1 = __webpack_require__(/*! src/user/entities/user.entity */ "./src/user/entities/user.entity.ts");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
let DetailRating = class DetailRating {
};
__decorate([
    graphql_1.Field(() => graphql_1.Int),
    __metadata("design:type", Number)
], DetailRating.prototype, "food", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int),
    __metadata("design:type", Number)
], DetailRating.prototype, "hospitality", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int),
    __metadata("design:type", Number)
], DetailRating.prototype, "comfortability", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int),
    __metadata("design:type", Number)
], DetailRating.prototype, "atmosphere", void 0);
DetailRating = __decorate([
    graphql_1.ObjectType()
], DetailRating);
exports.DetailRating = DetailRating;
let Review = class Review extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], Review.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => String),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Review.prototype, "feedback", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float),
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Review.prototype, "rating", void 0);
__decorate([
    graphql_1.Field(() => user_entity_1.User),
    mongoose_1.Prop({ type: mongoose_2.Types.ObjectId, ref: () => user_entity_1.User }),
    __metadata("design:type", Object)
], Review.prototype, "user", void 0);
__decorate([
    graphql_1.Field(() => file_schema_1.File, { description: "Review's media", nullable: true }),
    mongoose_1.Prop(),
    __metadata("design:type", typeof (_a = typeof file_schema_1.File !== "undefined" && file_schema_1.File) === "function" ? _a : Object)
], Review.prototype, "image", void 0);
__decorate([
    graphql_1.Field(() => DetailRating, { description: "Review's Detail Rating", nullable: true }),
    mongoose_1.Prop(),
    __metadata("design:type", DetailRating)
], Review.prototype, "travlerRating", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Reviewed item ID", nullable: true }),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Review.prototype, "reviewed", void 0);
Review = __decorate([
    mongoose_1.Schema({ timestamps: true, strict: true }),
    graphql_1.ObjectType()
], Review);
exports.Review = Review;
exports.ReviewSchema = mongoose_1.SchemaFactory.createForClass(Review);


/***/ }),

/***/ "./src/review/review.module.ts":
/*!*************************************!*\
  !*** ./src/review/review.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReviewModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const review_service_1 = __webpack_require__(/*! ./review.service */ "./src/review/review.service.ts");
const review_resolver_1 = __webpack_require__(/*! ./review.resolver */ "./src/review/review.resolver.ts");
const review_entity_1 = __webpack_require__(/*! ./entities/review.entity */ "./src/review/entities/review.entity.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
let ReviewModule = class ReviewModule {
};
ReviewModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: review_entity_1.Review.name, schema: review_entity_1.ReviewSchema }]),
        ],
        providers: [review_resolver_1.ReviewResolver, review_service_1.ReviewService],
        exports: [review_service_1.ReviewService],
    })
], ReviewModule);
exports.ReviewModule = ReviewModule;


/***/ }),

/***/ "./src/review/review.resolver.ts":
/*!***************************************!*\
  !*** ./src/review/review.resolver.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReviewResolver = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const current_user_decorator_1 = __webpack_require__(/*! src/utils/guards/current-user.decorator */ "./src/utils/guards/current-user.decorator.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! src/utils/guards/jwt-auth.guard */ "./src/utils/guards/jwt-auth.guard.ts");
const create_review_input_1 = __webpack_require__(/*! ./dto/create-review.input */ "./src/review/dto/create-review.input.ts");
const update_review_input_1 = __webpack_require__(/*! ./dto/update-review.input */ "./src/review/dto/update-review.input.ts");
const review_entity_1 = __webpack_require__(/*! ./entities/review.entity */ "./src/review/entities/review.entity.ts");
const review_service_1 = __webpack_require__(/*! ./review.service */ "./src/review/review.service.ts");
let ReviewResolver = class ReviewResolver {
    constructor(reviewService) {
        this.reviewService = reviewService;
    }
    createReview(createReviewInput, user) {
        return this.reviewService.create(Object.assign(Object.assign({}, createReviewInput), { user: user.id }));
    }
    findAll() {
        return this.reviewService.findAll();
    }
    findOne(id) {
        return this.reviewService.findOne(id);
    }
    updateReview(updateReviewInput, user) {
        return this.reviewService.update(updateReviewInput.reviewId, updateReviewInput.feedback, user.id);
    }
};
__decorate([
    graphql_1.Mutation(() => review_entity_1.Review),
    __param(0, graphql_1.Args('createReviewInput')),
    __param(1, current_user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_review_input_1.CreateReviewInput !== "undefined" && create_review_input_1.CreateReviewInput) === "function" ? _a : Object, Object]),
    __metadata("design:returntype", void 0)
], ReviewResolver.prototype, "createReview", null);
__decorate([
    graphql_1.Query(() => [review_entity_1.Review], { name: 'review' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReviewResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => review_entity_1.Review, { name: 'review' }),
    __param(0, graphql_1.Args('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReviewResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation(() => review_entity_1.Review),
    __param(0, graphql_1.Args('updateReviewInput')),
    __param(1, current_user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof update_review_input_1.UpdateReviewInput !== "undefined" && update_review_input_1.UpdateReviewInput) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", void 0)
], ReviewResolver.prototype, "updateReview", null);
ReviewResolver = __decorate([
    common_1.UseGuards(jwt_auth_guard_1.GqlAuthGuard),
    graphql_1.Resolver(() => review_entity_1.Review),
    __metadata("design:paramtypes", [typeof (_c = typeof review_service_1.ReviewService !== "undefined" && review_service_1.ReviewService) === "function" ? _c : Object])
], ReviewResolver);
exports.ReviewResolver = ReviewResolver;


/***/ }),

/***/ "./src/review/review.service.ts":
/*!**************************************!*\
  !*** ./src/review/review.service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReviewService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const review_entity_1 = __webpack_require__(/*! ./entities/review.entity */ "./src/review/entities/review.entity.ts");
let ReviewService = class ReviewService {
    constructor(ReviewModel) {
        this.ReviewModel = ReviewModel;
    }
    async create(createReviewInput) {
        return await new this.ReviewModel(createReviewInput).save();
    }
    findAll() {
        return `This action returns all review`;
    }
    findOne(id) {
        return this.ReviewModel.findById(id);
    }
    async update(id, feedback, userId) {
        const review = await this.ReviewModel.findById(id);
        if (review && review.user == userId) {
            return await this.ReviewModel.findByIdAndUpdate(id, Object.assign(Object.assign({}, review), { feedback }));
        }
    }
    async remove(id, userId) {
        const review = await this.ReviewModel.findById(id);
        if (review && review.user == userId) {
            return await this.ReviewModel.findByIdAndRemove(id);
        }
        return new common_1.HttpException(' you don\'t own this review', 400);
    }
};
ReviewService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(review_entity_1.Review.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], ReviewService);
exports.ReviewService = ReviewService;


/***/ }),

/***/ "./src/stats/dto/create-stat.input.ts":
/*!********************************************!*\
  !*** ./src/stats/dto/create-stat.input.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateStatInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let CreateStatInput = class CreateStatInput {
};
__decorate([
    graphql_1.Field(() => graphql_1.Int, { description: 'Example field (placeholder)' }),
    __metadata("design:type", Number)
], CreateStatInput.prototype, "exampleField", void 0);
CreateStatInput = __decorate([
    graphql_1.InputType()
], CreateStatInput);
exports.CreateStatInput = CreateStatInput;


/***/ }),

/***/ "./src/stats/dto/update-stat.input.ts":
/*!********************************************!*\
  !*** ./src/stats/dto/update-stat.input.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateStatInput = void 0;
const create_stat_input_1 = __webpack_require__(/*! ./create-stat.input */ "./src/stats/dto/create-stat.input.ts");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let UpdateStatInput = class UpdateStatInput extends graphql_1.PartialType(create_stat_input_1.CreateStatInput) {
};
__decorate([
    graphql_1.Field(() => graphql_1.Int),
    __metadata("design:type", Number)
], UpdateStatInput.prototype, "id", void 0);
UpdateStatInput = __decorate([
    graphql_1.InputType()
], UpdateStatInput);
exports.UpdateStatInput = UpdateStatInput;


/***/ }),

/***/ "./src/stats/entities/stat.entity.ts":
/*!*******************************************!*\
  !*** ./src/stats/entities/stat.entity.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StatSchema = exports.Stat = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const user_entity_1 = __webpack_require__(/*! src/user/entities/user.entity */ "./src/user/entities/user.entity.ts");
const track_entity_1 = __webpack_require__(/*! ./track.entity */ "./src/stats/entities/track.entity.ts");
let Stat = class Stat extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], Stat.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => user_entity_1.User),
    mongoose_1.Prop({ type: mongoose_2.Types.ObjectId, ref: () => user_entity_1.User }),
    __metadata("design:type", Object)
], Stat.prototype, "user", void 0);
__decorate([
    graphql_1.Field(() => track_entity_1.Track),
    mongoose_1.Prop({ type: [{ type: mongoose_2.Types.ObjectId, ref: () => track_entity_1.Track }], default: [] }),
    __metadata("design:type", Object)
], Stat.prototype, "tracks", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int),
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Stat.prototype, "timeSpent", void 0);
Stat = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], Stat);
exports.Stat = Stat;
exports.StatSchema = mongoose_1.SchemaFactory.createForClass(Stat);


/***/ }),

/***/ "./src/stats/entities/track.entity.ts":
/*!********************************************!*\
  !*** ./src/stats/entities/track.entity.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TrackSchema = exports.Track = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
var trackType;
(function (trackType) {
    trackType["Recommendation"] = "Recommendation";
    trackType["Commerce"] = "Commerce";
})(trackType || (trackType = {}));
let Track = class Track extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], Track.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => String, { description: 'type of track' }),
    mongoose_1.Prop({ type: String, required: true, enum: trackType }),
    __metadata("design:type", Object)
], Track.prototype, "type", void 0);
__decorate([
    graphql_1.Field(() => String),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Track.prototype, "targetId", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int),
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Track.prototype, "timeSpent", void 0);
Track = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], Track);
exports.Track = Track;
exports.TrackSchema = mongoose_1.SchemaFactory.createForClass(Track);


/***/ }),

/***/ "./src/stats/stats.module.ts":
/*!***********************************!*\
  !*** ./src/stats/stats.module.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StatsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const stats_service_1 = __webpack_require__(/*! ./stats.service */ "./src/stats/stats.service.ts");
const stats_resolver_1 = __webpack_require__(/*! ./stats.resolver */ "./src/stats/stats.resolver.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const stat_entity_1 = __webpack_require__(/*! ./entities/stat.entity */ "./src/stats/entities/stat.entity.ts");
const track_entity_1 = __webpack_require__(/*! ./entities/track.entity */ "./src/stats/entities/track.entity.ts");
let StatsModule = class StatsModule {
};
StatsModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: stat_entity_1.Stat.name, schema: stat_entity_1.StatSchema },
                { name: track_entity_1.Track.name, schema: track_entity_1.TrackSchema },
            ]),
        ],
        providers: [stats_resolver_1.StatsResolver, stats_service_1.StatsService],
    })
], StatsModule);
exports.StatsModule = StatsModule;


/***/ }),

/***/ "./src/stats/stats.resolver.ts":
/*!*************************************!*\
  !*** ./src/stats/stats.resolver.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StatsResolver = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const current_user_decorator_1 = __webpack_require__(/*! src/utils/guards/current-user.decorator */ "./src/utils/guards/current-user.decorator.ts");
const update_stat_input_1 = __webpack_require__(/*! ./dto/update-stat.input */ "./src/stats/dto/update-stat.input.ts");
const stat_entity_1 = __webpack_require__(/*! ./entities/stat.entity */ "./src/stats/entities/stat.entity.ts");
const stats_service_1 = __webpack_require__(/*! ./stats.service */ "./src/stats/stats.service.ts");
let StatsResolver = class StatsResolver {
    constructor(statsService) {
        this.statsService = statsService;
    }
    findAll() {
        return this.statsService.findAll();
    }
    findOne(id) {
        return this.statsService.findOne(id);
    }
    updateStat(updateStatInput, user) {
        return this.statsService.track(user.id, updateStatInput);
    }
};
__decorate([
    graphql_1.Query(() => [stat_entity_1.Stat], { name: 'stats' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StatsResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query(() => stat_entity_1.Stat, { name: 'stat' }),
    __param(0, graphql_1.Args('userId', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StatsResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation(() => stat_entity_1.Stat),
    __param(0, graphql_1.Args('updateStatInput')), __param(1, current_user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof update_stat_input_1.UpdateStatInput !== "undefined" && update_stat_input_1.UpdateStatInput) === "function" ? _a : Object, Object]),
    __metadata("design:returntype", void 0)
], StatsResolver.prototype, "updateStat", null);
StatsResolver = __decorate([
    graphql_1.Resolver(() => stat_entity_1.Stat),
    __metadata("design:paramtypes", [typeof (_b = typeof stats_service_1.StatsService !== "undefined" && stats_service_1.StatsService) === "function" ? _b : Object])
], StatsResolver);
exports.StatsResolver = StatsResolver;


/***/ }),

/***/ "./src/stats/stats.service.ts":
/*!************************************!*\
  !*** ./src/stats/stats.service.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StatsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const stat_entity_1 = __webpack_require__(/*! ./entities/stat.entity */ "./src/stats/entities/stat.entity.ts");
const track_entity_1 = __webpack_require__(/*! ./entities/track.entity */ "./src/stats/entities/track.entity.ts");
let StatsService = class StatsService {
    constructor(StatModel, TrackModel) {
        this.StatModel = StatModel;
        this.TrackModel = TrackModel;
    }
    findAll() {
        return this.StatModel.find();
    }
    async findOne(id) {
        const stat = await this.StatModel.findOne({ user: id });
        if (stat) {
            return stat;
        }
        return await this.StatModel.create({ user: id });
    }
    async track(userId, updateStatInput) {
        const stat = await this.findOne(userId);
        stat.tracks.push((await this.TrackModel.create(updateStatInput))._id);
        return this.StatModel.findByIdAndUpdate(stat._id, stat);
    }
};
StatsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(stat_entity_1.Stat.name)),
    __param(1, mongoose_1.InjectModel(track_entity_1.Track.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object])
], StatsService);
exports.StatsService = StatsService;


/***/ }),

/***/ "./src/suggestion/dto/add-suggestion.input.ts":
/*!****************************************************!*\
  !*** ./src/suggestion/dto/add-suggestion.input.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateSuggestion = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let CreateSuggestion = class CreateSuggestion {
};
__decorate([
    graphql_1.Field(() => Date),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreateSuggestion.prototype, "startTime", void 0);
__decorate([
    graphql_1.Field(() => Date),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CreateSuggestion.prototype, "endTime", void 0);
__decorate([
    graphql_1.Field(() => [String]),
    __metadata("design:type", Object)
], CreateSuggestion.prototype, "commerces", void 0);
CreateSuggestion = __decorate([
    graphql_1.InputType()
], CreateSuggestion);
exports.CreateSuggestion = CreateSuggestion;


/***/ }),

/***/ "./src/suggestion/entities/suggestion.entity.ts":
/*!******************************************************!*\
  !*** ./src/suggestion/entities/suggestion.entity.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SuggestionSchema = exports.Suggestion = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const base_commerce_entity_1 = __webpack_require__(/*! src/commerce/entities/base-commerce.entity */ "./src/commerce/entities/base-commerce.entity.ts");
let Suggestion = class Suggestion extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], Suggestion.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => [base_commerce_entity_1.Commerce], { description: "Commerces" }),
    mongoose_1.Prop({ type: [{ type: mongoose_2.Types.ObjectId, ref: () => base_commerce_entity_1.Commerce }], default: [] }),
    __metadata("design:type", Object)
], Suggestion.prototype, "commerces", void 0);
__decorate([
    graphql_1.Field(() => Date),
    mongoose_1.Prop({}),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Suggestion.prototype, "startTime", void 0);
__decorate([
    graphql_1.Field(() => Date),
    mongoose_1.Prop({}),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Suggestion.prototype, "endTime", void 0);
Suggestion = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], Suggestion);
exports.Suggestion = Suggestion;
exports.SuggestionSchema = mongoose_1.SchemaFactory.createForClass(Suggestion);


/***/ }),

/***/ "./src/suggestion/suggestion.module.ts":
/*!*********************************************!*\
  !*** ./src/suggestion/suggestion.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SuggestionModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const suggestion_service_1 = __webpack_require__(/*! ./suggestion.service */ "./src/suggestion/suggestion.service.ts");
const suggestion_resolver_1 = __webpack_require__(/*! ./suggestion.resolver */ "./src/suggestion/suggestion.resolver.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const suggestion_entity_1 = __webpack_require__(/*! ./entities/suggestion.entity */ "./src/suggestion/entities/suggestion.entity.ts");
const commerce_module_1 = __webpack_require__(/*! src/commerce/commerce.module */ "./src/commerce/commerce.module.ts");
let SuggestionModule = class SuggestionModule {
};
SuggestionModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: suggestion_entity_1.Suggestion.name, schema: suggestion_entity_1.SuggestionSchema },
            ]),
            common_1.forwardRef(() => commerce_module_1.BaseCommerceModule)
        ],
        providers: [suggestion_resolver_1.SuggestionResolver, suggestion_service_1.SuggestionService]
    })
], SuggestionModule);
exports.SuggestionModule = SuggestionModule;


/***/ }),

/***/ "./src/suggestion/suggestion.resolver.ts":
/*!***********************************************!*\
  !*** ./src/suggestion/suggestion.resolver.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SuggestionResolver = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const add_suggestion_input_1 = __webpack_require__(/*! ./dto/add-suggestion.input */ "./src/suggestion/dto/add-suggestion.input.ts");
const suggestion_entity_1 = __webpack_require__(/*! ./entities/suggestion.entity */ "./src/suggestion/entities/suggestion.entity.ts");
const suggestion_service_1 = __webpack_require__(/*! ./suggestion.service */ "./src/suggestion/suggestion.service.ts");
let SuggestionResolver = class SuggestionResolver {
    constructor(suggestionService) {
        this.suggestionService = suggestionService;
    }
    async addSuggestion(input) {
        return this.suggestionService.create(input);
    }
    async removeSuggestion(id) {
        return this.suggestionService.delete(id);
    }
    getSuggestions() {
        return this.suggestionService.getSuggestions();
    }
};
__decorate([
    graphql_1.Mutation(() => suggestion_entity_1.Suggestion),
    __param(0, graphql_1.Args('addSuggestion')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof add_suggestion_input_1.CreateSuggestion !== "undefined" && add_suggestion_input_1.CreateSuggestion) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], SuggestionResolver.prototype, "addSuggestion", null);
__decorate([
    graphql_1.Mutation(() => suggestion_entity_1.Suggestion),
    __param(0, graphql_1.Args('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SuggestionResolver.prototype, "removeSuggestion", null);
__decorate([
    graphql_1.Query(() => suggestion_entity_1.Suggestion, { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SuggestionResolver.prototype, "getSuggestions", null);
SuggestionResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [typeof (_b = typeof suggestion_service_1.SuggestionService !== "undefined" && suggestion_service_1.SuggestionService) === "function" ? _b : Object])
], SuggestionResolver);
exports.SuggestionResolver = SuggestionResolver;


/***/ }),

/***/ "./src/suggestion/suggestion.service.ts":
/*!**********************************************!*\
  !*** ./src/suggestion/suggestion.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SuggestionService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const commerce_service_1 = __webpack_require__(/*! src/commerce/commerce.service */ "./src/commerce/commerce.service.ts");
const suggestion_entity_1 = __webpack_require__(/*! ./entities/suggestion.entity */ "./src/suggestion/entities/suggestion.entity.ts");
let SuggestionService = class SuggestionService {
    constructor(SuggestionModel, commerceService) {
        this.SuggestionModel = SuggestionModel;
        this.commerceService = commerceService;
    }
    async create(input) {
        const suggestions = await this.SuggestionModel.find({ startTime: { $gte: input.startTime }, endTime: { $lte: input.endTime } });
        if (suggestions.length == 0) {
            return await (new this.SuggestionModel(input)).save();
        }
        throw new common_1.HttpException(' Time reserved ', 400);
    }
    delete(id) {
        return this.SuggestionModel.findByIdAndRemove(id);
    }
    getSuggestions() {
        const now = new Date('2021-12-30');
        return this.SuggestionModel.findOne({ startTime: { $lte: now }, endTime: { $gte: now } }).populate({ path: 'commerces', populate: { path: 'profile', populate: ['rooms', 'menu', 'drinks'] } });
    }
};
SuggestionService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(suggestion_entity_1.Suggestion.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof commerce_service_1.CommerceService !== "undefined" && commerce_service_1.CommerceService) === "function" ? _b : Object])
], SuggestionService);
exports.SuggestionService = SuggestionService;


/***/ }),

/***/ "./src/supplier/dto/create-supplier.input.ts":
/*!***************************************************!*\
  !*** ./src/supplier/dto/create-supplier.input.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SupplierInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let SupplierInput = class SupplierInput {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], SupplierInput.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], SupplierInput.prototype, "thumbnail", void 0);
SupplierInput = __decorate([
    graphql_1.InputType()
], SupplierInput);
exports.SupplierInput = SupplierInput;


/***/ }),

/***/ "./src/supplier/entities/supplier.entity.ts":
/*!**************************************************!*\
  !*** ./src/supplier/entities/supplier.entity.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SupplierSchema = exports.Supplier = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let Supplier = class Supplier extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], Supplier.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => String),
    mongoose_1.Prop({}),
    __metadata("design:type", typeof (_a = typeof String !== "undefined" && String) === "function" ? _a : Object)
], Supplier.prototype, "thumbnail", void 0);
__decorate([
    graphql_1.Field(() => String),
    mongoose_1.Prop({}),
    __metadata("design:type", String)
], Supplier.prototype, "name", void 0);
Supplier = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], Supplier);
exports.Supplier = Supplier;
exports.SupplierSchema = mongoose_1.SchemaFactory.createForClass(Supplier);


/***/ }),

/***/ "./src/supplier/supplier.module.ts":
/*!*****************************************!*\
  !*** ./src/supplier/supplier.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SupplierModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const supplier_entity_1 = __webpack_require__(/*! ../supplier/entities/supplier.entity */ "./src/supplier/entities/supplier.entity.ts");
const supplier_resolver_1 = __webpack_require__(/*! ./supplier.resolver */ "./src/supplier/supplier.resolver.ts");
const supplier_service_1 = __webpack_require__(/*! ./supplier.service */ "./src/supplier/supplier.service.ts");
let SupplierModule = class SupplierModule {
};
SupplierModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: supplier_entity_1.Supplier.name, schema: supplier_entity_1.SupplierSchema },
            ]),
        ],
        providers: [supplier_resolver_1.SupplierResolver, supplier_service_1.SupplierService],
        exports: [supplier_service_1.SupplierService],
    })
], SupplierModule);
exports.SupplierModule = SupplierModule;


/***/ }),

/***/ "./src/supplier/supplier.resolver.ts":
/*!*******************************************!*\
  !*** ./src/supplier/supplier.resolver.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SupplierResolver = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const create_supplier_input_1 = __webpack_require__(/*! ./dto/create-supplier.input */ "./src/supplier/dto/create-supplier.input.ts");
const supplier_entity_1 = __webpack_require__(/*! ./entities/supplier.entity */ "./src/supplier/entities/supplier.entity.ts");
const supplier_service_1 = __webpack_require__(/*! ./supplier.service */ "./src/supplier/supplier.service.ts");
let SupplierResolver = class SupplierResolver {
    constructor(supplierService) {
        this.supplierService = supplierService;
    }
    createSupplier(supplierInput) {
        return this.supplierService.createSupplier(supplierInput);
    }
    findAll() {
        return this.supplierService.findAll();
    }
};
__decorate([
    graphql_1.Mutation(() => supplier_entity_1.Supplier),
    __param(0, graphql_1.Args("supplierInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_supplier_input_1.SupplierInput !== "undefined" && create_supplier_input_1.SupplierInput) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], SupplierResolver.prototype, "createSupplier", null);
__decorate([
    graphql_1.Query(() => [supplier_entity_1.Supplier], { name: "supplier" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SupplierResolver.prototype, "findAll", null);
SupplierResolver = __decorate([
    graphql_1.Resolver(() => supplier_entity_1.Supplier),
    __metadata("design:paramtypes", [typeof (_b = typeof supplier_service_1.SupplierService !== "undefined" && supplier_service_1.SupplierService) === "function" ? _b : Object])
], SupplierResolver);
exports.SupplierResolver = SupplierResolver;


/***/ }),

/***/ "./src/supplier/supplier.service.ts":
/*!******************************************!*\
  !*** ./src/supplier/supplier.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SupplierService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const supplier_entity_1 = __webpack_require__(/*! ./entities/supplier.entity */ "./src/supplier/entities/supplier.entity.ts");
let SupplierService = class SupplierService {
    constructor(SupplierModel) {
        this.SupplierModel = SupplierModel;
    }
    createSupplier(supplierInput) {
        return new this.SupplierModel(supplierInput).save();
    }
    findAll() {
        return this.SupplierModel.find();
    }
    async validateSuppliers(suppliers) {
        for (const supplier of suppliers) {
            const found = await this.SupplierModel.find({ _id: supplier });
            if (!found.length)
                throw new common_1.NotFoundException(`Supplier with id=${supplier} not found`);
        }
        return true;
    }
};
SupplierService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(supplier_entity_1.Supplier.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], SupplierService);
exports.SupplierService = SupplierService;


/***/ }),

/***/ "./src/trip/dto/create-trip.input.ts":
/*!*******************************************!*\
  !*** ./src/trip/dto/create-trip.input.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SearchAccessCodeInput = exports.ApplyAccessCodeInput = exports.CreateAccessCodeInput = exports.PlaceInput = exports.PlaceGalleryInput = exports.AddPlaceInput = exports.BundleInput = exports.ChapterInput = exports.AddChapterInput = exports.TripInput = exports.PostionInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const commerce_entity_1 = __webpack_require__(/*! src/commerce/entities/commerce.entity */ "./src/commerce/entities/commerce.entity.ts");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
let PostionInput = class PostionInput {
};
__decorate([
    graphql_1.Field(() => graphql_1.Float),
    __metadata("design:type", Number)
], PostionInput.prototype, "longitude", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float),
    __metadata("design:type", Number)
], PostionInput.prototype, "latitude", void 0);
PostionInput = __decorate([
    graphql_1.InputType()
], PostionInput);
exports.PostionInput = PostionInput;
let TripInput = class TripInput {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], TripInput.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], TripInput.prototype, "estimatedTime", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], TripInput.prototype, "pricing", void 0);
__decorate([
    graphql_1.Field(() => Boolean, {
        description: "An optional field to mark trip as special",
        nullable: true,
    }),
    __metadata("design:type", Boolean)
], TripInput.prototype, "isSpecial", void 0);
__decorate([
    graphql_1.Field(() => [String], {
        description: "An optional list of suppliers for trip",
        nullable: true,
    }),
    __metadata("design:type", Array)
], TripInput.prototype, "suppliers", void 0);
__decorate([
    graphql_1.Field(() => String, {
        description: "An optional field of country",
        nullable: true,
    }),
    __metadata("design:type", String)
], TripInput.prototype, "country", void 0);
TripInput = __decorate([
    graphql_1.InputType()
], TripInput);
exports.TripInput = TripInput;
let AddChapterInput = class AddChapterInput {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], AddChapterInput.prototype, "id", void 0);
__decorate([
    graphql_1.Field(() => ChapterInput),
    __metadata("design:type", Object)
], AddChapterInput.prototype, "chapter", void 0);
AddChapterInput = __decorate([
    graphql_1.InputType()
], AddChapterInput);
exports.AddChapterInput = AddChapterInput;
let ChapterInput = class ChapterInput {
};
__decorate([
    graphql_1.Field(() => file_schema_1.UploadMedia),
    __metadata("design:type", Object)
], ChapterInput.prototype, "thumbnail", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], ChapterInput.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], ChapterInput.prototype, "estimatedTime", void 0);
ChapterInput = __decorate([
    graphql_1.InputType()
], ChapterInput);
exports.ChapterInput = ChapterInput;
let BundleInput = class BundleInput {
};
__decorate([
    graphql_1.Field(() => String, { description: "Bundle's name" }),
    __metadata("design:type", String)
], BundleInput.prototype, "sceneName", void 0);
__decorate([
    graphql_1.Field(() => String, { description: "Bundle's description", nullable: true }),
    __metadata("design:type", String)
], BundleInput.prototype, "description", void 0);
BundleInput = __decorate([
    graphql_1.InputType()
], BundleInput);
exports.BundleInput = BundleInput;
let AddPlaceInput = class AddPlaceInput {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], AddPlaceInput.prototype, "id", void 0);
__decorate([
    graphql_1.Field(() => PlaceInput),
    __metadata("design:type", Object)
], AddPlaceInput.prototype, "place", void 0);
__decorate([
    graphql_1.Field(() => BundleInput),
    __metadata("design:type", Object)
], AddPlaceInput.prototype, "bundle", void 0);
AddPlaceInput = __decorate([
    graphql_1.InputType()
], AddPlaceInput);
exports.AddPlaceInput = AddPlaceInput;
let PlaceGalleryInput = class PlaceGalleryInput {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], PlaceGalleryInput.prototype, "id", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], PlaceGalleryInput.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => file_schema_1.UploadMedia, { description: "Place's images" }),
    __metadata("design:type", Object)
], PlaceGalleryInput.prototype, "photos", void 0);
PlaceGalleryInput = __decorate([
    graphql_1.InputType()
], PlaceGalleryInput);
exports.PlaceGalleryInput = PlaceGalleryInput;
let PlaceInput = class PlaceInput {
};
__decorate([
    graphql_1.Field(() => file_schema_1.UploadMedia),
    __metadata("design:type", Object)
], PlaceInput.prototype, "thumbnail", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], PlaceInput.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => PostionInput, { description: "Place's postion" }),
    __metadata("design:type", typeof (_a = typeof commerce_entity_1.Postion !== "undefined" && commerce_entity_1.Postion) === "function" ? _a : Object)
], PlaceInput.prototype, "position", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], PlaceInput.prototype, "discription", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], PlaceInput.prototype, "estimatedTime", void 0);
__decorate([
    graphql_1.Field(() => file_schema_1.UploadMedia),
    __metadata("design:type", Object)
], PlaceInput.prototype, "audio", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], PlaceInput.prototype, "bundle", void 0);
PlaceInput = __decorate([
    graphql_1.InputType()
], PlaceInput);
exports.PlaceInput = PlaceInput;
let CreateAccessCodeInput = class CreateAccessCodeInput {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], CreateAccessCodeInput.prototype, "id", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { nullable: true, defaultValue: 1 }),
    __metadata("design:type", Number)
], CreateAccessCodeInput.prototype, "count", void 0);
CreateAccessCodeInput = __decorate([
    graphql_1.InputType()
], CreateAccessCodeInput);
exports.CreateAccessCodeInput = CreateAccessCodeInput;
let ApplyAccessCodeInput = class ApplyAccessCodeInput {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], ApplyAccessCodeInput.prototype, "id", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], ApplyAccessCodeInput.prototype, "code", void 0);
ApplyAccessCodeInput = __decorate([
    graphql_1.InputType()
], ApplyAccessCodeInput);
exports.ApplyAccessCodeInput = ApplyAccessCodeInput;
let SearchAccessCodeInput = class SearchAccessCodeInput {
};
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", Object)
], SearchAccessCodeInput.prototype, "code", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", Object)
], SearchAccessCodeInput.prototype, "qrCode", void 0);
SearchAccessCodeInput = __decorate([
    graphql_1.InputType()
], SearchAccessCodeInput);
exports.SearchAccessCodeInput = SearchAccessCodeInput;


/***/ }),

/***/ "./src/trip/dto/update-trip.input.ts":
/*!*******************************************!*\
  !*** ./src/trip/dto/update-trip.input.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateTripInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let UpdateTripInput = class UpdateTripInput {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], UpdateTripInput.prototype, "id", void 0);
UpdateTripInput = __decorate([
    graphql_1.InputType()
], UpdateTripInput);
exports.UpdateTripInput = UpdateTripInput;


/***/ }),

/***/ "./src/trip/entities/access-code.entity.ts":
/*!*************************************************!*\
  !*** ./src/trip/entities/access-code.entity.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccessCodeSchema = exports.AccessCode = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let AccessCode = class AccessCode extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], AccessCode.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    mongoose_1.Prop({ default: null, type: () => String }),
    __metadata("design:type", Object)
], AccessCode.prototype, "tripId", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    mongoose_1.Prop({}),
    __metadata("design:type", String)
], AccessCode.prototype, "code", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    mongoose_1.Prop({}),
    __metadata("design:type", String)
], AccessCode.prototype, "qrCode", void 0);
AccessCode = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], AccessCode);
exports.AccessCode = AccessCode;
exports.AccessCodeSchema = mongoose_1.SchemaFactory.createForClass(AccessCode);


/***/ }),

/***/ "./src/trip/entities/chapter.entity.ts":
/*!*********************************************!*\
  !*** ./src/trip/entities/chapter.entity.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChapterSchema = exports.Chapter = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
const place_entity_1 = __webpack_require__(/*! ./place.entity */ "./src/trip/entities/place.entity.ts");
let Chapter = class Chapter extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], Chapter.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => [place_entity_1.Place]),
    mongoose_1.Prop({ type: [{ type: mongoose_2.Types.ObjectId, ref: () => place_entity_1.Place }], default: [] }),
    __metadata("design:type", Object)
], Chapter.prototype, "places", void 0);
__decorate([
    graphql_1.Field(() => file_schema_1.File),
    mongoose_1.Prop({}),
    __metadata("design:type", typeof (_a = typeof file_schema_1.File !== "undefined" && file_schema_1.File) === "function" ? _a : Object)
], Chapter.prototype, "thumbnail", void 0);
__decorate([
    graphql_1.Field(() => String),
    mongoose_1.Prop({}),
    __metadata("design:type", String)
], Chapter.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => String),
    mongoose_1.Prop({}),
    __metadata("design:type", String)
], Chapter.prototype, "estimatedTime", void 0);
Chapter = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], Chapter);
exports.Chapter = Chapter;
exports.ChapterSchema = mongoose_1.SchemaFactory.createForClass(Chapter);


/***/ }),

/***/ "./src/trip/entities/place.entity.ts":
/*!*******************************************!*\
  !*** ./src/trip/entities/place.entity.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlaceSchema = exports.Place = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const bundle_entity_1 = __webpack_require__(/*! src/bundle/entities/bundle.entity */ "./src/bundle/entities/bundle.entity.ts");
const commerce_entity_1 = __webpack_require__(/*! src/commerce/entities/commerce.entity */ "./src/commerce/entities/commerce.entity.ts");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
let Gallery = class Gallery {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], Gallery.prototype, "id", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], Gallery.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => [file_schema_1.File], { description: "Place's images" }),
    __metadata("design:type", Array)
], Gallery.prototype, "photos", void 0);
Gallery = __decorate([
    graphql_1.ObjectType()
], Gallery);
let Place = class Place extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], Place.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => file_schema_1.File),
    mongoose_1.Prop({}),
    __metadata("design:type", typeof (_a = typeof file_schema_1.File !== "undefined" && file_schema_1.File) === "function" ? _a : Object)
], Place.prototype, "thumbnail", void 0);
__decorate([
    graphql_1.Field(() => String),
    mongoose_1.Prop({}),
    __metadata("design:type", String)
], Place.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => [Gallery], { description: "Place's images" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], Place.prototype, "images", void 0);
__decorate([
    graphql_1.Field(() => commerce_entity_1.Postion, { description: "Place's postion" }),
    mongoose_1.Prop(),
    __metadata("design:type", typeof (_b = typeof commerce_entity_1.Postion !== "undefined" && commerce_entity_1.Postion) === "function" ? _b : Object)
], Place.prototype, "position", void 0);
__decorate([
    graphql_1.Field(() => String),
    mongoose_1.Prop({}),
    __metadata("design:type", String)
], Place.prototype, "discription", void 0);
__decorate([
    graphql_1.Field(() => String),
    mongoose_1.Prop({}),
    __metadata("design:type", String)
], Place.prototype, "estimatedTime", void 0);
__decorate([
    graphql_1.Field(() => [file_schema_1.File]),
    mongoose_1.Prop({}),
    __metadata("design:type", Array)
], Place.prototype, "audio", void 0);
__decorate([
    graphql_1.Field(() => bundle_entity_1.Bundle),
    mongoose_1.Prop({ type: mongoose_2.Types.ObjectId, ref: () => bundle_entity_1.Bundle }),
    __metadata("design:type", Object)
], Place.prototype, "bundle", void 0);
Place = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], Place);
exports.Place = Place;
exports.PlaceSchema = mongoose_1.SchemaFactory.createForClass(Place);


/***/ }),

/***/ "./src/trip/entities/trip.entity.ts":
/*!******************************************!*\
  !*** ./src/trip/entities/trip.entity.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlaceProgress = exports.TripChapterProgress = exports.TripProgress = exports.TripSchema = exports.Trip = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const chapter_entity_1 = __webpack_require__(/*! ./chapter.entity */ "./src/trip/entities/chapter.entity.ts");
const place_entity_1 = __webpack_require__(/*! ./place.entity */ "./src/trip/entities/place.entity.ts");
const supplier_entity_1 = __webpack_require__(/*! ../../supplier/entities/supplier.entity */ "./src/supplier/entities/supplier.entity.ts");
const country_entity_1 = __webpack_require__(/*! src/meta-data/entities/country.entity */ "./src/meta-data/entities/country.entity.ts");
let Trip = class Trip extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], Trip.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => [chapter_entity_1.Chapter]),
    mongoose_1.Prop({ type: [{ type: mongoose_2.Types.ObjectId, ref: () => chapter_entity_1.Chapter }], default: [] }),
    __metadata("design:type", Object)
], Trip.prototype, "chapters", void 0);
__decorate([
    graphql_1.Field(() => String),
    mongoose_1.Prop({}),
    __metadata("design:type", String)
], Trip.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => String),
    mongoose_1.Prop({}),
    __metadata("design:type", String)
], Trip.prototype, "estimatedTime", void 0);
__decorate([
    graphql_1.Field(() => String),
    mongoose_1.Prop({}),
    __metadata("design:type", String)
], Trip.prototype, "pricing", void 0);
__decorate([
    graphql_1.Field(() => Boolean),
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], Trip.prototype, "isSpecial", void 0);
__decorate([
    graphql_1.Field(() => [supplier_entity_1.Supplier]),
    mongoose_1.Prop({ type: [{ type: mongoose_2.Types.ObjectId, ref: () => supplier_entity_1.Supplier }], default: [] }),
    __metadata("design:type", Array)
], Trip.prototype, "suppliers", void 0);
__decorate([
    graphql_1.Field(() => country_entity_1.Country),
    mongoose_1.Prop({ type: mongoose_2.Types.ObjectId }),
    __metadata("design:type", String)
], Trip.prototype, "country", void 0);
Trip = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], Trip);
exports.Trip = Trip;
exports.TripSchema = mongoose_1.SchemaFactory.createForClass(Trip);
let TripProgress = class TripProgress extends Trip {
};
__decorate([
    graphql_1.Field(() => [TripChapterProgress]),
    __metadata("design:type", Object)
], TripProgress.prototype, "chapters", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float),
    __metadata("design:type", Number)
], TripProgress.prototype, "progress", void 0);
TripProgress = __decorate([
    graphql_1.ObjectType()
], TripProgress);
exports.TripProgress = TripProgress;
let TripChapterProgress = class TripChapterProgress extends chapter_entity_1.Chapter {
};
__decorate([
    graphql_1.Field(() => [PlaceProgress]),
    __metadata("design:type", Object)
], TripChapterProgress.prototype, "places", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Float),
    __metadata("design:type", Number)
], TripChapterProgress.prototype, "progress", void 0);
TripChapterProgress = __decorate([
    graphql_1.ObjectType()
], TripChapterProgress);
exports.TripChapterProgress = TripChapterProgress;
let PlaceProgress = class PlaceProgress extends place_entity_1.Place {
};
__decorate([
    graphql_1.Field(() => Boolean),
    __metadata("design:type", Object)
], PlaceProgress.prototype, "done", void 0);
PlaceProgress = __decorate([
    graphql_1.ObjectType()
], PlaceProgress);
exports.PlaceProgress = PlaceProgress;


/***/ }),

/***/ "./src/trip/trip.module.ts":
/*!*********************************!*\
  !*** ./src/trip/trip.module.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TripModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const trip_service_1 = __webpack_require__(/*! ./trip.service */ "./src/trip/trip.service.ts");
const trip_resolver_1 = __webpack_require__(/*! ./trip.resolver */ "./src/trip/trip.resolver.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const chapter_entity_1 = __webpack_require__(/*! ./entities/chapter.entity */ "./src/trip/entities/chapter.entity.ts");
const place_entity_1 = __webpack_require__(/*! ./entities/place.entity */ "./src/trip/entities/place.entity.ts");
const trip_entity_1 = __webpack_require__(/*! ./entities/trip.entity */ "./src/trip/entities/trip.entity.ts");
const bundle_module_1 = __webpack_require__(/*! src/bundle/bundle.module */ "./src/bundle/bundle.module.ts");
const access_code_entity_1 = __webpack_require__(/*! ./entities/access-code.entity */ "./src/trip/entities/access-code.entity.ts");
const user_module_1 = __webpack_require__(/*! src/user/user.module */ "./src/user/user.module.ts");
const supplier_entity_1 = __webpack_require__(/*! ../supplier/entities/supplier.entity */ "./src/supplier/entities/supplier.entity.ts");
const supplier_module_1 = __webpack_require__(/*! src/supplier/supplier.module */ "./src/supplier/supplier.module.ts");
let TripModule = class TripModule {
};
TripModule = __decorate([
    common_1.Module({
        imports: [
            common_1.forwardRef(() => user_module_1.UserModule),
            mongoose_1.MongooseModule.forFeature([
                { name: chapter_entity_1.Chapter.name, schema: chapter_entity_1.ChapterSchema },
                { name: place_entity_1.Place.name, schema: place_entity_1.PlaceSchema },
                { name: trip_entity_1.Trip.name, schema: trip_entity_1.TripSchema },
                { name: access_code_entity_1.AccessCode.name, schema: access_code_entity_1.AccessCodeSchema },
                { name: supplier_entity_1.Supplier.name, schema: supplier_entity_1.SupplierSchema },
            ]),
            common_1.forwardRef(() => bundle_module_1.BundleModule),
            supplier_module_1.SupplierModule
        ],
        providers: [trip_resolver_1.TripResolver, trip_service_1.TripService],
        exports: [trip_service_1.TripService],
    })
], TripModule);
exports.TripModule = TripModule;


/***/ }),

/***/ "./src/trip/trip.resolver.ts":
/*!***********************************!*\
  !*** ./src/trip/trip.resolver.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TripResolver = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const file_interceptor_1 = __webpack_require__(/*! src/utils/file.interceptor */ "./src/utils/file.interceptor.ts");
const current_user_decorator_1 = __webpack_require__(/*! src/utils/guards/current-user.decorator */ "./src/utils/guards/current-user.decorator.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! src/utils/guards/jwt-auth.guard */ "./src/utils/guards/jwt-auth.guard.ts");
const create_trip_input_1 = __webpack_require__(/*! ./dto/create-trip.input */ "./src/trip/dto/create-trip.input.ts");
const update_trip_input_1 = __webpack_require__(/*! ./dto/update-trip.input */ "./src/trip/dto/update-trip.input.ts");
const access_code_entity_1 = __webpack_require__(/*! ./entities/access-code.entity */ "./src/trip/entities/access-code.entity.ts");
const chapter_entity_1 = __webpack_require__(/*! ./entities/chapter.entity */ "./src/trip/entities/chapter.entity.ts");
const place_entity_1 = __webpack_require__(/*! ./entities/place.entity */ "./src/trip/entities/place.entity.ts");
const trip_entity_1 = __webpack_require__(/*! ./entities/trip.entity */ "./src/trip/entities/trip.entity.ts");
const trip_service_1 = __webpack_require__(/*! ./trip.service */ "./src/trip/trip.service.ts");
let TripResolver = class TripResolver {
    constructor(tripService) {
        this.tripService = tripService;
    }
    createTrip(tripInput) {
        return this.tripService.createTrip(tripInput);
    }
    addChapter(chapterInput) {
        return this.tripService.addChapter(chapterInput);
    }
    addPlace(placeInput) {
        return this.tripService.addPlace(placeInput);
    }
    findAll() {
        return this.tripService.findAll();
    }
    findOneTrip(user, id) {
        return this.tripService.findOne(id, user);
    }
    findOneChapter(id) {
        return this.tripService.findOneChapter(id);
    }
    findOnePlace(id) {
        return this.tripService.findOnePlace(id);
    }
    updateTrip(updateTripInput) {
        return this.tripService.update(updateTripInput.id, updateTripInput);
    }
    removeTrip(id) {
        return this.tripService.remove(id);
    }
    removeChapter(id) {
        return this.tripService.removeChapter(id);
    }
    removePlace(id) {
        return this.tripService.removePlace(id);
    }
    addImageToPlaceGallery(id, placeGalleryInput) {
        return this.tripService.addImageToPlace(id, placeGalleryInput);
    }
    createTripAccessCode(tripAccessCodeInput) {
        return this.tripService.createAccessCode(tripAccessCodeInput);
    }
    applyTripAccessCode(user, applyAccessCodeInput) {
        return this.tripService.applyTripAccessCode(applyAccessCodeInput, user);
    }
    getAllTripsAccessCodes(user) {
        return this.tripService.getAllTripsAccessCodes();
    }
    searchAccessCode(user, searchAccessCodeInput) {
        return this.tripService.searchAccessCode(searchAccessCodeInput, user);
    }
};
__decorate([
    graphql_1.Mutation(() => trip_entity_1.Trip),
    __param(0, graphql_1.Args("tripInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_trip_input_1.TripInput !== "undefined" && create_trip_input_1.TripInput) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], TripResolver.prototype, "createTrip", null);
__decorate([
    graphql_1.Mutation(() => trip_entity_1.Trip),
    __param(0, graphql_1.Args("addChapterInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_trip_input_1.AddChapterInput !== "undefined" && create_trip_input_1.AddChapterInput) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], TripResolver.prototype, "addChapter", null);
__decorate([
    common_1.UseInterceptors(file_interceptor_1.GraphqlFiles(["addPlaceInput.place.thumbnail", "addPlaceInput.place.audio"])),
    graphql_1.Mutation(() => trip_entity_1.Trip),
    __param(0, graphql_1.Args("addPlaceInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof create_trip_input_1.AddPlaceInput !== "undefined" && create_trip_input_1.AddPlaceInput) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], TripResolver.prototype, "addPlace", null);
__decorate([
    graphql_1.Query(() => [trip_entity_1.Trip], { name: "trip" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TripResolver.prototype, "findAll", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.GqlAuthGuard),
    graphql_1.Query(() => trip_entity_1.Trip),
    __param(0, current_user_decorator_1.CurrentUser()),
    __param(1, graphql_1.Args("id", { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], TripResolver.prototype, "findOneTrip", null);
__decorate([
    graphql_1.Query(() => chapter_entity_1.Chapter),
    __param(0, graphql_1.Args("id", { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TripResolver.prototype, "findOneChapter", null);
__decorate([
    graphql_1.Query(() => place_entity_1.Place),
    __param(0, graphql_1.Args("id", { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TripResolver.prototype, "findOnePlace", null);
__decorate([
    graphql_1.Mutation(() => trip_entity_1.Trip),
    __param(0, graphql_1.Args("updateTripInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof update_trip_input_1.UpdateTripInput !== "undefined" && update_trip_input_1.UpdateTripInput) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], TripResolver.prototype, "updateTrip", null);
__decorate([
    graphql_1.Mutation(() => trip_entity_1.Trip),
    __param(0, graphql_1.Args("id", { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TripResolver.prototype, "removeTrip", null);
__decorate([
    graphql_1.Mutation(() => trip_entity_1.Trip),
    __param(0, graphql_1.Args("id", { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TripResolver.prototype, "removeChapter", null);
__decorate([
    graphql_1.Mutation(() => trip_entity_1.Trip),
    __param(0, graphql_1.Args("id", { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TripResolver.prototype, "removePlace", null);
__decorate([
    common_1.UseInterceptors(file_interceptor_1.GraphqlFiles(["placeGalleryInput.photos"])),
    graphql_1.Mutation(() => trip_entity_1.Trip),
    __param(0, graphql_1.Args("id", { type: () => String })),
    __param(1, graphql_1.Args("placeGalleryInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_e = typeof create_trip_input_1.PlaceGalleryInput !== "undefined" && create_trip_input_1.PlaceGalleryInput) === "function" ? _e : Object]),
    __metadata("design:returntype", void 0)
], TripResolver.prototype, "addImageToPlaceGallery", null);
__decorate([
    graphql_1.Mutation(() => [access_code_entity_1.AccessCode]),
    __param(0, graphql_1.Args("tripAccessCodeInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof create_trip_input_1.CreateAccessCodeInput !== "undefined" && create_trip_input_1.CreateAccessCodeInput) === "function" ? _f : Object]),
    __metadata("design:returntype", void 0)
], TripResolver.prototype, "createTripAccessCode", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.GqlAuthGuard),
    graphql_1.Mutation(() => String),
    __param(0, current_user_decorator_1.CurrentUser()),
    __param(1, graphql_1.Args("applyAccessCodeInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_g = typeof create_trip_input_1.ApplyAccessCodeInput !== "undefined" && create_trip_input_1.ApplyAccessCodeInput) === "function" ? _g : Object]),
    __metadata("design:returntype", void 0)
], TripResolver.prototype, "applyTripAccessCode", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.GqlAuthGuard),
    graphql_1.Query(() => [access_code_entity_1.AccessCode], { nullable: 'itemsAndList' }),
    __param(0, current_user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TripResolver.prototype, "getAllTripsAccessCodes", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.GqlAuthGuard),
    graphql_1.Query(() => access_code_entity_1.AccessCode),
    __param(0, current_user_decorator_1.CurrentUser()),
    __param(1, graphql_1.Args("searchAccessCodeInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_h = typeof create_trip_input_1.SearchAccessCodeInput !== "undefined" && create_trip_input_1.SearchAccessCodeInput) === "function" ? _h : Object]),
    __metadata("design:returntype", void 0)
], TripResolver.prototype, "searchAccessCode", null);
TripResolver = __decorate([
    graphql_1.Resolver(() => trip_entity_1.Trip),
    __metadata("design:paramtypes", [typeof (_j = typeof trip_service_1.TripService !== "undefined" && trip_service_1.TripService) === "function" ? _j : Object])
], TripResolver);
exports.TripResolver = TripResolver;


/***/ }),

/***/ "./src/trip/trip.service.ts":
/*!**********************************!*\
  !*** ./src/trip/trip.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TripService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const qrCode = __webpack_require__(/*! qrcode */ "qrcode");
const bundle_service_1 = __webpack_require__(/*! src/bundle/bundle.service */ "./src/bundle/bundle.service.ts");
const supplier_service_1 = __webpack_require__(/*! src/supplier/supplier.service */ "./src/supplier/supplier.service.ts");
const user_service_1 = __webpack_require__(/*! src/user/user.service */ "./src/user/user.service.ts");
const voucherCodes = __webpack_require__(/*! voucher-code-generator */ "voucher-code-generator");
const access_code_entity_1 = __webpack_require__(/*! ./entities/access-code.entity */ "./src/trip/entities/access-code.entity.ts");
const chapter_entity_1 = __webpack_require__(/*! ./entities/chapter.entity */ "./src/trip/entities/chapter.entity.ts");
const place_entity_1 = __webpack_require__(/*! ./entities/place.entity */ "./src/trip/entities/place.entity.ts");
const trip_entity_1 = __webpack_require__(/*! ./entities/trip.entity */ "./src/trip/entities/trip.entity.ts");
let TripService = class TripService {
    constructor(TripModel, ChapterModel, PlaceModel, AccessCodeModel, bundleService, userService, supplierService) {
        this.TripModel = TripModel;
        this.ChapterModel = ChapterModel;
        this.PlaceModel = PlaceModel;
        this.AccessCodeModel = AccessCodeModel;
        this.bundleService = bundleService;
        this.userService = userService;
        this.supplierService = supplierService;
    }
    async createTrip(createTripInput) {
        const suppliers = createTripInput.suppliers;
        await this.supplierService.validateSuppliers(suppliers);
        return new this.TripModel(createTripInput).save();
    }
    async addChapter(createTripChapterInput) {
        const trip = await this.TripModel.findById(createTripChapterInput.id);
        const chapter = await new this.ChapterModel(createTripChapterInput.chapter).save();
        trip.chapters.push(chapter._id);
        return await this.TripModel.findByIdAndUpdate(trip._id, trip);
    }
    async addPlace(createPlaceInput) {
        const tripChapter = await this.ChapterModel.findById(createPlaceInput.id);
        const bundle = await this.bundleService.createBundle(createPlaceInput.bundle);
        const place = await new this.PlaceModel(Object.assign(Object.assign({}, createPlaceInput.place), { bundle: bundle._id })).save();
        tripChapter.places.push(place._id);
        return await this.ChapterModel.findByIdAndUpdate(tripChapter._id, tripChapter);
    }
    findAll() {
        return this.TripModel.find()
            .populate({
            path: "chapters",
            populate: { path: "places" },
        })
            .populate({ path: "suppliers" });
    }
    async findOne(id, user = null) {
        const trip = await this.TripModel.findById(id).populate({
            path: "chapters",
            populate: { path: "places", populate: { path: "bundle" } },
        });
        if (!user) {
            return trip;
        }
        if (trip.isSpecial) {
            const exists = await this.userService.isSpecialTripExists(user.id, trip._id);
            if (exists)
                return trip;
            throw new common_1.UnauthorizedException();
        }
        else
            return trip;
    }
    findOneChapter(id) {
        return this.ChapterModel.findById(id).populate({
            path: "places",
            populate: { path: "bundle" },
        });
    }
    findOnePlace(id) {
        return this.PlaceModel.findById(id);
    }
    update(id, updateTripInput) {
        return `This action updates a #${id} trip`;
    }
    remove(id) {
        return this.TripModel.findByIdAndDelete(id);
    }
    removeChapter(id) {
        return this.ChapterModel.findByIdAndDelete(id);
    }
    removePlace(id) {
        return this.PlaceModel.findByIdAndDelete(id);
    }
    chapterFromPlace(id) {
        return this.ChapterModel.findOne({ places: { $in: [id] } }).populate({
            path: "places",
            populate: { path: "bundle" },
        });
    }
    async addImageToPlace(id, photos) {
        const place = await this.PlaceModel.findById(id);
        place.images = photos;
        return await place.save();
    }
    async createAccessCode(createTripAcessCodeInput) {
        const codes = voucherCodes.generate({
            length: 8,
            count: (createTripAcessCodeInput === null || createTripAcessCodeInput === void 0 ? void 0 : createTripAcessCodeInput.count) || 1,
        });
        const trip = await this.TripModel.findById(createTripAcessCodeInput.id);
        const accessCodesToSave = [];
        for (const code of codes) {
            const qr = await qrCode.toDataURL(code);
            accessCodesToSave.push({
                code,
                tripId: trip._id,
                qrCode: qr,
            });
        }
        await this.AccessCodeModel.insertMany(accessCodesToSave);
        const res = await this.AccessCodeModel.find({ tripId: trip._id });
        return res;
    }
    async applyTripAccessCode(applyAccessCodeInput, user) {
        const found = await this.AccessCodeModel.find({
            tripId: mongoose_2.Types.ObjectId(applyAccessCodeInput.id),
            code: applyAccessCodeInput.code,
        });
        if (found.length) {
            await this.userService.addSpecialTrip(user.id, mongoose_2.Types.ObjectId(applyAccessCodeInput.id));
            return "Access code is valid";
        }
        else {
            return "Invalid Access code";
        }
    }
    async getAllTripsAccessCodes() {
        const trips = await this.AccessCodeModel.find();
        return trips;
    }
    async searchAccessCode(searchAccessCodeInput, user) {
        let found = null;
        if (searchAccessCodeInput.code) {
            found = await this.AccessCodeModel.find({
                code: searchAccessCodeInput.code,
            });
        }
        else if (searchAccessCodeInput.qrCode) {
            found = await this.AccessCodeModel.find({
                qrCode: searchAccessCodeInput.qrCode,
            });
        }
        if (found.length) {
            await this.userService.addSpecialTrip(user.id, mongoose_2.Types.ObjectId(found[0].tripId));
            return found[0];
        }
        else {
            return "Invalid Access code";
        }
    }
};
TripService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(trip_entity_1.Trip.name)),
    __param(1, mongoose_1.InjectModel(chapter_entity_1.Chapter.name)),
    __param(2, mongoose_1.InjectModel(place_entity_1.Place.name)),
    __param(3, mongoose_1.InjectModel(access_code_entity_1.AccessCode.name)),
    __param(5, common_1.Inject(common_1.forwardRef(() => user_service_1.UserService))),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object, typeof (_d = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _d : Object, typeof (_e = typeof bundle_service_1.BundleService !== "undefined" && bundle_service_1.BundleService) === "function" ? _e : Object, typeof (_f = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _f : Object, typeof (_g = typeof supplier_service_1.SupplierService !== "undefined" && supplier_service_1.SupplierService) === "function" ? _g : Object])
], TripService);
exports.TripService = TripService;


/***/ }),

/***/ "./src/user/dto/create-user.input.ts":
/*!*******************************************!*\
  !*** ./src/user/dto/create-user.input.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserInput = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
let CreateUserInput = class CreateUserInput {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], CreateUserInput.prototype, "email", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], CreateUserInput.prototype, "password", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], CreateUserInput.prototype, "username", void 0);
__decorate([
    graphql_1.Field(() => file_schema_1.UploadMedia),
    __metadata("design:type", Object)
], CreateUserInput.prototype, "picture", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    class_validator_1.IsOptional(),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "selectedTripId", void 0);
CreateUserInput = __decorate([
    graphql_1.InputType()
], CreateUserInput);
exports.CreateUserInput = CreateUserInput;


/***/ }),

/***/ "./src/user/entities/user.entity.ts":
/*!******************************************!*\
  !*** ./src/user/entities/user.entity.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSchema = exports.User = exports.Message = exports.TripLanguage = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const notification_entity_1 = __webpack_require__(/*! src/notification/entities/notification.entity */ "./src/notification/entities/notification.entity.ts");
const progress_entity_1 = __webpack_require__(/*! src/progress/entities/progress.entity */ "./src/progress/entities/progress.entity.ts");
const trip_entity_1 = __webpack_require__(/*! src/trip/entities/trip.entity */ "./src/trip/entities/trip.entity.ts");
const file_schema_1 = __webpack_require__(/*! src/utils/file.schema */ "./src/utils/file.schema.ts");
let TripLanguage = class TripLanguage {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], TripLanguage.prototype, "tripId", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], TripLanguage.prototype, "lang", void 0);
TripLanguage = __decorate([
    graphql_1.ObjectType()
], TripLanguage);
exports.TripLanguage = TripLanguage;
let Message = class Message {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], Message.prototype, "userId", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], Message.prototype, "content", void 0);
Message = __decorate([
    graphql_1.ObjectType()
], Message);
exports.Message = Message;
let User = class User extends mongoose_2.Document {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], User.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(() => String),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    graphql_1.Field(() => String),
    mongoose_1.Prop({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    mongoose_1.Prop({ default: null }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int),
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], User.prototype, "achievements", void 0);
__decorate([
    graphql_1.Field(() => Boolean),
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "banned", void 0);
__decorate([
    graphql_1.Field(() => Boolean),
    mongoose_1.Prop({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "EmailConfirmation", void 0);
__decorate([
    graphql_1.Field(() => notification_entity_1.Notification, { description: "Notification" }),
    mongoose_1.Prop({ type: mongoose_2.Types.ObjectId, ref: () => notification_entity_1.Notification }),
    __metadata("design:type", Object)
], User.prototype, "notification", void 0);
__decorate([
    graphql_1.Field(() => trip_entity_1.Trip, { description: "Selected Trip" }),
    mongoose_1.Prop({ type: mongoose_2.Types.ObjectId, ref: () => trip_entity_1.Trip }),
    __metadata("design:type", Object)
], User.prototype, "selectedTrip", void 0);
__decorate([
    graphql_1.Field(() => [progress_entity_1.Progress], { description: "Trips" }),
    mongoose_1.Prop({ type: [{ type: mongoose_2.Types.ObjectId, ref: () => progress_entity_1.Progress }], default: [] }),
    __metadata("design:type", Object)
], User.prototype, "progress", void 0);
__decorate([
    graphql_1.Field(() => file_schema_1.File, { description: "Picture" }),
    mongoose_1.Prop({ type: file_schema_1.File }),
    __metadata("design:type", Object)
], User.prototype, "picture", void 0);
__decorate([
    graphql_1.Field(() => [Message], { description: "Conversation" }),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], User.prototype, "conversationBot", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int),
    mongoose_1.Prop({ default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "points", void 0);
__decorate([
    graphql_1.Field(() => Date),
    __metadata("design:type", Object)
], User.prototype, "createdAt", void 0);
__decorate([
    graphql_1.Field(() => [String]),
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], User.prototype, "specialTrips", void 0);
__decorate([
    graphql_1.Field(() => [TripLanguage]),
    mongoose_1.Prop({ default: [] }),
    __metadata("design:type", Array)
], User.prototype, "tripLanguages", void 0);
User = __decorate([
    mongoose_1.Schema({ timestamps: true }),
    graphql_1.ObjectType()
], User);
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);


/***/ }),

/***/ "./src/user/user.module.ts":
/*!*********************************!*\
  !*** ./src/user/user.module.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_service_1 = __webpack_require__(/*! ./user.service */ "./src/user/user.service.ts");
const user_resolver_1 = __webpack_require__(/*! ./user.resolver */ "./src/user/user.resolver.ts");
const user_entity_1 = __webpack_require__(/*! ./entities/user.entity */ "./src/user/entities/user.entity.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const notification_module_1 = __webpack_require__(/*! src/notification/notification.module */ "./src/notification/notification.module.ts");
const trip_module_1 = __webpack_require__(/*! src/trip/trip.module */ "./src/trip/trip.module.ts");
const progress_module_1 = __webpack_require__(/*! src/progress/progress.module */ "./src/progress/progress.module.ts");
const default_config_entity_1 = __webpack_require__(/*! src/default-config/entities/default-config.entity */ "./src/default-config/entities/default-config.entity.ts");
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: user_entity_1.User.name, schema: user_entity_1.UserSchema }, { name: default_config_entity_1.DefaultConfig.name, schema: default_config_entity_1.DefaultConfigSchema }]),
            common_1.forwardRef(() => notification_module_1.NotificationModule),
            common_1.forwardRef(() => trip_module_1.TripModule),
            common_1.forwardRef(() => progress_module_1.ProgressModule),
        ],
        providers: [user_resolver_1.UserResolver, user_service_1.UserService],
        exports: [user_service_1.UserService],
    })
], UserModule);
exports.UserModule = UserModule;


/***/ }),

/***/ "./src/user/user.resolver.ts":
/*!***********************************!*\
  !*** ./src/user/user.resolver.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserResolver = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const progress_entity_1 = __webpack_require__(/*! src/progress/entities/progress.entity */ "./src/progress/entities/progress.entity.ts");
const trip_entity_1 = __webpack_require__(/*! src/trip/entities/trip.entity */ "./src/trip/entities/trip.entity.ts");
const current_user_decorator_1 = __webpack_require__(/*! src/utils/guards/current-user.decorator */ "./src/utils/guards/current-user.decorator.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! src/utils/guards/jwt-auth.guard */ "./src/utils/guards/jwt-auth.guard.ts");
const user_entity_1 = __webpack_require__(/*! ./entities/user.entity */ "./src/user/entities/user.entity.ts");
const user_service_1 = __webpack_require__(/*! ./user.service */ "./src/user/user.service.ts");
let UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    async currentUser(user) {
        return await this.userService.findByEmail(user.email);
    }
    async rankList(start, limit) {
        return await this.userService.rankList(start, limit);
    }
    getProgress(id, user) {
        return this.userService.getTripProgress(user.id, id);
    }
    updateProgress(id, user) {
        return this.userService.trackTrip(user.id, id);
    }
    addTripLanguage(tripId, lang, user) {
        return this.userService.addTripLanguage(tripId, lang, user.id);
    }
};
__decorate([
    graphql_1.Query(() => user_entity_1.User),
    __param(0, current_user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "currentUser", null);
__decorate([
    graphql_1.Query(() => [user_entity_1.User]),
    __param(0, graphql_1.Args("start", { type: () => graphql_1.Int, defaultValue: 0 })),
    __param(1, graphql_1.Args("limit", { type: () => graphql_1.Int, defaultValue: 15 })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "rankList", null);
__decorate([
    graphql_1.Query(() => trip_entity_1.TripProgress),
    __param(0, graphql_1.Args("tripId", { type: () => String })),
    __param(1, current_user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "getProgress", null);
__decorate([
    graphql_1.Mutation(() => progress_entity_1.ChapterProgress),
    __param(0, graphql_1.Args("palaceId", { type: () => String })),
    __param(1, current_user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "updateProgress", null);
__decorate([
    graphql_1.Mutation(() => String),
    __param(0, graphql_1.Args("tripId", { type: () => String })),
    __param(1, graphql_1.Args("lang", { type: () => String })),
    __param(2, current_user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "addTripLanguage", null);
UserResolver = __decorate([
    common_1.UseGuards(jwt_auth_guard_1.GqlAuthGuard),
    graphql_1.Resolver(() => user_entity_1.User),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], UserResolver);
exports.UserResolver = UserResolver;


/***/ }),

/***/ "./src/user/user.service.ts":
/*!**********************************!*\
  !*** ./src/user/user.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const md5 = __webpack_require__(/*! md5 */ "md5");
const moment = __webpack_require__(/*! moment */ "moment");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const default_config_entity_1 = __webpack_require__(/*! src/default-config/entities/default-config.entity */ "./src/default-config/entities/default-config.entity.ts");
const notification_service_1 = __webpack_require__(/*! src/notification/notification.service */ "./src/notification/notification.service.ts");
const progress_service_1 = __webpack_require__(/*! src/progress/progress.service */ "./src/progress/progress.service.ts");
const trip_service_1 = __webpack_require__(/*! src/trip/trip.service */ "./src/trip/trip.service.ts");
const encryption_1 = __webpack_require__(/*! src/utils/encryption */ "./src/utils/encryption.ts");
const user_entity_1 = __webpack_require__(/*! ./entities/user.entity */ "./src/user/entities/user.entity.ts");
const nodemailer = __webpack_require__(/*! nodemailer */ "nodemailer");
let UserService = class UserService {
    constructor(UserModel, DefaultConfigModel, notificationService, tripService, progressService) {
        this.UserModel = UserModel;
        this.DefaultConfigModel = DefaultConfigModel;
        this.notificationService = notificationService;
        this.tripService = tripService;
        this.progressService = progressService;
        this.init();
    }
    async init() {
        this.transporter = nodemailer.createTransport({
            host: "smtp-relay.sendinblue.com",
            port: 587,
            secure: false,
            auth: {
                user: "<email>",
                pass: "<password>",
            },
        });
    }
    async create(informations) {
        if (informations.password)
            informations.password = await encryption_1.encrypte(informations === null || informations === void 0 ? void 0 : informations.password);
        const notification = await this.notificationService.create();
        const { selectedTripId } = informations, rest = __rest(informations, ["selectedTripId"]);
        const user = await new this.UserModel(Object.assign(Object.assign({}, rest), { notification: notification._id })).save();
        await this.sendConfirmationCode(user._id);
        await this.joinTrip(user._id, selectedTripId);
        return user;
    }
    findAll() {
        return `This action returns all user`;
    }
    async findByEmail(email) {
        return await this.UserModel.findOne({ email })
            .populate(["notifications"])
            .populate({ path: "progress", populate: { path: "chapters" } });
    }
    findOne(id) {
        return this.UserModel.findById(id).populate(["notifications", "progress"]);
    }
    async update(id, informations) {
        return await this.UserModel.findByIdAndUpdate(id, informations);
    }
    async addSpecialTrip(id, trip) {
        return await this.UserModel.findByIdAndUpdate(id, {
            $push: { specialTrips: { $each: [trip] } },
        });
    }
    async isSpecialTripExists(userId, trip) {
        return await this.UserModel.findOne({
            _id: mongoose_2.Types.ObjectId(userId),
            specialTrips: { $in: [trip] },
        });
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
    async rankList(start, limit) {
        return await this.UserModel.find()
            .sort({ points: -1, createdAt: -1 })
            .skip(start)
            .limit(limit);
    }
    async sendConfirmationCode(userId) {
        try {
            const user = await this.UserModel.findById(userId);
            const timestamp = moment(moment()
                .add(moment().minute() > 30 && 1, "hours")
                .minutes(moment().minute() <= 30 ? 30 : 0)
                .format("hh:mm a"), "hh:mm a").unix();
            const code = (await md5(timestamp + user._id)).slice(0, 6);
            await this.transporter.sendMail({
                from: "<email>",
                to: [user.email],
                subject: "<subject>",
                text: "<code>",
                html: encryption_1.emailtemplate(code),
            });
            return 200;
        }
        catch (e) {
            console.log(e);
            return 500;
        }
    }
    async activateAcount(userId, code) {
        const user = await this.UserModel.findById(userId);
        const timestamp = moment(moment()
            .add(moment().minute() > 30 && 1, "hours")
            .minutes(moment().minute() <= 30 ? 30 : 0)
            .format("hh:mm a"), "hh:mm a").unix();
        const expectedCode = (await md5(timestamp + user._id)).slice(0, 6);
        if (expectedCode == code) {
            await this.UserModel.findByIdAndUpdate(user._id, {
                EmailConfirmation: true,
            });
            return 200;
        }
        return 400;
    }
    async joinTrip(userId, tripId) {
        if (tripId) {
            const trip = await this.tripService.findOne(tripId);
            if (!trip)
                throw new common_1.BadRequestException("Trip not found for provided selectedTripId", { cause: new Error(), description: "Some error description" });
        }
        const config = await this.DefaultConfigModel.findOne();
        if (!config)
            throw new common_1.BadRequestException("Config not found for defaultSelectedTripId", { cause: new Error(), description: "Some error description" });
        const user = await this.UserModel.findById(userId);
        const trip = await this.tripService.findOne(tripId || config.defaultSelectedTripId);
        if (user && trip) {
            user.selectedTrip = trip._id;
            user.progress.push((await this.progressService.create({ trip: trip._id, userId }))._id);
            await user.save();
        }
    }
    async selectTrip(userId, tripId = "6181b4a7edbd5b648e4d12b4") {
        const trip = await this.tripService.findOne(tripId);
        const user = await this.UserModel.findOne({ _id: userId }).populate({
            path: "trips",
            match: { trip: trip._id },
        });
        if (user && trip) {
            user.selectedTrip = trip._id;
            await user.save();
        }
    }
    async trackTrip(userId, placeId) {
        const user = await this.UserModel.findById(userId).populate(["progress"]);
        const progress = await this.progressService.findByUserAndTrip(user._id, user.selectedTrip);
        const chapter = await this.tripService.chapterFromPlace(placeId);
        const chapterProgress = await this.progressService.ChapterProgressModel.findOne({ progress: progress._id, id: chapter._id });
        if (chapterProgress && !chapterProgress.places.includes(placeId)) {
            chapterProgress.places.push(placeId);
            await chapterProgress.save();
        }
        else {
            progress.placesId.push(placeId);
            progress.chapters.push((await new this.progressService.ChapterProgressModel({
                progress: progress._id,
                id: chapter._id,
                places: [placeId],
            }).save())._id);
        }
        await this.progressService.update(progress._id, progress);
        return chapterProgress;
    }
    async getTripProgress(userId, tripId) {
        const user = await this.UserModel.findById(userId).populate(["progress"]);
        const trip = await this.tripService.findOne(tripId);
        let tripProgress = Object.assign({}, trip.toJSON());
        const progress = await this.progressService
            .findByUserAndTrip(user._id, tripId)
            .populate({ path: "chapters" });
        const placesId = progress && progress.placesId ? progress.placesId : [];
        let totalPlaces = 0;
        let totalPlacesDone = 0;
        for (let [i, chapter] of trip.chapters.entries()) {
            totalPlaces += chapter.places.length;
            let chapterPlacesDone = 0;
            for (let [j, place] of trip.chapters[i].places.entries()) {
                if (placesId.includes(place._id)) {
                    totalPlacesDone++;
                    chapterPlacesDone++;
                    tripProgress.chapters[i].places[j].done = true;
                }
                else {
                    tripProgress.chapters[i].places[j].done = false;
                }
            }
            tripProgress.chapters[i].progress =
                (chapterPlacesDone * 100) / chapter.places.length;
        }
        tripProgress = Object.assign(Object.assign({}, tripProgress), { progress: (totalPlacesDone * 100) / totalPlaces });
        return tripProgress;
    }
    async addTripLanguage(tripId, lang, userId) {
        const user = await this.UserModel.findById(userId);
        const trip = await this.tripService.findOne(tripId);
        if (user && trip) {
            const tripLanguageIndex = user.tripLanguages.findIndex((tl) => tl.tripId === tripId);
            if (tripLanguageIndex !== -1) {
                await user.update({ $set: { "tripLanguages.$[el].lang": lang } }, {
                    arrayFilters: [{ "el.tripId": tripId }],
                    upsert: true,
                });
            }
            else {
                user.tripLanguages.push({ tripId, lang });
                await user.save();
            }
        }
        else {
            return "User or Trip Not Found";
        }
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(user_entity_1.User.name)),
    __param(1, mongoose_1.InjectModel(default_config_entity_1.DefaultConfig.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof notification_service_1.NotificationService !== "undefined" && notification_service_1.NotificationService) === "function" ? _c : Object, typeof (_d = typeof trip_service_1.TripService !== "undefined" && trip_service_1.TripService) === "function" ? _d : Object, typeof (_e = typeof progress_service_1.ProgressService !== "undefined" && progress_service_1.ProgressService) === "function" ? _e : Object])
], UserService);
exports.UserService = UserService;


/***/ }),

/***/ "./src/utils/backup.service.ts":
/*!*************************************!*\
  !*** ./src/utils/backup.service.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var BackupService_1, _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BackupService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const childProcess = __webpack_require__(/*! child_process */ "child_process");
const zip_a_folder_1 = __webpack_require__(/*! zip-a-folder */ "zip-a-folder");
const admin = __webpack_require__(/*! firebase-admin */ "firebase-admin");
const fs = (__webpack_require__(/*! fs */ "fs").promises);
let BackupService = BackupService_1 = class BackupService {
    constructor(configService) {
        this.configService = configService;
        this.logger = new common_1.Logger(BackupService_1.name);
    }
    async backupMongoDB() {
        try {
            const databaseURL = this.configService.get("db.connectionUrl");
            const backupProcess = childProcess.spawn("mongodump", [
                "--uri",
                databaseURL,
            ]);
            backupProcess.on("close", async (code) => {
                if (code === 0) {
                    console.log(`MongoDB backup completed`);
                    await zip_a_folder_1.zip("dump/database", "dump.zip");
                    console.log(`Backup file zip created`);
                    await this.uploadFileToFirebaseStorage("dump.zip", `mongo-backups/${Date.now()}.zip`);
                    fs.rm("dump/database", { recursive: true, force: true });
                }
                else {
                    console.error(`MongoDB backup failed with code ${code}`);
                }
            });
        }
        catch (error) {
            this.logger.error("Error while running MongoDB backup:", error);
        }
    }
    async uploadFileToFirebaseStorage(filePath, destinationPath) {
        try {
            const bucket = admin.storage().bucket();
            await bucket.upload(filePath, {
                destination: destinationPath,
                metadata: {
                    contentType: "application/zip",
                },
            });
            console.log("File uploaded to Firebase Storage.");
        }
        catch (error) {
            console.error("Error uploading file:", error);
            throw error;
        }
    }
    async deleteFile(filePath) {
        try {
            await fs.unlink(filePath);
            console.log("File has been successfully deleted.");
        }
        catch (err) {
            console.error("Error deleting the file:", err);
        }
    }
};
__decorate([
    schedule_1.Cron(schedule_1.CronExpression.EVERY_DAY_AT_MIDNIGHT),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BackupService.prototype, "backupMongoDB", null);
BackupService = BackupService_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], BackupService);
exports.BackupService = BackupService;


/***/ }),

/***/ "./src/utils/config/configuration.ts":
/*!*******************************************!*\
  !*** ./src/utils/config/configuration.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const fs_1 = __webpack_require__(/*! fs */ "fs");
const yaml = __webpack_require__(/*! js-yaml */ "js-yaml");
const path_1 = __webpack_require__(/*! path */ "path");
const YAML_CONFIG_FILENAME = 'config.yaml';
exports["default"] = () => {
    return yaml.load(fs_1.readFileSync(path_1.join(YAML_CONFIG_FILENAME), 'utf8'));
};


/***/ }),

/***/ "./src/utils/encryption.ts":
/*!*********************************!*\
  !*** ./src/utils/encryption.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.emailtemplate = exports.encrypte = void 0;
const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
exports.encrypte = async (password) => {
    const salt = 10;
    const hash = await bcrypt.hash(password, salt);
    return hash;
};
exports.emailtemplate = code => {
    const template = `

    <!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"
    style="width:100%;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
  
  <head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title>Nouveau modC3A8le de courrier C3A9lectronique 2022-02-05</title>
    <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet">
    <style type="text/css">
      #outlook a {
        padding: 0;
      }
  
      .ExternalClass {
        width: 100%;
      }
  
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }
  
      .es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }
  
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
  
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
  
      [data-ogsb] .es-button {
        border-width: 0 !important;
        padding: 15px 25px 15px 25px !important;
      }
  
      [data-ogsb] .es-button.es-button-1 {
        padding: 15px 30px !important;
      }
  
      @media only screen and (max-width:600px) {
  
        p,
        ul li,
        ol li,
        a {
          line-height: 150% !important
        }
  
        h1,
        h2,
        h3,
        h1 a,
        h2 a,
        h3 a {
          line-height: 120% !important
        }
  
        h1 {
          font-size: 30px !important;
          text-align: center
        }
  
        h2 {
          font-size: 26px !important;
          text-align: center
        }
  
        h3 {
          font-size: 20px !important;
          text-align: center
        }
  
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 30px !important
        }
  
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 26px !important
        }
  
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important
        }
  
        .es-menu td a {
          font-size: 16px !important
        }
  
        .es-header-body p,
        .es-header-body ul li,
        .es-header-body ol li,
        .es-header-body a {
          font-size: 16px !important
        }
  
        .es-content-body p,
        .es-content-body ul li,
        .es-content-body ol li,
        .es-content-body a {
          font-size: 16px !important
        }
  
        .es-footer-body p,
        .es-footer-body ul li,
        .es-footer-body ol li,
        .es-footer-body a {
          font-size: 16px !important
        }
  
        .es-infoblock p,
        .es-infoblock ul li,
        .es-infoblock ol li,
        .es-infoblock a {
          font-size: 12px !important
        }
  
        *[class="gmail-fix"] {
          display: none !important
        }
  
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3 {
          text-align: center !important
        }
  
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3 {
          text-align: right !important
        }
  
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3 {
          text-align: left !important
        }
  
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
          display: inline !important
        }
  
        .es-button-border {
          display: block !important
        }
  
        a.es-button,
        button.es-button {
          font-size: 20px !important;
          display: block !important;
          border-width: 15px 25px 15px 25px !important
        }
  
        .es-btn-fw {
          border-width: 10px 0px !important;
          text-align: center !important
        }
  
        .es-adaptive table,
        .es-btn-fw,
        .es-btn-fw-brdr,
        .es-left,
        .es-right {
          width: 100% !important
        }
  
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important
        }
  
        .es-adapt-td {
          display: block !important;
          width: 100% !important
        }
  
        .adapt-img {
          width: 100% !important;
          height: auto !important
        }
  
        .es-m-p0 {
          padding: 0px !important
        }
  
        .es-m-p0r {
          padding-right: 0px !important
        }
  
        .es-m-p0l {
          padding-left: 0px !important
        }
  
        .es-m-p0t {
          padding-top: 0px !important
        }
  
        .es-m-p0b {
          padding-bottom: 0 !important
        }
  
        .es-m-p20b {
          padding-bottom: 20px !important
        }
  
        .es-mobile-hidden,
        .es-hidden {
          display: none !important
        }
  
        tr.es-desk-hidden,
        td.es-desk-hidden,
        table.es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important
        }
  
        tr.es-desk-hidden {
          display: table-row !important
        }
  
        table.es-desk-hidden {
          display: table !important
        }
  
        td.es-desk-menu-hidden {
          display: table-cell !important
        }
  
        .es-menu td {
          width: 1% !important
        }
  
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important
        }
  
        table.es-social {
          display: inline-block !important
        }
  
        table.es-social td {
          display: inline-block !important
        }
      }
    </style>
  </head>
  
  <body
    style="width:100%;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
    <div class="es-wrapper-color" style="background-color:#F4F4F4">
      <!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"> <v:fill type="tile" color="#f4f4f4"></v:fill> </v:background><![endif]-->
      <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"
        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top">
        <tr style="border-collapse:collapse">
          <td valign="top" style="padding:0;Margin:0">
            <table class="es-header" cellspacing="0" cellpadding="0" align="center"
              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:#FFA73B;background-repeat:repeat;background-position:center top">
              <tr style="border-collapse:collapse">
                <td align="center" bgcolor="#0f6cd6" style="padding:0;Margin:0;background-color:#0f6cd6">
                  <table class="es-header-body" cellspacing="0" cellpadding="0" align="center"
                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
                    <tr style="border-collapse:collapse">
                      <td align="left"
                        style="Margin:0;padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:20px">
                        <table width="100%" cellspacing="0" cellpadding="0"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                          <tr style="border-collapse:collapse">
                            <td valign="top" align="center" style="padding:0;Margin:0;width:580px">
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table class="es-content" cellspacing="0" cellpadding="0" align="center"
              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
              <tr style="border-collapse:collapse">
                <td style="padding:0;Margin:0;background-color:#0f6cd6" bgcolor="#0f6cd6" align="center">
                  <table class="es-content-body"
                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"
                    cellspacing="0" cellpadding="0" align="center">
                    <tr style="border-collapse:collapse">
                      <td align="left" style="padding:0;Margin:0">
                        <table width="100%" cellspacing="0" cellpadding="0"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                          <tr style="border-collapse:collapse">
                            <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
                              <table
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#ffffff;border-radius:4px"
                                width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation">
                                <tr style="border-collapse:collapse">
                                  <td align="center"
                                    style="Margin:0;padding-bottom:5px;padding-left:30px;padding-right:30px;padding-top:35px">
                                    <h1
                                      style="Margin:0;line-height:58px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:48px;font-style:normal;font-weight:normal;color:#111111">
                                      Welcome!</h1>
                                  </td>
                                </tr>
                                <tr style="border-collapse:collapse">
                                  <td bgcolor="#ffffff" align="center"
                                    style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px;font-size:0">
                                    <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0"
                                      role="presentation"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                      <tr style="border-collapse:collapse">
                                        <td
                                          style="padding:0;Margin:0;border-bottom:1px solid #ffffff;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px">
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table class="es-content" cellspacing="0" cellpadding="0" align="center"
              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
              <tr style="border-collapse:collapse">
                <td align="center" style="padding:0;Margin:0">
                  <table class="es-content-body"
                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"
                    cellspacing="0" cellpadding="0" align="center">
                    <tr style="border-collapse:collapse">
                      <td align="left" style="padding:0;Margin:0">
                        <table width="100%" cellspacing="0" cellpadding="0"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                          <tr style="border-collapse:collapse">
                            <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
                              <table
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:4px;background-color:#ffffff"
                                width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation">
                                <tr style="border-collapse:collapse">
                                  <td class="es-m-txt-l" bgcolor="#ffffff" align="left"
                                    style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:30px;padding-right:30px">
                                    <p
                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666;font-size:18px">
                                      We're excited to have you get started. First, you need to confirm your account. Just
                                      press the button below.</p>
                                  </td>
                                </tr>
                                <tr style="border-collapse:collapse">
                                  <td align="center"
                                    style="Margin:0;padding-left:10px;padding-right:10px;padding-top:35px;padding-bottom:35px"> ${code} </td>
                                </tr>
                                <tr style="border-collapse:collapse">
                                  <td class="es-m-txt-l" align="left"
                                    style="Margin:0;padding-top:20px;padding-left:30px;padding-right:30px;padding-bottom:40px">
                                    <p
                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666;font-size:18px">
                                      Cheers,</p>
                                    <p
                                      style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666;font-size:18px">
                                      Tynass IT&nbsp;Team</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table class="es-content" cellspacing="0" cellpadding="0" align="center"
              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
              <tr style="border-collapse:collapse">
                <td align="center" style="padding:0;Margin:0">
                  <table class="es-content-body"
                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"
                    cellspacing="0" cellpadding="0" align="center">
                    <tr style="border-collapse:collapse">
                      <td align="left" style="padding:0;Margin:0">
                        <table width="100%" cellspacing="0" cellpadding="0"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                          <tr style="border-collapse:collapse">
                            <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
                              <table width="100%" cellspacing="0" cellpadding="0" role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                <tr style="border-collapse:collapse">
                                  <td align="center"
                                    style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:20px;padding-right:20px;font-size:0">
                                    <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0"
                                      role="presentation"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                      <tr style="border-collapse:collapse">
                                        <td
                                          style="padding:0;Margin:0;border-bottom:1px solid #f4f4f4;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px">
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
  
  </html>`;
    return template;
};


/***/ }),

/***/ "./src/utils/file.interceptor.ts":
/*!***************************************!*\
  !*** ./src/utils/file.interceptor.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GraphqlFiles = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const file_schema_1 = __webpack_require__(/*! ./file.schema */ "./src/utils/file.schema.ts");
function GraphqlFiles(inputFields, subfolder = '') {
    class MixinInterceptor {
        async intercept(context, next) {
            {
                const ctx = graphql_1.GqlExecutionContext.create(context);
                const input = ctx.getArgs();
                await Promise.all(inputFields.map(async (field) => {
                    const media = eval('input' + '.' + field);
                    if (media) {
                        const file = await file_schema_1.uploadContent(media, subfolder);
                        eval('input' + '.' + field + ' =  file');
                    }
                    else
                        console.log("file doesn't exist");
                }));
                return next.handle();
            }
        }
    }
    const Interceptor = common_1.mixin(MixinInterceptor);
    return Interceptor;
}
exports.GraphqlFiles = GraphqlFiles;


/***/ }),

/***/ "./src/utils/file.schema.ts":
/*!**********************************!*\
  !*** ./src/utils/file.schema.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadMedia = exports.File = exports.uploadContent = void 0;
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
const storage_1 = __webpack_require__(/*! ./storage */ "./src/utils/storage.ts");
exports.uploadContent = async (uploadMedia, subfolder) => {
    if (uploadMedia.files || uploadMedia.urls) {
        const images = [];
        if (uploadMedia.files)
            for (let file of uploadMedia.files) {
                images.push(await storage_1.save(file, subfolder)
                    .then(f => (file = f))
                    .catch(e => console.log(e)));
            }
        if (uploadMedia.urls)
            for (const url of uploadMedia.urls) {
                images.push({ name: '', type: 'External', url: url });
            }
        uploadMedia = images;
    }
    else if (uploadMedia.file) {
        uploadMedia = await storage_1.save(uploadMedia.file, subfolder).then(f => f);
    }
    else if (uploadMedia.url) {
        uploadMedia = { name: '', type: 'External', url: uploadMedia.url };
    }
    return uploadMedia;
};
let File = class File {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], File.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], File.prototype, "url", void 0);
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", Object)
], File.prototype, "type", void 0);
File = __decorate([
    graphql_1.ObjectType()
], File);
exports.File = File;
let UploadMedia = class UploadMedia {
};
__decorate([
    graphql_1.Field(() => [apollo_server_express_1.GraphQLUpload], { nullable: true }),
    __metadata("design:type", Object)
], UploadMedia.prototype, "files", void 0);
__decorate([
    graphql_1.Field(() => apollo_server_express_1.GraphQLUpload, { nullable: true }),
    __metadata("design:type", Object)
], UploadMedia.prototype, "file", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", Object)
], UploadMedia.prototype, "url", void 0);
__decorate([
    graphql_1.Field(() => [String], { nullable: true }),
    __metadata("design:type", Object)
], UploadMedia.prototype, "urls", void 0);
UploadMedia = __decorate([
    graphql_1.InputType()
], UploadMedia);
exports.UploadMedia = UploadMedia;


/***/ }),

/***/ "./src/utils/guards/current-user.decorator.ts":
/*!****************************************************!*\
  !*** ./src/utils/guards/current-user.decorator.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CurrentUser = exports.getUser = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
exports.getUser = (data, context) => {
    const ctx = graphql_1.GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
};
exports.CurrentUser = common_1.createParamDecorator(exports.getUser);


/***/ }),

/***/ "./src/utils/guards/jwt-auth.guard.ts":
/*!********************************************!*\
  !*** ./src/utils/guards/jwt-auth.guard.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GqlAuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const public_decorator_1 = __webpack_require__(/*! ./public.decorator */ "./src/utils/guards/public.decorator.ts");
let GqlAuthGuard = class GqlAuthGuard extends passport_1.AuthGuard('jwt') {
    constructor(reflector) {
        super();
        this.reflector = reflector;
    }
    canActivate(context) {
        const isPublic = this.reflector.getAllAndOverride(public_decorator_1.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) {
            return true;
        }
        return super.canActivate(context);
    }
    getRequest(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context);
        const { req, connection } = ctx.getContext();
        const subscriptions = connection && connection.context && connection.context.headers
            ? connection.context
            : req;
        return subscriptions;
    }
    handleRequest(err, user, info) {
        if (err || !user || user.banned) {
            throw err || new common_1.UnauthorizedException();
        }
        return user;
    }
};
GqlAuthGuard = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], GqlAuthGuard);
exports.GqlAuthGuard = GqlAuthGuard;


/***/ }),

/***/ "./src/utils/guards/public.decorator.ts":
/*!**********************************************!*\
  !*** ./src/utils/guards/public.decorator.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Public = exports.IS_PUBLIC_KEY = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.IS_PUBLIC_KEY = 'isPublic';
exports.Public = () => common_1.SetMetadata(exports.IS_PUBLIC_KEY, true);


/***/ }),

/***/ "./src/utils/requestLogger.ts":
/*!************************************!*\
  !*** ./src/utils/requestLogger.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useRequestLogging = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const morgan = __webpack_require__(/*! morgan */ "morgan");
function useRequestLogging(app) {
    const logger = new common_1.Logger('Request');
    app.use(morgan(function (tokens, req, res) {
        try {
            const { query, variables, operationName } = req.body;
            return [
                req.user ? req.user.email : 'Anonymous',
                `${operationName}`,
                '\x1b[37m' + tokens.status(req, res),
                tokens.res(req, res, 'content-length'),
                '-',
                '\x1b[33m' + Math.round(tokens['response-time'](req, res)) + 'ms',
            ].join(' ');
        }
        catch (e) {
        }
    }, {
        stream: {
            write: message => logger.log(message.replace('\n', '')),
        },
    }));
}
exports.useRequestLogging = useRequestLogging;


/***/ }),

/***/ "./src/utils/storage.ts":
/*!******************************!*\
  !*** ./src/utils/storage.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.save = void 0;
const fs_1 = __webpack_require__(/*! fs */ "fs");
exports.save = async (file, subfolder = '', namefile = '') => {
    const { createReadStream, filename } = await file;
    const dest = 'uploads' + subfolder;
    const name = `${Date.now()}-${filename}`;
    if (!fs_1.existsSync('./' + dest)) {
        fs_1.mkdir('./' + dest, { recursive: true }, (err) => {
            if (err)
                throw err;
        });
    }
    const newFile = {
        type: 'Internal',
        name: namefile,
        url: `/${name}`,
    };
    try {
        return new Promise(async (resolve, reject) => await createReadStream()
            .pipe(fs_1.createWriteStream(`./${dest}/${name}`).on('error', err => {
            console.log(err);
            reject(false);
        }))
            .on('finish', () => resolve(newFile))
            .on('error', err => {
            console.log(err);
            reject(false);
        }));
    }
    catch (e) {
        console.log(e);
    }
};


/***/ }),

/***/ "@arendajaelu/nestjs-passport-apple":
/*!*****************************************************!*\
  !*** external "@arendajaelu/nestjs-passport-apple" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("@arendajaelu/nestjs-passport-apple");

/***/ }),

/***/ "@nestjs/apollo":
/*!*********************************!*\
  !*** external "@nestjs/apollo" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/apollo");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/graphql":
/*!**********************************!*\
  !*** external "@nestjs/graphql" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/graphql");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/schedule":
/*!***********************************!*\
  !*** external "@nestjs/schedule" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("compression");

/***/ }),

/***/ "cron":
/*!***********************!*\
  !*** external "cron" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cron");

/***/ }),

/***/ "fcm-node":
/*!***************************!*\
  !*** external "fcm-node" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("fcm-node");

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),

/***/ "js-yaml":
/*!**************************!*\
  !*** external "js-yaml" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("js-yaml");

/***/ }),

/***/ "md5":
/*!**********************!*\
  !*** external "md5" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("md5");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "qrcode":
/*!*************************!*\
  !*** external "qrcode" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("qrcode");

/***/ }),

/***/ "voucher-code-generator":
/*!*****************************************!*\
  !*** external "voucher-code-generator" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("voucher-code-generator");

/***/ }),

/***/ "zip-a-folder":
/*!*******************************!*\
  !*** external "zip-a-folder" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("zip-a-folder");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "./service-account.json":
/*!******************************!*\
  !*** ./service-account.json ***!
  \******************************/
/***/ ((module) => {

module.exports = JSON.parse('{"type":"service_account","project_id":"tynassfinalapp-605b3","private_key_id":"7214b0f69b54e2586fbc8a2d7b2197bff391a631","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDCRKvuryHz3alY\\nRZ7gmOL2uTNFqN7Wa75FnWcdVsMfh3lmC2Adb3/DbZRNXlrpACnniKIqR2/0jhIa\\n2OiCoTLhGzMsVlkmYAVRwSg1h59CYiFKjziBI4BwpRs1pesz4354ga3i8Cmm4zN/\\nIjc2uJHiSl9MThMrhTK+/oA9aV5Zf1e/SOhWRjvkq3AM2rVs7VQc3opZubQZQW3B\\ngOKVNDyUe0DOCDR9VFK8VHuGv4OqXg8uiY5gPhzHC7KzYu/TksuorgDxs4/SE6h6\\nH1sFfcQ5oQI2W2cptfhdwz1l8U5K6OEnW0zBspo88MgylUISrvPjw1txSPLhUy9k\\nRcl94vFZAgMBAAECggEABspte6YP0OVZUXJ6kaWKfn8eD5Pt+S8SOz77ryL8pl4f\\nFF32rcS7YbaTgepX0W/95v/n0kRFwbXTJHDbXNCbdZK0tNquWljuKqvOtuNPIfwJ\\n56AuxJXb/CQLWdJbUMiln7sBu+5y+EhWIR4uMamdQNyibOmIQkPRUKuXCj6EC6sI\\nK58yh2e3YCPTbDUYxWu0QcjerS3jfWKKHn/nVrt7JKFlIxEFpB8fI5r/CAKJhjtZ\\nS95LB9oEi0noyyfzALhK2Eo0ucx4IB0F2aKcOkvfbwp5ezKoxBu7QDa8nAMqcEJi\\nEp4IiGC6ltU76t+rNgTpSnUoIN84fuzGvQOfBXGh8QKBgQDiQIm8tg1hGw1btBot\\nRaQCAkSEswENrWtNGuXTnu7nSDA2g/VRFXVPeq9fqRFVAXFKo553JrQvXfDQg2Dq\\n4ZY1672zt0GTsXfKyrsybMJO1jKXo+qV9tKk4NQMIIZS7/XqkHpfQ1ePD/CNno7D\\nRLXvXXph3AVehP1mImUyzvTOEQKBgQDbz5VDG/9F8RV1/xmuU8rtnbWdN7FTYEf/\\nfDyfK9Fv010nxGC5rgwaCqLRE/7//TX1lu9nf9KaXJvC56NZ7KjdW++dj3alFKY0\\n6hroyP77+/MAoUJulFiikdGOou8WS3pdRYAfm751/FcutPs2m8jKtbMq43ZbD0vr\\njzHIh4zGyQKBgQDBgruLyRXWaSHavkbpU7f7896QtN2AykONFiVeA4CIFkkOR3zp\\nVfYY/XDD28G0N+CjGyBs/pB8NtfCL6wUGM+13KRK8sFGxjIUI6NKdJUYgsGQyyTY\\nENyHIriairL4er6VWe8gTWO1O8feCLBIORt22DfVPS7mcc6drWtqsnHVUQKBgGko\\naRce+MQELykxLp8ItUdyMKWTNEFYCXm/fN0FQIAIFUPmHgQWsPFwby4pK9BZ2guw\\n9r2EGEQC0/2thaeKocqspfix3qfhNhaQfOkq51mz0jBV9YsjazfzHNbpOgpnd5XR\\nnxcAEmEtpKPSr3ATnT7lKF73TPMJYV/DNKTjvESJAoGBAJs6nTr1s0Q57pns93I1\\n3xMfcdXE8mUb/iDFGssJgyI/4zs9N1BPJEe+6dTw807koKLBi50HKN51bD36095A\\nqOug+eh/xlJ2zCcheHn4J2JoMdlVfGqjNSybkCmTW2hMUb94YO0hWQVNzG/3hzpf\\n1XDX1NdXGkoP/q0wfhJMF0H3\\n-----END PRIVATE KEY-----\\n","client_email":"firebase-adminsdk-rxs9q@tynassfinalapp-605b3.iam.gserviceaccount.com","client_id":"109128749079842824398","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-rxs9q%40tynassfinalapp-605b3.iam.gserviceaccount.com","universe_domain":"googleapis.com"}');

/***/ }),

/***/ "./tynass-demo-app-4005e90495b2.json":
/*!*******************************************!*\
  !*** ./tynass-demo-app-4005e90495b2.json ***!
  \*******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"type":"service_account","project_id":"tynass-demo-app","private_key_id":"4005e90495b2a38d7e56f91f0a210b384b75cbcb","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDadBda2b2JevXR\\ndnrDlZdLEKIDPTzZnx5I+3MjDt6qQKSgfjSEzk/d0ahJy/b+3AeqUfTLGqbyHVoJ\\nW4c/iDDBcg2JG/V43QKixLdhc5l4CV9VvvXiypw1m5og+ldmQNi1fEKtt9LTg8jP\\nUhrCkYpdifowUBKcYuYjhfjf4mkvmaOsGhSvSp9GDX/FuRx5VqD1H5ybPiuMADZj\\njCtbg4/G3nUgTinTatBH3yISeLP3cB6tCRl2sih3uEgvjYHq7LwORbWZlTMOgFwu\\nlXzsYPNUmfa8E/3JK0Z5NPlR0pB12lEv+ZOzna1aH6gSQs8/8P/qGZeIaKVkxhVA\\nZo6YUJylAgMBAAECggEAG2+vKzrjoiuuSfNucbgM+2GIZ42+YbqpTBNAn6uTbaCW\\nzI1tPSzIPRzC3Rnf2Jx73flTHFspkoj7MOes8d7B+NnBN3Iqf1aKqTS5r2ScZsYO\\nki9cpHI78kOrtO6cIXyNeyWzHixTLzuC8f7m2375+MuGf6De5YNKUjXWTxAZk9+l\\nlLODIIc/TGiZ14COmCNW4aE9H84jXktVosgJGVfl+VGfLRUPoC1PqanI9JBl8TYA\\nIGS/m7GaM41BASYM3XLB0zkFnAaxaZlzDp7BsdSY+5gtQ3EBnCV85tCNe3yg8QtG\\nPQpLnjh0TT1KRT2Qk9Z7MQo/lHE+558kwFq9DYXfgQKBgQDwfiR8b3Uu0bCh1E2f\\nNsTUlGj65DG/5u/THt+HhuRwY9la6drQPipLGblC41MolGoIrX0F5Lq2tClZwguw\\npOdEBYakdS+Bhs9hffgrOpCck+faX/pcWxU35c12sWSmQvsEOD45Z3meXbdWNTaZ\\ncio8zvcH1Sf2m8rhcKyeuObLBQKBgQDoiiSAdII/Oxtzqh8xeV+Jen5AZU3yZWBi\\nVOOB6uv3MkPB5HVhccRF431HtPefTeBRVBYLaGByoUUT/IMXnE9T1QdSbHN1PtLk\\nG5Rx/cFyZXgETHqC8gR7nBlHmA86LAXro9VVXgWv0tY/zs7iALA+UM2iPx+cUI2W\\na5AXnON9IQKBgQDQtAeh3XAKY3sv1XhPVU5XVTwNjv8FlLpHsyE1EgEo793uocd8\\ntJYrenVl8LV4H+QtB7HZ7XeDmrHP7TAL6e+w/kKsce36MC3EY3d8vGRHHaw1vNke\\nUQUG72zxNl0sVDBWpyCI3J2Uq6uxKpjpbUPuZYXHzFnUD7tvDUMgs0HGqQKBgGaY\\nxIAUZ37kYjlG/tpCNb+fVuKsj5Z52euojnQ8pP18pN6AILXsju9S7mxb0MDtiCH5\\n2nwQAjWxJ5wo1eHt6iYPoFpiVRKOtFdGP9mHXvlNAYXMBGWPyCCNf63Rzi4ZTEdq\\nEm7Gu/WWLUcbxLV8HkZwOjnyZcz+0WljbcCtTMVhAoGBAKY7wGSK/V6dtA3exB17\\nYnXCDqPUHmzN64i4uy1he1u0maUXCELSC/9ZoJgLc1ft8sQlsigli4HN6rwujJyK\\nAltO4dAHZffDNi2kWE53UqBGTBX9lFwZXarGAvJA0NSasJn/iU9f4cV2CxHMnYlP\\nJZvtVjWV+bG1Fwcv19uUmMWZ\\n-----END PRIVATE KEY-----\\n","client_email":"firebase-adminsdk-wn033@tynass-demo-app.iam.gserviceaccount.com","client_id":"113459226752233041026","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-wn033%40tynass-demo-app.iam.gserviceaccount.com"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const compression = __webpack_require__(/*! compression */ "compression");
const path_1 = __webpack_require__(/*! path */ "path");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
const requestLogger_1 = __webpack_require__(/*! ./utils/requestLogger */ "./src/utils/requestLogger.ts");
const admin = __webpack_require__(/*! firebase-admin */ "firebase-admin");
const serviceAccount = __webpack_require__(/*! service-account.json */ "./service-account.json");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    app.useStaticAssets(path_1.join(__dirname, "..", "uploads"));
    app.setBaseViewsDir(path_1.join(__dirname, "..", "views"));
    requestLogger_1.useRequestLogging(app);
    app.use(compression());
    app.enableCors();
    app.setViewEngine("hbs");
    if (configService.get("server.env") === "development") {
        app.useStaticAssets(path_1.join(__dirname, "..", "public"));
    }
    const port = configService.get("server.port");
    await app.listen(port);
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        storageBucket: "tynass-test.appspot.com",
    });
}
bootstrap();

})();

/******/ })()
;