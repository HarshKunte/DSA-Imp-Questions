

var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

  const mergedIntervals = [];
  let currentInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];

    if (interval[0] <= currentInterval[1]) {
      currentInterval[1] = Math.max(currentInterval[1], interval[1]);
    } else {

      mergedIntervals.push(currentInterval);
      currentInterval = interval;
    }
  }

  mergedIntervals.push(currentInterval);

  return mergedIntervals;
};