import assert from 'assert';

import { 
	ddSin,
	ddMultDd,
	ddAddDd,
	ddDivDd,
	ddDiffDd,
	
	strToDd
} from 'double-double';

import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const {arb} = require('@grunmouse/prover');
const prop = require('@grunmouse/prover/mocha_prop.js');

const ddFactorial = [[0,1]];

for(let i=1;i<50;++i){
	let ddI = [0, i];
	let f_prev = ddFactorial[i-1];
	let f = ddMultDd(f_prev, ddI);
	ddFactorial[i] = f;
}

const a0 = [0, 1];
const a1 = strToDd('-0.166666666666666666666666666666666667');
const a2 = strToDd('0.00833333333333333333333333333333333069');
const a3 = strToDd('-0.000198412698412698412698412698412671319');
const a4 = strToDd('2.75573192239858906525573192223995808e-6');
const a5 = strToDd('-2.50521083854417187750521077962123682e-8');
const a6 = strToDd('1.60590438368216145993922289621550506e-10');
const a7 = strToDd('-7.64716373181981647587481187300831335e-13');
const a8 = strToDd('2.81145725434552075980975905006999319e-15');
const a9 = strToDd('-8.22063524662432650297086257962703293e-18');
const aa = strToDd('1.95729410633890026175367390152305383e-20');
const ab = strToDd('-3.86817017051340241224838720319634797e-23');
const ac = strToDd('6.44695023999222092772271073593727141e-26');
const ad = strToDd('-9.1836779606017064087088551595474321e-29');
const ae = strToDd('1.13078207057779775850779192271873238e-31');
const af = strToDd('1.19290046424220296937971101373203567e-34');

const a = [a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af];
const b = Array.from({length:16}, (_,i)=>{
	let p = 1+i*2;
	let sign = (i & 1);
	return ddDivDd([0, sign ? -1: 1], ddFactorial[p]);
});

for(let i=0; i<16; ++i){
	console.log(ddDiffDd(a[i],b[i]));
}