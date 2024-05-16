import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { REcipeService } from "./rEcipe.service";
import { REcipeControllerBase } from "./base/rEcipe.controller.base";

@swagger.ApiTags("rEcipes")
@common.Controller("rEcipes")
export class REcipeController extends REcipeControllerBase {
  constructor(
    protected readonly service: REcipeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
