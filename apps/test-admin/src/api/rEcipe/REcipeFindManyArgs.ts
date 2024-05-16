import { REcipeWhereInput } from "./REcipeWhereInput";
import { REcipeOrderByInput } from "./REcipeOrderByInput";

export type REcipeFindManyArgs = {
  where?: REcipeWhereInput;
  orderBy?: Array<REcipeOrderByInput>;
  skip?: number;
  take?: number;
};
