import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | login', function(hooks) {
  setupApplicationTest(hooks);

  test('should show login page when visiting /login', async (assert) => {
    await visit('/login');
    assert.equal(currentURL(), '/login');
  });

  test('should redirect to app if user already signed in', async (assert) => {

  });

  test('should redirect to app if login credentials valid', async (assert) => {

  });

  test('should stay on login page if login credentials invalid', async (assert) => {

  });

  test('should show error message if login credentials invalid', async (assert) => {

  });

  test('should link to sign up form', async (assert) => {

  });

  test('should link to forget password form', async (assert) => {

  });

  test('should link to terms of use form', async (assert) => {

  });
});
