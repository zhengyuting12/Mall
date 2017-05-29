/**
 * Created by 12point on 15/05/2017.
 */

import Actions from "../config/actions";

function add(count) {
  return {
    type: Actions.ADD,
    count: count
  };
}

function reduce(count) {
  return {
    type: Actions.REDUCE,
    count
  };
}

export const count = {
  add,
  reduce
};
