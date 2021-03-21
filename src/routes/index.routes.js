module.exports = (ApiRoute, Route) =>
  ApiRoute(() => {
    Route.get("/", "App/Module/TemplateController.index").middleware([
      "can:list-templates",
    ]);
  }, "templates").middleware(["auth"]);
