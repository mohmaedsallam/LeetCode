/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    points.sort((a,b) => (a[0]*a[0] + a[1]*a[1]) - (b[0]*b[0] + b[1]*b[1]))

    return points.slice(0,K)
};

 