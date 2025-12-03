import {ddSinh, ddCosh, ddTanh} from '../../src/index.js'

import {
	arb,
	prop,
	assert,
	isApprox,
	assertApprox,
	propApprox
} from './props.js';

describe('ddSinh', () => {
    const propSinh = (title, arbitrary) => propApprox(title, arbitrary, ddSinh, Math.sinh);

    propSinh('approx in item #1', arb.i_i(-5, 5));
    propSinh('large positive', arb.i_i(5, 20));
    propSinh('large negative', arb.i_i(-20, -5));
});

describe('ddCosh', () => {
    const propCosh = (title, arbitrary) => propApprox(title, arbitrary, ddCosh, Math.cosh);

    propCosh('approx in item #1', arb.i_o(0, 5));
    propCosh('large positive', arb.i_i(5, 20));
    propCosh('large negative', arb.i_i(-20, 0));
});

describe('ddTanh', () => {
    const propTanh = (title, arbitrary) => propApprox(title, arbitrary, ddTanh, Math.tanh);

    propTanh('approx in item #1', arb.i_o(-3, 3));
    propTanh('large positive', arb.i_i(3, 10));
    propTanh('large negative', arb.i_i(-10, -3));
});