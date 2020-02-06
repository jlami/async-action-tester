import { module, test } from 'qunit';
import { visit, currentURL, click, waitFor } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | async works', function(hooks) {
  setupApplicationTest(hooks);

  test('works without delay', async function(assert) {
    await visit('/step1');

    assert.equal(currentURL(), '/step1');
    
    await click('.btn-now');
    
    assert.equal(currentURL(), '/step2');
  });
  
  test('works with delay', async function(assert) {
    await visit('/step1');

    assert.equal(currentURL(), '/step1');
    
    await click('.btn-later');
    
    await waitFor('.step2');
    //I would like a different waiter for async actions
    //click should not really wait for it, since we might want to trigger the click
    // and do something while the async action is running if that requires ui interaction for example
    
    assert.equal(currentURL(), '/step2');
  });
});
