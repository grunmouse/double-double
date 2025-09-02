
import { ddExp, ddLog } from '../../src/index.js';

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

describe('ddExp', () => {
    prop('approx in item #1', arb.i_o(-5, 5), (x) => {
        let dd = ddExp([0, x]);
        let d = Math.exp(x);
        //assert.ok(isApprox(dd, d));
		assert.equal(dd[1],d)
    });

    prop('large positive', arb.i_i(5, 20), (x) => {
        let dd = ddExp([0, x]);
        let d = Math.exp(x);
        assert.ok(isApprox(dd, d));
    });

    prop('large negative', arb.i_i(-20, -5), (x) => {
        let dd = ddExp([0, x]);
        let d = Math.exp(x);
        assert.ok(isApprox(dd, d));
    });
});

describe('ddLog', () => {
    prop('approx in item #1', arb.i_o(0, 5), (x) => {
        let dd = ddLog([0, x]);
        let d = Math.log(x);
        assert.ok(isApprox(dd, d));
    });

    prop('large positive', arb.i_i(5, 20), (x) => {
        let dd = ddLog([0, x]);
        let d = Math.log(x);
        assert.ok(isApprox(dd, d));
    });

    prop('near 1', arb.i_o(0.1, 1), (x) => {
        let dd = ddLog([0, x]);
        let d = Math.log(x);
        assert.ok(isApprox(dd, d));
    });
});
