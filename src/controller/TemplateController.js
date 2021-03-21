const TemplateControllerBase = use('App/Controllers/Http/TemplateController');

class TemplateController extends TemplateControllerBase {
  index () {
    return 200
  }
}

module.exports = TemplateController;
