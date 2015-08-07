var routeMap = {
        '#/': {
            panelLeft: 'left-panel-start',
            panelRight: 'right-panel-start'
            //controller: 'set1'
        },
            '#/config': {
            panelLeft: 'left-panel-config',
            panelRight: 'right-panel-config'
            //controller: 'set1'
        },
            '#/linux': {
            panelLeft: 'left-panel-linux',
            panelRight: 'right-panel-linux'
        },
            '#/cloud': {
            panelLeft: 'left-panel-cloud',
            panelRight: 'right-panel-cloud'
        },
            '#/vm': {
            panelLeft: 'left-panel-vm',
            panelRight: 'right-panel-vm'
        },
            '#/vagrant': {
            panelLeft: 'left-panel-vagrant',
            panelRight: 'right-panel-vagrant'
        },

    };

    // create the object to store our controllers
    var controllers = {};

    // store the active form shown on the page
    var activeForm = null;
    var activeForm2 = null;


    var alertBox = $('#alert');

    function routeTo(route) {
        window.location.href = '#/' + route;
    }

    controllers.profile = function (form) {
        console.log('worked');
    }


function whichAnimationEvent(){
  var t,
      el = document.createElement("fakeelement");

  var animations = {
    "animation"      : "animationend",
    "OAnimation"     : "oAnimationEnd",
    "MozAnimation"   : "animationend",
    "WebkitAnimation": "webkitAnimationEnd"
  }

  for (t in animations){
    if (el.style[t] !== undefined){
      return animations[t];
    }
  }
}

