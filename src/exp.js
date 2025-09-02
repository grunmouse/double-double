import { 
	ddSin,
	ddMultDd,
	ddAddDd,
	ddDivDd,
	ddDiffDd,
	
	ddDivBy2,
	
	ddNegativeOf,
	
	strToDd,
	
	PIDd,
	eDd,
	ln2Dd
} from 'double-double';

const Log2 = ln2Dd;
/*


*/

let padeCoef = [
  1,
  272,
  36720,
  3255840,
  211629600,
  10666131840,
  430200650880,
  14135164243200,
  381649434566400,
  848109854592e4,
  154355993535744030,
  2273242813890047700,
  2652116616205056e4,
  23665040575368187e4,
  15213240369879552e5,
  6288139352883548e6,
  12576278705767096e6
];

function ddExp(x) {
    if (x[0] == 0 && x[1] == 0) return [0, 1];
    if (x[0] == 0 && x[1] == 1) return eDd;
    if (x[1] < 0) {
        let inv = ddExp(ddNegativeOf(x));
        return ddDivDd([0, 1], inv);
    }

    let n = Math.floor(ddDivDd(x, Log2)[1] + 0.5);
    let y = ddDiffDd(x, ddMultDd(Log2, [0, n]));

    let U = [0, 1], V = [0, 1];
    // let padeCoef = [
        // 1,
        // 272,
        // 36720,
        // 3255840,
        // 211629600,
        // 10666131840,
        // 430200650880,
        // 14135164243200,
        // 381649434566400,
        // 848109854592e4,
        // 154355993535744030,
        // 2273242813890047700,
        // 2652116616205056e4,
        // 23665040575368187e4,
        // 15213240369879552e5,
        // 6288139352883548e6,
        // 12576278705767096e6
    // ];

    // Циклы соответствуют оригиналу: накапливают U и V с побочным эффектом через присваивание
    for (let i = 0, cLen = padeCoef.length; i < cLen; i++) {
        U = ddAddDd(ddMultDd(U, y), [0, padeCoef[i]]);
    }

    for (let i = 0, cLen = padeCoef.length; i < cLen; i++) {
        V = ddAddDd(ddMultDd(V, y), [0, padeCoef[i] * (i % 2 ? -1 : 1)]);
    }

    // Умножение на 2^n: используем ddMultDd с [0, Math.pow(2, n)] для соответствия mul21pow2
    // Если есть функция для точного умножения на степень двойки, используйте её
    let X = ddMultDd(ddDivDd(U, V), [0, Math.pow(2, n)]);

    return X;
}

export {ddExp};