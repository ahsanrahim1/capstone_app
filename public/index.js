/* global Vue, VueRouter, axios, jQuery, fabric */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!"
    };
  },
  created: function() {},
  mounted: function() {
    /**Hero particle script**/
    var tpj = jQuery;
    var revapi8;
    tpj(document).ready(function() {
      if (tpj("#rev_slider_8_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_8_1");
      } else {
        revapi8 = tpj("#rev_slider_8_1")
          .show()
          .revolution({
            sliderType: "hero",
            jsFileLocation: "../revolution/js/",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 9000,
            particles: {
              startSlide: "first",
              endSlide: "last",
              zIndex: "1",
              particles: {
                number: { value: 300 },
                color: { value: "#000000" },
                shape: {
                  type: "circle",
                  stroke: { width: 0, color: "#ffffff", opacity: 1 },
                  image: { src: "" }
                },
                opacity: {
                  value: 0.1,
                  random: false,
                  min: 0.25,
                  anim: { enable: false, speed: 1, opacity_min: 0, sync: false }
                },
                size: {
                  value: 1,
                  random: true,
                  min: 0.5,
                  anim: { enable: false, speed: 40, size_min: 1, sync: false }
                },
                line_linked: {
                  enable: true,
                  distance: 80,
                  color: "#000000",
                  opacity: 0.35,
                  width: 1
                },
                move: {
                  enable: true,
                  speed: 1,
                  direction: "right",
                  random: true,
                  min_speed: 3,
                  straight: false,
                  out_mode: "out"
                }
              },
              interactivity: {
                events: {
                  onhover: { enable: true, mode: "repulse" },
                  onclick: { enable: true, mode: "bubble" }
                },
                modes: {
                  grab: { distance: 400, line_linked: { opacity: 0.5 } },
                  bubble: { distance: 400, size: 100, opacity: 1 },
                  repulse: { distance: 75 }
                }
              }
            },
            navigation: {},
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [868, 768, 960, 720],
            lazyType: "none",
            parallax: {
              type: "scroll",
              origo: "slidercenter",
              speed: 400,
              levels: [
                5,
                10,
                15,
                20,
                25,
                30,
                35,
                40,
                45,
                46,
                47,
                48,
                49,
                50,
                0,
                55
              ]
            },
            shadow: 0,
            spinner: "spinner0",
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "60px",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
              simplifyAll: "off",
              disableFocusListener: false
            }
          });
      }

      RsParticlesAddOn(revapi8);
    }); /*ready*/

    //testimonials
    (function($, window, document, undefined) {
      "use strict";

      // init cubeportfolio
      $("#js-grid-slider-testimonials").cubeportfolio({
        layoutMode: "slider",
        drag: true,
        auto: false,
        autoTimeout: 5000,
        autoPauseOnHover: true,
        showNavigation: true,
        showPagination: true,
        rewindNav: true,
        scrollByPage: false,
        gridAdjustment: "responsive",
        mediaQueries: [
          {
            width: 0,
            cols: 1
          }
        ],
        gapHorizontal: 0,
        gapVertical: 0,
        caption: "",
        displayType: "default"
      });
    })(jQuery, window, document);
    //thumbnail slider
    (function($, window, document, undefined) {
      "use strict";

      // init cubeportfolio
      $("#js-grid-slider-thumbnail").cubeportfolio({
        layoutMode: "slider",
        drag: true,
        auto: false,
        autoTimeout: 5000,
        autoPauseOnHover: true,
        showNavigation: false,
        showPagination: false,
        rewindNav: true,
        scrollByPage: true,
        gridAdjustment: "responsive",
        mediaQueries: [
          {
            width: 0,
            cols: 1
          }
        ],
        gapHorizontal: 0,
        gapVertical: 0,
        caption: "",
        displayType: "fadeIn",
        displayTypeSpeed: 400,
        plugins: {
          slider: {
            pagination: "#js-pagination-slider",
            paginationClass: "cbp-pagination-active"
          }
        }
      });
    })(jQuery, window, document);
  },
  methods: {},
  computed: {}
};

var SignupPage = {
  template: "#signup-page",
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/users", params)
        .then(function(response) {
          router.push("/login");
        })
        .catch(
          function(error) {
            this.errors = error.response.data.errors;
          }.bind(this)
        );
    }
  }
};

var LoginPage = {
  template: "#login-page",
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        auth: { email: this.email, password: this.password }
      };
      axios
        .post("/user_token", params)
        .then(function(response) {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          router.push("/");
        })
        .catch(
          function(error) {
            this.errors = ["Invalid email or password."];
            this.email = "";
            this.password = "";
          }.bind(this)
        );
    }
  }
};

var Homes = {
  template: "#Homes",
  data: function() {
    return {
      homes: []
    };
  },
  created: function() {
    axios.get("/homes?other=true").then(
      function(response) {
        this.homes = response.data;
        console.log(this.homes);
        Vue.nextTick(
          function() {
            // DOM updated
            this.initTheme();
          }.bind(this)
        );
      }.bind(this)
    );
  },
  mounted: function() {
    console.log("mounted");
  },
  methods: {
    initTheme: function() {
      //projects
      (function($, window, document, undefined) {
        "use strict";

        // init cubeportfolio
        $("#js-grid-lightbox-gallery").cubeportfolio({
          filters: "#js-filters-lightbox-gallery",
          layoutMode: "grid",
          mediaQueries: [
            {
              width: 1500,
              cols: 4
            },
            {
              width: 1100,
              cols: 4
            },
            {
              width: 800,
              cols: 3
            },
            {
              width: 480,
              cols: 2,
              options: {
                caption: ""
              }
            }
          ],
          defaultFilter: "*",
          animationType: "sequentially",
          gapHorizontal: 15,
          gapVertical: 15,
          gridAdjustment: "responsive",
          caption: "zoom",
          displayType: "fadeIn",
          displayTypeSpeed: 100,
          // lightbox
          lightboxDelegate: ".cbp-lightbox",
          lightboxGallery: true,
          lightboxTitleSrc: "data-title",
          lightboxCounter:
            '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>'
        });
      })(jQuery, window, document);
    }
  },
  computed: {}
};