var animationEvent = whichAnimationEvent();

    /// Routing
    ////////////////////////////////////////


    // Handle transitions between routes
    function transitionRoute(path) {
        // grab the config object to get the form element and controller
        var formRoute = routeMap[path];

        // wrap the upcoming form in jQuery
        var upcomingLeft = $('#' + formRoute.panelLeft);
        var upcomingRight = $('#' + formRoute.panelRight);


        console.log(activeForm);
        // if there is no active form then make the current one active
        if (!activeForm) {
            activeForm = upcomingLeft;
            activeForm2 = upcomingRight;
            console.log(activeForm);

            if(activeForm.hasClass('animated')){
                activeForm.removeClass().addClass("animated slideOutLeft");
                activeForm.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(event) {
                    //activeForm.hide();
                    // Do something when the transition ends
                    upcomingLeft.show().addClass('animated bounceInLeft');
                });
            } else {
                //upcomingLeft.show().addClass('animated bounceInLeft');
                console.log('ran-left');
                //upcomingLeft.removeClass().show().addClass('animated bounceInLeft');
                upcomingLeft.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                    upcomingLeft.removeClass();
                    alert('here');
                    // Do something when the transition ends
                    //upcomingRight.show().addClass('animated bounceInRight');
                });
                upcomingLeft.removeClass().show().addClass('animated bounceInLeft');

            }
            if(activeForm2.hasClass('animated')){
                console.log('ran 2');
                activeForm2.removeClass().addClass("animated slideOutLeft");
                activeForm2.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(event) {
                    //activeForm.hide();
                    // Do something when the transition ends
                    upcomingRight.show().addClass('animated bounceInRight');
                });
            } else {
               upcomingRight.show().addClass('animated bounceInRight');
               console.log('ran');
               upcomingRight.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(event) {
                    upcomingRight.removeClass();
                    // Do something when the transition ends
                    //upcomingRight.show().addClass('animated bounceInRight');
                });
            }
            

        } else {
            // hide old form and show new form
            // activeForm.addClass('animated slideOutLeft').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
            // function(e) {
            // }).addClass('animated slideOutLeft').hide();
            //removeClass().addClass('animated slideOutLeft').hide();//.removeClass().addClass('animated slideOutLeft');
            //activeForm.hide();
            //activeForm2.hide();//.fadeOut();//removeClass().addClass('animated slideOutRight').hide();//removeClass().addClass('animated slideOutRight');
            // activeForm.removeClass().addClass("animated slideOutLeft");
            // activeForm.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(event) {
            //     activeForm.hide();
            //     // Do something when the transition ends
            //     upcomingLeft.show().addClass('animated bounceInLeft');
            // });

            // activeForm2.removeClass().addClass("animated slideOutRight");
            // activeForm2.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(event) {
            //     activeForm2.hide();
            //     // Do something when the transition ends
            //     upcomingRight.show().addClass('animated bounceInRight');
            //     console.log('triggered');
            // });

            if(activeForm.hasClass('animated')){
                console.log('ran3');
                activeForm.addClass("animated slideOutLeft");
                activeForm.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(event) {
                    console.log(event);
                    alert('hi');
                    activeForm.hide();
                    // Do something when the transition ends
                    upcomingLeft.show().addClass('animated bounceInLeft');
                });
            } else {
                upcomingLeft.show().addClass('animated bounceInLeft');
            }
            if(activeForm2.hasClass('animated')){
                activeForm2.removeClass().addClass("animated slideOutRight").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(event) {
                    activeForm.hide();
                    // Do something when the transition ends
                    upcomingRight.show().addClass('animated bounceInRight');
                    console.log('second trigger');
                });
            } else {
               upcomingRight.show().addClass('animated bounceInRight');
            }
            //upcomingRight.show().addClass('animated bounceInRight');



            
        }
        activeForm = upcomingLeft;
        activeForm2 = upcomingRight;


        // activeForm.removeClass().addClass("animated slideOutLeft");
        // $(activeForm).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(event) {
        //     // Do something when the transition ends
        //     upcomingLeft.show().addClass('animated bounceInLeft');
        // });

        // activeForm2.removeClass().addClass("animated slideOutRight");
        // $(activeForm2).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(event) {
        //     // Do something when the transition ends
        //     upcomingRight.show().addClass('animated bounceInRight');
        // });




        // remove any listeners on the soon to be switched form
        activeForm.off();
        activeForm2.off();

        // set the new form as the active form
        // activeForm = upcomingLeft;
        // activeForm2 = upcomingRight;


        // invoke the controller
        //controllers[formRoute.controller](activeForm);
    }

    // Set up the transitioning of the route
    function prepRoute() {
        transitionRoute(this.path);
    }


    /// Routes
    ///  #/         - Login
    //   #/logout   - Logut
    //   #/register - Register
    //   #/profile  - Profile

    Path.map("#/").to(prepRoute);
    Path.map("#/config").to(prepRoute);
    Path.map("#/register").to(prepRoute);
    Path.map("#/profile").to(prepRoute);

    Path.root("#/");

    Path.listen();

function hox() {
  var e = document.getElementById("rocket_launch");//$('#rocket_launch');//document.getElementsById('rocket_launch');
  
  function whichTransitionEvent(){
      var t;
      var el = document.createElement('fakeelement');
      var transitions = {
        'transition':'transitionend',
        'OTransition':'oTransitionEnd',
        'MozTransition':'transitionend',
        'WebkitTransition':'webkitTransitionEnd'
      }

      for(t in transitions){
          if( el.style[t] !== undefined ){
              return transitions[t];
          }
      }
  }

  var transitionEvent = whichTransitionEvent();
  transitionEvent && e.addEventListener(transitionEvent, function() {
    //console.log('Transition complete!  This is the callback, no library needed!');

    // Code for Chrome, Safari, and Opera
    var ele = document.getElementsByClassName("cloud_fill");
    var ele = ele[0];
    ele.style.WebkitAnimationPlayState = "paused";

    // Standard syntax
    ele.style.animationPlayState = "paused";
        //$('#rocket_launch').css("margin-bottom", "0px");
        $('.cloud_fill').css("animation","none");
        $('.cloud_fill').css("transform","scale(0)");
        $('.rocket_shadow').css("animation","none");

  });

};

  if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    $('#canvas').hide();
    $('.btn-server').css({
      display:"block",
      float:"left"
    });
    $('.btn-client').css({
      display:"block",
      float:"left"
    });
  }


