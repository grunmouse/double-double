import { 
	ddSin,
	ddMultDd,
	ddAddDd,
	ddDivDd,
	ddDiffDd,
	
	ddDivBy2,
	
	strToDd,
	
	PIDd,
	eDd,
	ln2Dd
} from 'double-double';

import {ddExp} from './exp.js';

/*
Метод Ньютона
Z = Z + (x/exp(z) -1)
 */
function ddLog(x){
	let z = [0, Math.log(x[1])];
	
	for(let i=0; i<6; ++i){
		z = ddAddDd(z, ddDiffDd(ddDivDd(x, ddExp(z)), [0,1]));
	}
	
	return z;
}

export {ddLog};