var CreateHome = {
  template: "#CreateHome",
  data: function() {
    return {
      name: "",
      address: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        address: this.address
      };
      axios
        .post("/homes", params)
        .then(function(response) {
          router.push("/homes");
        })
        .catch(
          function(error) {
            this.errors = error.response.data.errors;
          }.bind(this)
        );
    }
  }
};

var MyHomes = {
  template: "#my-homes",
  data: function() {
    return {
      message: "Welcome",
      homes: [],
      currentHome: {
        name: "name goes here",
        address: "address goes here"
      }
    };
  },
  created: function() {
    axios.get("/homes").then(
      function(response) {
        this.homes = response.data;
        console.log(this.homes);
        Vue.nextTick(
          function() {
            // DOM updated
            this.initTheme();
          }.bind(this)
        );
      }.bind(this)
    );
  },
  methods: {
    initTheme: function() {
      //projects
      (function($, window, document, undefined) {
        "use strict";

        // init cubeportfolio
        $("#js-grid-lightbox-gallery").cubeportfolio({
          filters: "#js-filters-lightbox-gallery",
          layoutMode: "grid",
          mediaQueries: [
            {
              width: 1500,
              cols: 4
            },
            {
              width: 1100,
              cols: 4
            },
            {
              width: 800,
              cols: 3
            },
            {
              width: 480,
              cols: 2,
              options: {
                caption: ""
              }
            }
          ],
          defaultFilter: "*",
          animationType: "sequentially",
          gapHorizontal: 15,
          gapVertical: 15,
          gridAdjustment: "responsive",
          caption: "zoom",
          displayType: "fadeIn",
          displayTypeSpeed: 100,
          // lightbox
          lightboxDelegate: ".cbp-lightbox",
          lightboxGallery: true,
          lightboxTitleSrc: "data-title",
          lightboxCounter:
            '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>'
        });
      })(jQuery, window, document);
    }
  }
};

var HomeShowPage = {
  template: "#showHomePage",
  data: function() {
    return {
      home: {
        name: "Name",
        address: "Address",
        rooms: {}
      },
      devices: [],
      canvas: null
    };
  },
  created: function() {
    console.log("what is this weird $route thing", this.$route);
    axios.get("/homes/" + this.$route.params.id).then(
      function(response) {
        this.home = response.data;
        console.log("this.home", this.home);
      }.bind(this)
    );
    axios.get("/find-wemo-devices").then(
      function(response) {
        console.log("found devices", response.data.length, response.data);
        this.devices = response.data;
      }.bind(this)
    );
  },
  mounted: function() {
    this.canvas = new fabric.Canvas("canvas");
  },
  methods: {
    search: function() {},
    submit: function(serialNumber) {
      var params = { serialNumber: serialNumber };
      axios.get("/run-wemo", { params: params });
    },
    foundAppliance: function(appliance) {
      return this.devices
        .map(device => device.serialNumber)
        .includes(appliance.serialNumber);
    },
    selectFloor: function(floorNumber) {
      var rooms = this.home.rooms.filter(function(room) {
        return room.floor === floorNumber;
      });
      console.log(floorNumber, rooms);

      this.canvas.clear();

      rooms.forEach(
        function(room) {
          var rect = new fabric.Rect({
            top: room.top,
            left: room.left,
            width: room.width,
            height: room.height,
            fill: "grey",
            strokewidth: 10,
            stroke: "black"
          });
          var text = new fabric.Text(room.name, {
            top: room.top + 50,
            left: room.left,
            fontsize: 20
          });
          var group = new fabric.Group([rect, text]);
          this.canvas.add(group.set("selectable", false));
          var i = 0;
          room.appliances.forEach(
            function(appliance) {
              console.log("appliance", appliance);
              var text = new fabric.Text(appliance.friendlyName, {
                // left: room.left,
                // top: room.top + 30 * i,
                originX: "center",
                originY: "center",
                fontSize: 15
              });
              var rect = new fabric.Rect({
                // left: room.left,
                // top: room.top + 30 * i,
                originX: "center",
                originY: "center",
                height: 25,
                width: 80,
                fill: "#f2f2f2",
                strokewidth: 10,
                stroke: "black"
              });
              var group = new fabric.Group([rect, text], {
                left: room.left,
                top: room.top + 30 * i
              });
              text.serialNumber = appliance.serialNumber;
              if (this.foundAppliance(appliance)) {
                this.canvas.add(
                  group.set("selectable", false).on(
                    "mousedown",
                    function() {
                      console.log("clicked on text", text.serialNumber, text);
                      this.submit(text.serialNumber);
                    }.bind(this)
                  )
                );
              }

              i += 1;
            }.bind(this)
          );
        }.bind(this)
      );
    }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [
    { path: "/", component: HomePage },
    { path: "/signup", component: SignupPage },
    { path: "/login", component: LoginPage },
    { path: "/homes", component: Homes },
    { path: "/create_home", component: CreateHome },
    { path: "/my_home", component: MyHomes },
    { path: "/my_home/:id", component: HomeShowPage }
  ],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router,
  created: function() {
    var jwt = localStorage.getItem("jwt");
    if (jwt) {
      axios.defaults.headers.common["Authorization"] = jwt;
    }
  },
  watch: {
    $route: function() {
      window.location.reload();
    }
  }
});
