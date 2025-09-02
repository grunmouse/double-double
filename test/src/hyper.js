import {ddSinh, ddCosh, ddTanh} from '../../src/index.js'

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
	
	return Math.abs((y-d)/d)<2*Number.EPSILON;
}

describe('ddSinh', () => {
    prop('approx in item #1', arb.i_o(-5, 5), (x) => {
        let dd = ddSinh([0, x]);
        let d = Math.sinh(x);
        assert.ok(isApprox(dd, d));
    });

    prop('large positive', arb.i_i(5, 20), (x) => {
        let dd = ddSinh([0, x]);
        let d = Math.sinh(x);
        assert.ok(isApprox(dd, d));
    });

    prop('large negative', arb.i_i(-20, -5), (x) => {
        let dd = ddSinh([0, x]);
        let d = Math.sinh(x);
        assert.ok(isApprox(dd, d));
    });
});

describe('ddCosh', () => {
    prop('approx in item #1', arb.i_o(0, 5), (x) => {
        let dd = ddCosh([0, x]);
        let d = Math.cosh(x);
        assert.ok(isApprox(dd, d));
    });

    prop('large positive', arb.i_i(5, 20), (x) => {
        let dd = ddCosh([0, x]);
        let d = Math.cosh(x);
        assert.ok(isApprox(dd, d));
    });

    prop('large negative', arb.i_i(-20, 0), (x) => {
        let dd = ddCosh([0, x]);
        let d = Math.cosh(x);
        assert.ok(isApprox(dd, d));
    });
});

describe('ddTanh', () => {
    prop('approx in item #1', arb.i_o(-3, 3), (x) => {
        let dd = ddTanh([0, x]);
        let d = Math.tanh(x);
		//assert.equal(dd[1]+dd[0],d)
        assert.ok(isApprox(dd, d));
    });

    prop('large positive', arb.i_i(3, 10), (x) => {
        let dd = ddTanh([0, x]);
        let d = Math.tanh(x);
        assert.ok(isApprox(dd, d));
    });

    prop('large negative', arb.i_i(-10, -3), (x) => {
        let dd = ddTanh([0, x]);
        let d = Math.tanh(x);
        assert.ok(isApprox(dd, d));
    });
});