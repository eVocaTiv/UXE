// Edge case - if the value is not present
// -> Happens when the array in our search range is [] (empty)


function bS(a, x) {
    const n = a.length;
    let lo = 0, hi = n-1;

    while(lo <= hi) { // search range is not empty
        let mid = Math.floor(lo + (hi-lo)/2);
        if(a[mid] === x) return mid;
        if(a[mid] > x) hi = mid-1;
        else lo = mid+1;
    }
    return -1;
}


// Find first value >=x

function findNext(a, x) {
    const n = a.length;
    let lo = 0, hi = n-1;
    let ans = -Infinity;
    while(lo <= hi) { // search range is not empty
        let mid = Math.floor(lo + (hi-lo)/2);
        if(a[mid] === x) return x;
        if(a[mid] > x) {
            ans = Math.min(ans, x);
            hi = mid-1;
        }
        else lo = mid+1;
    }
    return ans;
}

// Find smallest element in a rotated array.

var findMin = function(a) {
    const n = a.length;
    let lo = 0, hi = n-1;
    let res = Infinity;
           
    function bS(a, lo, hi) {
        if(lo > hi) return;
        let mid = Math.floor(lo + (hi-lo)/2);
        res = Math.min(res, a[mid]);
        if(a[mid]>a[hi]) bS(a, mid+1, hi);
        bS(a, lo, mid-1);
    }
    bS(a, 0, n-1);
    return res;
}


// Find sqrt(x)

function mySqrt(x, delta = 0.01) {
    if(x < 0 || typeof x !== 'number') return NaN;
    if(!isFinite(x) || x === 0) return x;
  
    let lo = 0, hi = x;
    while(hi >= lo) {
        mid = Math.floor((lo + (hi-lo)/2));
        if(x === mid*mid) return mid;
        if(mid*mid > x) hi = mid-1;
        else lo = mid+1;
    }
    return hi;
  }