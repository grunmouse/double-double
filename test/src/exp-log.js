
import { ddExp, ddLog } from '../../src/index.js';

import {
	arb,
	prop,
	asert,
	isApprox,
	assertApprox,
	propApprox
} from './props.js';

describe('ddExp', () => {
    const propExp = (title, arbitrary) => propApprox(title, arbitrary, ddExp, Math.exp);

    propExp('approx in item #1', arb.i_o(-5, 5));
    propExp('large positive', arb.i_i(5, 20));
    propExp('large negative', arb.i_i(-20, -5));
});

describe('ddLog', () => {
    const propLog = (title, arbitrary) => propApprox(title, arbitrary, ddLog, Math.log);

    propLog('approx in item #1', arb.i_o(0, 5));
    propLog('large positive', arb.i_i(5, 20));
    propLog('near 1', arb.i_o(0.1, 1));
});