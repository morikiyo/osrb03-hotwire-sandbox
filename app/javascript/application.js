// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"
import "trix"
import "@rails/actiontext"

Turbo.StreamActions.redirect = function () {
  Turbo.visit(this.target, { action: "replace" });
};

document.addEventListener("turbo:before-render", function (e) {
  console.log(`app: ${e.detail.renderMethod}`);
});
document.addEventListener("turbo:morph", function () {
  console.log("turbo:morph!!")
});
document.addEventListener("turbo:load", function () {
  console.log("turbo:load!!")
});
