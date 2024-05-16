import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { REcipeModuleBase } from "./base/rEcipe.module.base";
import { REcipeService } from "./rEcipe.service";
import { REcipeController } from "./rEcipe.controller";
import { REcipeResolver } from "./rEcipe.resolver";

@Module({
  imports: [REcipeModuleBase, forwardRef(() => AuthModule)],
  controllers: [REcipeController],
  providers: [REcipeService, REcipeResolver],
  exports: [REcipeService],
})
export class REcipeModule {}
