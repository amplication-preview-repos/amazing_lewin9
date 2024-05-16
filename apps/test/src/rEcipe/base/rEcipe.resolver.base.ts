/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { REcipe } from "./REcipe";
import { REcipeCountArgs } from "./REcipeCountArgs";
import { REcipeFindManyArgs } from "./REcipeFindManyArgs";
import { REcipeFindUniqueArgs } from "./REcipeFindUniqueArgs";
import { DeleteREcipeArgs } from "./DeleteREcipeArgs";
import { REcipeService } from "../rEcipe.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => REcipe)
export class REcipeResolverBase {
  constructor(
    protected readonly service: REcipeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "REcipe",
    action: "read",
    possession: "any",
  })
  async _rEcipesMeta(
    @graphql.Args() args: REcipeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [REcipe])
  @nestAccessControl.UseRoles({
    resource: "REcipe",
    action: "read",
    possession: "any",
  })
  async rEcipes(@graphql.Args() args: REcipeFindManyArgs): Promise<REcipe[]> {
    return this.service.rEcipes(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => REcipe, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "REcipe",
    action: "read",
    possession: "own",
  })
  async rEcipe(
    @graphql.Args() args: REcipeFindUniqueArgs
  ): Promise<REcipe | null> {
    const result = await this.service.rEcipe(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => REcipe)
  @nestAccessControl.UseRoles({
    resource: "REcipe",
    action: "delete",
    possession: "any",
  })
  async deleteREcipe(
    @graphql.Args() args: DeleteREcipeArgs
  ): Promise<REcipe | null> {
    try {
      return await this.service.deleteREcipe(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
