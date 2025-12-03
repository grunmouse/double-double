import { 
	ddSin,
	ddMultDd,
	ddAddDd,
	ddDivDd,
	ddDiffDd,
	ddSqrt,
	
	ddDivBy2,
	ddMultBy2,
	ddNegativeOf,
	
	strToDd,
	
	PIDd,
	eDd,
	ln2Dd
} from 'double-double';

import {ddExp} from './exp.js';
import {ddLog} from './log.js';

/*
Гиперболический функции, выражаемые простыми формулами
*/

function ddSinh(x){
	return ddDivBy2(ddDiffDd(ddExp(x), ddExp(ddNegativeOf(x))));
}

function ddCosh(x){
	return ddDivBy2(ddAddDd(ddExp(x), ddExp(ddNegativeOf(x))));
}

function ddTanh(x){
	let e2x = ddExp(ddMultBy2(x));
	return ddDivDd(ddDiffDd(e2x, [0,1]),ddAddDd(e2x, [0,1]));
}

function ddAcosh(x){
	return ddLog(ddAddDd(x, ddSqrt(ddDiffDd(ddMultDd(x,x),[0,1]))));
}

function ddAsinh(x){
	return ddLog(ddAddDd(x, ddSqrt(ddAddDd(ddMultDd(x,x),[0,1]))));
}

function ddAtanh(x){
	return ddDivBy2(ddLog(ddDivDd(ddAddDd([0,1], x), ddDiffDd([0,1], x))));
}

export {
	ddSinh, ddCosh, ddTanh,
	ddAsinh, ddAcosh, ddAtanh
};