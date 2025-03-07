import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { RecipeService } from "./recipe.service";

@swagger.ApiTags("recipes")
@common.Controller("recipes")
export class RecipeController {
  constructor(protected readonly service: RecipeService) {}
}