$('.btn-server').click(function(){
    $('.btn-server').addClass('grey');
    $(this).removeClass('grey').addClass('active-btn');
    //Content Fade
  $('.continue-btn').hide();
    var content = $(this).data("type");
  if(content == "linux"){
    $('.continue-linux').fadeIn().addClass('blink');
    $('.client-back-linux').fadeIn();
    var target = 3;
  } else if(content == "cloud"){
    $('.continue-cloud').fadeIn().addClass('blink');
    $('.client-back-cloud').fadeIn();
    var target = 4;
  } else if(content == "vm"){
    $('.continue-vm').fadeIn().addClass('blink');
    $('.client-back-vm').fadeIn();
    var target = 5;
  } else if(content == "vagrant") {
    $('.continue-vagrant').fadeIn().addClass('blink');
    $('.continue-vagrant2').show().addClass('blink');
    $('.client-back-vagrant').fadeIn();
    var target = 6;
  } else{
    console.log('no continue');
  }
  $('.srv-content').hide();
  $('.'+content+'-content').fadeIn();
 
});

//Change Linux Server Dropdown value
  $('.server-version').click(function(){
    var choice = $(this).text();
    $('#linux-choice').html(choice + '<span style="margin-left: 10px;" class="caret"></span>');
    var datachoice = $(this).data("choice");
    $('.linux-block').hide();
    $('.'+datachoice+'-choice-content').show();
    $('.continue-2').fadeIn();
    $('.continue-2').addClass('blink');
    $('.client-back-linux').show();
  });

  //Change Cloud Dropdown value
  $('.cloud-version').click(function(){
    var choice = $(this).text();
    $('#cloud-choice').html(choice + '<span style="margin-left: 10px;" class="caret"></span>');
    var datachoice = $(this).data("choice");
    $('.cloud-block').hide();
    $('.'+datachoice+'-choice-content').show();
    $('.continue-2').fadeIn();
    $('.continue-2').addClass('blink');
  });

    //Rocket Button Actions
  $('.rocket-go').click(function(){
    var height = $(this).data("rocket");
    var current_pos = $('#rocket_launch').css( "margin-bottom" );
    var distance = parseInt(current_pos.slice(0,-2)) + height;
    console.log(height+','+current_pos+','+distance);
    distance = distance + 'px';
    $('#rocket_launch').css("margin-bottom", distance);
    $('.cloud_fill').css("animation","smoke_size .35s infinite");
    $('.rocket_shadow').css("animation","shadow_flare .35s infinite");
    //$('.rocket-container').addClass('go');
    hox();
  });

  $('.btn-primary-grey').click(function(){
    $('.client-back-1').hide();
    $('.client-back').show();
  });

  $('.btn-primary').click(function(){
    $('.client-back-1').show();
    $('.client-back').hide();
    $('.start-content').show();
  });

  $('.back-btn').on('click',function(){
    var height = $(this).data("rocket");
    $('#rocket_launch').css("margin-bottom", height);
  });

  $('.btn-client').click(function(){
    $('.btn-client').addClass('grey');
    $(this).removeClass('grey').addClass('active-btn');
    $('.develop').fadeIn().addClass('blink');
    var url = $(this).data("url");
    // document.location = url;

    $('.develop').click(function(e){
      e.preventDefault();
      $('.feedback-overlay').show();
      $('#feedback').modal('show');
      $('#feedback').on('hidden.bs.modal', function () {
        $('.develop').attr("href", url);
        // $('#feedback').hide();
        // $('.feedback-overlay').hide();
        document.location = url;
      });
    });
  });
  
  $('.reset').click(function(){
    $('#rocket_launch').css("margin-bottom", "0px");
    $('.cloud_fill').css("animation","none");
    $('.cloud_fill').css("transform","scale(0)");
    $('.rocket_shadow').css("animation","none");
  });