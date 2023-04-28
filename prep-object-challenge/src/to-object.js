/* exported toObject */
function toObject(keyValuePair) {
  const prop = keyValuePair[0];
  const value = keyValuePair[1];
  const Object = {};
  Object[prop] = value;
  return Object;
}
