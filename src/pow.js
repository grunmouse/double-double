import { 
	ddMultDd,
	ddAddDd,
	ddDivDd,
	ddDiffDd,
	
	ddDivBy2,
	
	ddNegativeOf,
	
	strToDd,
	twoSum,
	
	PIDd,
	eDd,
	ln2Dd
} from 'double-double';

import {ddExp} from './exp.js';
import {ddLog} from './log.js';

function speedPow(x, y){
  let res = [0,1];
  let base = x.slice(0);
  let n = y;

  while (n > 0) {
    if (n & 1) {
      res = ddMultDd(res, base);
    }
    base = ddMultDd(base, base);
    n >>= 1;
  }
  return res;
}

function ddPowDouble(x, y){
	if(y==0){
		return [0,1];
	}
	else if(y<0){
		return ddDivDd([0,1], ddPowDouble(x, -y));
	}
	
	let t = Math.floor(y);
	let p = y-t;
	
	let a = speedPow(x, t); //x**t
	let b = ddExp(ddMultDd([0,p], ddLog(x))); // x**p
	
	return ddMultDd(a,b);
}

function ddPowDd(x, y){
	let a = ddPowDouble(x, y[1]);
	let b = ddPowDouble(x, y[0]);
	return ddMultDd(a,b);
}

export {ddPowDouble, ddPowDd};