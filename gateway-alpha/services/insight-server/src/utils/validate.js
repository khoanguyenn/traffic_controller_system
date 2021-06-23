const _ = require('lodash');
const Ajv = require('ajv');

const ajv = new Ajv.default({
  code: { source: true },
  coerceTypes: true,
  useDefaults: true,
  allErrors: true,
});

require('ajv-formats')(ajv);
require('ajv-errors')(ajv);

function validate(schema, value) {
  const compiledSchema = ajv.compile(schema);
  const data = _.cloneDeep(value);
  const valid = compiledSchema(data);

  return { valid, data, error: compiledSchema.errors };
}

module.exports = validate;
