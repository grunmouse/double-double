import {ddAsinh, ddAcosh, ddAtanh} from '../../src/index.js'

import assert from 'assert';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const {arb} = require('@grunmouse/prover');
const prop = require('@grunmouse/prover/mocha_prop.js');

function isApprox(dd, d){
	let y = dd[1];
	if(Math.abs(d)>Math.abs(y)){
		[y,d]=[d,y];
	}
	return (y-d)/y<2*Number.EPSILON;
}

describe('ddAsinh', () => {
    prop('approx in item #1', arb.i_o(-5, 5), (x) => {
        let dd = ddAsinh([0, x]);
        let d = Math.asinh(x);
        assert.ok(isApprox(dd, d));
    });

    prop('large positive', arb.i_i(5, 20), (x) => {
        let dd = ddAsinh([0, x]);
        let d = Math.asinh(x);
        assert.ok(isApprox(dd, d));
    });

    prop('large negative', arb.i_i(-20, -5), (x) => {
        let dd = ddAsinh([0, x]);
        let d = Math.asinh(x);
        assert.ok(isApprox(dd, d));
    });
});

describe('ddAcosh', () => {
    prop('approx in item #1', arb.i_o(1, 5), (x) => {
        let dd = ddAcosh([0, x]);
        let d = Math.acosh(x);
        assert.ok(isApprox(dd, d));
    });

    prop('large positive', arb.i_i(5, 20), (x) => {
        let dd = ddAcosh([0, x]);
        let d = Math.acosh(x);
        assert.ok(isApprox(dd, d));
    });

    prop('near 1', arb.i_o(1, 2), (x) => {
        let dd = ddAcosh([0, x]);
        let d = Math.acosh(x);
        assert.ok(isApprox(dd, d));
    });
});

describe('ddAtanh', () => {
    prop('approx in item #1', arb.i_o(0, 1), (x) => {
        let dd = ddAtanh([0, x]);
        let d = Math.atanh(x);
        assert.ok(isApprox(dd, d));
    });

    prop('over 0.5', arb.i_i(0.5, 1), (x) => {
        let dd = ddAtanh([0, x]);
        let d = Math.atanh(x);
        assert.ok(isApprox(dd, d));
    });

    prop('negate', arb.i_i(-1, 0), (x) => {
        let dd = ddAtanh([0, x]);
        let d = Math.atanh(x);
        assert.ok(isApprox(dd, d));
    });
});
