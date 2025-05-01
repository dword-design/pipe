export const _ = Symbol('PipeToken');

export const $ = _;

export default (value, ...args) =>
  args.reduce((agg, funcArray) => {
    if (Array.isArray(funcArray)) {
      const [func, ...params] = funcArray;
      const mappedParams = params.map(param => (param === $ ? agg : param));
      return func(...mappedParams);
    }

    return funcArray(agg);
  }, value);
