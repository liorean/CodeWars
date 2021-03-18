//Let's think about this in terms of congruence classes:
// [0]₅:  n ≡ 0 mod 5   -> [0]₅:  2n+0  `${n.toString(2)}0`
// [1]₅:  n ≡ 1 mod 5   -> [0]₅:  4n+1  `${n.toString(2)}01`
// [2]₅:  n ≡ 2 mod 5   -> [0]₅:  2n+1  `${n.toString(2)}1`
// [3]₅:  n ≡ 3 mod 5   -> [0]₅:  4n+3  `${n.toString(2)}11`
// [4]₅:  n ≡ 4 mod 5   -> [0]₅:  8n+3  `${n.toString(2)}011`
const
  nextMultipleOfFive=
    n=>n?+('0b'+n.toString(2)+['0','01','1','11','011'][n%5]):5
