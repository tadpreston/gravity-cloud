import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | forgotten-password', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:forgotten-password');
    assert.ok(route);
  });
});
