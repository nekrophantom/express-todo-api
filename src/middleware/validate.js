import { ApiError } from "../utils/apiError.js";

export const validate = (schema, source = "body") => (req, res, next) => {
    const result = schema.safeParse(req[source]);
    if (!result.success) {
      const message = result.error.errors
        .map((err) => `${err.path.join('.')}: ${err.message}`)
        .join(', ');
      return next(new ApiError(400, message));
    }

    req[source] = result.data; // sanitized input
    next();
};