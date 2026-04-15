import { type SchemaTypeDefinition } from "sanity";
import { faq } from "./faq";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ faq, blockContentType, categoryType, postType, authorType],
};

