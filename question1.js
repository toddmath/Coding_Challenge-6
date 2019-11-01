/**
 * Question #1:
 * Clean the room function: given an input of `[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]`,
 * make a function that organizes these into individual array that is ordered.
 * For example `answer(ArrayFromAbove)` should return:
 * `[[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]`.
 * Bonus: Make it so it organizes strings differently from number types.
 * i.e. `[1, "2", "3", 2]` should return `[[1,2], ["2", "3"]]`
 */

const cleanTheRoom = data => {
  const kind = (...inputs) => inputs.constructor.name;
  if (kind(data) === 'Array') {
    const mapped = data.reduce((acc, cur, i) => {
      if (!acc[cur]) acc[cur] = [cur];
      else {
        let temp = acc[cur];
        acc[cur] = [...temp, cur];
      }
      return acc;
    }, []);
    // console.log(mapped);

    return mapped.reduce((acc, val) => {
      if (Array.isArray(val)) {
        if (val.length === 1) acc.push(...val);
        else acc.push(val);
      }
      return acc;
    }, []);
  }
};

