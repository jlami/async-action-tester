import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    gotoStep2Now() {
      this.transitionTo('step2');
    },
    
    async gotoStep2Later() {
      await new Promise(r => setTimeout(r, 500));
      
      await this.transitionTo('step2');
    },
  }
});
