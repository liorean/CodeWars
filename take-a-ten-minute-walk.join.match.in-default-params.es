//  Just playing around with default parameters
const isValidWalk =
  ( a
   ,d = (console.log(a),a.join``)
   ,n = ( d.match( /n/g ) || [] ).length
   ,s = ( d.match( /s/g ) || [] ).length
   ,e = ( d.match( /e/g ) || [] ).length
   ,w = ( d.match( /w/g ) || [] ).length
   ,r = ( n + s + e + w ) * !(n - s) * !(e - w) ) =>
    10 == r
