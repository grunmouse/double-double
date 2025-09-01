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

const ddPI_2 = ddDivBy2(PIDd);

/*
Тригонометрические функции, выражаемые простыми формулами
*/

/*
	cos(x) = sin(PI/2 - x)
*/
function ddCos(x){
	let y = ddDiffDd(ddPI_2, x);
	return ddSin(y);
}

function ddTan(x){
	let y = ddDiffDd(ddPI_2, x);
	return ddDivDd(ddSin(x), ddSin(y));
}

export {ddSin, ddCos, ddTan};