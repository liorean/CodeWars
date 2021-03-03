//Lots of options here:
//x&y^x&z^y&z = x&y|x&z|y&z = (x|y)^(x|z)^(y|z) = (x|y)&(x|z)&(y|z)
const
  iqTest =
    ( s
     ,a = [,...s.split` `].map(n=>1&n)
     ,b = (([,x,y,z])=>x&y^x&z^y&z)(a)) =>
      a.findIndex((n=b)=>b^n)
     
