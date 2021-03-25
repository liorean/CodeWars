const
  olympicRing =
    a =>{
      switch((a.replace(/B/g,'bb').match(/[abdegopqADOPQR]/g)||[]).length>>1){
        case 0: case 1: return 'Not even a medal!'
        case 2: return 'Bronze!'
        case 3: return 'Silver!'}
      return 'Gold!'}
