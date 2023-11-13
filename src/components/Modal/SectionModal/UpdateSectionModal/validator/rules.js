import { REQUIRED } from "../../../../../utils/messages";

export const validationRules = [
  {
    field: "title",
    regex: /^.{1,}$/,
    errorMessage: `Title ${REQUIRED}`,
  },
  {
    field: "content",
    regex: /^.{1,}$/,
    errorMessage: `content ${REQUIRED}`,
  },
];
