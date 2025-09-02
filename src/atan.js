import { 
	ddSin,
	ddMultDd,
	ddAddDd,
	ddDivDd,
	ddDiffDd,
	
	ddDivBy2,
	
	ddNegativeOf,
	
	strToDd,
	
	ddEq,
	ddGt,
	ddGte,
	ddLt,
	ddLte,
	
	PIDd,
	eDd
} from 'double-double';

import {ddTan} from './trig.js';

import {
	ddPI, ddPI_2, ddPI_4
} from './constants.js';

function ddAtan(x){
	if(ddLt(x,[0,0])){
		return ddNegativeOf(ddAtan(ddNegativeOf(x)));
	}

	if(ddGt(x,[0,1])){
		const acot = ddAtan(ddDivDd([0,1], x));
		return ddDiffDd(ddPI_2, acot);
	}

	let z = [0, Math.atan(x[1])];
	for(let i=0; i<4; ++i){
		let tanZ = ddTan(z);
		z = ddDiffDd(
			z,
			ddDivDd(
				ddDiffDd(tanZ, x),
				ddAddDd(ddMultDd(tanZ,tanZ), [0,1])
			)
		);
	}
	
	return z;
}

export {ddAtan};