import { 
	ddSin,
	ddMultDd,
	ddAddDd,
	ddDivDd,
	ddDiffDd,
	
	ddDivBy2,
	ddSqrt,
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

import {ddAtan} from './atan.js';

import {
	ddPI, ddPI_2, ddPI_4
} from './constants.js';

function ddMultSign(x, s){
	if(s<0){
		return [-x[0], -x[1]];
	}
	else if(s===0){
		return [0,0];
	}
	else{
		return x;
	}
}

function ddAtan2(y, x){
    if(ddEq(x, [0, 0])) {
        return ddMultSign(ddPI_2, y[1]);
    }

	if(x[1]<0){
		if(y[1]<0){
			//Третий квадрант
			return ddAddDd(ddNegativeOf(ddPI), ddAtan2(ddNegativeOf(y), ddNegativeOf(x)))
		}
		else{
			//второй квадрант
			return ddDiffDd(ddPI, ddAtan2(y, ddNegativeOf(x)));
		}
	}
	else if(y[1]<0){
		//Четвёртый квадрант
		return ddNegativeOf(ddAtan2(ddNegativeOf(y),x));
	}

	//Первый квадрант
	if(ddLt(x, y)){
		const acot = ddAtan(ddDivDd(x, y));
		return ddDiffDd(ddPI_2, acot);
	}
	else{
		return ddAtan(ddDivDd(y, x));
	}
}

function ddAsin(x) {
    if (ddLt(x, [0,-1]) || ddGt(x, [0,1])) {
        return [NaN, NaN];
    }
    const y = ddSqrt(ddDiffDd([0,1], ddMultDd(x, x)));
	
    return ddAtan2(x, y);
}

function ddAcos(x){
    if (ddLt(x, [0,-1]) || ddGt(x, [0,1])) {
        return [NaN, NaN];
    }
	
	return ddDiffDd(ddPI_2, ddAsin(x));
}

export {ddAtan, ddAtan2, ddAsin, ddAcos};