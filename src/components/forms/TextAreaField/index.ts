import { TextAreaField } from "./TextAreaField";
import { withTextAreaField } from "./withTextAreaField";

const ConnectedTextAreaField = withTextAreaField(TextAreaField);

export { ConnectedTextAreaField as TextAreaField };
