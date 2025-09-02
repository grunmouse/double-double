import {ddSin, ddCos, ddTan} from '../../src/index.js'

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

