import { Module } from "@nestjs/common";
import { RecipeService } from "./recipe.service";
import { RecipeController } from "./recipe.controller";
import { RecipeResolver } from "./recipe.resolver";

@Module({
  controllers: [RecipeController],
  providers: [RecipeService, RecipeResolver],
  exports: [RecipeService],
})
export class RecipeModule {}
