export * from './constants.js';
import {ddSin, ddCos, ddTan} from './trig.js';
import {ddAtan, ddAtan2, ddAsin, ddAcos} from './inv-trig.js';
import {ddExp} from './exp.js';
import {ddLog} from './log.js';
import {ddSinh, ddCosh, ddTanh, ddAsinh, ddAcosh, ddAtanh} from './hyper.js';

export {
	ddSin, ddCos, ddTan,
	ddAtan, ddAtan2, ddAsin, ddAcos,
	
	ddExp,
	ddLog,
	
	ddSinh, ddCosh, ddTanh, 
	ddAsinh, ddAcosh, ddAtanh
};