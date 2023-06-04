Function.prototype.curry = function (...args) {
  const fn = this;
  if (args.length >= fn.length) {
    return fn.apply(this, args);
  } else {
    return function (...nextArgs) {
      return fn.curry(...args, ...nextArgs);
    };
  }
};
