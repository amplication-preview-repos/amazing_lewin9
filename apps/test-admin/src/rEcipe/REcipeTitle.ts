import { REcipe as TREcipe } from "../api/rEcipe/REcipe";

export const RECIPE_TITLE_FIELD = "id";

export const REcipeTitle = (record: TREcipe): string => {
  return record.id?.toString() || String(record.id);
};
