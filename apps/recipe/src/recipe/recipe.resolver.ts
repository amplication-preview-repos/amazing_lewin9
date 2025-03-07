import * as graphql from "@nestjs/graphql";
import { RecipeService } from "./recipe.service";

export class RecipeResolver {
  constructor(protected readonly service: RecipeService) {}
}
