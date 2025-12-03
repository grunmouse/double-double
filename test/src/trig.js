import {ddSin, ddCos, ddTan} from '../../src/index.js'

import {
	arb,
	prop,
	assert,
	isApprox,
	assertApprox,
	propApprox
} from './props.js';

describe('ddSin', () => {
    prop('posit', arb.i_o(0, Math.PI), (x) => {
        let dd = ddSin([0, x]);
        let d = Math.sin(x);
        assert.ok(isApprox(dd, d));
    });

    prop('over PI', arb.i_i(Math.PI, 2 * Math.PI), (x) => {
        let dd = ddSin([0, x]);
        let d = Math.sin(x);
        assert.ok(isApprox(dd, d));
    });

    prop('negate', arb.i_i(-Math.PI, 0), (x) => {
        let dd = ddSin([0, x]);
        let d = Math.sin(x);
        assert.ok(isApprox(dd, d));
    });
});

describe('ddCos', () => {
    prop('posit', arb.i_o(0, Math.PI), (x) => {
        let dd = ddCos([0, x]);
        let d = Math.cos(x);
        assert.ok(isApprox(dd, d));
    });

    prop('over PI', arb.i_i(Math.PI, 2 * Math.PI), (x) => {
        let dd = ddCos([0, x]);
        let d = Math.cos(x);
        assert.ok(isApprox(dd, d));
    });

    prop('negate', arb.i_i(-Math.PI, 0), (x) => {
        let dd = ddCos([0, x]);
        let d = Math.cos(x);
        assert.ok(isApprox(dd, d));
    });
});

describe('ddTan', () => {
    prop('in quadrant 1', arb.i_o(0, Math.PI / 2), (x) => {
        let dd = ddTan([0, x]);
        let d = Math.tan(x);
        assert.ok(isApprox(dd, d));
    });

    prop('over PI/2', arb.i_i(Math.PI / 2, Math.PI), (x) => {
        let dd = ddTan([0, x]);
        let d = Math.tan(x);
        assert.ok(isApprox(dd, d));
    });

    prop('negate', arb.i_i(-Math.PI / 2, 0), (x) => {
        let dd = ddTan([0, x]);
        let d = Math.tan(x);
        assert.ok(isApprox(dd, d));
    });
});

