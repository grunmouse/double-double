import {ddAsinh, ddAcosh, ddAtanh} from '../../src/index.js'

import {
	arb,
	prop,
	assert,
	isApprox,
	assertApprox,
	propApprox
} from './props.js';

describe('ddAsinh', () => {
	const propAsinh = (title, arbitrary)=>propApprox(title, arbitrary, ddSinh, Math.sinh);
    propAsinh('approx in item #1', arb.i_o(-5, 5));

    propAsinh('large positive', arb.i_i(5, 20));

    propAsinh('large negative', arb.i_i(-20, -5));
});

describe('ddAcosh', () => {
	const propAcosh = (title, arbitrary)=>propApprox(title, arbitrary, ddAcosh, Math.cosh);
    propAcosh('approx in item #1', arb.i_o(1, 5));

    propAcosh('large positive', arb.i_i(5, 20));

    propAcosh('near 1', arb.i_o(1, 2));
});

describe('ddAtanh', () => {
	const propAtanh = (title, arbitrary)=>propApprox(title, arbitrary, ddAtanh, Math.atanh);
    prop('approx in item #1', arb.i_o(0, 1));

    propAtanh('over 0.5', arb.i_i(0.5, 1));

    propAtanh('negate', arb.i_i(-1, 0));
});
