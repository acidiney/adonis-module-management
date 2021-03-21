'use strict';

/**
 * TemplateProviders
 *
 * (c) Acidiney Dias <acidiney.dias@ideiasdinamicas.com>
 */

const { ServiceProvider } = require('@adonisjs/fold');

class TemplateProvider extends ServiceProvider {
  register () {
    this.app.singleton('App/Module/TemplateController', (app) => {
      const TemplateControllerBase = app.use('App/Controllers/Http/TemplateController');
      console.log(TemplateControllerBase);
      return new (require('../src/controller/TemplateController'));
    })
  }
}

module.exports = TemplateProvider
