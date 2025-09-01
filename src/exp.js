import { 
	ddSin,
	ddMultDd,
	ddAddDd,
	ddDivDd,
	ddDiffDd,
	
	ddDivBy2,
	
	ddNegateOf,
	
	strToDd,
	
	PIDd,
	eDd,
	ln2Dd
} from 'double-double';

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

function ddExp(x){
	if(x[0]==0 && x[1]==0) return [0,1];
	if(x[0]==0 && x[1]==1) return eDd;
	if(x[1]<0){
		let inv = ddExp(ddNegateOf(x));
		return ddDivDd([0,1], inv);
	}
	
    let n = Math.floor(ddDivDd(x,Log2)[1] + 0.5);
	y = ddDiffDd(x, ddMulDd(Log2, [0,n]));
    
	let U = padeCoef.reduce((U,_,i)=>(ddAddDd(ddMulDd(U,y), padeCoef[i])), [0,1]);
	let V = padeCoef.reduce((V,_,i)=>(ddAddDd(ddMulDd(V,y), padeCoef[i])* (i % 2 ? -1 : 1)), [0,1]);
	
	let X = ddMulDd(ddDivDd(U,V),2**n);
	
	return X;

}

export {ddExp};