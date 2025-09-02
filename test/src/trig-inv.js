import {ddAsin, ddAcos, ddAtan, ddAtan2} from '../../src/index.js'

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

describe('ddAsin', () => {
    prop('approx in item #1', arb.i_o(0, 1), (x) => {
        let dd = ddAsin([0, x]);
        let d = Math.asin(x);
        assert.ok(isApprox(dd, d));
    });

    prop('over 0.5', arb.i_i(0.5, 1), (x) => {
        let dd = ddAsin([0, x]);
        let d = Math.asin(x);
        assert.ok(isApprox(dd, d));
    });

    prop('negate', arb.i_i(-1, 0), (x) => {
        let dd = ddAsin([0, x]);
        let d = Math.asin(x);
        assert.ok(isApprox(dd, d));
    });
});

describe('ddAcos', () => {
    prop('approx in item #1', arb.i_o(0, 1), (x) => {
        let dd = ddAcos([0, x]);
        let d = Math.acos(x);
        assert.ok(isApprox(dd, d));
    });

    prop('over 0.5', arb.i_i(0.5, 1), (x) => {
        let dd = ddAcos([0, x]);
        let d = Math.acos(x);
        assert.ok(isApprox(dd, d));
    });

    prop('negate', arb.i_i(-1, 0), (x) => {
        let dd = ddAcos([0, x]);
        let d = Math.acos(x);
        assert.ok(isApprox(dd, d));
    });
});

describe('ddAtan', () => {
    prop('approx in item #1', arb.i_o(0, 1), (x) => {
        let dd = ddAtan([0, x]);
        let d = Math.atan(x);
        assert.ok(isApprox(dd, d));
    });

    prop('over 1', arb.i_i(1, 10), (x) => {
        let dd = ddAtan([0, x]);
        let d = Math.atan(x);
        assert.ok(isApprox(dd, d));
    });

    prop('negate', arb.i_i(-10, 0), (x) => {
        let dd = ddAtan([0, x]);
        let d = Math.atan(x);
        assert.ok(isApprox(dd, d));
    });
});

describe('ddAtan2', () => {
    prop('in quadrant 1', arb.i_o(0, Math.PI / 2), arb.i_o(0, Math.PI / 2), (y, x) => {
        let dd = ddAtan2([0, y], [0, x]);
        let d = Math.atan2(y, x);
        assert.ok(isApprox(dd, d));
    });

    prop('over PI', arb.i_i(Math.PI / 2, Math.PI), arb.i_i(Math.PI / 2, Math.PI), (y, x) => {
        let dd = ddAtan2([0, y], [0, x]);
        let d = Math.atan2(y, x);
        assert.ok(isApprox(dd, d));
    });

    prop('negate', arb.i_i(-Math.PI / 2, 0), arb.i_i(-Math.PI / 2, 0), (y, x) => {
        let dd = ddAtan2([0, y], [0, x]);
        let d = Math.atan2(y, x);
        assert.ok(isApprox(dd, d));
    });
});
