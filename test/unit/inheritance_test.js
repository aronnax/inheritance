
import redtape from 'redtape';
import sinon from 'sinon';

import '../setup';
import {inheritance} from '../../src/inheritance';

var testProps;

var test = redtape({
  beforeEach: (cb) => {
    testProps = {
      propA: 2,
      propB: 'thing',
      methA: function() {
        return this.propA;
      }
    };
    cb();
  },
  afterEach: (cb) => {
    cb();
  }
});

test('exists', t => {
  t.ok(inheritance, 'it exists');
  t.end();
});

test('wrapProps() should wrap a properties object', t => {

  let actual = inheritance.wrapProps(testProps);

  t.ok(actual, 'it exists');
  t.equal(actual.propA.value, testProps.propA, 'sets propA to value');
  t.equal(actual.propB.value, testProps.propB, 'sets propB to value');
  t.equal(actual.methA.value, testProps.methA, 'sets methA to value');

  t.end();
});

test('wrapProps() should default all properties to writable', t => {

  let actual = inheritance.wrapProps(testProps);

  t.ok(actual.propA.writable, 'propA is writable');
  t.ok(actual.propB.writable, 'propB is writable');
  t.ok(actual.methA.writable, 'methA is writable');

  t.end();
});

test('wrapProps() should default all properties to enumerable', t => {

  let actual = inheritance.wrapProps(testProps);

  t.ok(actual.propertyIsEnumerable('propA'), 'propA is enumerable');
  t.ok(actual.propertyIsEnumerable('propB'), 'propB is enumerable');
  t.ok(actual.propertyIsEnumerable('methA'), 'methA is enumerable');

  t.end();
});

