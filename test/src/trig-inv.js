import {ddAsin, ddAcos, ddAtan, ddAtan2} from '../../src/index.js'

import {
	arb,
	prop,
	assert,
	isApprox,
	assertApprox,
	propApprox,
	propApprox2
} from './props.js';

describe('ddAsin', () => {
	const propAsin = (title, arb)=>propApprox(title,arb, ddAsin, Math.asin);
	
    propAsin('approx in item #1', arb.i_o(0, 1));

    propAsin('over 0.5', arb.i_i(0.5, 1));

    propAsin('negate', arb.i_i(-1, 0));
});

describe('ddAcos', () => {
	const propAcos = (title, arb)=>propApprox(title,arb, ddAcos, Math.acos);
    propAcos('approx in item #1', arb.i_o(0, 1));

    propAcos('over 0.5', arb.i_i(0.5, 1));

    propAcos('negate', arb.i_i(-1, 0));
});

describe('ddAtan', () => {
	const propAtan = (title, arb)=>propApprox(title,arb, ddAtan, Math.atan);
    propAtan('approx in item #1', arb.i_o(0, 1));

    propAtan('over 1', arb.i_i(1, 10));

    propAtan('negate', arb.i_i(-10, 0));
});

describe('ddAtan2', () => {
	const propAtan2 = (title, arb1, arb2)=>propApprox(title,arb1, arb2, ddAtan2, Math.atan2);
    propAtan2('in quadrant 1', arb.i_o(0, Math.PI / 2), arb.i_o(0, Math.PI / 2));

    propAtan2('over PI', arb.i_i(Math.PI / 2, Math.PI), arb.i_i(Math.PI / 2, Math.PI));

    propAtan2('negate', arb.i_i(-Math.PI / 2, 0), arb.i_i(-Math.PI / 2, 0));
});
