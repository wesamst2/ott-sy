

// client-slider-one
if (document.getElementsByClassName('client-slider-one')[0] != undefined) {
var slider = tns({
    container: '.client-slider-one',
    loop: true,
    navPosition: "bottom",
    controls: false,
    autoplay: true,
    autoplayButtonOutput: false,
    responsive: {        
        640: {
            edgePadding: 20,
            gutter: 20,
            items: 1
          },
          700: {
            gutter: 30,
			items: 3
          },
          900: {
            items: 4
          }
    }
});
}

if (document.getElementsByClassName('companies-slider-one')[0] != undefined) {
    var slider = tns({
        container: '.companies-slider-one',
        loop: false,
        navPosition: "bottom",
        controls: false,
        autoplay: true,
        autoplayButtonOutput: false,
        responsive: {
            640: {
                edgePadding: 20,
                gutter: 20,
                items: 1
            },
            700: {
                gutter: 30,
                items: 3
            },
            900: {
                items: 4
            }
        }
    });
}

// client-slider-two
if (document.getElementsByClassName('client-slider-two')[0] != undefined) {
  var slider = tns({
      container: '.client-slider-two',
      loop: true,
      navPosition: "bottom",
      controls: false,
      autoplay: true,
      autoplayButtonOutput: false,
      responsive: {        
          640: {
              edgePadding: 20,
              gutter: 20,
              items: 1
            },
            700: {
              gutter: 30
            },
            900: {
              items: 1
            }
      }
  });
  }


// hero-slider
if (document.getElementsByClassName('hero-slider')[0] != undefined) {
var slider = tns({
  container: '.hero-slider',
  speed:400,
  loop: true,
  arrowKeys: true,
  navPosition: "bottom",
  controls: false,
  autoplay: true,
  autoplayButtonOutput: false,
  responsive: {        
      640: {
          edgePadding: 20,
          gutter: 20,
          items: 1
        },
        700: {
          gutter: 30
        },
        900: {
          items: 1.5
        }
  }
});
}


// hero-two-3-slider
if (document.getElementsByClassName('hero-two-3-slider')[0] != undefined) {
  var slider = tns({
    container: '.hero-two-3-slider',
    speed:400,
    loop: true,
    arrowKeys: true,
    navPosition: "bottom",
    controls: false,
    autoplay: true,
    autoplayButtonOutput: false,
    responsive: {        
        640: {
            edgePadding: 20,
            items: 1
          },
          700: {
            gutter: 30
          },
          900: {
            items: 1
          }
    }
  });
  }