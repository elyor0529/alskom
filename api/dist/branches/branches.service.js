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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const branch_entity_1 = require("./branch.entity");
const typeorm_2 = require("typeorm");
const rxjs_1 = require("rxjs");
let BranchesService = class BranchesService {
    constructor(branchRepository) {
        this.branchRepository = branchRepository;
    }
    findAll() {
        return rxjs_1.from(this.branchRepository.find());
    }
    getBranch(id) {
        return this.branchRepository.findOne(id);
    }
};
BranchesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(branch_entity_1.Branch)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BranchesService);
exports.BranchesService = BranchesService;
//# sourceMappingURL=branches.service.js.map