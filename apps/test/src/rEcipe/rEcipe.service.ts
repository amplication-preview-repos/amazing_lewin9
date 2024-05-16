import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { REcipeServiceBase } from "./base/rEcipe.service.base";

@Injectable()
export class REcipeService extends REcipeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
