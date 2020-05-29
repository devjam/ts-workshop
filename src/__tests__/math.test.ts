import assert from "assert";
import { sum } from "../sum";

it("sum", () => {
  assert(sum(1, 2) === 3);

  assert.throws(() => sum(1, NaN));
});
