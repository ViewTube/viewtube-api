export function fields(context) {
  if (context.params.query.fields) {
    const fieldsArray = context.params.query.fields.split(/,/g)
    context.result = filterObjectByKey(context.result, key => fieldsArray.includes(key))
  }

  return context
}

function filterObjectByKey(obj, filterFn) {
  let result = {}
  for (let key in obj) {
    if (filterFn(key, obj[key])) result[key] = obj[key]
  }
  return result
}