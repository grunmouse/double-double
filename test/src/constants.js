import {
	ddPI, ddPI_2, ddPI_4,
	ddE,
	ddLn2, ddLn10, ddLog10E, ddLog2E,
	ddSQRT2, ddSQRT1_2,
	ddEulerMasch
} from '../../src/index.js'

import assert from 'assert';

function isDD(x){
	return Array.isArray(x) && x.length === 2 
		&& typeof x[0] === 'number' && typeof x[1] === 'number' 
		&& Math.abs(x[1])>Math.abs(x[0]);
}

describe('DD Constants Existence Tests', function() {
    it('ddPI is exists', function() {
        assert.ok(isDD(ddPI));
    });

    it('ddPI_2 is exists', function() {
        assert.ok(isDD(ddPI_2));
    });

    it('ddPI_4 is exists', function() {
        assert.ok(isDD(ddPI_4));
    });

    it('ddE is exists', function() {
        assert.ok(isDD(ddE));
    });

    it('ddLn2 is exists', function() {
        assert.ok(isDD(ddLn2));
    });

    it('ddLn10 is exists', function() {
        assert.ok(isDD(ddLn10));
    });

    it('ddLog10E is exists', function() {
        assert.ok(isDD(ddLog10E));
    });

    it('ddLog2E is exists', function() {
        assert.ok(isDD(ddLog2E));
    });

    it('ddSQRT2 is exists', function() {
        assert.ok(isDD(ddSQRT2));
    });

    it('ddSQRT1_2 is exists', function() {
        assert.ok(isDD(ddSQRT1_2));
    });

    it('ddEulerMasch is exists', function() {
        assert.ok(isDD(ddEulerMasch));
    });
});