import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | login', function(hooks) {
  setupApplicationTest(hooks);

  test('should show login page when visiting /login', async (assert) => {
    await visit('/login');
    assert.equal(currentURL(), '/login');
  });

  // test('should redirect to app if user already signed in', async (assert) => {
  // });

  // test('should redirect to app if login credentials valid', async (assert) => {
  // });

  // test('should stay on login page if login credentials invalid', async (assert) => {
  // });

  // test('should show error message if login credentials invalid', async (assert) => {
  // });

  // test('should link to sign up form', async (assert) => {
  //   await visit('/login');
  //   await click('.register');
  //   assert.equal(currentURL(), 'https://www.assetpanda.com/register-free/', 'should navigate to sign up form');
  // });
  
  // test('should link to terms of use form', async (assert) => {
  //   await visit('/login');
  //   await click('.terms');
  //   assert.equal(currentURL(), 'https://www.assetpanda.com/terms-of-use/', 'should navigate to terms of use form');
  // });
  
  // test('should link to forgot password form', async (assert) => {
  //   await visit('/login');
  //   await click('.forgot');
  //   assert.equal(currentURL(), 'https://login.assetpanda.com/users/password/new', 'should navigate to forgot password form');
  // });
});
