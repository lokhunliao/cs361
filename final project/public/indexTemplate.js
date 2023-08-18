(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!DOCTYPE html>\r\n<html>\r\n    <head>\r\n        <title>CS361 Assignment 6</title>\r\n        <script src=\"/client.js\" charset=\"utf-8\" defer></script>\r\n        <script src=\"https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js\"></script>\r\n        <script src=\"indexTemplate.js\"></script>\r\n    </head>\r\n    <body>\r\n        <p>Messages:</p>\r\n    <button id=\"send-button\">Send msg to server</button>\r\n    <button id=\"get-button\">Get msg from server</button>\r\n\r\n        \r\n    </body>";
},"useData":true});
})();