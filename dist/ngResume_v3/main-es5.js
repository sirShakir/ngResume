function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _story_story_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./story/story.component */
    "./src/app/story/story.component.ts");
    /* harmony import */


    var _zyris_zyris_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./zyris/zyris.component */
    "./src/app/zyris/zyris.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");

    var routes = [{
      path: '',
      component: _zyris_zyris_component__WEBPACK_IMPORTED_MODULE_3__["ZyrisComponent"]
    }, {
      path: 'story',
      component: _story_story_component__WEBPACK_IMPORTED_MODULE_2__["StoryComponent"]
    }, {
      path: 'projects',
      component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router) {
        _classCallCheck(this, AppComponent);

        this.router = router;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.closeMenu();
        }
      }, {
        key: "goStory",
        value: function goStory() {
          if (this.pageFocus != "Story") {
            this.pageFocus = "Story";
            document.getElementById("heading").className = "heading";
            document.getElementById("menubar").style.display = "none";
            document.getElementById("story").className = "defaultPFocus";
            document.getElementById("projects").className = "defaultP";
            document.getElementById("menuTransition").style.display = "block";
            window.setTimeout(goNow, 700);
            this.router.navigate(['/story']);
          } else {
            this.closeMenu();
          }

          function goNow() {
            document.getElementById("menuTransition").style.display = "none";
          }
        }
      }, {
        key: "goProjects",
        value: function goProjects() {
          if (this.pageFocus != "Projects") {
            this.pageFocus = "Projects";
            document.getElementById("heading").className = "heading";
            document.getElementById("menubar").style.display = "none";
            document.getElementById("story").className = "defaultP";
            document.getElementById("projects").className = "defaultPFocus";
            document.getElementById("menuTransition").style.display = "block";
            window.setTimeout(goNow, 700);
            this.router.navigate(['/projects']);
          } else {
            this.closeMenu();
          }

          function goNow() {
            document.getElementById("menuTransition").style.display = "none";
          }
        }
      }, {
        key: "goZyris",
        value: function goZyris() {
          if (this.pageFocus != "Zyris") {
            this.pageFocus = "Zyris";
            document.getElementById("heading").className = "headingF";
            document.getElementById("menubar").style.display = "none";
            document.getElementById("story").className = "defaultP";
            document.getElementById("projects").className = "defaultP";
            document.getElementById("menuTransition").style.display = "block";
            window.setTimeout(goNow, 700);
            this.router.navigate(['/']);
          } else {
            this.closeMenu();
          }

          function goNow() {
            document.getElementById("menuTransition").style.display = "none";
          }
        }
      }, {
        key: "goIcon",
        value: function goIcon(icon_number) {
          document.getElementById("menubar").style.display = "none";

          switch (icon_number) {
            case 0:
              window.location.href = 'https://github.com/zeyeland';
              break;

            case 1:
              window.location.href = 'https://www.linkedin.com/in/shakirze/';
              break;

            case 2:
              window.location.href = 'https://www.youtube.com/watch?v=CJZpEIenlQg&t=1s';
              break;

            case 3:
              window.location.href = 'https://stackoverflow.com/users/9636850/z-eyeland';
              break;

            case 4:
              // alert("This will link to resume...coming soon")
              window.location.href = 'https://getsome.tech/resume';
              break;

            case 5:
              window.location.href = 'https://www.wyzant.com/match/tutor/88523989';
              break;
          }
        } // goContact(){
        // }

      }, {
        key: "expandMenu",
        value: function expandMenu() {
          document.getElementById("menubar").style.display = "block";
          document.body.scrollIntoView({
            behavior: "smooth"
          });
        }
      }, {
        key: "closeMenu",
        value: function closeMenu() {
          document.getElementById("menubar").style.display = "none";
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 33,
      vars: 0,
      consts: [["width", "26px", "height", "26px", "viewBox", "0 0 1339 1024", "xmlns", "http://www.w3.org/2000/svg", 1, "", 3, "click"], ["d", "M0 0h1102.769v78.769h-1102.769v-78.769z", 2, "fill", "#E4BB97"], ["d", "M0 315.077h1339.077v78.769h-1339.077v-78.769z", 2, "fill", "#840032"], ["d", "M0 630.154h945.231v78.769h-945.231v-78.769z", 2, "fill", "#E4BB97"], ["d", "M0 945.231h1220.923v78.769h-1220.923v-78.769z", 2, "fill", "#840032"], ["id", "menuTransition", "src", "https://media.giphy.com/media/VxbP9tLeKzazm/giphy.gif", "alt", "Girl in a jacket"], ["id", "menubar"], ["id", "heading", 1, "headingF", 3, "click"], [1, "fab", "fa-github", "i1", 2, "font-size", "18px", 3, "click"], [1, "fab", "fa-linkedin-in", "i1", 2, "font-size", "18px", 3, "click"], [1, "fab", "fa-youtube", "i1", 2, "font-size", "18px", 3, "click"], [1, "fab", "fa-stack-exchange", "i1", 2, "font-size", "18px", 3, "click"], [1, "fas", "fa-book", "i1", 2, "font-size", "18px", 3, "click"], [1, "fas", "fa-chalkboard-teacher", "i1", 2, "font-size", "18px", 3, "click"], ["id", "story", 1, "defaultP", 3, "click"], ["id", "projects", 1, "defaultP", 3, "click"], ["action", "/action_page.php"], [1, "formP", 3, "click"], [1, "fas", "fa-book", "i2", 2, "font-size", "18px", 3, "click"], [1, "fab", "fa-linkedin-in", "i2", 2, "font-size", "18px", 3, "click"], [1, "fas", "fa-chalkboard-teacher", "i2", 2, "font-size", "18px", 3, "click"], ["id", "app"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template__svg_svg_click_0_listener() {
            return ctx.expandMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_h2_click_7_listener() {
            return ctx.goZyris();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Introduction ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_i_click_9_listener() {
            return ctx.goIcon(0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_i_click_10_listener() {
            return ctx.goIcon(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_i_click_11_listener() {
            return ctx.goIcon(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_i_click_12_listener() {
            return ctx.goIcon(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_i_click_13_listener() {
            return ctx.goIcon(4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_i_click_14_listener() {
            return ctx.goIcon(5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_p_click_15_listener() {
            return ctx.goStory();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Main Event ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_p_click_17_listener() {
            return ctx.goProjects();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Resume Theatre ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "form", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_p_click_20_listener() {
            return ctx.closeMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Contact ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_i_click_22_listener() {
            return ctx.goIcon(4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Resume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_i_click_25_listener() {
            return ctx.goIcon(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Linkedin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_i_click_28_listener() {
            return ctx.goIcon(5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Tutoring");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["#menuTransition[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    z-index: 1;\r\n    display: none;\r\n}\r\n\r\n#menubar[_ngcontent-%COMP%]{\r\n    opacity: 0.8;\r\n    top: 10px;\r\n    left: .8%;\r\n    width: 97%;\r\n    background-color: black;\r\n\r\n    color: #E4BB97;\r\n    position: absolute;\r\n    border-style: solid;\r\n    border-color: #E4BB97;\r\n    z-index: 5;\r\n    -webkit-animation: bounceIn 1s;\r\n            animation: bounceIn 1s;\r\n    font-family: 'ZCOOL KuaiLe';\r\n\r\n     \r\n}\r\n\r\n#app[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\nsvg[_ngcontent-%COMP%]{\r\n    width: 52px;\r\n    height: 52px;\r\n    z-index: 2;\r\n    vertical-align: middle; \r\n    position: fixed;\r\n    left: 10px;\r\n    top: 10px;\r\n}\r\n\r\n.defaultP[_ngcontent-%COMP%]{\r\n    \r\n    -webkit-animation: fadeInLeft;\r\n            animation: fadeInLeft; \r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s; \r\n    text-decoration: underline;\r\n    -webkit-text-decoration-color: white;\r\n            text-decoration-color: white;\r\n    text-align: center;\r\n    text-decoration-thickness: 4px;\r\n    font-size:x-large;\r\n\r\n}\r\n\r\n.defaultPFocus[_ngcontent-%COMP%]{\r\n    -webkit-animation: fadeInLeft;\r\n            animation: fadeInLeft; \r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s; \r\n    text-decoration: line-through;\r\n    -webkit-text-decoration-color: white;\r\n            text-decoration-color: white;\r\n    text-align: center;\r\n    text-decoration-thickness: 4px;\r\n    font-size:x-large;\r\n\r\n}\r\n\r\n.formP[_ngcontent-%COMP%]{\r\n    -webkit-animation: fadeInLeft;\r\n            animation: fadeInLeft; \r\n    -webkit-animation-duration: 3s;\r\n            animation-duration: 3s; \r\n\r\n    -webkit-text-decoration-color: #840032;\r\n\r\n            text-decoration-color: #840032;\r\n    text-align: center;\r\n}\r\n\r\nform[_ngcontent-%COMP%]{\r\n    border-top-style: solid;\r\n    border-width: 1px;\r\n    border-color: #840032;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    display: block;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]{\r\n\r\n    -webkit-animation: flipInY;\r\n\r\n            animation: flipInY;\r\n    -webkit-animation-duration: 6s;\r\n            animation-duration: 6s;\r\n    padding-left: 3%;\r\n    display: inline-block;\r\n    text-decoration: underline;\r\n    -webkit-text-decoration-color: white;\r\n            text-decoration-color: white;\r\n\r\n}\r\n\r\n.headingF[_ngcontent-%COMP%]{\r\n\r\n    -webkit-animation: flipInY;\r\n\r\n            animation: flipInY;\r\n    -webkit-animation-duration: 6s;\r\n            animation-duration: 6s;\r\n    padding-left: 3%;\r\n    display: inline-block;\r\n    text-decoration: line-through;\r\n    -webkit-text-decoration-color: white;\r\n            text-decoration-color: white;\r\n}\r\n\r\n#smallSpan[_ngcontent-%COMP%]{\r\n    font-size: small;\r\n}\r\n\r\n.i1[_ngcontent-%COMP%]{\r\n    -webkit-animation: fadeIn;\r\n            animation: fadeIn; \r\n    -webkit-animation-duration: 8s;\r\n            animation-duration: 8s;\r\n    padding-left: 6%;\r\n    display: inline-block;\r\n    position: relative;\r\n    color: #840032;;\r\n\r\n}\r\n\r\n.i2[_ngcontent-%COMP%]{\r\n    -webkit-animation: fadeIn;\r\n            animation: fadeIn; \r\n    -webkit-animation-duration: 8s;\r\n            animation-duration: 8s;\r\n     \r\n    display: block;\r\n    position: relative;\r\n    color: white;\r\n    \r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtJQUNWLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osU0FBUztJQUNULFNBQVM7SUFDVCxVQUFVO0lBQ1YsdUJBQXVCOztJQUV2QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsMkJBQTJCOzs7QUFHL0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiw2QkFBcUI7WUFBckIscUJBQXFCLEVBQUUsZ0VBQWdFO0lBQ3ZGLDhCQUFzQjtZQUF0QixzQkFBc0IsRUFBRSxvQ0FBb0M7SUFDNUQsMEJBQTBCO0lBQzFCLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixpQkFBaUI7O0FBRXJCOztBQUNBO0lBQ0ksNkJBQXFCO1lBQXJCLHFCQUFxQixFQUFFLGdFQUFnRTtJQUN2Riw4QkFBc0I7WUFBdEIsc0JBQXNCLEVBQUUsb0NBQW9DO0lBQzVELDZCQUE2QjtJQUM3QixvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLDZCQUFxQjtZQUFyQixxQkFBcUIsRUFBRSxnRUFBZ0U7SUFDdkYsOEJBQXNCO1lBQXRCLHNCQUFzQixFQUFFLG9DQUFvQzs7SUFFNUQsc0NBQThCOztZQUE5Qiw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTs7SUFFSSwwQkFBa0I7O1lBQWxCLGtCQUFrQjtJQUNsQiw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLG9DQUE0QjtZQUE1Qiw0QkFBNEI7O0FBRWhDOztBQUVBOztJQUVJLDBCQUFrQjs7WUFBbEIsa0JBQWtCO0lBQ2xCLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0Isb0NBQTRCO1lBQTVCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFHQTtJQUNJLHlCQUFpQjtZQUFqQixpQkFBaUIsRUFBRSxnRUFBZ0U7SUFDbkYsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixjQUFjOztBQUVsQjs7QUFFQTtJQUNJLHlCQUFpQjtZQUFqQixpQkFBaUIsRUFBRSxnRUFBZ0U7SUFDbkYsOEJBQXNCO1lBQXRCLHNCQUFzQjtLQUNyQixpQkFBaUI7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNtZW51VHJhbnNpdGlvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiNtZW51YmFye1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogLjglO1xyXG4gICAgd2lkdGg6IDk3JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5cclxuICAgIGNvbG9yOiAjRTRCQjk3O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogI0U0QkI5NztcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICBhbmltYXRpb246IGJvdW5jZUluIDFzO1xyXG4gICAgZm9udC1mYW1pbHk6ICdaQ09PTCBLdWFpTGUnO1xyXG5cclxuICAgICBcclxufVxyXG5cclxuI2FwcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5zdmd7XHJcbiAgICB3aWR0aDogNTJweDtcclxuICAgIGhlaWdodDogNTJweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5kZWZhdWx0UHtcclxuICAgIC8qIC0tYW5pbWF0ZS1kZWxheTogMXM7ICAqL1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW5MZWZ0OyAvKiByZWZlcnJpbmcgZGlyZWN0bHkgdG8gdGhlIGFuaW1hdGlvbidzIEBrZXlmcmFtZSBkZWNsYXJhdGlvbiAqL1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxczsgLyogZG9uJ3QgZm9yZ2V0IHRvIHNldCBhIGR1cmF0aW9uISAqL1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogNHB4O1xyXG4gICAgZm9udC1zaXplOngtbGFyZ2U7XHJcblxyXG59XHJcbi5kZWZhdWx0UEZvY3Vze1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW5MZWZ0OyAvKiByZWZlcnJpbmcgZGlyZWN0bHkgdG8gdGhlIGFuaW1hdGlvbidzIEBrZXlmcmFtZSBkZWNsYXJhdGlvbiAqL1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxczsgLyogZG9uJ3QgZm9yZ2V0IHRvIHNldCBhIGR1cmF0aW9uISAqL1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogNHB4O1xyXG4gICAgZm9udC1zaXplOngtbGFyZ2U7XHJcblxyXG59XHJcblxyXG4uZm9ybVB7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbkxlZnQ7IC8qIHJlZmVycmluZyBkaXJlY3RseSB0byB0aGUgYW5pbWF0aW9uJ3MgQGtleWZyYW1lIGRlY2xhcmF0aW9uICovXHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzOyAvKiBkb24ndCBmb3JnZXQgdG8gc2V0IGEgZHVyYXRpb24hICovXHJcblxyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjODQwMDMyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5mb3Jte1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1jb2xvcjogIzg0MDAzMjtcclxufVxyXG5sYWJlbHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaGVhZGluZ3tcclxuXHJcbiAgICBhbmltYXRpb246IGZsaXBJblk7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDZzO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbi5oZWFkaW5nRntcclxuXHJcbiAgICBhbmltYXRpb246IGZsaXBJblk7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDZzO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI3NtYWxsU3BhbntcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcblxyXG4uaTF7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbjsgLyogcmVmZXJyaW5nIGRpcmVjdGx5IHRvIHRoZSBhbmltYXRpb24ncyBAa2V5ZnJhbWUgZGVjbGFyYXRpb24gKi9cclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogOHM7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDYlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6ICM4NDAwMzI7O1xyXG5cclxufVxyXG5cclxuLmkye1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW47IC8qIHJlZmVycmluZyBkaXJlY3RseSB0byB0aGUgYW5pbWF0aW9uJ3MgQGtleWZyYW1lIGRlY2xhcmF0aW9uICovXHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDhzO1xyXG4gICAgIC8qIHdpZHRoOiA0NCU7ICAqL1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAvKiBtYXJnaW46IGF1dG87ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiJdfQ== */"],
      data: {
        animation: []
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css'],
          animations: []
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _story_story_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./story/story.component */
    "./src/app/story/story.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _zyris_zyris_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./zyris/zyris.component */
    "./src/app/zyris/zyris.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _story_story_component__WEBPACK_IMPORTED_MODULE_4__["StoryComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"], _zyris_zyris_component__WEBPACK_IMPORTED_MODULE_6__["ZyrisComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _story_story_component__WEBPACK_IMPORTED_MODULE_4__["StoryComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"], _zyris_zyris_component__WEBPACK_IMPORTED_MODULE_6__["ZyrisComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/projects.component.ts":
  /*!************************************************!*\
    !*** ./src/app/projects/projects.component.ts ***!
    \************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProjectsComponent = /*#__PURE__*/function () {
      function ProjectsComponent() {
        _classCallCheck(this, ProjectsComponent);
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var ele = document.getElementById('scroller');
          ele.addEventListener("click", this.checkScrollDirection);
          var eleSelect = document.getElementById("selectCat");

          eleSelect.onchange = function () {
            var setnone = document.getElementsByTagName("span"); //console.log(setnone);

            for (var z = 0; z < setnone.length; z++) {
              setnone[z].style.display = "none";
            }

            switch (eleSelect.value) {
              //Projects
              case 'Showtimes':
                for (var _z = 0; _z < setnone.length; _z++) {
                  setnone[_z].style.display = "block";
                }

                break;

              case 'Corporate':
                document.getElementById("spanC1").style.display = "block";
                document.getElementById("spanC2").style.display = "block";
                document.getElementById("spanC3").style.display = "block";
                document.getElementById("spanC4").style.display = "block";
                document.getElementById("spanC5").style.display = "block";
                break;

              case 'Freelance':
                document.getElementById("spanF1").style.display = "block";
                document.getElementById("spanF2").style.display = "block";
                document.getElementById("spanF3").style.display = "block";
                document.getElementById("spanF4").style.display = "block";
                document.getElementById("spanF5").style.display = "block";
                break;

              case 'Games':
                document.getElementById("spanG1").style.display = "block";
                document.getElementById("spanG2").style.display = "block";
                document.getElementById("spanG3").style.display = "block";
                document.getElementById("spanG4").style.display = "block";
                break;

              case 'Projects':
                document.getElementById("spanP1").style.display = "block";
                document.getElementById("spanP2").style.display = "block";
                document.getElementById("spanP3").style.display = "block";
                document.getElementById("spanP4").style.display = "block";
                break;
            }
          };
        }
      }, {
        key: "checkScrollDirection",
        value: function checkScrollDirection(e) {
          var id = e.target['id']; //console.log(e.target)

          if (this.focusEle != id && id != "" && id != null && id != "scroller") {
            this.focusEle = id;
            var eles = document.getElementsByClassName('positionFocus');

            for (var z = 0; z < eles.length; z++) {
              eles[z].className = "positionOrgin";
            }

            var ele = document.getElementById(id).className = "positionFocus";
            var eleupdate = document.getElementById('noActionZoneImage');
            eleupdate.className = "noActionZoneBackgroundImageFocus";
            document.getElementById('pop1').style.display = "inline-block";
            document.getElementById('pop2').style.display = "inline-block";
            document.getElementById('pop3').style.display = "inline-block";
            var spanText;

            switch (e.target['id']) {
              //Projects
              case 'spanP1':
                spanText = "JavaScript Robotics & Computer Vision Project\n(JSmpeg, opencv, python )";
                break;

              case 'spanP2':
                spanText = "Security Camera Systems - Object Recognition";
                break;

              case 'spanP3':
                spanText = "Audio Notecards";
                break;

              case 'spanP4':
                spanText = "Zmovies";
                break;
              //Games

              case 'spanG1':
                spanText = "Stick vs Zombie - HTML5(mobile) Game";
                break;

              case 'spanG2':
                spanText = "Turkey Bay - Phaser Game";
                break;

              case 'spanG3':
                spanText = "Dungeon Kids";
                break;

              case 'spanG4':
                spanText = "Arcade Island";
                break;
              //Freelance

              case 'spanF1':
                spanText = "Dawg Tutors";
                break;

              case 'spanF2':
                spanText = "Meza Mechanical";
                break;

              case 'spanF3':
                spanText = "Lydia Harris";
                break;

              case 'spanF4':
                spanText = "SEW Inc";
                break;

              case 'spanF5':
                spanText = "LEG Consulting";
                break;
              //Corporate Starts here

              case 'spanC1':
                spanText = "Accenture\nSystem Developer Senior Analyst\nCost Model Tool";
                break;

              case 'spanC2':
                spanText = "MicroTrain Technologies\nWeb Dev\nCoding Bootcamp";
                break;

              case 'spanC3':
                spanText = "Wyzant\nIT Tutor\n Core Java, Web Development";
                break;

              case 'spanC4':
                spanText = "American Robotics Academy";
                break;

              case 'spanC5':
                spanText = "TX Computers";
                break;
            }

            document.getElementById('noActionZoneText').innerText = spanText;
          } else if (this.focusEle == id) {
            this.focusEle = null;
            var eleupdate = document.getElementById('noActionZoneImage');
            eleupdate.className = "noActionZoneBackgroundImage";
            var ele = document.getElementById(id).className = "positionOrgin";
            document.getElementById('noActionZoneText').innerText = "";
            document.getElementById('pop1').style.display = "none";
            document.getElementById('pop2').style.display = "none";
            document.getElementById('pop3').style.display = "none";
          } // document.body.scrollIntoView({behavior: "auto"});

        }
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)();
    };

    ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["app-projects"]],
      decls: 79,
      vars: 0,
      consts: [["id", "categoriesContainer"], [1, "selectCat"], ["name", "cars", "id", "selectCat", 1, "selectCat"], ["value", "Showtimes"], ["value", "Corporate"], ["value", "Freelance"], ["value", "Games"], ["value", "Projects"], ["id", "noActionZoneText", 1, "noActionZoneText"], ["id", "noActionZoneImage", 1, "noActionZoneBackgroundImage"], ["id", "pop1", "src", "https://media0.giphy.com/media/KAeUm0GNLIP3VNOFu9/giphy.gif?cid=6c09b952cl2kz4hbpn2hdifu0lpx8vczm9fyms2q5y8r9vfo&rid=giphy.gif", "alt", "Girl in a jacket", "width", "12%", "height", "12%", 2, "top", "75%", "left", "3%", "position", "fixed", "opacity", "1"], ["id", "pop2", "src", "https://media0.giphy.com/media/KAeUm0GNLIP3VNOFu9/giphy.gif?cid=6c09b952cl2kz4hbpn2hdifu0lpx8vczm9fyms2q5y8r9vfo&rid=giphy.gif", "alt", "Girl in a jacket", "width", "12%", "height", "12%", 2, "top", "66%", "left", "23%", "position", "fixed", "opacity", "1"], ["id", "pop3", "src", "https://media0.giphy.com/media/KAeUm0GNLIP3VNOFu9/giphy.gif?cid=6c09b952cl2kz4hbpn2hdifu0lpx8vczm9fyms2q5y8r9vfo&rid=giphy.gif", "alt", "Girl in a jacket", "width", "12%", "height", "12%", 2, "top", "68%", "left", "36%", "position", "fixed", "opacity", "1"], ["id", "soda1", "src", "/assets/soda.png", "alt", "Girl in a jacket", "width", "3%", "height", "6%", 2, "top", "68%", "left", "36%", "position", "fixed", "opacity", "1"], ["id", "soda2", "src", "/assets/soda.png", "alt", "Girl in a jacket", "width", "3%", "height", "6%", 2, "top", "78%", "left", "18%", "position", "fixed", "opacity", "1"], ["id", "candy1", "src", "/assets/candy1.png", "alt", "Girl in a jacket", "width", "4%", "height", "13%", 2, "top", "65%", "left", "6%", "position", "fixed", "opacity", "1"], ["id", "showtimestxt"], ["src", "assets/showtimes.png", "id", "showtimesimg", 1, ""], ["id", "scroller", 1, "scroller"], ["id", "spanSwipe", 1, "positionOrgin"], ["id", "spanC1", 1, "positionOrgin"], ["id", "spanC2", 1, "positionOrgin"], ["id", "spanC3", 1, "positionOrgin"], ["id", "spanC4", 1, "positionOrgin"], ["id", "spanC5", 1, "positionOrgin"], ["id", "spanP1", 1, "positionOrgin"], ["id", "spanP2", 1, "positionOrgin"], ["id", "spanP3", 1, "positionOrgin"], ["id", "spanP4", 1, "positionOrgin"], ["id", "spanG1", 1, "positionOrgin"], ["id", "spanG2", 1, "positionOrgin"], ["id", "spanG3", 1, "positionOrgin"], ["id", "spanG4", 1, "positionOrgin"], ["id", "spanF1", 1, "positionOrgin"], ["id", "spanF2", 1, "positionOrgin"], ["id", "spanF3", 1, "positionOrgin"], ["id", "spanF4", 1, "positionOrgin"]],
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select a category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "All Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Corporate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Freelance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Games");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "and More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "h5", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "article", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#categoriesContainer[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    position: fixed;\r\n    display: inline-block;\r\n    width: 100%;\r\n    z-index: 2;\r\n     top: 10%;\r\n    \r\n}\r\n\r\n.selectCat[_ngcontent-%COMP%]{\r\n    margin: auto auto;\r\n    display: block;\r\n    \r\n\r\n    text-align: center;\r\n}\r\n\r\n.scroller[_ngcontent-%COMP%] {\r\n    padding-top: 25%;\r\n    overflow-x: hidden;\r\n    overflow-y: hidden;\r\n\r\n    background-color: rgb(142, 144, 115);\r\n    \r\n    \r\n}\r\n\r\n#pop1[_ngcontent-%COMP%], #pop2[_ngcontent-%COMP%], #pop3[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n\r\n.noActionZoneText[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    \r\n    \r\n    font-weight: bold;\r\n    position: fixed;\r\n    touch-action: none;\r\n    width: 100%;\r\n    height: 100%; \r\n    color: blue;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: xxx-large;\r\n    text-align: center;\r\n    z-index: 1;\r\n\r\n     \r\n    \r\n}\r\n\r\n.noActionZoneBackgroundImage[_ngcontent-%COMP%]{\r\n    padding-left: 1%;\r\n    top: 20%;\r\n    display: inline-block;\r\n    position: fixed;\r\n    width: 50%;\r\n    height: 70%;\r\n    background-image: url('/assets/movie2.png'); \r\n    background-size: 95% 100%;\r\n    background-position:center bottom;\r\n    background-repeat: no-repeat;\r\n    opacity: 1;\r\n    -webkit-animation-name: noActionAnime;\r\n            animation-name: noActionAnime;\r\n    -webkit-animation-duration: 3s;\r\n            animation-duration: 3s;\r\n}\r\n\r\n@-webkit-keyframes noActionAnime {\r\n    0%   {    opacity: .4;   }\r\n    100% {    opacity: 1; }\r\n  }\r\n\r\n@keyframes noActionAnime {\r\n    0%   {    opacity: .4;   }\r\n    100% {    opacity: 1; }\r\n  }\r\n\r\n.noActionZoneBackgroundImageFocus[_ngcontent-%COMP%]{\r\n    opacity: .2;\r\n    padding-left: 1%;\r\n    top: 20%;\r\n    display: inline-block;\r\n    position: fixed;\r\n    width: 50%;\r\n    height: 70%;\r\n    background-image: url('/assets/movie2.png'); \r\n    background-size: 95% 100%;\r\n    background-position:center bottom;\r\n    background-repeat: no-repeat;\r\n\r\n    -webkit-animation-name: noActionAnimeFocus;\r\n\r\n            animation-name: noActionAnimeFocus;\r\n    -webkit-animation-duration: 6s;\r\n            animation-duration: 6s;\r\n\r\n}\r\n\r\n@-webkit-keyframes noActionAnimeFocus {\r\n    0%   {    opacity: 1;   }\r\n    100% {    opacity: .2; }\r\n  }\r\n\r\n@keyframes noActionAnimeFocus {\r\n    0%   {    opacity: 1;   }\r\n    100% {    opacity: .2; }\r\n  }\r\n\r\n.scroller[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    height: 30vh;\r\n    \r\n    width: 30%; \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n\r\n.positionOrgin[_ngcontent-%COMP%]{\r\n     margin: auto;    \r\n     \r\n     left: 40%;\r\n    background-color: red;\r\n    transform: skewY(20deg); \r\n    z-index: 2;\r\n    border: 1px solid;\r\n    box-shadow: 5px 10px;\r\n    opacity: 1;\r\n    -webkit-animation-name: exampleOrgin;\r\n            animation-name: exampleOrgin;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n}\r\n\r\n@-webkit-keyframes exampleOrgin {\r\n    0%   {transform: skewY(0deg); left: -25%;}\r\n    25%  {transform: skewY(5deg); }\r\n    50%  {transform: skewY(10deg); }\r\n    75%  {transform: skewY(15deg); }\r\n    100% {transform: skewY(20deg); left:  40%;}\r\n  }\r\n\r\n@keyframes exampleOrgin {\r\n    0%   {transform: skewY(0deg); left: -25%;}\r\n    25%  {transform: skewY(5deg); }\r\n    50%  {transform: skewY(10deg); }\r\n    75%  {transform: skewY(15deg); }\r\n    100% {transform: skewY(20deg); left:  40%;}\r\n  }\r\n\r\n.positionFocus[_ngcontent-%COMP%]{\r\n    margin: auto;    \r\n    opacity: .1;\r\n    left:  -25%;\r\n    background-color: blue;\r\n    transform: skewY(0deg);\r\n    z-index: 2;\r\n\r\n    -webkit-animation-name: exampleFocus;\r\n\r\n            animation-name: exampleFocus;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n\r\n    border: 1px solid;\r\n    box-shadow: 5px 10px;\r\n}\r\n\r\n\r\n\r\n@-webkit-keyframes exampleFocus {\r\n       0%   {transform: skewY(20deg); left: 40%; opacity: 1;}\r\n       25%  {transform: skewY(15deg); opacity: 1;}\r\n       50%  {transform: skewY(10deg); opacity: 1;}\r\n       75%  {transform: skewY(5deg); left:  -25%; }\r\n       100% {transform: skewY(0deg);  opacity: .1;}\r\n}\r\n\r\n@keyframes exampleFocus {\r\n       0%   {transform: skewY(20deg); left: 40%; opacity: 1;}\r\n       25%  {transform: skewY(15deg); opacity: 1;}\r\n       50%  {transform: skewY(10deg); opacity: 1;}\r\n       75%  {transform: skewY(5deg); left:  -25%; }\r\n       100% {transform: skewY(0deg);  opacity: .1;}\r\n}\r\n\r\n#spanSwipe[_ngcontent-%COMP%]{\r\n   \r\n     background-image: url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia2.giphy.com%2Fmedia%2Ff4CD1cUA8tCsbM4WVg%2Fsource.gif&f=1&nofb=1'); \r\n    background-size: 100% 100%;\r\n    background-color: #f3dced;\r\n    font-size: x-large;\r\n\r\n}\r\n\r\n#spanF1[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/dawg.png');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanF2[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/meza.png');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanF3[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/lydia.png');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanF4[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/sew.png');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanF5[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/leg.png');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanP1[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/yt.png');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanP2[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/bp.png');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanP3[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/notecard.png');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanP4[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/zmovies.png');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanG1[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/stick.png');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanG2[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/turkeybay.png');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanG3[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/dk.png');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanG4[_ngcontent-%COMP%]{\r\n    background-image: url('/assets/arcade.png');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanC1[_ngcontent-%COMP%]{\r\n    background-image: url('data:image/png;base64,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');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanC2[_ngcontent-%COMP%]{\r\n    background-image: url('data:image/jpeg;base64,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');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanC3[_ngcontent-%COMP%]{\r\n    background-image: url('data:image/jpeg;base64,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');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanC4[_ngcontent-%COMP%]{\r\n    background-image: url('https://yt3.ggpht.com/ytc/AKedOLQuUYAwDaHTKGLWdLto-v6dKfPFGCxTEt_94OJw=s176-c-k-c0x00ffffff-no-rj');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#spanC5[_ngcontent-%COMP%]{\r\n    background-image: url('data:image/jpeg;base64,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');\r\n    background-size: 100% 100%;\r\n}\r\n\r\n#showtimesimg[_ngcontent-%COMP%]{\r\n    height: 30vh;\r\n    width: 30%; \r\n    margin: auto;\r\n    left: 55%;\r\n    top: 10%;\r\n    position: absolute;\r\n}\r\n\r\n#showtimestxt[_ngcontent-%COMP%]{\r\n    height: 30vh;\r\n    width: 30%; \r\n    margin: auto;\r\n    left: 55%;\r\n    top: 10%;\r\n    position: absolute;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxVQUFVO0tBQ1QsUUFBUTtJQUNULGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYzs7O0lBR2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7O0lBRWxCLG9DQUFvQzs7SUFFcEM7OztvQ0FHZ0M7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksU0FBUztJQUNULDZCQUE2QjtJQUM3QjtnQ0FDNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixVQUFVOzs7O0FBSWQ7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsVUFBVTtJQUNWLFdBQVc7SUFDWCwyQ0FBMkM7SUFDM0MseUJBQXlCO0lBQ3pCLGlDQUFpQztJQUNqQyw0QkFBNEI7SUFDNUIsVUFBVTtJQUNWLHFDQUE2QjtZQUE3Qiw2QkFBNkI7SUFDN0IsOEJBQXNCO1lBQXRCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVUsV0FBVyxJQUFJO0lBQ3pCLFVBQVUsVUFBVSxFQUFFO0VBQ3hCOztBQUhGO0lBQ0ksVUFBVSxXQUFXLElBQUk7SUFDekIsVUFBVSxVQUFVLEVBQUU7RUFDeEI7O0FBSUY7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFVBQVU7SUFDVixXQUFXO0lBQ1gsMkNB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QUNJLHVDQUF1QztJQUN2QywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwyQ0FBMkM7SUFDM0MsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksKzJKQUErMko7SUFDLzJKLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGd2UUFBZ3ZRO0lBQ2h2USwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSw0MEpBQTQwSjtJQUM1MEosMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksMEhBQTBIO0lBQzFILDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDRyUUFBNHJRO0lBQzVyUSwwQkFBMEI7QUFDOUI7O0FBS0E7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7SUFDWixTQUFTO0lBQ1QsUUFBUTtJQUNSLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLFNBQVM7SUFDVCxRQUFRO0lBQ1Isa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjYXRlZ29yaWVzQ29udGFpbmVye1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgIHRvcDogMTAlO1xyXG4gICAgLypsZWZ0OiAxNSU7ICovXHJcbn1cclxuXHJcbi5zZWxlY3RDYXR7XHJcbiAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgXHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2Nyb2xsZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDI1JTtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQyLCAxNDQsIDExNSk7XHJcbiAgICBcclxuICAgIC8qICAjODQwMDMyICAjRTRCQjk3XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBzY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTsgKi9cclxufVxyXG5cclxuI3BvcDEsI3BvcDIsI3BvcDN7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubm9BY3Rpb25ab25lVGV4dHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL21vdmllLnBuZycpOyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlOyovXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogeHh4LWxhcmdlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTtcclxuXHJcbiAgICAgXHJcbiAgICBcclxufVxyXG5cclxuLm5vQWN0aW9uWm9uZUJhY2tncm91bmRJbWFnZXtcclxuICAgIHBhZGRpbmctbGVmdDogMSU7XHJcbiAgICB0b3A6IDIwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9tb3ZpZTIucG5nJyk7IFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiA5NSUgMTAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyIGJvdHRvbTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IG5vQWN0aW9uQW5pbWU7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG5vQWN0aW9uQW5pbWUge1xyXG4gICAgMCUgICB7ICAgIG9wYWNpdHk6IC40OyAgIH1cclxuICAgIDEwMCUgeyAgICBvcGFjaXR5OiAxOyB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG4ubm9BY3Rpb25ab25lQmFja2dyb3VuZEltYWdlRm9jdXN7XHJcbiAgICBvcGFjaXR5OiAuMjtcclxuICAgIHBhZGRpbmctbGVmdDogMSU7XHJcbiAgICB0b3A6IDIwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9tb3ZpZTIucG5nJyk7IFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiA5NSUgMTAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyIGJvdHRvbTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gICAgYW5pbWF0aW9uLW5hbWU6IG5vQWN0aW9uQW5pbWVGb2N1cztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNnM7XHJcblxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG5vQWN0aW9uQW5pbWVGb2N1cyB7XHJcbiAgICAwJSAgIHsgICAgb3BhY2l0eTogMTsgICB9XHJcbiAgICAxMDAlIHsgICAgb3BhY2l0eTogLjI7IH1cclxuICB9XHJcblxyXG4uc2Nyb2xsZXIgc3BhbiB7XHJcbiAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICAvKiBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjsgKi9cclxuICAgIHdpZHRoOiAzMCU7IFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcblxyXG4gIFxyXG4gIC5wb3NpdGlvbk9yZ2lue1xyXG4gICAgIG1hcmdpbjogYXV0bzsgICAgXHJcbiAgICAgLyogbWFyZ2luLXJpZ2h0OiAwcHg7ICovXHJcbiAgICAgbGVmdDogNDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WSgyMGRlZyk7IFxyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDEwcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGV4YW1wbGVPcmdpbjtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbn1cclxuQGtleWZyYW1lcyBleGFtcGxlT3JnaW4ge1xyXG4gICAgMCUgICB7dHJhbnNmb3JtOiBza2V3WSgwZGVnKTsgbGVmdDogLTI1JTt9XHJcbiAgICAyNSUgIHt0cmFuc2Zvcm06IHNrZXdZKDVkZWcpOyB9XHJcbiAgICA1MCUgIHt0cmFuc2Zvcm06IHNrZXdZKDEwZGVnKTsgfVxyXG4gICAgNzUlICB7dHJhbnNmb3JtOiBza2V3WSgxNWRlZyk7IH1cclxuICAgIDEwMCUge3RyYW5zZm9ybTogc2tld1koMjBkZWcpOyBsZWZ0OiAgNDAlO31cclxuICB9XHJcblxyXG4ucG9zaXRpb25Gb2N1c3tcclxuICAgIG1hcmdpbjogYXV0bzsgICAgXHJcbiAgICBvcGFjaXR5OiAuMTtcclxuICAgIGxlZnQ6ICAtMjUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIHRyYW5zZm9ybTogc2tld1koMGRlZyk7XHJcbiAgICB6LWluZGV4OiAyO1xyXG5cclxuICAgIGFuaW1hdGlvbi1uYW1lOiBleGFtcGxlRm9jdXM7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG5cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDEwcHg7XHJcbn1cclxuXHJcbi8qIEBrZXlmcmFtZXMgZXhhbXBsZUZvY3VzIHtcclxuICAgICAgICAwJSAgIHt0cmFuc2Zvcm06IHNrZXdZKDIwZGVnKTsgbWFyZ2luLXJpZ2h0OiAwcHg7fVxyXG4gICAgICAgIDI1JSAge3RyYW5zZm9ybTogc2tld1koMTVkZWcpOyBtYXJnaW4tcmlnaHQ6IDUwcHg7fVxyXG4gICAgICAgIDUwJSAge3RyYW5zZm9ybTogc2tld1koMTBkZWcpOyBtYXJnaW4tcmlnaHQ6IDEwMHB4O31cclxuICAgICAgICA3NSUgIHt0cmFuc2Zvcm06IHNrZXdZKDVkZWcpOyBtYXJnaW4tcmlnaHQ6ICAxMjBweDt9XHJcbiAgICAgICAgMTAwJSB7dHJhbnNmb3JtOiBza2V3WSgwZGVnKTsgbWFyZ2luLXJpZ2h0OiAgbm9uZTt9XHJcbn0gKi9cclxuXHJcblxyXG5cclxuQGtleWZyYW1lcyBleGFtcGxlRm9jdXMge1xyXG4gICAgICAgMCUgICB7dHJhbnNmb3JtOiBza2V3WSgyMGRlZyk7IGxlZnQ6IDQwJTsgb3BhY2l0eTogMTt9XHJcbiAgICAgICAyNSUgIHt0cmFuc2Zvcm06IHNrZXdZKDE1ZGVnKTsgb3BhY2l0eTogMTt9XHJcbiAgICAgICA1MCUgIHt0cmFuc2Zvcm06IHNrZXdZKDEwZGVnKTsgb3BhY2l0eTogMTt9XHJcbiAgICAgICA3NSUgIHt0cmFuc2Zvcm06IHNrZXdZKDVkZWcpOyBsZWZ0OiAgLTI1JTsgfVxyXG4gICAgICAgMTAwJSB7dHJhbnNmb3JtOiBza2V3WSgwZGVnKTsgIG9wYWNpdHk6IC4xO31cclxufSBcclxuXHJcbiNzcGFuU3dpcGV7XHJcbiAgIC8qIGJhY2tncm91bmQtaW1hZ2U6ICB1cmwoJ2h0dHBzOi8vZXh0ZXJuYWwtY29udGVudC5kdWNrZHVja2dvLmNvbS9pdS8/dT1odHRwcyUzQSUyRiUyRmNkbjQuaWNvbmZpbmRlci5jb20lMkZkYXRhJTJGaWNvbnMlMkZnZXN0dXJlLXZlY3Rvci1pY29uLXNldCUyRjUxMiUyRmZsaWNrX3VwLnBuZyZmPTEmbm9mYj0xJyk7Ki9cclxuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vZXh0ZXJuYWwtY29udGVudC5kdWNrZHVja2dvLmNvbS9pdS8/dT1odHRwcyUzQSUyRiUyRm1lZGlhMi5naXBoeS5jb20lMkZtZWRpYSUyRmY0Q0QxY1VBOHRDc2JNNFdWZyUyRnNvdXJjZS5naWYmZj0xJm5vZmI9MScpOyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZGNlZDtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuXHJcbn1cclxuXHJcbiNzcGFuRjF7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvZGF3Zy5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG59XHJcblxyXG4jc3BhbkYye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL21lemEucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxufVxyXG5cclxuI3NwYW5GM3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9seWRpYS5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG59XHJcblxyXG4jc3BhbkY0e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3Nldy5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG59XHJcblxyXG4jc3BhbkY1e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2xlZy5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG59XHJcblxyXG4jc3BhblAxe1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3l0LnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbn1cclxuXHJcbiNzcGFuUDJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvYnAucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxufVxyXG5cclxuI3NwYW5QM3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9ub3RlY2FyZC5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG59XHJcblxyXG4jc3BhblA0e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3ptb3ZpZXMucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxufVxyXG5cclxuI3NwYW5HMXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9zdGljay5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG59XHJcblxyXG4jc3Bhbkcye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3R1cmtleWJheS5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG59XHJcblxyXG4jc3Bhbkcze1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2RrLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbn1cclxuXHJcbiNzcGFuRzR7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvYXJjYWRlLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbn1cclxuXHJcbiNzcGFuQzF7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBT0VBQUFEaENBTUFBQUFKYlNKSUFBQUJIVkJNVkVYLy8vK3BGLzcvLy9uTWsrdisvUDJpQVBmLysvLzgvL3YvOFAvLy8vMmhLOTZvRS82cEYvei8vUDcvK3YvLy8vaXZFLytwR1BqLzkvLy8vUG42L2YvNi8vaWFBTzZtR2Z6NS8vMzgvL1QvOWYvLzh2Ly82di8vLy9HbUd2ZjMvL0t3RmZXVEFPYnoxUGFvRyszc3h2VCs0LzJyQVArUkpjcWZBT3FzWXRldEFQK1pBT0twRytxWEFQS1hBT0drQU9xL29zNjVnTTMyL3VxcVU5WFlyK2JIaDltWUkvVEVodWIxMC9yZHRPK2JNZHY1Mi95VUROU3RaTlhpd3Vxak45ak5sZC9Sb2QrOWN0V21ROVNZQU5tN2VPT2tUdGF1YU02Uk44dTBYK1RUbyt1emVOaXJhdHFjSmVDYlF0blRudU9pUXN1VVByaTNhT1RtdmZPa1Y4bkRmZGJMYTkzTWNmT2xMdWJJbXR1VUxNdW1TTW1QSU5UWW0rWElnK1plditoWEFBQU5ERWxFUVZSNG5PMmRlMXZUeUJyQWt6VEpkSmhKTXBQckJObzB2Vm9vbExNRmxOSXFJQVZkWEhXUHJIdDJYZlQ3ZjR3elU4VEZjOVNsa0J0OTh2c0QvY05IODNNdWVkKzV2Skdra3BLU2twS1NrcEtTa3BLU2twS1NrcEtTa3BLU2twS1NrcEtTVkZCVTFWVVZBUEoranRSUVBRaUFxaHBxM2crU0dxSEtKTlVLTFNYdkIwa0w2Tm5zWHorMTFwUVJ6UHRSMG9MWnNOSWY3T3hXSlhqbENLOS9zeVJBUlZVcUdrSCtZSzlsaFk3RFhNZFZyR1ZTdkRLVVVSQ1J3ZnJ1YWhncUpuUGRaUnFWVjRaWVJ1Z3gydWhmUHRrM0dxT1FMVk0vdlRhVU1TRTRpclRaK3JpbWgwc2tlTjFMWlV3cHhRUmpQaUlQS2hQb1NUd0tnSXJpUFh6WGE4Ty9RWUUvZlhxeGFua3VnSktSOS9QZG4vODM1STRFK3dkSFhjbnpGTENNYlNoakhMVmowaHV1UDZzWm8wYmVEM2h2dm1tSVNSREZNUm9jOG9hYy82SDVqd2Zhbk4vcXBkZndXV2YydEdNeUhweXJIckRxVnQ0UGV5ZCtaRWlSSE5IK3lYRk5ZcU02ZEYxWXovdHA3OEtQREtNQWtTZ2kydkI1eDVTVU9vTVBzaEYvWkNpR1pJRDRxeEkxVDQ2N2RoZyt5SGZIUHhqU2VTUVFrWjQvZmRVeFBZVkpTdmpBNHZJZkc5NEFSYk8vanF1T3gxekpNQjVTWTk3ZVVNUUJ3OU9XeEpqbmVYay85Z0xjMmpDS0FobkhXdk5zdDJZQ2x2ZGpMOEN0RFhsTWpuQkVxZWJQUHUzYjh5amdZWXpIV3h0ZWRkWDVEMjE0TXE0QjFRa05GVWltQ1l1OUVMbVlvWUJpRlBUOWxmY3RuWWZtUE5ZcGVrc3Vib2g1N2tGRUhMQ3pXM1daNjFrRlgybGQzSkIzVlN5M3FZaGFWL1phYTBiUmwzUVdOK1FURHFWaXhTT1NlVU8rR0s5SklaQlV4YkpBTWJPUE83VGhWN3A0K1BKb29vZkFOVlZKTFdSL3ZhZWhUQWpxRDM4ZTJ3cjBRbVVaMjFCdVJ4akhzWDlRNmRvRlhiYTZyMkhBSjljbzRJSEFiTDFqWC8yTk9SdjlML2MxbkNNQ0FVeG5INDY2RWpNZFE0Yzhxb05PM21xZlNjUndia2xRNUErZlByTWwwRkFOeFNyTXhKcVlJU1U4RHNDOTVzdmpHbVNxWXhWbVBTQXhROHhCUWN4ejVkbnBNMXQzQ2hNSUpHWTRINHdJQlJFbVpQam12QXM5NkVwV1BjeTl1eVpuZUJQY243N3FHUFhRMVNYRDBKZlJrTWNCd2ZEc1kwMENuZ2R5WHZLQWlwR0NJYUtiYlJSclBGZGU1WXJMYUNqaWdCaGo2Zy9QanF2ek5zeHZNTUs2N1ZVSTRVbWZtQXlUTnBVRHBGMiszN2Nib2FPYUt1RHBjZzd6am02S1BXRGVxZVEwRE1VbXo5YnNiRnpsY1lDeUNtRWVocXBWNzd3Y0loS24wb2I4NzQxeDBQTWZIYlYweGd3MWp4MHNoeW5tMnNVdjA0Rm94TVFOZWVlbmJVUmpvalY1aWlVWmVSaXFyZ3NhSHB5Y0gvWjdtS2Z0QkNQKzNrN0tsY2M1U0taaTRZTnM5RjlYV3FwaU9hcWtoQ0JqMWZtL3RucnhycW1SbUNKS1UyaExXUVE4MjdQMWNkVVoxWFhiTkxJOURNbkh2NkV5VDVrY2ZkaENsRkNLVUNxT2hQUUdMNDhteGp3UXlMZ05PWTdCSGFzWDc2YVBBNUxHaUJURTdZREd6ZldPNlkyc1RFTWQ3cWNvRERxcUMwSjc4dE9qclFDbjA0ajhmNDRQUytvZjd0VysvTk9aaWw3OW9xNk9kNGErR0l3NHJSRVphY01YRjFXbEFaaGw1YkROdzZkV3U3WDMycWNvYXFmVVczbTZIQTBPSzEzVFk2NlovWEtIaUs2WVZCdi9OdFVRU2FrUmVkUks1YTNwODQ0OWFyaVpHMHFHcnF0c1pObWRKNWZObEJveEVOdVI3Vmp6RHovV3NvL2tHRlFzUzVYY0VNRGErS3pKWTRCWVREenpWM2RDVUN3aUtDSkh0TmNibm5ac3lFd3JORndHTWo1SXAwRFR0RnVmWnY0R2oxb3Bqd1dTRXZ3S3BEWGZISGN0eGtMSDFLVnNweDBBRFZQbEkzTDNaTEJCSXhxbjlBcUpZN1ExZTlVeFlXaTVNTXpVVU1RQnB0RUFrcjUvT3R2YVNpUDNFQ0RjYmdmeDRFUXNRMHBteG9aQUFjQTBIRDZwMTk3K091aWxZeWpTTmh4UjdMOSszc3JVNzRicC9LZis3SFNtVVN5aUFCU2tvb3A2ODMxbHg4bm5xQWZ6UEx2NzhkRGYzcVF5YnFkaUdFVWszdngzdFNIbHRBOEpQZUNHQmsreC9HMUNVakVVY2FLOFdSdmxkZlphTlhpeTdJVjY5ODgzemUyVTBpc2VCMnhXR3prZERZQU1XS0ZqdU1DRHF4ZW5QRmZtajRPUWFNd0VaU2ttSzFWRnozdFhCeXE2M1QwNjlIc2tqbmtxbWV5U0FGcXBBajMzSTBpS3c1OWg3ZUxwREcyMENTRTBzV0N1TUlaUWdVYkRrK1lONmNzazBTRlpCRU9SQ2JqTU5SUUhzdXA0WjNyVlNaUFNMSUxoTlZjNWp6N1pXL0UxS2djQlRpU1hMSkxoRlF3WXRmRk9VK1BKQjQyaVpUUjB2QWJQNmxxZlh2dVVKTkZWaTJlb0c2cHF1SjZ6ZHY3YjFGOUtRejZ4aHBicU1nK1krMDhPK0RzeWtPbWM1VEc4eGdCc3RYdDgxa1R6M09QT2E4cUZOdlNnSVptZDkwT2ZKM3M4TnI5Ykt4YlpFSHFlVlI4QnFYcDhNcURSWFpldENtd0lEUU1xbm02cUtqUDJUL21zYzdjTXE4Q0dOK0NoUU8zNHhFZUlVaVNPRkMrZm9WZ1FjS3F0MzZmYlBNNFJwOEtYMEJDRUlXRDEydHRmWjN4bVhVcERjZmxMblBicS9tZlI1UEVoR0hxV0k0a3dwdzVFVUw2VWhycXRlZzNRSGY5MjJROFdYblo4Q0lhNjE0RG01T2lEandsWlRrUFRXcjNZbVdsbyszRWdMLzVPTEt6aDlWMDk4U3FzL01GN0o0MUViTHA0Y0ZwUVE5VlNKRkZQeXdIT3hmcXdqKyt4WUZ4TVE4c3o3RlVEUWxqOTg2QWZMejcyaW0vb3FLd3hZbnJubmRndmZvelFnbUhNQXpBMElEQW5iOS80bElwejdQZGJqeXFXSVZDZ1lVa3VWUFRPNzFPdE42L2ZFOFQwWGh1cGhUSUVxbTVZTHBDNlBQeU1rdHBSTEpRaGo2OHR4VzY5R202Sjg1ckxhTWhEeis3NW0yWXYzbndjSmJiRm43L2hqZE05UEpXZmJlTllETC9rRGpIa2JjaThFRURvTXNkUnF1T1RwcC8wL21IdWhyQU9lZDZuaHFHenY3ZEM3eEJYRjk1UUFzd2JqYnphK2RsUTVBMUl2c2VydmFDR3JnZlc5dmNlOVpGWUVVM2wzR0pPaHVLdWkyVzVmSnBaRys4TU5TVE9oNHJLUEFrcThoNVBFS0l4L3FQcW1ka2JpcHNnTHVPaFdlWERnS1p6V2dqaktOcU1TYS81bHduTUhFNE5jeVNlMXphMWxFN1N5T0ljUDhiYThPbEZWVEhWN0F2OGpKUzExdEVqdnhlMzJ6UWx4MENtL1lQS2hJOTBhR1Iwb3ZibUphelZpL1daejBkZUpPNjRwU0tJL05uNk0xdGxJSlFNRDJaeVFCR0dvZUpKdW1vdzBEMWFHVnp0UWlSc2h6R2ZXWUtJWXEyL1VwbkE2MldRYk9BenArdWFvQkhhbmFlRGpYYUUwamxiS21aUFdSdnVYS3c2aXBmdC9PSkFIbGRiMHFSeTBDZDBHS0IwREJHS2tMYnlwT1ZZekZJTko5TnJDVHcwZzlXTEY5UFBXWHM2eDROeDVNOU94blk5ZE4yUUI0TnFOajFVc1N5UnRvZEs5K2dOZnptSU82QUJTbEpRMUE0bENNY1IzdGk2ZkRLUjZ0QTBnYWVBaklvd0dBWVByVjJtMkozVHkzNDZyL2I1WFl0TnNvR0dPK2UxYkU5MUMvZ01DcUJVZTN2b2E4a2VWN3NKa2dPMGRmbCszeHpWczc4dTQ0bWR6ZE9wRm0rMmd6UnlJMWtFb0hoN2RuSzh4anhMMTNPbzhGSjdlOUpFbU04djRrSjlLb1pJbXoxL3Byc3N0RVF4N1V5a2VFNExnSzVMUE9MdFBKODI3M2pDNEVlSXprQnBFTVFVb2VISngrdXJoMW5kUFJSWFZwMzZ5Sk9xdTJmRGZvUklrdWRodjRCbEVnZkluNTYyRE0vTCtOcUlBUnJRa1BUTysybWY0RURVMDB0RGtFWkJiL3Z3dkN0MmNGeVFiVDFpdzFQbnA3VTBVVmVmcG5UZkVOUCs3SmRuemdpNGhta2JHWmVTNUNuRStOTGZJTkg4ZUNoTk1IbUllTmZrNHcranVPZS9PYThwbG01QUQwakFndG5lR0lHNmxYeHRremxZM0ovZ21hMDJlM2RoNTFoVUNScHBHUVppbTAxckhsYTZTb1BwT1padlNjM3dzVXkycCsvR2RxaTZicDZsdjFJelJNZy8rSE5paHFIT0xNZkpzUWtUcnhORlVZQmpTdnF6ZDJOUkEwdW81VnJ1SzNsRFJEY2o1SDg0YXZHc3ZRaUZ2NU0xRkxkQk4wbXYrZk80cW9SMS9tNHZ3RTVnNG9ZOE1hcTBlRTRyYm1iRElwUlJUc2FRdjl2RmFrYzdGb1d3cXdwajBIVU5uaC9sYlNkSXhKQkVVVEF2bGZUNjA2UW9SVDIva0V3YjhtaWQ5dnl6NDFyWUtGeEIraVFNbzRERW15dlBPeVpncnBuOTBzcy9rSVFoNmpWM2RxdXdBVnpIVXBhbERVVU9JZzUzb1FoamYvYWxVa0RlbFR5L3hSME5SUm9wcWowZ0txbzlPRmxYZTFpRWUvUlNTbnJhOUtwaWg1Unh4WTVGdUtPaFNKTWpVV3BXY2ZPb3VySUlpeG55NFNjVyt1V0E5bnF6MDg2cTVabEtLR1ZmT1djUkZqTU1naWdPZ25iYzh3K1BjcWgrZENjVy9FYUpxR0NGdGVtTG5DcFkzWVVGZXlraC91Q3dNdEV0NWhxRmk4Kyt6V0tHVjVYa3JBWmppdk5RUGhoME84UDUvdUc4R21EMytxdkJEMklNQ201bGlPSjJnT1BtK29VTlFxVzRzK2EzdVpVaEliM2h5NzJXenQ4TGpCWHlReVEvNEJhR0NQVkZaVlU0cXV1cVl6VWUwaGZKQk44eC9Gd2RkLzZwcnV2cXVJYkVFNGNpckMwdHh2ZmE4TzhLeDJlN2EvbFVPRTZJN3hoK3JsS3RQZnFwWllncTFROGtmdmtXMysybEJHL056bzVGcFhFbnAwcmpDZkVkdzZ0cThXWWpkS0N0czN5cXhTZkUxNFpSSUNKUEVrZUQvQ3YrSjhYWGhpamFqTVJYRzU3djIxNmpBT3ZWU2ZDMUlTRkVtMzk1dy9NOGtQTzNSWkxpNis5YjBPM3BxNDR1anRLcHVYODlKVEdnNDFVME5COStwRm1rTCtBa0JsUkFSY014MmRnYW5qNWJOWlhDZk1Vb01SaUVUN2JKeHBjdlVTMmhvUUdQaHNPbm5WWEphemlHb2l4TjUveUNxemQyOTdvU3NCVjEva1VHdUh5TmVNM1N0ZDBObHRtdHBLU2twS1NrcEtTa3BLU2twS1NrcEtTa3BLU2twS1NrcEtTa3BLVGcvQmRNekZoWXVFeTRwUUFBQUFCSlJVNUVya0pnZ2c9PScpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbn1cclxuXHJcbiNzcGFuQzJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQW9IQ0JZV0ZSZ1dGaFlaR1JnWkdob1lHaHdhR1Jna0hCNFlIQndjR2lFWUdSd2NJUzRsSGg0ckh4Z2NKemdtS3k4eE5UVTFHaVE3UURzMFB5NDBOVEVCREF3TUVBOFFIaElTSGpFckpTczBORFEwUFRRME5EUTBORFEwTkRRME5EUTBORFEwTkRRME5EUTBORFEwTkRRME5EUTBORFEwTkRRME5EUTBORFEwTlAvQUFCRUlBT0VBNFFNQklnQUNFUUVERVFIL3hBQWJBQUVBQXdFQkFRRUFBQUFBQUFBQUFBQUFBZ01FQVFVR0IvL0VBRVFRQUFFREF3SURCZ0lIQkFnRkJRQUFBQUVBQWhFREJCSWhNUVZCVVFZVEltRnhnVEtoQnhRVmtiSEI4RE5DVXRFak5XSnljN08wNFRTU3NzTHhKQ1VtZFlML3hBQWFBUUVCQVFFQkFRRUFBQUFBQUFBQUFBQUFBUUlEQkFVRy84UUFJeEVBQXdBQ0F3QUNBZ01CQUFBQUFBQUFBQUVSQWlFREVqRUVRUk15SWxGaEZQL2FBQXdEQVFBQ0VRTVJBRDhBKzRoZFJkQytRZXd6VkdRZkpSQVdwekpDemtJRGtMb0M3Q1FnRUxUU2RJV2NCV01NRkFYb2k2QWdPTHNMc0lvQ2lvM1ZRaFhWV3F1RlFjaEZLRWhRRmxQWlRVS1NzaEFjUmRoZFFGVlRaVnE5elNkQUpNcXQ5TXRNRVFWUVFoRmMya0MwdXlBSTVjeXFvU0NrNmV5bkNrWE5Qd3R4SFJkYTRpWU8raDlFK3dRVW5NaU5ScUowL05jaENvRGlMc0lncFU1aEVUekUreTZ3RG5PM0tOL2RSVW10Sk1EVXFnNUNycXM1cTl6QzB3UVFWWlJvRnpYRUg0Zm1pVHNKVWVmQzZBcHZaQjhsZmM0U01KaU5abmYzVm1pMHpvcmFGY3RtQURJalg4bFdwb0dvTWNHdEpHKzNtRjFqWm5VQ0JPdlB5VkRIYXE0Qk5BNGltNWhHNEk5VmZiVzJRSm1PU0xGdHhFYlMyWlNGVEMxTWFNZ0R0TUZhT0lCbU9nR1g5bnA1d3FzYW13OHR3ODlsSnp0Z1Q2TGhhdGxsZEJvTWdtZGRGbnJQeWNYZFVhVVc5azNTOTFtNW95TWVZOVZXdW11OXdpU1FQTHAxSVhXTUpNRGRNbzNvcXYyUmhJVjlXMWMwU1lJOGxkYjJnYzJTVDdJc01tNUE4bEtZaTRqVWFFS3VvNHVNdU1sYTZ0RU5kaVRwSSs0bGFydTNhR2s0Z1FOQ0ZWZzJudndqeVZSNUxLWk93SjlBdU9iRytpMjJGWnJjc3VjY2lxcnVzSE9tSUVRcDFYVzNZcnNMRzJqc2N0TnBpZFlYTGFrSE9nbUZOdHc0c3g4b0pneXFXdEpNRGRWeXFCWGRMTG1rR3VnSGxLdW8xbWhrRWE2NlJ1cW4yemdKSSthbmEydVFrbUI1S3BaZHRJamsyekxDTDB2cURlcCtTTFhUSW5mRXlNcVUrN2dnWlFlV3MrcXpVWDR1RGh5V3Exc3MyaHhNQTdkWVVLbHJpNXJTZEhIZFJyS0psVFcwVjE2NWNaS2d4cE9naytRWHIxTFZtSkdJR202eThPcU5FZzZFN2Vma3E4SDIyL1NMSlRTTUwyY2lJVm4yYy9HZE9zVHF0UEVuRElEbUJxcC9YNGI4SkpBOXZWUlk0cHRObHVVVFJnc3JZUGRCTUFDZEZaZldvWkVHWm5RN3JQU3FPYVphWUswVjdlcDhUdGZ5OXVTaWp4ODJYZDlORm0ybmg0c1oxbVluMjl1aXpVWHdRUnlLbloyV1lrbUJ5ODFOMWtXdUFud3VNU3ExazBuQ0pxdloyNnVNbzBpRlhTYzdaczY4Z3ZSK3FOaUk5NTFWRmlBSE9FNjh2TVNxOEgyVmZwT3ltakc1aEJnZ2dyVDlua2pWMEgwVnZFSFJqMW1WZGJWOGh0cU4vd0RaWEhER3RNanljcGx0K0g2bkxVRGFPZm11MzFxd05rQ0R5OC9KWm0xbkYwZ21aMi9LT2kzM3RCemdJTzNMcXFsaTA0ZzZtcXk2M0xTMFk3ZnJkWVRXYUg1RGJZL3pWbGhidWFTWGFUK3VTa2JJVG9ZSFJHc21sRVJSTmtydXFNTlAzdHZ4L0pVV2xad0lidUQ4bHQ3c1JqRWhLZEpyZmhBbjVyVHh5ZVNkSW1rb2ViY3RjWEdSdit0Rk50azV6ZkU0ZzhnZHZmb3Q5ZXFHaVNsdldEaEk5RkZ4NDl0c3Zadzgranc5MCtLSS9GYUs5azBpUjRmd1ZOYTVjSHdOQURFZFZydkdGelNCdm9vbGpHa2czbFZzN2JOYUdnTk0rYXpWYW9hK1FQSXFkalJJa25UbEM3WHRNblNERTdxdXZGUkJSUFpaV3JRekljOXZkWkxLdVFRMkpCUDNMZTJtQTNIa29VN2RyVElHcTA4Y20weUpxTkZxSWk2R1R5ZUYzYnBERHFPWFVSK1M3ZjVaR2R1WG90OUsxWTB5MXNIMytVcTE3ZzBTVEFDNWRIMWpacXExR1ZqSE9wd1RxZXZUeldlbFl1a1RvUDFzdlNwdkRoSU1oWnExMld2eHhuYjExNkk4Y2ROaFpQYVIyNHN3NHlEQjVxMmhidGFOT2U1SzdYQnhNYnhvczlpSDY1VEhLZXFzeFdYZzI4ZlR0UVUyRUVnQTh0UG5ISmFIMUFHbDI4Q1ZtdXJQSXpNTFN5bUEwTjNBRWFvcldvSElqSGFYeGM3RWdhN1FxZUtUa09rYWVzNi9rdDlHMVkweUJyK3RsYTVvTzRsVHEzakd4MlNkU01scGs2bVFaMWtBK1NvWmFPeTFFRHJwOGw2TENEdDhsVld1QTBnRUk4RkUyL0FzblhCWHRnNHpxRHNwMGFRYUlDazRtREcvSlo3UXUxeTI4OTVXdEorYkp1RjVEUVowQlBwcXBxaTR0ZytKSkVLNEJWV2dxcDNEWE9MUnVFdVhPQThPNnNhd0NTQnZ1cEpISlFRcHlRSjM1cWhsckRzcDV5dFNpNTRFVHpNSTBuTDlEWXEwdzRRVnlqU0RSQVUxQmhkcklFVHBIVHpTSzBoSXRDNm9WV1pDSkk5TjFNS2dnMnFDUzJkUXUxSEVBa0NUMFhRMFRNYXJxYkJDbVNRSkVGVm0zOFdXUjlQeVY2S1MrbENJaW9NdmRQN3pMTHdSdHIwL25yS3VxMHc1cGFkaXBsd0c2Nm9rQ3Uzb2hvZ1QxMVU4Uk14cjFYR3UxT2tSejZvOEVqUXdlcXVrdEVKS0ljTnAxWFZ3TUV6R3UwK1NBUGRBSmlZUmpwQU1FVHlLa2lBcGVINUFnakhtRmE0U0lYVVNBcXQ2QVlJSHFwdVlEdUFWMlYwcEZCUWlCY0xCTTgwQjBxTEhTSjFIcnVwSXFDSm5UNXFTSWdPTmJDNmlJQWlJZ0NJaUFJaUlBaUlnQ0lpQTVDNmlJQWlMRnhlOE5LaStvQkphTlBVa0FUNVNWTW1rcXlOeFUyb3Z6MjI3UjEydURuUExoUGlhUUlJNWdRTkQwaGZvUzVjUExqeUp6Nk00Y2l5OENJaTdHd2lJZ0NJaUFJaUlBaUlnQ0lpQUlpSUFpSWdDSWlBSWlJQWlJZ0NJaUFJaUlETHhIaURLREMrbzZHajd5ZWpSeksrSHVlM3phbVRQcTJWTjB0T1Q0SmFlb0RTQWZkWGR0blBxVm0waEpnTkRXOVhPUC9nTHlUMllvaDJEcnhqYS9OcGI0UTcrSEtkLzFDOHJ5NWVUTEpjYThQTnljanNUaDZmQWJlenFQRG11Zm1ETGFWUnpRMGthNkVOOFVSc2Rlb1gxYmVMZ094ZTB0UFBuK2d2ek82NGZVb1B4cU54TzdTRDRYRCtKcnVmNHI2bDF3NTFyVHFWUGpEaTFyanU5a2JuM25YeTgxNDh1VGs0MDNocHJiVTB6MGZENjU1L2p5WHY5SDJyWEFpUVpCVWw4OTJWdkM0T2FmM1lJOURNL01mTmZRaGZRNE9YOHVDeS9zNjh2RytQTjR2NkNMNFBnM2FLK3ZnOXR1MmpUTktwVXAxS3IyUExaYTV3WlRwc0RwYzdIRnpuRXdNdEFxbWRxTCtuY09zS2xLbFV1M0JycUQyNXRvdXBuS2FsWUdYTkRjVG9Oem9PcDlIUm5LbjZDdkp2T01ZWFZDMjdzdTc1dFIyWU9qY0FEQkVhelBWZlBYL0ZyK3lmU2ZjdXQ2MXUrbzJrODAyUFk2bVhtR3U4VGlDMmQrZXk5amlYR1gwNzYxdG1odmQxMlYzUEpCeUJwdEJHSm1BTmRaQjlrNmludm92a2VLY2V1S2wwNnpzV1V5K2tHdXIxcXVSWlR5MURHdGJxNTVHdlRUMWlpdHhxOXM2MUlYdmMxYmV1OXRKdGFrMXpYTXF1bkVWR3VKQmFZM0cwSDBMcXhUN1ZGOFZ4bnRmVm8zcjdSbEp0VjVwVTNVR05rUGZVY1haWnZKeGF4cldseE1jdDlWTzU3UVhkcmJ0TjFUcFZMdXRWN3UzbzI1ZUd1bHJZRGkvVVFjaVRxSUxkZWpxeFQ3SlFxUERXbHgyYUNUNkFTVjhoVUhHYWJPOHlzNmp4NG5VR3NxQ1J1V3NxRjN4ZEpFVDFWWEUrMGR4Y1dEYmpoOUZyM3ZjNWxWbFdBYWJRMXdlRDQyK0lPQTlRWmhPb3A5QjJkN1JXOTZ4ejdkNWN4cnNTUzF6ZkZBTVE0ZENGNjYvRVBvZ3VyOW94dDZOTjFzNnUzdm51akpuaGJPSTd4djdzZnVuZGUxeFA2VExpamVYTnNLTEttRGpUb01ZeCticWhjME56SWNaQWFYR0EwRWtBYUt2RGVoVDlWUmZuQjdaM2xwWlZMamlGQU5yR3FHVUdOQWFIUzNLWEVGMEFRNmVlZ0hOWUc5b2VQbWo5WkZ0UTd2SHZNY2ZGaEdVaG5lWjdheHVuUmluNlh4VzlGR2hWckVTS2ROOVFpWWtOYVhSUExiZGVSMks3VGppRkI5ZHRNMHcyb2FlSmNIRXcxanBrQWZ4eEhrc1BBKzJKdXVHMXJ0akEycFNaVnlZNlhORlJqTXgwSmFRV25rZFNKNXJCMlg3WjNGend5NnZYdHBpcFFOYkJyV3ZERGhTYlVHUUxpVHE0ekJHaWRkQ24zNkw4bjROMjU0bmZVZ0xXMnBHcTBudmFqcGJTYUQ4TEdCNzlYRUNUcWQ5dWE5UHNQMjN1YTExVXNiMmsxbGRvY1dsb2pWc0VzY0pJSng4UWNEQkE5MGVERlAwVkY4OWVjUnF0ZTRoME1hWEFqRnVBTGM0RDNFWkF1N3NSSDhiUjBMdm9Rc3RRb1JFVUFYQ1YwTDVydHU5d29BTmtOTHdIUi9EQmdIeUxvK1MzaGoyeVNPWE55L2l3ZWNzTkZ6WnRmZFVxelNITkV0ZEJCaHpXdUxTWTlma09xL0piKzd6YzkvTnpuTy81aVQrYStqN0t1ZTI4cGluTU9rUEEyTEEwa2wzb1kxNnd2amVOMG5VYXRTazZRV09MUFliSDNFSDNYMHZpL0h4NHM4c1UvZG55T1RrLzZjTWNrcHMvWGIxMUdteGxBMGMrNmEzSEl5SnhpVE8vb1Y0OS9jT3F1eWNkdEFCb0FPZ0NsWjlvTFc2cHNxUHJ0cFZBMXJhakhnL0VCcVcveEE4bzh0aXZUNE5Xb1ZLbU5GcnFrQ1hWSENHdDZZZ2lTU2V2bVpYNWo1UHcvbWNuTGttcGpmVDlMOGY1ZnhlSEJOZnM5ZjZhdXpGbDNZYzV4QWMrSWFkOFI1ZWMvSUw2SUw0akVra3UrS2RaM2xmWGNPYzQwMmwyOEQxOS9aUGdmSVdkNGttb2ErVmcrM2R1dG56SDBaTkF0YWtEZTZ1U2ZNNXgrQUgzS05RZisvTS8rdWQvbnd2VTdJY0hmYTBIVTN1YTV6cTFXb0Mwa2pGN2k0RFVEV04xRThHcWZhUXZKWjNZdFRiNHk3UE0xQStZaU1ZODU4bDlXN1o0enovcFQvd0NBZC9pMFA4MXFseHordU9IZjRkMS8wTlhvZHMrRFB1N1kwYWJtaHhmVGRMaVEyR1BhODdBbVlCVGlQQjN2dnJXNUJhR1VXVjJ1Qkp5SnFOYUc0aUlJME15UWlhZ1BJK2puNCtJNWZIOW9WOHAzeDhPUHQ4VUw2Zmk5elFZeks0TEF6Sm84YmNobVREZElPczdMd09LOW43bGx5NjhzWDAyMUtqV3RyMHFvZDNkWEhScjVicTE0RWlmOTVxK3c3eTdyMG4zeG9zbzBIaXJUb1VTNTJWVnV6cXJuQVNHNndBSU02K1p4dWdqYVVnZU8xM0VlSnRsVGc5SmVKL0JPUDQvYkhEc3R1N3VjT21lQW4zeC9KZXJRNEs5dkVhdDJTekI5dXlpR3ljc211eUpJaUlqelUrMVhaOFhkTm9hODBxMUo0cVVhcmQyUEhNam0wOHg2ZEVxcUI3aStEN0hSSEZjUGcrdDNFZE1zUm5IbE1lMExWVnA4WmV6dWk2eXBreTExZGhxbDJKMHlaVElnUDlUSG92YzREd0tuYTJ6YmRrbG9Ec25PK0o3bmF1ZTQ5U1Q3YURrcDRENFg2Qi8rRXIvNC93RDJNV0hzdFFhN3RIZGx3QkxCVmUzeWRMR1NQL3k5dzkxNkhaYnNKeEN4dUIzVjFUTnE2bzExUnBuTjdHOHNTd2dPalNRNEwxK0Nka2ExSGl0eGZPZFROT3ExNGEwRjJZeWN3aklGc2Z1blk5RnB0VnVncytranRTeXhwVS82RmxhcFVjNFUydkV0R0lHVGlJay9FMFFJbkxkZVRmMlhHcWx2VWRXdWJlMllLYjNQWlNaTGcwTUpMY2lQQ1kwa08wNnIyZnBFN0hmYU5KZ2E4TXEwaTRzTHB4SWNCa3gwYWdIRnBrQXhHeThCdlpUak53enVMdStZMmdSaS9BQjFSemRQQ1NHTkpCR2hKZHJ6QlRHUkVaNXYwYWYxSnhEMXVQOEFUTVVmbysvcURpUHJkZjZhbXZXN0k5aWIrMm8zZHMrcFJOR3RTcU5ZR2x4L3BuTkRBOCtBRU54R29uMks5RHN4Mk1yMi9EYnF5ZSttYWxjMWNYTkw4Um5TYlRHVXRCMGMwN0E2UXIyV3lsSDBKTUgyYzR4cWE3NTgvQ3dhK3k4UWovNVUzekIvMFpINUw3ZjZQZXpsU3d0VFFxdVk1M2VQZkxDNkljR2lQRUFaOEpYbW5zYlcrMlJ4SE9uM1FCR011ei9ZR2x0amo4Um5mWlNxc2swZmFPdFdGd2NXTkxoRU9MUk9tMnF1UUl1Wm9JaUlBb1ZLWWNDMXdCQjBJSUJCSFFncWE0UWdhcGxzK0gwcVU5M1RZeWQ4V2dFK3BDOFB0UjJPdDcwaDdpYWRRQ0E5c2FnY250T2pnUFkrYTk1MWl3OGo5NS9tdWZVR2VmM3JlUEpsamwyVDJZL0hoT3MwZkM4UCtqZHJIZU80RG0vMldRVDk3aUI4MTl2dzZ3cDBXQmxNQURjbWRTZXBQTXEwV2pmUDcvOEFaU0Z1M3pXK1RtenovWm1NUGo4ZUdYWkxaRTJyQ2NpMXBQV0F0Q2dLUVVnRjUxaml2RWQyMnp6KytmazRaTk0xUXdTMDZOd0R6c2RTb2ZYQ1M3b0gwc1REbXlIVk1EejFBeE91Z1BTTjk0b05rdXhFa2h4UDlvREVIMXgwOUZGdG93VERXaklnblRjdE9RUHM3VmJJWVByanlIWll4bXdOeHlCQU5jMDlUT3VqUWVXNUd5bDllY015Y1kvcE1kQ0lMS21IaU02Z3lEcEVRVnY3aG44STY3Y3c3UDhBNmpQcXVWTGRwQkFhM1VPR3JaSGlNdWtjd1RxUnpRR1g2NldVYWxSelM4MCs4bHRKcExuWUU2TmFUcTR4dE81WFByem4wV1ZHdGN3MU83aHRScERtNWxvaDdRZEhBTzJuY0xWWjI0WXpFUnU1eGdRSmM0dU1Ea0pLdGN3SGNUcURyMUJrSDd3b0R6RzMxUTVuQUJ1WVl3bmJMdmU2aytLWERaMnplbm1yWDNEMnVjQ1drTkZNYkdTNTc4U2Q5QUJzTmQ5OU5kUnRtZUx3RHgvRnB2NnFSdDJRUmlJSUFJNmdiQXFnODY1dW40dmMwaHJoVHJFSFVnRmpzUWNaZ25SVGZYZUhPYUMzTHZBeVhCeEg3SHZDUTNMVFViQXJZTFZtT09EY1lMWWdSaTdVaU9oWFJRYU5jUk16NzQ0ejY0NmVpQXdzdm5PY3lNUTEyR1FNNVM1am55RE93eEEyNnEzN1IvOEFVZHgzVlg5bjN2ZVlmMFB4WTRaejhmUEdOdFYxOWkwMUdPaG9ESXhob3kwRG1nWlRvMEJ4MGozMUlXMUFZS3QwN3hrUkFleW0wUVNjbkZyY25hN2VMYlRRYjZxbjYrK1cvQkVnUDBPcDcwVXBicm9OenJQSUxjNjJZUzRsb2x3aDJtOFJ2OXcrNExvdDJhZUVhQUFhYkJwRGdQWWdGUUdWbDI3TEYwQTVsc1FkR1l1YzF3TStLY1JycHpFU0ZSOVllNFpOY0dsemJZN1NQRzl3Y0FKNkZlZzYwWVFRV05oeHlPbTU2bGROc3lNY1JFTkVSeWJxMGUzSlVHQzV1M05EaTJQRDNyamxrWkRJT0kxMG1mUWRGZXk1Y2FwYjRjSmMzWTVTMXJYVE14SGlPa2RGcE5CaG1XZ3prRHB2bDhYM3FuNm9POTd6d3pCQWhzSFhFRXVkT3VqZkwzZ0lRMW9pS0ZDSWlBSWlJQWlJZ0NJaUFJaUlBaUlnQ0lpQUlpSUFpSWdDSWlBSWlJQWlJZ0NJaUFJaUlBaUlnQ0lpQUlpSUFpSWdDSWlBSWlJQWlJZ0NJaUFJaUlBaUlnQ0lpQUlpSUFpaTk4Y2lmUlNVQVJSRXlkbzVkVjBpVUIxY3kxaEdpTkYxVUJBaTVrSmlkVUIxRVJBRVJFQVJFUUJFUkFFUkVBUkVRQkVVR3Zra1FkT29VQk5GRndNYWFGU0NvQzRTbUltWTFYVUJDbTZSTUVldTZqVURwR0pFYytxa0tyWnhrVDBWZDFjWWNwSldXMUMvWmVvTXBCc3h6VUxldmtKaUkzV1YxZCtYVHkvSkhrdE1KTTNsR3VCMlZWeTBsdWlyc21rVFA2S2R0d1RWTGF0ZHJkQ3JITzBueWxVMTdZT016SFZYUkNLMGFNOXRjbHhJSVVycGppQmoxMTFYZTlZMHhJQi9QelhhMWNORW4yQ24xdGo3MFRaTUNkK2FnS0l5eVVLTnlIR0loVjE3aHdjUU5JVmJ4bEtrN0RZaTgvNjA3eSs1Rm44aUwxWjZDTGtxRmFxR0NUTWVRWFF3V0lvc2ZJQjY2cW52SGQ1aklpSjIzOHYxMFVvTkM1S2pWWUhDRHNxTEY3TWNXblViOVo2cGRqNkxIM0FEc2NYRW5vTlB2VmpwalRkWkx5K3dJQUFKNStuODArMG1ZenJQU0R2NnJQWmVVc1pxb2gwZUlnbnkyQ1ZLVFhmRUpoZU8yL2ZPOCtVQ1BUcXJyM3ZIQ1MwaHZTUjk1aE95aGVycDZnZE95cWRkTkJpVm00WlRnRSszdW9YRnZpUnJvVDdvOG5LaEZZYmExYkZzNzlGWGIzT1JnajdsZmdJaU5GbHRjUTV3NXpBOUVkcUNrT1hkUndkdVFPU3ZvdUxtenNTUDBWRzlxTkRUTVNkaDVxdG5FR1JySVBTUHdUU2JySHE4S3JlemNIQW5ZYTc3clhjMjRjTmRDTmlzTDc1MlV0MEhROC9WY2RlT2NDSTlTQVZsUEZWRmp0TmxpUmlJODU5Vkc1ZUE1cDZiK2l3MjRKT2t5VmJWcE9idnpVN2EwaE5tMzYwMk4va1ZReTdNbWRRZmt1VzFBT0VrbmVORlVXZ09nN0EvSkhsbHBoSkU3cTV5RUFRUHhVYmVvOCtGdno1ZTZ2dktqTUNKQjZMUGFYUVpJSTBPdWlQOXRzTHpTSzYxSXRNSG10MzFKc1JKbnJQNUxGZFY4akkwQTBVdnJyb2lSNnhxaWVLYkRUWm9zUnFlcXN2UU1aNThsZ1k0NmFycm5FN2tsUlpmeGhldTZXOTU1THFvUlpyTlE3WjEydGU0azZHUURyMTBWOTdkTkxjV21TWStSbGVXVm9mYkVNRHBHc2Fldm10cHVReTBxYUtGL2kwQXRtTkpsWjZ0Y3VkbHNlVWNrczhjaGx0NTdUNXFkOFc1ZUdJaldOcDFSdHdhb2UrbzVzK0lqOWROMWp0cVdUZzJkK2Z6V3VoeFFOYmpqSkcydW51c0xLaGFRNEdDRkhOQkd5OXNjQUhBeUpqOWZjdFhETGRwYmtRSEh6NUx6Ymk3ZS80am9PaXJhOGpiUktrNmtJNGJxN210clNCb0NDWTlwVytwZU1MVEJtUkVhcndwVzYzdG5Gc2lORlZrOXdkVVhXdHpqSUlrYis2WEZ6bnlnQloybFgzVEdqSEV6MTE5Rks0SXFkRnc3WUg1YXFrcTIwdUEyWkcvTUt1dFVseGNvL1BRdlN5NHMzQnVValFiS0ZqUkRuR2VRbU9xcmZldWMyQ2RQVFZVTmRHeU9YUTNEYmYwbXRjTWRKR3kwMjl5d05Hc1FOUjUvbXZLYzRuY3o2cVZOaGNZQWtxcDcwT3VqUlJmaVE0ZXF0clY4bzBpRlJFYWRORllXREhLZFoyVVZrTEVjYTRqWWtlaTVLNDA2NjZycjNBblFRT2lGSVBhU05BVDEwVmF0ZFdjQVFEb2QxUktBdnVLR01hZ3lwV3JtZ25JZW0vNUxOS1NwZGttalJJNWJjdlJkbFZzT2lsS0ZKU2lqSzZnS0xuNG5mM2orSzBQL1l0L3ZmelJGdGZabC9SalhLdndvaWhUT0VSRkNuUXJhSHhOL3ZEOFVSQWF1SS90ZnVXMngrRi82NUlpMWo2WmZoaFhRaUxKb0JIYkZFVUlaeXVoY1JDblF0bkRQajlqK1NJdFkra2ZncmZFZlUvaW9vaWo5S3ZBaUlvQ3VweVVFUkFFUkVCYlQyVWtSQUVSRUIvLzJRPT0nKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG59XHJcblxyXG4jc3BhbkMze1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0NFQUFrR0J3MFFFQThRRUE4UUVCQVFEdzhTRnhBVkZnOE5FQkVQRmhFV0ZoVWRGaGNZSFNnZ0dCb25HeFVWSVRJaEpTa3JMaTR1R0I4ek9ETXRPQ2d0TGlzQkNnb0tEZzBPR2hBUUdpMGZIU1l0TFMwdEx5MHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExmL0FBQkVJQU9FQTRRTUJFUUFDRVFFREVRSC94QUFiQUFFQUFnSURBQUFBQUFBQUFBQUFBQUFBQWdVREJnRUVCLy9FQURBUUFBTUFBUUlGQWdVREJBTUJBQUFBQUFBQkFnTUZFUVF4UVZGaEVpRUdJckhCMFZKeDhCTWpRdUppa2VFVS84UUFHZ0VCQUFJREFRQUFBQUFBQUFBQUFBQUFBQUVGQWdNRUJ2L0VBQ29SQVFBQ0FnRUVBUVFCQkFNQUFBQUFBQUFCQWdNUkJBVVNJVEZCTWxGaHNTSVRJNkh3UW1MUi85b0FEQU1CQUFJUkF4RUFQd0RXVEprQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFFQ2VERFYxTVFuVlU5a2x6Ykl2YUtSdWZTRXVLNGU4VjFGeTVxWHMxL09hSXg1SzVLOTFaM0J0aU0wZ0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFFOEdHN3BSRXVxcDdLVnpiTWIzaWtkMGpmdEEwU09HbjFQYXMxTDNyOUs3VDQrcDV2bDh1Yzg2ajZXcWJiWk5jMGVPSmpwT1NWOHQvWjkwWThYbDJ3Vy9IeVJPbm4vRThQZUs2aTVjMUwyYS9IZEhwY2VTdVN2ZFgwMmIyeEdZQklBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBSjRjVlhVeENkVlQyU1hOc3h2ZXRJN3A5RGZ0QTBTT0duZDdWbHBlOWRFdTArUFBVODN5K1hPYWRSOUxWYTIxdWNiRUlGWnJtanh4TWRKeVN2bHY3UHVqcjRuS3RodCtFMW5UejdpZUh2SGRSY3VhbDdOZnptajBtUEpYSldMVm53MjdZellrQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBSjRNTjNVeEV1cXA3SkxtMllYdkZLemFSdjJnYUpQRFQ2cTJyTlM5NjZTdTAvbnFlZDVmTW5OT284VmFyVzJ0emhZZ0FBQlY2N284Y1RIU2NzcjViK3o3bzdPTHk1d1cvQ1luVFFPSzRlOFYxRnk1cVg3cjhkMGVqeDVLNUt4YXJheEd4SUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJQQmh2SlV4RXVxcDdLVnpiTmVUSlhIV2JXbndQUi9oMzRmamhvM3JhczFyNXE2U3UwK1BQVThaeitxWDVGLzRUcWtlb2JJcDRXT1NOdjJJeFpZdkg1Yzk2ZHFCdFlBQUFBU01iV2lFeEcxZHJ1aXh4TWRKeXl2bHY3VjNYME5uRDU5OEYvUG1QbUcySThQUGVKNGU4VjFGeTVxWHMxL09hUFc0c3RjbFl0V2R4S1dJMkFBQUFBQUFBQUFBQUFBQUFBQUFBRThHRzhsVEVTNnFuc3BYTnMxNU1sY2RadGVkUkE5SCtHOUFqaFo5VmJWbnBmTlhTVittZkhucWVMNmwxSzNKdDJ4NHIvdmx0clhTN0twbTRwSit6TXEzbXM3aEZvMjZ1U0d2Mjdsbml5eGVISmVrMVJOckFBSkdOcnhWTVJ0TkhMYWU3MjJ4R2doS3ExN1JZNG1PazVaWHkzOXE3cjZIZHdlYmJqMzEveG4yUFB1SjRlOGQxRnk1cVhzMC81N285ZGl5MXkxaTlaOERFYkFBQUFBQUFBQUFBQUFBQUFBQUo0TU41S21JbDFkUFpTdWJacnZrclNzMnRPb2c5dlIvaHZRSTRXZlZXMVo2WHpWelVyOU0vbnFlTDZsMUszSnQyeDRyRGJXdWwyVlRNQUFjVktmTXlyZWF6dUVXaUpkWEpEUlo0c3NYajh1UzlPMUZJenRidFl4RzAwY3RyYmx0MW9NVWhJQVZXdmFMSEV4MG5MSytXL3RYZGZRN3VGenJjZS84QTFuNEhuM0U4UGVPNmk1YzFMMmEvbk5lVDEyTEpYTFdMVm53TVJzQUFBQUFBQUFBQUFBQUFBQ2VIRlYwb2xPcXA3SkxtMllaTWxhVm0xcDFDYTFtMDZxOUMrR05IeDhNdDYyck5TOTc2VC94bjg5VHhmVXVvWDVNNmp4VjMyNGMwcjNlL3UyQXFYT0FBQUFERHhXYVpYdjd0OGwzTnVLTGIzRGJpNDg1cDdZOWZkMThHVlV2UFZIVE16UHRyNUhFbkJQanpIM1pERnloS1FBQUFxZGYwakh4TS9weXl2bHY3VjNYME92aDlRdHhyNjkxK3pzdzhPMlNzelBqN1BQdUl3WGpxb3RPYWw3TlArY2oyR0xMWExTTDBuY1M1YjBtazZsak5yQUNRQUFBQUFBQUFBQUVDZUhGVjBwbE9xcDdKTG0yWTVNbGNkWnRhZFJDYTFtMDZqMjN2UU5Gbmg1OVZiVmxwZTlkSlhhZnllTjZqMUczSnRxdmlzTHZqY2FNVWJuMnR5cmRXblp3WnVqLzdNWmhYOG5qL0FQS3JPWXVFQ1FJWWVKNGhRdTdmSmQvL0FBMlVwdHV3NFp5MjFIcFVaTGROdHZkczZvalM5eDQ2NDY5dGZUaUthZTY1Z3lZNjNyTVdXR0RNcVhuc1E4N3llTk9HM24xOE1nY3dBSUVib3d0WlljVGlkLzhBSy9wak5TMjBxOWMwZU9KbnBPU1Y4dC9hdkgwTEhwL1VMY2EzM3JQdVAvSE55T05YTEg1YUZ4R0M4ZFZGeTVxWHMwejJlTExUTFNMVTlLUzFMVm5WbU0yc1FBQUFBQUFBQUFBbmh4VmRLWlRxcWV5UzV0bUdUSlhIV2JXblVRbXRadE9vOXQ3MERSWjRlZlZXMVpxWHZYTlN1MC9rOGIxRHFGdVJidHI0cEM3NDNHakZHNTlyY3EzV0FBT3pnemRIL3dCbU13citUeDlmeXF6bUxnOU1QRThRb1cvTjlGMy9BUERPbEpzMzRjRTVaMThLakpicHR0N3RuWEVSSHBlWThjWTY5c0lrc3dEbUthZTY1aGhreDF5UjIyV0dETXFYbnFqRjUzazhhMkczNFpDSE1qZEdGckxEaWNUdi9sZjB4bXBiZkdnSkFLdlhOSGppWjZUbGxmTGYycng5Q3g0SFVMOGEydmRaOXc1ZVR4b3pSK1doY1JndkhWUmN1YWw3Tk05cGl5MXkxaTFKM0NrdFdhejJ5eG14aUFBQUFBQUFBQU43K0c5S3hZc2F5SnprdTVUOWE5MGwybjduamVxYzNKbHlUajlWaGRjVEJXbGU3M0s2S2QyaElBQUFSK0dYL3dDdjB6Nys3NmVSRk55NU1uRDdyN3I2K1Zia3lPbTIzN3M2b3JxTkxESGpyampWVVNXWUFBQWN4VFQzWE1hWVpNZGNsZTIzcDNveitwZG1hcnpwVlU2ZjIzM2J6SHdHbFkvSGdBQUFBRlQ4UWFWano0M1RhaTRUYXlQMlNYYXZIMExUcHZOeVlja1ZqekUvRGs1V0N1U3U1OFMwQTlwSHJhajlCSUFBQUFBQUFCQzIwRFdxNGV2VFc5WXFmdlBOeSs4L2pxVmZVZW5WNU5lNlBxai9BRCtIWHh1VE9PZFQ2YjVoeXpjcXBwVk5MZE5jbWp4dDhkc2RwcmFOVEh3dTYyaTBiajBtWU1nQUJHNjJKaU5waUdCdmMyeEdtelRIVW1jU25hSmtrQUFBSlRKak1vWkU5akRXMGFaNHZjMVRYVFhNSkVJQUFFY2xxVTZwcEpKdHQreVM4bVZLV3ZQYlh6S0xURVJ1ZlRSdmlIWEh4RDlFYnJDbit6dDkzNDdJOWgwM3B0ZVBYdXY1dCtsTHl1Vk9TZFI2VXBiT0lKU0FBQUFBQUFBQ0VMZlFOYXJoNjlOYjFocCs4OVpmZWZ4MUt2cVBUcThtdmRYeGFQOEFmTHI0M0tuSE9wOU43dzVadVZVdFZOTGROZTZhUEhYeDJ4Mm1zeHJTN3JhTFJ1UFNaZ3lSdXRpWWphWWhncDdtMkkwMlJEZ2tBSVZKbEVwUk1rZ0Vwa3htVUptS0FEbFBZZXlmTFBGN21tMWROY3drUWhISmFsT3FhU1MzYmZza2taVnJONTdhK1pSTXhFYmxvM3hEcmo0aCtpTjFoVC9aMis3OGRrZXY2ZDB5dUN2ZmZ6WlM4cmxUbG5WZkVLVXVIRUJJQUFBQUFBQUFBQUFMZlFOYXJoNjlOYjFocCs4OVpmZWZ4MUt2cVBUcThtdTQ4WGovQUM2K055WnhUcWZUZVl6eFVxNWFxYVc2YTVOSGpyWXJVdE5MZS9sZDBtTFJ1UExHM3VaUkdtNkljRWdBQUFRcVRLSlRCTWlaTnBtS0FBQUE1VEltTmt4dGxlV1ZMcHRKSk50djJTUmhHTzFyZHRZOHkxVzFYelBwcEh4RHJqenR4RzZ3cC9zN2E2dngyUjY3cHZUWXdSMzIrcjlLVGs4cWNzOXRmU2xMaHhnQUFBQUFBQUFBQUFBQUJBdGRFMWlzRDlOYjFpYjkxMWw5MStDdDZoMCt2SWp1cjR0OGZsMmNYbFRoblUvUzNURmtta3FscXBhM1RYSm84bGVscVc3YlI1WDFieGFOd2tZc2dBQUFvdmlEVy82ZStMRS83bld2MGY3ZlF1ZW05Ti9xVC9VeS9UKzFiek9aMmZ3cDdZL2gvVy9WdGl5djV1VTIvd0RMdy9QbnFiT3BkTTdQN21PUEh6SDJZOFBtNy9oazkvRXRoS0phQUFBQnhkcVUyMmtrdDIzN0pJbXRadGFLMWpjeWkweFdOejZhYnJ1dFBNL1JHNnhKL3M3YTZ2eDRQVjlPNmRHR08rLzFmcFJjdmx6bG50cjZVNWJPRUFBQUFBQUFBQUFBQUFBQUJBUWxhYUpxOVlLOU5idkUzN3JtNWZkZmdyZW9kUHJ5STNIaS93QzNaeE9WT0dkVDZicml5VFNWUzA1YTNUWEpvOGxlbHFUTVdqV2wvVzBXanVqMGtZcEFLTFg5Yi9wNzRzVC9BTG5XdjBmN2ZRdWVuZE8vcWYzTW4wL0VmZFhjem1ka2RsUGJVV3oxRVJxTktTWmtHdGphdmgvVy9WdGl5djV1VTIvOHZEOC9VODMxTHB2Yi9keGV2bVBzdU9IekltT3k3WVNpV2dCeGRKSnR0SkpidHYyU1JOYXphM2JIdEZwaXNibjAwM1hkWmVkK2lOMWlUL1oyMTFmandlcjZkMDZNRWQ5L3EvU2g1ZkxuTFBiWDBweTJjSUVnQUFBQUFBQUFBQUFBQUFBQUFJRnBvbXIxZ2ZwcmQ0bS9kYzNMN3I4RmIxRGdWNUVianhiNC9MczRuS25GT3ArbHV1TEpOU3FscXBwYnByM1RSNUs5TFV0TmJScVlYMWJSYU53cE5mMXYrbnZpeFA4QXVjblhQMGY3ZlF0K25kTi9xYXlaUHArSSs3ZzVuTDdQNFU5dFJiUFVSR3ZFS1NaMkFBZ0UrVXRxK0g5YjllMkxLL201VGIveThQejlUemZVdW05bTh1TDE4d3VPRnpOeDJYOXRndWtrMjJra3QyMzdKSXBLMW0wNmoyczVuVWJscHV1Nnk4ejlFYnJFbit6dDkzNDhIcXVuZE9qQkhkZjZ2MG9lWHk1eXoyMTlLY3RuQ0JJQUFBQUFBQUFBQUFBQUFBQUFBQUFnZDNndFZ6WVl1SXIycnY3K2w5NTdNNU0vQnhacnhlMGVZL3k2TVhKdmlyTmF6NGRKczY0aUk5T2NBRWdBQUVhaWZBNzNGYXRueTQ1eDFYeXp6NzMyOVhmWTQ4UEF3NHNrNUt4NS9Ub3ljbkpla1ZtZkRvbmE1Z0pBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFELy9aJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxufVxyXG5cclxuI3NwYW5DNHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly95dDMuZ2dwaHQuY29tL3l0Yy9BS2VkT0xRdVVZQXdEYUhUS0dMV2RMdG8tdjZkS2ZQRkdDeFRFdF85NE9Kdz1zMTc2LWMtay1jMHgwMGZmZmZmZi1uby1yaicpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbn1cclxuXHJcbiNzcGFuQzV7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQW9IQ0JZV0ZSZ1ZGUllaR0JnWkdoZ1lHQm9hR0JnYUdSZ1lHQmdhR1JnWUdSZ2NJUzRsSEI0cklSZ1lKamdtS3k4eE5UVTFHaVE3UURzMFB5NDBOVEVCREF3TUVBOFFIaElTSGpRaElTRTBOREUwTVRRME5EUTBORFF4TkRRME5EUTBORFEwTkRRME5EUXhORFEwTkRRME5EUTBOREUwTkRRME5EUTBORFEwTlAvQUFCRUlBT0VBNFFNQklnQUNFUUVERVFIL3hBQWJBQUFCQlFFQkFBQUFBQUFBQUFBQUFBQUVBQUVDQXdVR0IvL0VBRDhRQUFJQkFnUURCQWdEQndRQkJRQUFBQUVDQUFNUkJCSWhNUVZCVVNKaGNaRUdFektCb2JIQjBSUkM4QlVqVW5LU291RXpZb0t5RmlSVHd0TGkvOFFBR1FFQUF3RUJBUUFBQUFBQUFBQUFBQUFBQUFFQ0F3UUYvOFFBSXhFQUFnSUNBZ01CQUFNQkFBQUFBQUFBQUFFQ0VSSXhBeUVUUVlGUk1tR1JCUC9hQUF3REFRQUNFUU1SQUQ4QXBFa0l3amllbWNROFFNZU1EQUJ4SkNSQmppQTZKWGlqWGp3Q2lRajNrWklRRUtPSWdKSUNBRFdqQVNZRWNDQUVZclNWb3JRQWphSzBrUkkyZ05DTWEwZUltQXhpSWpJdFZBM01vYkZEbGN5WEpMMkNpd2kwUUV6cW5FQU9hajMzUGxCWHhqSGJPM2dNbytOcEw1WW92eHRtMlRKcVJNbkE0OEVXUExjSGRmR2FRT2x4S2pOUzBaeWcwVFpZMXBIUEh2S0ZRb28yYUtPd0JZNEVBd0hFVnFBYTJiYTMyaHdrS1Nhc2REeHBNVXlZbVVEbmN4UGtpaWxDVEdCa2daQVNRRXBPMVpMNmRFeEpTSUVtb2pFSUNTQ3hBU1lXQURXa2dza0JKYlFFUkN4N1I4d2xUVlFPZzkvMGlja09tV2tSaktEVUoyQlBnTGZPSnNPKzVBVWRXUDNrdVExRWs5UWRmS1UxTVNCL2sybGRWa1gyNnc4RUYvOEFyOTRzWHc4THFBRDQ2bjRtWnltelNNVXdkK0lkRGY4QWxCTW9xWWx6K1UvOGlBUEtXbWkzaDcvb0xmT0lZWHY4Z1Budk1YTnMyVVVDa3VmekFmeXFUOFRwSUZBZHlXOFcraTNoMzRjZEwrT3Z6a3dna1dWUUNsSThoYndBSHhQMmtYWGtXRitoWS9TMW9lUkFxbUVCV3dOdmNJV0ZBam9iOHd3NTgvZi9BQkR2aGVFeHhCeXRvZjdXN3dZUzJGQlVkUmI5WG1iV29sZEdGeDVEL3dESitFY1pOUG9Ualp1SlV2cUpZSmcwTVV5YmtsUno1cjNNT1k3NXNVY1VHQTIraDhKMVE1VkxaaEtEV2krS1J6UlRXMFowYzdoT0Z1OW1mOTJ1aDAwYzI2ZFBmT2tRV0hkMU84aHo2eEVFN3p6OG16cVVVaG5xazdTQ3lUeGkwTEtvZFJKaUR0aWxHNUYrbDlmSVNCeFhRRSs2dy91blRIbGlra2M3ZzJ3NVJIekRyQTNjcjdib25jejNiK2theWh1STBSK2QzL2tUS1BOckdQeU42UXNFdHMxQzhkYTQ1YStBdk16RDQ0T3dXblF6TWRzeFp5ZmNMVFZ3R0V4bFptVkZ5RmZhR1VKbHZ0Y3RxREhrL2JvbHRMWFpOVWM3SWJkU2JDUWF3OXFvaTl3N1IrRjRWLzR2WGFuVXFWWElOTWtaV0pZa3FBZER0YldidUQ5REtLbW1ITE1Tck00dUFMZ0xwcHJ1M1dTNXhXM1lsazlJNU5zUlNIL3VQL2FQaWZwTGNNOVI5S09IdnkyWi9sWVR1K0g4S3cxbHJKU0Nnb1NGYnRjeFpyRyt2ZjN3YkQxMnBVTUtxSExuY0E2QTlsMkpPKzI4bnlMMGdhYTIvd0REbjZmQU1jOWdiVXczZXEyMEovSnJ5bDlMMExVMUZXcFhETWJsZ05XQUEzdVQxc051YzZTaFhac2RVVWs1VXBpd3ViQW5LU2JkZFlMd1A4TWNRVFF6RWhIek0xOVNXUzFyK0RjcEQ1SkRVVmYydXpCNHQ2TjRVWVo2dEJuTEl5cVN4M09kVkl0WWZ4YmlDNDBhZStidkY2aVZjR2owMUtMNjVPeUxXSjlabEpicjFtSGpkdmZGYnJzMTQwcjZNMXBXUkwyRXFJa0c1V3dqV2ptTVloakdWTnRMRzJNcmRkSXdDRjJqUFRCR3NrSThRR1ZpTUlWMVhicDl2dHRBa1lxYnI3MTVFOTM4Sm5Rc3NEeEdFRGFqUS9yempURTBCZmoyL2hlS1MvQk4zZjNmZUtQSmswamFUYThZeXltdlprV1daalFEaUdhK2hJOEFML0VmU1Zlb0ozQlA4eEpIbGY2UXNwMnhMclFSUUVtR1BjUEQvRnBlbUZGeDd2MXBMd0pLaU8wUEVmT1ZFbG5KWTVDMVYyMEFMdWRTQitZOHBLaGhnZGN3dHRwL20wVk5GY3N6SGJXMjIrdDVaaG5WUnV3dVRhM2xydDBub2NjRjdPQ2NuM1IzZm9mU0ZERFlqRUtMc0dXbXBzTGdka3NCNDV4NUNkWlV4UmFuU2NJYWJWYTlNTUQ3VmxQUGJrbnhuS2VpbkdxQ1VHcFZtS2tWUlVGZ1RteTVTQjVvUE9hUC9tbE1nbHFSWmxZdFQxMEZ3UUw5NEJNNVp4Ym02UlVaSlI3Zm83Q3l0bVUvbkxYL0FPTmxNcXFWL3dBL0lVblllQktrZkJadzFQMGp4TDVmVnBkZ0gxVkdZbk1RekczZEExeFdNcTAyS2xpaUxrWXJaUUZBMVUyMzAzaVhFL2JHK2Rla2RKNlBjWU9JYXNIS3F4VEtnMlVEVzloN3hLdUo4UXBKVXd0TE9DdEVndXcxRndBQnQ0ZkdjL3dyMGRxMVU5WXJLb044b1lrTXdVZ013RnRnVE5hajZKMHlXRFZ5eFJsVndxbTRabXlnWEo2eW5HQ2UvaENjMmtxK2owZlNXa21KcjFTR1pYQ3F0aHlBQU43N2JRYXQ2WHFodlF3NkwyV1h4eldOemxBL2htclI5RXFDdU14Wmt5a0hXMTN6aFJ0c045Skt2dzdEVVhXajZqTWFtWWhnTXhYdGhWMUowVUE2bURsRDByR296cnQwY2JnZU0xV0ZQRDNIcTg0YTJVWEpEWi9hMzNtbGpEdDc0ZjZTTUJpS2ROV281UTdISWlnTW1XbWZiSThUcE03R0hiM3laTzFlam80WTEwQk5Lekp1WldUTW1kQTBnWTVNYThReUxiU0o1ZTZPKzBZYmlDQUlXSXhSUXNCUlJqRkdJVVVVVUJCT1hzaVJNdnFiQ1V0SUJBLzVwWklEY3lSZ01VYk5hNTZLNThsSmptVTR0clU2aDZVMytJeS9XVkhZcGFPVkZKaWRDQmNBYXNOZEJ5dmVXb3VxaTQyNzlic1lOUVpRUXpFNkhZRDZraUUwR0JJeW83RWJXUFEzR2dFN295alJ4U2l6MEQwWDRIU3E0WnFoUXZVWjJVWldzYWZKV0szRnhjM08rbkxlZEZ4ZmcxR21qWkthRE1hQ2pzaTRQckxOcWRkUmEvV2NsNk84ZnI0ZWlxSmhic3BhenNyTGNPUXhCMnZzTmI4aENsOUpjYmx5azAxM04yS0U2a25tVDE2VENTazVYNkhVYXF1enR6VUpkMUJlMTFVTUZVQ21RTDJGOVdCNW14SEtaL0I4SURoM1ZuTENvMVptWmNvL05sSUhRc0FUNXpqYS9GTVMxOCtMQUJGcktXMjhGVUNadVJBTXByc1J2WlZzUGkzMGlVT3RnN3U2TzU0RGlxSzBLZnJhbElxcExLRFlQVGJQY0RmYmMzMDk0bDJJOUphU0ZqK0lEa3VoQVZEMktZYTdDOXUxMmI2N3p6MENpT1R0NGtENUxKclVwajJhRi81aTUrc2JoRzdiQktWVWRYVjlNcUtxRkFZMnJGOWdBVTlZYWlnYTc2cjVRV3I2ZFgxU2hkNzJ6RmlleG56Wk1vRyt3dk1BWXBoN0ZLbXYvQmZtUVlteFZjL255K0dueWlxS0tVWmZwcGZ0U3BpSzZzK0hXa0Z6c1dWQ3BZc3R1MjU5cVN4amFqd21JeVZHOXB5ZjEzd3FsbXRZc1c4VHJJazE2TjRSYUxESUdQSXRJYk5TTVl4NHhpQWcyMFEzRVpqRXZ0RDljb0pnRXhSUnJ3QVJpanlCakFlOGVRaWdJMGFrb2VYVkpTNWtXQ0tWM01rWXk4NDVnaGpHUWM2RVpRd0lzUXd1RHJmYjNTY1l4MktnRU82bnNKVFR3UkFmbEo1NjUzcUVlRndQS0Uya2dKV1RGaWdUOE94OXAyTW11REhNays4d3E4WTFWNmp6RXBTWkxpZ2Q4SXR4cEx4aDE2Q1JhdXR4MmhwSmZpRjcvSXd5WUtLSmhCSlpaU2NVdjZ0OVRJbkZqcDh2cGVLeDBYRlkxcFNjVi90LzdmOEExZ1RjV0Y3QWRRZDlMZU1COUdpUkZCVXFNd3ZjRHdIK1k1emZ4SDRmYVRaUVFUSWt3WmdPYkgrcTByWXB6WWYxUkFGTXdsYlYxSDVoNWlDbDZmZEkvaVVIUDRHQUJMVmxPeHY0UjZiOW9lK1o5VGlLQTJ1ZktJWWxIM051bDlQakdCdEF5VXkwck91eHpEditqRC9NSVhITCthNm52Mjg0QUVtTVkrWUdOR0E5NDBVVUJHaFVsTHJMQ1pGcGprVWtBK3RJMnRJbXVlcS9yM3lPSndvdVR0S1VwQWI2eWZKUVlscHIvd0M4ZkNaMlB4VlFNTWpNUmJXd0cvbE5BSXZRU2FoZWdpOHY5Q2NRR2pVYyswVDhmdnBDUWgvM2VRK29oS1drMUFoNVdQRUV5Vy9pK0Era2Q2ZHhZWmdUenVkTytIcWtrdE9IbFlzVG5xV0NxWHV3SjExMXZjQ0hvb0c2Z2VJMThwcUNsSmVvajhyQlFvR1JGNy9LT2N2UXduMUV2d2VHVE9QV1pzdlBMYS9kdkp6ZjZYaVpqRmVoODRIV3dWTWt0a1lFNzJmVHl5L1didU53eUJ2M2VZcmI4d0FOL2NUM1FOcVBkSEdiUVlnWmV5NVZVS0JvT3ZuQkhUck5CMGc3cUpXUW1nSTA1V2FmZEMyQWxiRVI1Q29HTk1kSkVvSmV4RXJaeDFqc1JVK0hGcjJsWnBDSDZaTDhvRWFxOVJLc0N0Y3k3SDllRXRYR25aaEt6V1hySU5WWHJDeEJ0S3F2NUd5bnB0OERvWVdtS1llMEw5NDBQa1poTXlkWTZZb3JzMGFZSFFmamw2SHlpbUgrMGozUlJnZG5GR3ZIRTUyYUlxcWlaZUp4QVZpTEhUdzZlTTFtbk00NDNxUDQyOHRKbXlsR3d4TVRmWlQxNWZlSjhUWVhLbjRRQzlqYTVIdmxyWEkxTjlSOFpOamZES3JORkhhMTdmR1dybWxGRm1HbGhiM3dxblhJM1h5TWpJcnd5b3FvVjNZbnVOb1JScU9iN2FkMFhCNmxNYTFBeEJaaWN0cjc4alkvS2RQd0pNR1ErY3NwTG5MYzdMK1hVRGZlTzdNcFJrdG81cXZpWFJTMWdiZHgrODJPRVVIcW9YSlVXWXJiS2VRSE8vZk5MamZDc01hZllyQUVzaWkrbzdUQUVtd3ZvTG4zUy9nZEFLaEFJWWVzZXpEWmdHdGNlVWprYmpFY1gyRGpoamRmSmY4QU1xcTRCZ1ZGL2FOdlo1ZFowYUpLNnRPNzB4L09mSUQ3ekJUbCtsbUN2RHpueVp2eWh2WkhXMHZIQ0J6WnZKZnROZW5SQnJOM0lvK04vckRmd3dsWlNBNFAwbjRjdE9rSFZtdVhDL2wySUo1RHVuR1ZDM1UrYzlIOU9xTnFLRHEveVUvZWNBOU9kWEMzajJTMEJHL1V5cGhER3B5czA1dFpOQWJDUnRDelNqZXFqVEZRV3cvY2Y4Uk1uTE5tb3Y3dTNjUHBNL0pMYkZRSmxpOVhEY2tjSkZZcUF4Umt4aGhDL1YvcldUVkpWZ0NmaGgwaWgvcTRvV0J1VUtnWVhsb2dxVThya2c2SGxDQk1tV2gyTTUrdmhYREZpcEFMSDRuU2Jyd1BpREd3Q3V4MXZybDB0cU5oTXBiS1VzVVpuNEI3bTZubnVwNXd5amdpb1Y5QURVQXNUcUNBRHFON2FielQ0WmhjUlZRT3RXd045Q05kQ1IwN29YUndGWTRtbFRxVmMyN2l3WFRzdHlLMi9MMG1UZjhBWmZuNnFnR2xSbDdVZEozRlBnZ083MzhhZEUvL0FBa09JZWo2Q203NXlNcU8yaUlObEo1Q1kwN09oZjhBWEdxYVBKVGpIVHNnaTIrdzVreUs0NXl3N1gybm9kUDBOUnNPbFJtRi9WaDdaQWJkbk5hOSsvZUE0SDBPVjZhdm1VRTMweUU3RWpmTjNUcFU0MTJqamNyZXpHcWc5a2Q0K2M3bjBjVC9BTk9uZm1QbTVuTjhSNE02TWd6SzJiT2RpTFpGSk45VE9qNFV0VmFLQVpQWUJGdzk5UmZYWHZtRSswYU9TYjZOZ1dFaWJlc1h1Vi9qYjdUTnJQV3pxTDBnYk1SY3YzQS9PVHAxcXBxYUtoc212YllBZG9qZkp2TWtpUy84VXFWS2hicWk5MnFYMUk4UGwxbHY3UVpjek9xNVZCSnNHQnNwSU5qcURzZW5qTVorSU1IcWcwV1k1Z1N5RXNFSVd3MXk5L2Q5WUZSZHRWYW5VeUhObUFCekVNU1NMMjU1bTN2dVo2WEJDT0R1dnUvaE02dGIrR2w2YjJaS1Z0UVN6RHdzUHZPSWVoM1RxK1A4UkZVSW9Sa0NackJoYlEyQXQ0V21HNG1LNkd0R1VjSWVRbEw0VnVobWxpNnFJRnpnNjNBWUM0SExVMzAzZ2xhc2xoN1hOQUNoTEcyNUd2ZnJOWWxZdGdqWWM5RDVTSm9Ib1pPcldwNzUyc1JtRmxOdGlOUERYVDdTeWhsY05sWTJIVUVXSkc5OUIzeTBpWlJhVmtIVzZXOEpSNms5REMydGwxT1VBWHYzRFdEZmlFWnV6VTc3ZG9hQWN0Sm8wU2syUjlWM1JaTzZPdGRDZEtvdVQxUE1uUWQrb3Q0U1hyUVFiVkYwMXZuSXNMalMzMTc0cUhpeUJweWFyTFhzYkVFRVczdmUvdjV4clIwWmtjc1VuYUtGQWFZa3dKV3BsZ21jaWtScVdBSlkyWG1lWUhVVEhGVUZuczkxR2F4YTIyb0JJbXRpVDJUK3VjeFRXQnVPV28rSSsweWZiRkpkV2REd1RGT0taeUVHeE9Yc2dEcjFNdnA4UmRjUUtqQldaRXRZYkRjSFhxTXhtWGhpb1JlMnFFQXNBVGxEWE8yaEYvOEFNVkJ5SDdCcDYzQkpQWnMyNUJKMU9rd1VhYkhKcnFqdk9FZWtmck14eWl5dFlFQWkvVGN5NzBoNHhscE90aGQwZGQ5VjBBdVIwN1U1K2hXQ2luU3BxdWRxWWNzaWkrYlBiVWMrdHp5Z2ZGRFZMRU8rZTFsQklBQUp0ZXc3N0FTUVdOZG5lMXpsd3BHMXFJSDlnRW80YWc5VFRCRit6Znp1ZnJINDFkY080dnNxci9jb3ZIb0hMVFFkRVg1Q0tXaUdZWHBFQUhXMm1XbFdielhLSnRZTkxJZzZJbzhsRTU3ajFUTlVleEJ0UnRwMWFvbytzNlpCWVdreTBpNEdaeE9pek90dVNubHBxUjlwWGhXSXo2cURibmNYR2g2OTgzVkV4c1R3NDFLN2tCZEZSZGU4WDZHSkkwVEsrRUVpbFhaUUxsd0FOeGU5cmZHWDRmR3VyZnZDQXZ1dmVRNFRRUDRkMUFCT2M2Y2psSSswQy9aVlZIdTJaeFk2V1lpK29HaDkwMGV3RjZUMWN6cGIrRS85ajlwZ3REY1VHemRzTUQwYTROdmY3NEs0bWtkQUJZeWhuVUtXVUN6QWdnazNPeEI5dytNR09ES2hDcnJuVE9PMWV4ems2OWI2dzUxbExpYlJaV2JTb0JxOExVcFRUT094bXpHOXI1dGRQZkxjTmhBdExJV0Z5cEJJTjlXSDY4cGEwcklta1dSS1VtcUtTaE5zb3VWdVFMZ1hOaUFMOHQ0TGdlSEZWRE9HeklTVlRNQ3BPK2x0dk9HTW5kR21ySlVtbFJtWWZEdW9zMU5qZHcydHJMWTNKRmplL3dBSlJYd3I2dXFNTXhjTUN2VTNCQThDUGVKdEh4aURIcWZPSXJ5djhHcW9CWUFBQUFTRXNNWWlVWkVZcEtLQUJxeTFaVWhscXpDV3lsb3orTm45M2JxUjlUOUpuVmtIWVFjeW9OcmEzaFBwRzV5SUJmMmlUYm9CL21YY0V3eXVtWnhjaklScWRDZkNSTHBXU3d1cmdsQmRrdXVRZ3FBVGErbCtlbThCRkgxcnFwc1NTTlNUdnIwMU84dTRuVXFJTElmYTFPK291TFpzeE56cDhKbFYrSVBUWTVHSTYyQXZvQVI0YTNtYVRhRXpxbjRzMUZzaVdKUkFnTm1JN0tpd0Z6cHFXMitzYXJ4cDZxcUhSUXhkR3VxMnZaamNIVTY2aWNIUnJ1ampObTM3U2tuWHFEZWFOYkdPcFlxV1d4RmdUcXB1U0xIM1IrS2dzOVo0dmltYWdjNjVTV1VXMTYzNWdkSVRVeFJUS0J0bEU0cmgvSFhyWVVHb1N6SlVzV3RhNEMzR3RyWDdVeUY5Tkt4ZTdxaFcrd0JGaDNHOGp4eVlXZFJ4SEY1NjdDM3RlcVRrYmRzTjA3cDE0bkNZT3FyMTFJMXpWS1JIOG9CSitrN3RabE5WUmNTeFpSZ2Y5U29lOVI1QWlYckJjRTJsWnVqdjhCSktGNk5mNk4rcnNmak5rVEc5SDZZL0RwZmV6ZFIrWTlKcGlrT3JmMU1mbVkvWWprL1NqL1c4Rlg2bVlUQ2JQcEIvcnZxVGJMdmIrRVRJWVRhT2lsb29jU2xoTDNsTFRWQXloMWxUQ1htVk5zWnJFbGxST3NZaUpOekprUzNzZ3JJaldrekdqUUVZbzhhVUt4UlJXaWdLd3BETEFZS2pTNVhtRXRtaUJlSWJyM1g1SHU2U3VoVmRSWkh5N1hBQU9vMjlyV0hyaTFUc2tBODRqaUViOGkrUW1NcE82b2JkcWdJdTUzZTl2OWkvYUJoTTE5UjJudGJLcDBCNmtYRzAwcWdVN0xiM2tmS0NOUUhTQ1puUUxpK0hBa0c3RXM0Qjk5eVQ4STM3UFhzcGM5dGpxYmJMY0RTRVBTSUlOOXRSdkVxUG1ValhKdEtVbitoUTJGd3JyVGRRZEhPVlJxTlMyUWtqbHk4b0cvQjNVWHNEN1EwUDhONzcrQm1xanVNZ0trMk9ZOSsvMU1UNGtrQmJmbUpQZ3hOL2d4aGt4VWFmb3NqQ3RUVWl3QjEyOXBVdVJmM3owZFo1MzZOWXBSV3pNYkFGMjh3Qjc1MmE4WXA5VC9TWno4djhqV0s2TlpabTRkLzNGWnV2ckQvYkVPTUovQzU4Ri96TTVjYmJETXVWcmxXN1Z1enFiYnpOYktvM3VDaTFCQi90K3BoOTVoWUxpSlZFVVUyTmxBdnBycHZDbDRnNTJwSCtvZmFKeVZoUnp2R212V2YrYTNrQVBwTTVvWGozTFZISkZpV2E0M3RydEJIblJIUU1vZVVQTDJsTFRWQ0tHbFRiUzFwVyswMWlReXFudVpJeU5QbkpHYVBZaUprVEpHUmpRaGpHTWxHTVpJMFVWNG93QmxyR1NGWTlaejZjUmNiaUZVK0tMejAvWGZKY0VHVE5aamMzTW1nZ05QRnFlY0lXcDN5SHhqeUN5SkpLY0dXcExsclROOGJIa0VwaDVZbERYU1ZKaVlUVHhJNnpOd2tPMEVyaC9aUFFTNzhOZmxLNmVLWHJDbHJqdW1jb3lIMFF3L0RsSjFVSDNDRnB3d0QyU3kveXNSRmg4VUFZYW1LV1pTeUxWRkJ3OVZSMmFyZjhnclNweFdGTEpaQ3A1Nmh2YXY4QU9hRFlsYlNMMTF5Z1NVMnZRMlo5TGlPSlFBV3VCb0xxdTNMYXhoQ2VrYmoyNlk5MTErZDRZSFNWMUthR08wOW9SalZxdVppMzhSSnQ0bThwSmxsVlZnejZjNXRGZ094bEZTUmVxUktIeEUyaVMyVFlTcDlwRTRnU0QxUVJObzdJWWtPOGtaQkczOFpPODBld3NqRkdNUmdJWXhvOGlZeENpalJRQXdLUEVFYlIxQjhSZUVuQ1VYN3Y1VDlETXhzTVpFWVlqVU5hVlpOQi93Q3h1YVBidU54OFJLamdLNjdETU83WC9NVkxHVlVPcERlTTBhWEhHdFprOGlQckgwSFptbkhPaHN5a2VPL2tZUlQ0c09mMmxQRXFwcU1DRklBRnRTUHBBdlY5eGtzWnZVc2VwL1Y0VW1JWGtaekMweHowbGltMnpINS9PS2tCMUsxSlltSUluTUppbkd4Qjh4Q3FYRWp6QjhyL0FDa3VLWVdkSW1LTUtUR3RPY3A4U0hkZjljb1VtT1V5SmNhL0NsSTN4aXpKZmlqMW5QOEE0b0hZL1dNMVl5UENpc2pxMHhoalZNVHBPVlhGTU5qYVdqSFB6TjVQaEhrSFZhNXZLV3JtREdyZVFMeTF4azVGelZaV3p5c21SSmxxQVdPeGpMdklNWXl0S1VTV3gzYldONnh1c2htaXZLeEZaYitJTVF4Smc3MUFPWWxUVng0L3J2bFVLdzhZa1J4WFhyTXhxeDVBU3N1ZXZsQ2dzMlBXanI4WXBpMzhmTXg0WWhaVzBaSW9vTVkxV1NTS0tJQk51WkV4UlFZQXpjNUZkNG9vZ0xCSnBGRkJBUXJiUW5DK3o3ekZGR0FWVCtvbWpUanhTV0NHZmxJRGVLS0F5Mk1Zb294REdSTVVVYUFZeXNieFJSZ1JndGVLS0NBcHB5UWlpbEVrVEpMRkZBQlJSUlJnZi8vWicpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiNzaG93dGltZXNpbWd7XHJcbiAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICB3aWR0aDogMzAlOyBcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGxlZnQ6IDU1JTtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbiNzaG93dGltZXN0eHR7XHJcbiAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICB3aWR0aDogMzAlOyBcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGxlZnQ6IDU1JTtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-projects',
          templateUrl: './projects.component.html',
          styleUrls: ['./projects.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/story/story.component.ts":
  /*!******************************************!*\
    !*** ./src/app/story/story.component.ts ***!
    \******************************************/

  /*! exports provided: StoryComponent */

  /***/
  function srcAppStoryStoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoryComponent", function () {
      return StoryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StoryComponent = /*#__PURE__*/function () {
      function StoryComponent() {
        _classCallCheck(this, StoryComponent);
      }

      _createClass(StoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StoryComponent;
    }();

    StoryComponent.ɵfac = function StoryComponent_Factory(t) {
      return new (t || StoryComponent)();
    };

    StoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StoryComponent,
      selectors: [["app-story"]],
      decls: 7,
      vars: 0,
      consts: [["id", "container"], ["width", "50%", "height", "20%", "src", "https://www.youtube.com/embed/CJZpEIenlQg", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["src", "assets/3seats.png", 1, "img1"], ["src", "assets/3seats.png", 1, "img2"], ["src", "assets/3seats.png", 1, "img3"], ["id", "top"], ["id", "bottom"]],
      template: function StoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#container[_ngcontent-%COMP%]{\r\n display: flex;\r\n justify-content: center;\r\n \r\n margin: 0;\r\n flex-direction: column;\r\n}\r\n\r\n#top[_ngcontent-%COMP%]{\r\n    height: 65vh;\r\n    width: 100vw;\r\n    background: radial-gradient(circle, rgb(255,214,10) , rgb(15,15,15) );\r\n}\r\n\r\n#bottom[_ngcontent-%COMP%]{\r\n    height: 35vh;\r\n    width: 100vw;\r\n    background: radial-gradient(circle, rgb(255,214,10) , rgb(7,7,7) );\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    margin: auto;\r\n}\r\n\r\n.img1[_ngcontent-%COMP%]{\r\n    width: 40vw;\r\n    -webkit-box-reflect: below 0 linear-gradient(transparent, rgba(255,255,255,.8));\r\n    transform: skewY(-20deg); \r\n    display: inline-block;\r\n    z-index: 1;\r\n}\r\n\r\n.img2[_ngcontent-%COMP%]{\r\n    width: 40vw;\r\n    -webkit-box-reflect: below 0 linear-gradient(transparent, rgba(255,255,255,.8));\r\n    transform: skewY(-20deg); \r\n    margin-left: 20%;\r\n    display: inline-block;\r\n    z-index: 2;\r\n\r\n}\r\n\r\n.img3[_ngcontent-%COMP%]{\r\n    width: 40vw;\r\n    -webkit-box-reflect: below 0 linear-gradient(transparent, rgba(255,255,255,.8));\r\n    transform: skewY(-20deg); \r\n    margin-left: -20%;\r\n    display: inline-block;\r\n    z-index: 0;\r\n}\r\n\r\niframe[_ngcontent-%COMP%]{\r\n    position: absolute;    \r\n    width: 40%;\r\n    height: 40%;\r\n    top: 35%;\r\n    margin-left: 55%;\r\n    transform: skewY(-20deg); \r\n    z-index: 3;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Rvcnkvc3RvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIseUJBQXlCO0NBQ3pCLFNBQVM7Q0FDVCxzQkFBc0I7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHFFQUFxRTtBQUN6RTs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0VBQWtFO0FBQ3RFOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsK0VBQStFO0lBQy9FLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLCtFQUErRTtJQUMvRSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixVQUFVOztBQUVkOztBQUVBO0lBQ0ksV0FBVztJQUNYLCtFQUErRTtJQUMvRSx3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9zdG9yeS9zdG9yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuI2NvbnRhaW5lcntcclxuIGRpc3BsYXk6IGZsZXg7XHJcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcbiBtYXJnaW46IDA7XHJcbiBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4jdG9we1xyXG4gICAgaGVpZ2h0OiA2NXZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiKDI1NSwyMTQsMTApICwgcmdiKDE1LDE1LDE1KSApO1xyXG59XHJcblxyXG4jYm90dG9te1xyXG4gICAgaGVpZ2h0OiAzNXZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiKDI1NSwyMTQsMTApICwgcmdiKDcsNyw3KSApO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5pbWcxe1xyXG4gICAgd2lkdGg6IDQwdnc7XHJcbiAgICAtd2Via2l0LWJveC1yZWZsZWN0OiBiZWxvdyAwIGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgcmdiYSgyNTUsMjU1LDI1NSwuOCkpO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WSgtMjBkZWcpOyBcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5pbWcye1xyXG4gICAgd2lkdGg6IDQwdnc7XHJcbiAgICAtd2Via2l0LWJveC1yZWZsZWN0OiBiZWxvdyAwIGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgcmdiYSgyNTUsMjU1LDI1NSwuOCkpO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WSgtMjBkZWcpOyBcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB6LWluZGV4OiAyO1xyXG5cclxufVxyXG5cclxuLmltZzN7XHJcbiAgICB3aWR0aDogNDB2dztcclxuICAgIC13ZWJraXQtYm94LXJlZmxlY3Q6IGJlbG93IDAgbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCByZ2JhKDI1NSwyNTUsMjU1LC44KSk7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdZKC0yMGRlZyk7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG5pZnJhbWV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgIFxyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgdG9wOiAzNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogNTUlO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WSgtMjBkZWcpOyBcclxuICAgIHotaW5kZXg6IDM7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-story',
          templateUrl: './story.component.html',
          styleUrls: ['./story.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/zyris/zyris.component.ts":
  /*!******************************************!*\
    !*** ./src/app/zyris/zyris.component.ts ***!
    \******************************************/

  /*! exports provided: ZyrisComponent */

  /***/
  function srcAppZyrisZyrisComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZyrisComponent", function () {
      return ZyrisComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! three/examples/jsm/loaders/GLTFLoader.js */
    "./node_modules/three/examples/jsm/loaders/GLTFLoader.js");
    /* harmony import */


    var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! three */
    "./node_modules/three/build/three.module.js");
    /* harmony import */


    var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! three/examples/jsm/controls/OrbitControls.js */
    "./node_modules/three/examples/jsm/controls/OrbitControls.js");
    /* harmony import */


    var dat_gui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! dat.gui */
    "./node_modules/dat.gui/build/dat.gui.module.js");
    /* harmony import */


    var three_examples_jsm_controls_TransformControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! three/examples/jsm/controls/TransformControls */
    "./node_modules/three/examples/jsm/controls/TransformControls.js");

    var ZyrisComponent = /*#__PURE__*/function () {
      //star
      function ZyrisComponent() {
        var _this = this;

        _classCallCheck(this, ZyrisComponent);

        this.click3 = 0;
        this.demoStarted = false;

        this.tick = function () {
          var clock = new three__WEBPACK_IMPORTED_MODULE_2__["Clock"]();
          var elapsedTime = clock.getElapsedTime(); // Update objects

          if (_this.demoStarted == true) {
            _this.plane.translateX(-2); //this.camera.lookAt(this.plane.position) 
            // if(this.camera.position.z < 555){
            //   this.camera.translateZ( -2);
            // }else{
            //   this.camera.translateZ( -3);
            // }
            //console.log(this.camera.position.z)

          } //this.plane.position.x += .7;
          //const controls = new OrbitControls(camera, renderer.domElement)
          // Update Orbital Controls
          //this.orbitControler.update()
          // Render


          _this.renderer.render(_this.scene, _this.camera); // Call tick again on the next frame


          window.requestAnimationFrame(_this.tick);
        };
      }

      _createClass(ZyrisComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          var ele = document.getElementById('canvasgl');
          this.gui = new dat_gui__WEBPACK_IMPORTED_MODULE_4__["GUI"](); // Canvas

          this.canvas = document.querySelector('canvas.webgl'); // Scene

          this.scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
          this.renderer = new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"]({
            canvas: this.canvas
          });
          var sizes = {
            width: window.innerWidth,
            height: window.innerHeight
          };
          this.renderer.setSize(sizes.width, sizes.height);
          this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); //ele.addEventListener("click", clickDetection);
          // function clickDetection(e){
          //   let random = Math.random();
          //   if(random < .2){
          //     pointLight.position.x = -1600;
          //     pointLight.color.set( getRandomColor() )
          //   }
          //   else if(random >= .2 && random <= .6){
          //     pointLight.position.x = 58;
          //   }else{
          //     pointLight.position.x = 1600;
          //   }
          // }
          // function getRandomColor() {
          //   var letters = '0123456789ABCDEF';
          //   var color = '#';
          //   for (var i = 0; i < 6; i++) {
          //     color += letters[Math.floor(Math.random() * 16)];
          //   }
          //   return color;
          // }

          var geometry = new three__WEBPACK_IMPORTED_MODULE_2__["TorusGeometry"](.7, .2, 16, 100);
          var material = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]();
          material.color = new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0xff0000);
          var sphere = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, material);
          this.scene.add(sphere);
          this.scene.background = new three__WEBPACK_IMPORTED_MODULE_2__["Color"]("black"); //const pointLight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );

          var pointLight = new three__WEBPACK_IMPORTED_MODULE_2__["DirectionalLight"](0xffffff, 1); //const pointLight = new THREE.AmbientLight( 0xffffff, 0.5 );
          //var pointLight = new THREE.PointLight(0xffffff, 0.1)

          this.pointLight = pointLight;
          pointLight.position.x = 28; //-1600

          pointLight.position.y = 9;
          pointLight.position.z = 5;
          pointLight.intensity = 4;
          pointLight.target.position.set(0, 0, 0);
          this.scene.add(pointLight);
          this.scene.add(pointLight.target);
          var pointLightHelper = new three__WEBPACK_IMPORTED_MODULE_2__["PointLightHelper"](pointLight, 1);
          this.scene.add(pointLightHelper);
          this.cameraSetup();
          this.guiSetup();
          window.addEventListener('resize', function () {
            // Update sizes
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight; // Update camera

            _this2.camera.aspect = sizes.width / sizes.height;

            _this2.camera.updateProjectionMatrix(); // Update renderer


            _this2.renderer.setSize(sizes.width, sizes.height);

            _this2.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
          });
          this.transformControler = new three_examples_jsm_controls_TransformControls__WEBPACK_IMPORTED_MODULE_5__["TransformControls"](this.camera, this.renderer.domElement);
          this.orbitControler = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_3__["OrbitControls"](this.camera, this.renderer.domElement); //this.orbitControler.update();

          /* */

          this.loadModels();
          this.hotkeySetups();
          this.tick(); //this.addStars();
        } //end of ngOnInit

      }, {
        key: "loadModels",
        value: function loadModels() {
          var _this3 = this;

          var classobj = this;
          var fontLoader = new three__WEBPACK_IMPORTED_MODULE_2__["FontLoader"]();
          fontLoader.load('assets/zcool.json', function (font) {
            var geometrySetting = {
              font: font,
              size: 1800,
              height: 7,
              curveSegments: 20,
              bevelEnabled: true,
              bevelThickness: 100,
              bevelSize: 0.5,
              bevelSegments: 20
            };
            var textGeoGame = new three__WEBPACK_IMPORTED_MODULE_2__["TextGeometry"]('Zyris', geometrySetting);
            var textGeoStop = new three__WEBPACK_IMPORTED_MODULE_2__["TextGeometry"]('Shakir', geometrySetting);
            var textMatGame = new three__WEBPACK_IMPORTED_MODULE_2__["MeshLambertMaterial"]({
              color: 0xE4BB97
            });
            var textMatStop = new three__WEBPACK_IMPORTED_MODULE_2__["MeshLambertMaterial"]({
              color: 0x840032
            });
            var textGame = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](textGeoGame, textMatGame);
            var textStop = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](textGeoStop, textMatStop);
            _this3.text1 = textGame;
            _this3.text2 = textStop; // textGame.position.set(-46.94,110,-17.533);
            // textStop.position.set(109,110,-17.533);

            textGame.position.set(-3400, 8, -295);
            textStop.position.set(4800, 8, -295);

            _this3.scene.add(textGame);

            _this3.scene.add(textStop);

            var planeFolder = _this3.gui.addFolder('Text');

            _this3.gui.add(_this3.text1.position, 'y').min(-50).max(450).step(0.01);

            _this3.gui.add(_this3.text1.position, 'x').min(-2050).max(450).step(0.01);

            _this3.gui.add(_this3.text1.position, 'z').min(-2250).max(450).step(0.01);
          });
          var loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_1__["GLTFLoader"]();
          loader.load('assets/plane/scene.gltf', function (gltf) {
            gltf.scene.traverse(function (c) {
              c.castShadow = true;
            });
            classobj.plane = gltf.scene;
            classobj.plane.position.set(-4000, 120, 550);
            _this3.plane.rotation.y = Math.PI / 1;
            gltf.scene.scale.set(3.5, 3.5, 3.5);
            classobj.scene.add(gltf.scene);

            var planeFolder = _this3.gui.addFolder('Plane');

            _this3.gui.add(_this3.plane.rotation, 'y').min(-250).max(100).step(0.01);

            _this3.gui.add(_this3.plane.rotation, 'x').min(-250).max(100).step(0.01);

            _this3.gui.add(_this3.plane.rotation, 'z').min(-250).max(1000).step(0.01); //this.camera.add(classobj)

          });
          loader.load('assets/theater/scene.gltf', function (gltf) {
            gltf.scene.traverse(function (c) {
              c.castShadow = true;
            });
            classobj.theater = gltf.scene;
            classobj.theater.position.set(-5170, 110, 425);
            gltf.scene.scale.set(15, 15, 15);
            classobj.scene.add(gltf.scene); // gui.add(gltf.scene.position, 'y').min(-5).max(5).step(0.01)
            // gui.add(gltf.scene.position, 'x').min(-25).max(5).step(0.01)
            // gui.add(gltf.scene.position, 'z').min(-5).max(5).step(0.01)
            //  let tc = new TransformControls( camera, renderer.domElement );
            //  tc.addEventListener('dragging-changed', function (event) {
            //   console.log(gltf.scene.position)
            //   })
            //  tc.attach( gltf.scene );
            //  scene.add( tc );
          });
        }
      }, {
        key: "cameraSetup",
        value: function cameraSetup() {
          this.camera = new three__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 50000); //var camera = new THREE.PerspectiveCamera(75,2.5,0.1,1000)

          this.camera.position.x = -4043.2727801819333;
          this.camera.position.y = 160.43357424256797;
          this.camera.position.z = 554.5462660008569;
          this.camera.rotation.x = -0.3012732725415756;
          this.camera.rotation.y = -1.428150165775132;
          this.camera.rotation.z = -0.29839258126408286;
          this.camera.quaternion.w = 0.7534504584775933;
          this.camera.quaternion.x = -0.0158991931351456;
          this.camera.quaternion.y = -0.657166125909681;
          this.camera.quaternion.z = -0.013867416284841437;
          this.scene.add(this.camera); //this.camera.rotation.set(-0.1261862712228412, 0.021848038994861523, 0.002771421589071801 )
          //this.camera.rotation.set(-0.1796765527406611, 0.2501208004301373, 0.04492831959926583 )
          //this.gui.add(this.camera.position, 'y').min(-255).max(255).step(0.01)
          //this.gui.add(this.camera.position, 'x').min(-255).max(255).step(0.01)
          //this.gui.add(this.camera.position, 'z').min(-255).max(255).step(0.01)
        }
      }, {
        key: "guiSetup",
        value: function guiSetup() {
          var _this4 = this;

          this.gui.add(this.pointLight.position, 'y').min(-50).max(450).step(0.01);
          this.gui.add(this.pointLight.position, 'x').min(-50).max(450).step(0.01);
          this.gui.add(this.pointLight.position, 'z').min(-50).max(450).step(0.01);
          this.gui.add(this.pointLight, 'intensity').min(0).max(10).step(0.01);
          var lightColor = {
            color: 0xcccccc
          };
          this.gui.addColor(lightColor, 'color').onChange(function () {
            _this4.pointLight.color.set(lightColor.color);
          });
          this.gui.add(this.camera.rotation, 'y').min(-50).max(450).step(0.01);
          this.gui.add(this.camera.rotation, 'x').min(-50).max(450).step(0.01);
          this.gui.add(this.camera.rotation, 'z').min(-50).max(450).step(0.01);
        }
      }, {
        key: "addStars",
        value: function addStars() {
          this.starGeo = new three__WEBPACK_IMPORTED_MODULE_2__["BufferGeometry"]();
          var vertices = [];

          for (var i = 0; i < 6000; i++) {
            var star = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](Math.random() * 600 - 300, Math.random() * 600 - 300, Math.random() * 600 - 300);
            star.velocity = 0;
            star.acceleration = 0.02; //console.log(star)
            //this.starGeo.vertices.push(star);

            vertices.push(star);
          }

          this.starGeo.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_2__["Float32BufferAttribute"](vertices, 3));
          var sprite = new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load('assets/star.png');
          var starMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["PointsMaterial"]({
            color: '#5DADE2',
            size: 0.7,
            map: sprite
          });
          this.stars = new three__WEBPACK_IMPORTED_MODULE_2__["Points"](this.starGeo, starMaterial);
          this.scene.add(this.stars);
        }
      }, {
        key: "hotkeySetups",
        value: function hotkeySetups() {
          var _this5 = this;

          document.addEventListener('keyup', function (event) {
            if (event.key == 't') {
              _this5.transformControler.enabled = false;
              _this5.orbitControler.enabled = false;
              _this5.transformControler = new three_examples_jsm_controls_TransformControls__WEBPACK_IMPORTED_MODULE_5__["TransformControls"](_this5.camera, _this5.renderer.domElement); //transformControler.attach( theater );

              _this5.transformControler.attach(_this5.plane); //transformControler.attach( text2 );


              _this5.scene.add(_this5.transformControler);

              _this5.transformControler.addEventListener('dragging-changed', function (event) {//console.log(theater.position)
                //console.log(this.plane.position)
                //console.log(text2.position)
              });
            } else if (event.key == 'o') {
              _this5.transformControler.enabled = false;
              _this5.orbitControler.enabled = false;
              _this5.orbitControler = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_3__["OrbitControls"](_this5.camera, _this5.renderer.domElement);
            } else if (event.key == 'c') {
              // this.camera.rotation.x = -0.24;
              // this.camera.rotation.y = -0.18;
              // this.camera.rotation.z = -0.04;
              // this.camera.position.x = -3310.5293518410083;
              // this.camera.position.y = 325.55023493489639;
              // this.camera.position.z = 442.50386003251126;
              _this5.camera.quaternion.w = 0.7534504584775933;
              _this5.camera.quaternion.x = -0.0158991931351456;
              _this5.camera.quaternion.y = -0.657166125909681;
              _this5.camera.quaternion.z = -0.013867416284841437; //console.log(this.camera.quaternion)
              //console.log(this.camera)

              _this5.startDemo();
            }
          });
        }
      }, {
        key: "startDemo",
        value: function startDemo() {
          this.demoStarted = true;
        }
      }]);

      return ZyrisComponent;
    }();

    ZyrisComponent.ɵfac = function ZyrisComponent_Factory(t) {
      return new (t || ZyrisComponent)();
    };

    ZyrisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ZyrisComponent,
      selectors: [["app-zyris"]],
      decls: 2,
      vars: 0,
      consts: [["id", "container"], ["id", "canvasgl", 1, "webgl"]],
      template: function ZyrisComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["canvas[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    outline: none;\r\n}\r\n\r\n\r\n\r\n#container[_ngcontent-%COMP%]{\r\n    overflow: auto;\r\n    white-space: nowrap; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvenlyaXMvenlyaXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGFBQWE7QUFDakI7Ozs7QUFJQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC96eXJpcy96eXJpcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2FudmFze1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuI2NvbnRhaW5lcntcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgXHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZyrisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-zyris',
          templateUrl: './zyris.component.html',
          styleUrls: ['./zyris.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Apache24\htdocs\ngResume\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map