
export var inheritance = {
  /**
   * Wraps a normal js object into a property object so it can be used to
   * extend in an Object.create() call.
   * @param {Object} props A normal JS object.
   *
   * @example
   * Object.create(Base, wrapProps({
   *   thing: 'b'
   * });
   */
  wrapProps(props) {
    var toReturn = {};

    for (let prop in props) {
      if (props.hasOwnProperty(prop)) {
        let value = props[prop];
        toReturn[prop] = {
          enumerable: true,
          writable: true,
          value: value
        }
      }
    }
    return toReturn;
  }
};
