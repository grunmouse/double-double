import { 
	ddSin,
	ddMultDd,
	ddAddDd,
	ddDivDd,
	ddDiffDd,
	
	ddDivBy2,
	
	strToDd,
	
	PIDd,
	eDd
} from 'double-double';

/*


*/

const Log2 = 0.6931471805599453;

function padeExp(X){
	if(X === 0) return 1;
	if(X === 1) return Math.E;

    let n = Math.floor(X/Log2 + 0.5)
    X = X - Log2*n;
    //let U = Double.One, V = Double.One;
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
    //for (let i = 0, cLen = padeCoef.length; i < cLen; i++) Double.add21(Double.mul22(U, X), padeCoef[i]);
	let U = padeCoef.reduce((U,_,i)=>(U*X+padeCoef[i]), 1);
    //for (let i = 0, cLen = padeCoef.length; i < cLen; i++) Double.add21(Double.mul22(V, X), padeCoef[i] * (i % 2 ? -1 : 1));
	
	let V = padeCoef.reduce((V,_,i)=>(V*X+padeCoef[i] * (i % 2 ? -1 : 1)),1);
    
	//X = Double.mul21pow2(Double.div22(U, V), n);
	X = U/V *2**n
    return X;
	
}

console.log(padeExp(3.25)-Math.exp(3.25));
console.log(padeExp(3)-Math.exp(3));
console.log(padeExp(2)-Math.exp(2));
console.log(padeExp(2));
console.log(Math.exp(2));
console.log(padeExp(0.5)-Math.exp(0.5));