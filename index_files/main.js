const fstd = [];
fstd.breakPoint = 800;
fstd.isPlaying = false;

fstd.initYoutubeFunc = function(){
  
  let tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  let firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
   
  let movieRatio = 16/9;  
  function movieAdjust(){
    let adjustWidth = $(window).width();
    let adjustHeight = window.innerHeight;
    if (adjustHeight > adjustWidth / movieRatio) {
            adjustWidth = adjustHeight * movieRatio;
    }
    $('.bg-video-wrapper iframe').css({width:(adjustWidth),height:(adjustWidth/movieRatio)});
    $('.hero-bg-video iframe').css({width:(adjustWidth),height:(adjustWidth/movieRatio)});
  }
  movieAdjust();

  $(window).on('resize', function(){
    movieAdjust();
  });

  fstd.ytPlayer;
  let ytStatus;
  let lastVideoId;
  let heroPlayer;
  let heroVideoId = false;

  window.onYouTubeIframeAPIReady = function(){

    function initHeroVideo(){

      heroVideoId = $('.hero-bg-video').data('video');
      if(heroVideoId){
        heroPlayer = new YT.Player('hero-player',{
            videoId: heroVideoId,
            playerVars:{
              controls: 0,
              showinfo: 0,
              rel: 0,
              playsinline: 1,
              loop: 1,
              playlist: heroVideoId
            },
            events: {
              'onReady': onPlayerReady
            }
          });
        movieAdjust();

        function onPlayerReady(event){
          event.target.mute();
          event.target.playVideo();
        }
      }
      
    }
    initHeroVideo();

    function initWorksVideo(){
      function loadVideo(videoId){
        if(videoId !== lastVideoId){
          $('.bg-video-wrapper').html('<div id="bg-video"></div>'); 
        }
      
        fstd.ytPlayer = new YT.Player(
          'bg-video',
          {
            width: 640,
            height: 480,
            videoId: videoId,
            loop: 1,
            playerVars: {
              controls: 0,
              showinfo: 0,
              rel: 0
            },
            events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange,
            }
          }
        );
        movieAdjust();
        lastVideoId = videoId;  
      }

      function onPlayerReady(event) {
        event.target.mute();
        event.target.playVideo();
      }

      function onPlayerStateChange(event) {
         ytStatus = event.data;
       if (ytStatus == YT.PlayerState.ENDED) {
           fstd.isPlaying = false;
         }
         if (ytStatus == YT.PlayerState.PLAYING) {
             fstd.isPlaying = true;
         }
         if (ytStatus == YT.PlayerState.PAUSED) {
              fstd.isPlaying = false;
         }
      }

      $('.works-unit a').each(function(){
        let $this = $(this);
        if($(window).width() > fstd.breakPoint){
          $this.on('mouseenter', function(e){
            let videoId = $this.data('video');
            if(videoId){
              loadVideo(videoId);  
            }
          });//mouseenter          
        }

      });      
    }
    initWorksVideo();

  }  
}


/* LAZYLOAD==================================================== */
function lazyIndexImg(){
  $('.slide-image img').each(function(){
    let imgSrc = $(this).attr('src');
    if(!imgSrc){
      let imgSrc = $(this).data('src');
      $(this).attr('src', imgSrc);
    }
  });
}


/* SCROLLFUNC==================================================== */
fstd.initSPScrollFunc = function(){
  
  if($(window).width() < fstd.breakPoint){

    $('.hero').css({'height': $(window).height() + 'px'});    
    let currentPos = $(window).scrollTop();
    let switchPos = 100;
    let articleOffset,
        articleHeight;

    let showBg = function(){
      $('.panel').each(function(){
        if(currentPos + switchPos >= $(this).offset().top){
          if(!$('.bg', this).hasClass('visible')){
            $('.bg', this).addClass('visible');
          }
        }else{
          if($('.bg', this).hasClass('visible')){
            $('.bg', this).removeClass('visible');
          }            
        }
      });
    }
    showBg();

    let toggleFooterInSinglePage = function(){
      if(!$('body').hasClass('home')){
        let articleOffset = $('.article-area').offset().top;
        let articleHeight = $('.article-area').height()
        currentPos = $(window).scrollTop();
        if(currentPos + $(window).height() > articleOffset + articleHeight ){
          if(!$('body').hasClass('is-footervisible')){
            $('body').addClass('is-footervisible');
          }
        }else{
          if($('body').hasClass('is-footervisible')){
            $('body').removeClass('is-footervisible');  
          }
          
        }        
      }

    }
    toggleFooterInSinglePage();

    $(window).on('scroll', function(){
      currentPos = $(window).scrollTop();

      if(currentPos > $(window).height() / 2){
        if(!$('body').hasClass('scrolled')){
          $('body').addClass('scrolled');
        }
      }else{
        if($('body').hasClass('scrolled')){
          $('body').removeClass('scrolled');
        }
      }
      showBg();
      toggleFooterInSinglePage();

    });
  }
}


/* WINDOW MIN HEIGHT==================================================== */
fstd.setWindowMinHeight = function(){

  let windowHeight = $(window).height();
  let $targetArea = $('.page-body');
  $targetArea.css({'min-height': '' });	
  if($('body').height() < $(window).height()){
    
    let footerHeight = $('footer').outerHeight(true);
    let targetAreaMargin = 128;
    let sum = footerHeight + targetAreaMargin;

    if($(window).width() > fstd.breakPoint){
    	$targetArea.css({'min-height': 'calc(100vh - ' + sum +  'px' });	
    }else{
    	$targetArea.css({'min-height': windowHeight - sum + 'px' });	
    }
    
  }
}


/* SWIPER==================================================== */
fstd.initSlider = function(){

  let smallFlag = false;
  let newsUnitNum;
  let worksUnitNum;

  if($(window).width() > fstd.breakPoint){
    smallFlag = false;
  }else{
    smallFlag = true;
  }

  function setNewsUnit(){

    if(smallFlag){
      newsUnitNum = 2;
    }else{
      newsUnitNum = 4;
    }
    do{
      $('.news-unit .swiper-wrapper').children('.item:lt('+newsUnitNum+')').wrapAll('<div class="swiper-slide"></div>');
    }while($('.news-unit .swiper-wrapper').children('.item').length);

    fstd.newsSwiper = new Swiper('.news-unit', {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        spaceBetween: 33,
        simulateTouch: false,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        preloadImages: false,
        lazy: {
           loadPrevNext: true,
           loadPrevNextAmount: 4,
           loadOnTransitionStart: true
        }
    });

    const $newsController = $('.news-controller');
    const $newsPrev = $('.slider-prev', $newsController);
    const $newsNext = $('.slider-next', $newsController);
    let newsActiveIndex = 0;
    let newsSlideLength = $('.news-unit .swiper-slide').length;
    $newsController.addClass('first');
    if(newsSlideLength === 1){
      $newsController.hide();
    }else{
      $newsController.show();
    }
    $newsPrev.on('click', function(){
      fstd.newsSwiper.slidePrev();
    });

    $newsNext.on('click', function(){
      fstd.newsSwiper.slideNext();
    });

    fstd.newsSwiper.on('slideChange', function(){

      newsActiveIndex = fstd.newsSwiper.activeIndex;
      //console.log(newsActiveIndex);
      if(newsActiveIndex === 0){
        $newsController.addClass('first');
        $newsController.removeClass('last');
      }else if(newsActiveIndex === newsSlideLength - 1){
        $newsController.addClass('last');
        $newsController.removeClass('first');
      }else{
        if($newsController.hasClass('first') || $newsController.hasClass('last')){
          $newsController.removeClass('first')
                         .removeClass('last');
        }
      }
    });

  }
  setNewsUnit();


  function setWorksUnit(){
    if(smallFlag){
      worksUnitNum = 2;
    }else{
      worksUnitNum = 4;
    }
    do{
      $('.works-unit .swiper-wrapper').children('.item:lt('+worksUnitNum+')').wrapAll('<div class="swiper-slide"></div>');
    }while($('.works-unit .swiper-wrapper').children('.item').length);    

    fstd.worksSwiper = new Swiper('.works-unit', {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        spaceBetween: 33,
        simulateTouch: false,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        preloadImages: false,
        lazy: {
           loadPrevNext: true,
           loadPrevNextAmount: 4,
           loadOnTransitionStart: true
        }  
    });

    const $worksController = $('.works-controller');
    const $worksPrev = $('.slider-prev', $worksController);
    const $worksNext = $('.slider-next', $worksController);
    let worksActiveIndex = 0;
    let worksSlideLength = $('.works-unit .swiper-slide').length;

    $worksController.addClass('first');
    if(worksSlideLength === 1){
      $worksController.hide();
    }else{
      $worksController.show();
    }

    $worksPrev.on('click', function(){
      fstd.worksSwiper.slidePrev();
    });

    $worksNext.on('click', function(){
      fstd.worksSwiper.slideNext();
    });

    fstd.worksSwiper.on('slideChange', function(){
      worksActiveIndex = fstd.worksSwiper.activeIndex;
      if(worksActiveIndex === 0){
        $worksController.addClass('first');
        $worksController.removeClass('last');
      }else if(worksActiveIndex === worksSlideLength - 1){
        $worksController.addClass('last');
        $worksController.removeClass('first');
      }else{
        if($worksController.hasClass('first') || $worksController.hasClass('last')){
          $worksController.removeClass('first')
                          .removeClass('last');
        }
      }
    });    

  }
  setWorksUnit();

  function setBannerUnit(){
    fstd.bannerSwiper = new Swiper('.banner-unit', {
      spaceBetween: 15,
      speed: 800,
      loop: true,
      simulateTouch: false,
      autoplay: {
        delay: 4000
      }
    });
  }
  if($(window).width() < fstd.breakPoint){
    setBannerUnit();  
    //fstd.bannerSwiper.autoplay.stop();
  }
  

  $(window).on('resize', function(){

    if($(window).width() > fstd.breakPoint){
      if(smallFlag){
        smallFlag = false; 
        $('.news-unit .item').unwrap();
        $('.works-unit .item').unwrap();
        setNewsUnit();
        setWorksUnit();
        //fstd.bannerSwiper.destroy();
      }
    }else{
      if(!smallFlag){
        smallFlag = true;  
        $('.news-unit .item').unwrap();
        $('.works-unit .item').unwrap();
        setNewsUnit();
        setWorksUnit();
        setBannerUnit();  
      }
    }
  });
     
}


/* BANNER LOOP==================================================== */
fstd.bannerLoop = function(){

/*
  function bannerUnit(){
    let bannerUnit = $('.banner-unit');
    let bannerItemLength = $('.banner-unit .item').length;
    let interval = 4000;
    let currentIndex = 0;

    $('.banner-unit .item').eq(0).addClass('visible');

    function bannerLoop(){
      $('.banner-unit .item').removeClass('visible');      
      $('.banner-unit .item').eq(currentIndex).addClass('visible');
      
      if(currentIndex === bannerItemLength - 1){
        currentIndex = 0;
      }else{
        currentIndex++;
      }

      setTimeout(bannerLoop, interval);
    }

    if(bannerItemLength > 1){
      bannerLoop();  
    }
    
  }
  bannerUnit();  
*/
}


/* TEXT SHUFFLE==================================================== */
fstd.devideText = function(){

  $('.sec-ttl').each(function(){
    let $this = $(this);
    let _targettext = $this.text();
    let _targettextarray = _targettext.split('');

    for(let i = 0; i < _targettextarray.length; i++){
      _targettextarray[i] = '<span class="f">'+_targettextarray[i]+'</span>';
    }

    _targettext = _targettextarray.join('');
    $this.html($(_targettext));         
  });

}


/* flashtext==================================================== */
fstd.panelAnimation = function($target){
    
    let $fltarget = false;
    $('.flash .f', $target).css({'opacity': '0'});
    $('.archive-unit .item', $target).removeClass('animated');
    $('.swiper-controller', $target).removeClass('animated');
    

    $fltarget = $('.flash', $target);
    let flashLength = $('.flash .f', $target).length;
    let _delay;
    let _flindex;
    let $fltargetarray;
    let lindex = [];

    function flashing($fltarget, _delay){

      setTimeout(function(){
        let i = 0;
        function singleflash(){

          $fltarget.css({'opacity': '0', 'transform': 'translateY(10px)'})
                   .delay(0)
                   .velocity({
                    opacity: 1,
                    translateY: [0, 8]
                   },{
                    easing:'easeOutCubic',
                    duration:1600,
                    complete:function(){

                    }
                   });
        }
        singleflash();
      }, _delay);

    }//flashing

    function sliderItemFadein($target){

        $('.swiper-controller').addClass('animated');
        //$('.archive-unit .swiper-slide:first-child .item', $target).each(function(i){
          $('.archive-unit .swiper-slide .item', $target).each(function(i){
          let $this = $(this);
          //console.log(i);
          setTimeout(function(){
            $this.addClass('animated');
          }, i * 100);
        });
    }    

    setTimeout(function(){
      if($fltarget.length){
        _fldelay = 0;
        $fltarget.each(function(_flindex){

          $(this).addClass('done');

          let $this = $(this);
          let _fldelay = _flindex * 100;
          
          setTimeout(function(){
            let lindex = 0;

            $('.f', $this).each(function(lindex){
              _delay = lindex * 100;
                if($this.hasClass('concept-copy-en')){
                  _delay = lindex * 160;
                }          
              $fltarget = $(this);
              flashing($fltarget, _delay);
              lindex++;

              if(lindex === flashLength){
                setTimeout(function(){
                  $('.anim', $target).addClass('done');
                  sliderItemFadein($target);
                }, _delay + 400);
                
              }
              
            });
          }, _fldelay);
            
        });
      }else{
        setTimeout(function(){
          $('.anim', $target).addClass('done');
        }, 500);
      }
    }, 500);

}


/* SCROLL==================================================== */
fstd.initPanelSlide = function(){

  let scrollTimeout,
      $currentPanel,
      $nextPanel,
      nextIndex;

  const $wrapper = $('#wrapper');
  const $scrolldown = $('.scrolldown');

  let currentIndex = $('.current').index('.panel');
  let sectionLength = $('.panel').length - 1;
  let isEdge = false;
  fstd.isTouchDevice = 'ontouchend' in document;
  let mousewheelevent = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
  
  $('body').attr('data-current', currentIndex);
  $('.currentbar-unit li').eq(currentIndex).addClass('current');

  function slideFunc(targetIndex){    
    
    $currentPanel = $('.panel.current');
    $nextPanel = $('.panel').eq(currentIndex + targetIndex);
    $('.panel-content', $nextPanel).css({'opacity': '1'});
    
    //detect edge
    if((currentIndex === 0 && targetIndex < 1) || (currentIndex === sectionLength && targetIndex > 0 )){
      isEdge = true;
    }else{
      isEdge = false;
    }

    //$currentPanel, $nextPanelが確定してから
    setTimeout(function(){

      //animate
      if(!$wrapper.hasClass('animating')){

        if(!isEdge){

          $currentPanel.velocity('fadeOut', {
            duration:1200,
            easing: 'easeOutQubic',
            begin: function(){
              
              $wrapper.addClass('animating');
              $currentPanel.removeClass('current');
              $('.panel-inner', $currentPanel).removeClass('scrollable-below');
              
            	$('.panel-content', $currentPanel).velocity({
            		opacity:0
            	},{
            		duration:400
            	});

              if($nextPanel.index('.panel') === sectionLength){
                $scrolldown.velocity('fadeOut');
              }
              if($currentPanel.index('.panel') === sectionLength){
                $scrolldown.velocity('fadeIn'); 
              }
            },
            complete:function(){
          		if(fstd.isPlaying){
								fstd.ytPlayer.pauseVideo();	
							}
            }
          });

          //$nextPanel;
            $nextPanel.addClass('current').delay(100).velocity('fadeIn', {
              duration: 600,
              easing: 'easeInQubic',
              begin:function(){

                window.location.hash = $nextPanel.attr('id');
                nextIndex = currentIndex + targetIndex;

                $('.gnav li a').removeClass('nav-current');
                $('.gnav li a').eq(nextIndex).addClass('nav-current');
                $('.currentbar-unit li').removeClass('current');
                $('.currentbar-unit li').eq(nextIndex).addClass('current');
                $('body').attr('data-current', nextIndex);

                setTimeout(function(){
                  $('.panel-inner', $nextPanel).scrollTop(0);  
                }, 100);

                fstd.panelAnimation($nextPanel);

              },
              complete:function(){
              	$wrapper.removeClass('animating');  
                currentIndex = $('.current').index('.panel');
                $('.anim').not('.current .anim').removeClass('done');
              }
            });

        }//isEdge
      }//animating

    }, 100);
  }//slideFunc

  function initMouseWheelSlide(){
      //upwards
      $(document).off(mousewheelevent, '.scrollable-above');
      $(document).on(mousewheelevent, '.scrollable-above', _.throttle(function(e){

        e.preventDefault();
          let delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);
            if (delta > 0){
                slideFunc(-1);
            }

      }, 2000,{trailing: false, leading: true}));

      let focusouttimer;
      $('.wpcf7-form')
        .focusin(function(e) {
          $(document).off(mousewheelevent, '.scrollable-above');
          clearTimeout(focusouttimer);    
        })
        .focusout(function(e) {
          focusouttimer = setTimeout(function(){
            $(document).on(mousewheelevent, '.scrollable-above', _.throttle(function(e){

              e.preventDefault();
                let delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);
                  if (delta > 0){
                      slideFunc(-1);
                  }

            }, 2000,{trailing: false, leading: true}));                      
          }, 1000);

      });       

    //downwards
      $(document).off(mousewheelevent, '.scrollable-below');
      $(document).on(mousewheelevent,'.scrollable-below', _.throttle(function(e){
        
        e.preventDefault();
          let delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);                   
            if (delta < 0){

                slideFunc(1);
            }

      }, 2000,{trailing: false, leading: true}));
   
  }

  function initTouchSlide(){
      let _startPos;

      //upwards
      $(document).off('touchstart', '.scrollable-above');
      $(document).off('touchend', '.scrollable-above');
      $(document).on('touchstart', '.scrollable-above', function(){
        _startPos = event.changedTouches[0].pageY;
      })
      .on('touchend', '.scrollable-above', function(){
        _posY = event.changedTouches[0].pageY;
        //e = $wrapper;
        //console.log('starPos is ' + _startPos);
        //console.log('posY is ' + _posY);

        if(_posY > _startPos){
          slideFunc(-1);
          //console.log('up');
        }
      }); 

      //downwards
      $(document).off('touchstart', '.scrollable-below');
      $(document).off('touchend', '.scrollable-below');

      $(document).on('touchstart', '.scrollable-below', function(){
        _startPos = event.changedTouches[0].pageY;
      })
      .on('touchend', '.scrollable-below', function(){
        _posY = event.changedTouches[0].pageY;
        //e = $wrapper;
        //console.log('starPos is ' + _startPos);
        //console.log('posY is ' + _posY);        
        if(_posY < _startPos){
          slideFunc(1);
          //console.log('down');
        }
      }); 
  }

          
  function initPanelScroll(){
    //console.log('function initpanelscroll');
    //->
    //touch scroll

    //if(fstd.isTouchDevice){
      //console.log('istouch');
      let _posY;
      let _startPos;
      let currentpos;

      $('.panel').each(function(){
        let $this = $(this);
        let $panelInner = $('.panel-inner', this);

        //touchdevice with scrollable
        if($this.hasClass('scrollable')){

          let scrollableamount = ($('.panel-content-wrapper', $this).height() - $(window).height());

          $panelInner.off('scroll');
          $panelInner.on('scroll', function(){
            //console.log('scrolled');
            currentpos = $panelInner.scrollTop();
            clearTimeout(scrollTimeout);

            if(currentpos === 0){
              scrollTimeout = setTimeout(function(){
                $panelInner.addClass('scrollable-above');

              }, 1000);
            }else if(currentpos >= scrollableamount){
              scrollTimeout = setTimeout(function(){
                $panelInner.addClass('scrollable-below');
                
              }, 1000);
            }else{
              $panelInner.removeClass('scrollable-above').removeClass('scrollable-below');
            }

          });

          initTouchSlide();

        }else{
          
          $this.off('touchstart');
          $this.off('touchend');

          $this.on('touchstart', function(){
            _startPos = event.changedTouches[0].pageY;
            
          })
          .on('touchend', function(){
            _posY = event.changedTouches[0].pageY;

            if(Math.abs(_startPos - _posY) > 50){
              if(event.changedTouches[0].pageY < _startPos){
                //console.log('down');
                slideFunc(1);

              }else{
                slideFunc(-1);
                //console.log('up');
              }              
            }

          });        
        }
      })
    
    //}else{
    //mousewheel
      $('.panel').each(function(){

        let $this = $(this);
        let $panelInner = $('.panel-inner', this);
        let currentpos;
        $panelInner.removeClass('scrollable-above');

        //!touch device with scrollable
        if($this.hasClass('scrollable')){
          $this.off(mousewheelevent);
          let scrollableamount = ($('.panel-content-wrapper', $this).outerHeight() - $this.height());

          $panelInner.addClass('scrollable-above');
          $(document).off(mousewheelevent, '.animating .panel-inner');
          $(document).on(mousewheelevent, '.animating .panel-inner', function(e){
            e.preventDefault();
          });
          $panelInner.off('scroll');
          $panelInner.on('scroll', function(e){
            currentpos = $panelInner.scrollTop();
            clearTimeout(scrollTimeout);

            let scrollInterval = 1000;
            if($('.ua-desktop.ua-safari').length){
              scrollInterval = 0;
            }

            if(currentpos === 0){
              scrollTimeout = setTimeout(function(){
                $panelInner.addClass('scrollable-above');

              }, scrollInterval);
            }else if(currentpos >= scrollableamount){
              scrollTimeout = setTimeout(function(){
                $panelInner.addClass('scrollable-below').removeClass('scrollable-above');
              }, scrollInterval);
            }else{
              $panelInner.removeClass('scrollable-above').removeClass('scrollable-below');
            }

          });
          initMouseWheelSlide();

          

        }else{//!scrollable



          //!touch device without scrollable
          $this.off(mousewheelevent);
          $this.on(mousewheelevent, _.throttle(function(e){
            //console.log('mousewheelevent');
            e.preventDefault();
              let delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);
                        
                if(delta < 0){
                  slideFunc(1);

                }else{
                  slideFunc(-1);
                }             

          }, 2000,{trailing: false, leading: true}));

          let focusouttimer;
          $('.wpcf7-form')
            .focusin(function(e) {
              $this.off(mousewheelevent);
              clearTimeout(focusouttimer);
            })
            .focusout(function(e) {
              focusouttimer = setTimeout(function(){
                $this.on(mousewheelevent, _.throttle(function(e){
                  //console.log('mousewheelevent');
                  e.preventDefault();
                    let delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);
                              
                      if(delta < 0){
                        slideFunc(1);

                      }else{
                        slideFunc(-1);
                      }             

                }, 2000,{trailing: false, leading: true}));
              }, 1000);              

          });          
          
        }
      });
    //}//!isTouchDevice
  }
  
  function slideToAnchor(){
    $('.gnav li a').each(function(){
      let $this = $(this);
      $this.on('click', function(){
        let anchorIndex = $this.parent('li').index('.gnav li');
        let targetIndex = anchorIndex - currentIndex;
        if(targetIndex != 0){
          slideFunc(targetIndex);  
        }
      });
    });
  }
  
  function slideToHash(){
    let _hash = location.hash;
    let hashpos = $(_hash).index('.panel') - currentIndex;
    slideFunc(hashpos);
  }

  function initMenu(){

    const $menuIcon = $('.menu-icon');
    const $menuSec = $('.menu');
    const $menuBody = $('.menu-wrapper');
    const $menuOverlay = $('.menu-overlay');
    let _moveAmount = 450;

    function menuOpen(){
      $('body').addClass('is-menuopen');
      $menuIcon.addClass('active');

      if($(window).width() < fstd.breakPoint){
        _moveAmount = $(window).width();
        _moveAmount = 375;
      }else{
        _moveAmount = 450;
      }

      $menuSec.velocity('fadeIn', {
        duration:100,
        complete:function(){
          $menuBody.velocity({
            translateX: [0, _moveAmount]
          },{
            duration:300,
            easing: 'easeOutCubic'
          });
        }
      })
    }

    function menuClose(){
      $('body').removeClass('is-menuopen');
      if($(window).width() < fstd.breakPoint){
        _moveAmount = $(window).width();
        _moveAmount = 375;
      }else{
        _moveAmount = 450;
      }

      $menuIcon.removeClass('active');
      $menuBody.velocity({
        translateX: [_moveAmount, 0]
      },{
        duration:400,
        easing: 'easeOutCubic',
        complete:function(){
          $menuSec.velocity('fadeOut');
        }
      })
    }

    $menuIcon.on('click', function(){
      if(!$('body').hasClass('is-menuopen')){
        menuOpen();
      }else{
        menuClose();
      }
    });

    $menuOverlay.on('click', function(){
      if($('body').hasClass('is-menuopen')){
        menuClose();  
      }
    });


    $('.menu-nav li a').each(function(){
    let $this = $(this);
    $this.on('click', function(e){

      let hash = $this.attr('href');
      //case 'hash'
      function resetSlide(){
        switch (hash){
          case '#news':
            fstd.newsSwiper.slideTo(0);
            break;

          case '#works':
            fstd.worksSwiper.slideTo(0);
            break;  
        }        
      }


      if($(window).width() > fstd.breakPoint){
        let hashpos = $(hash).index('.panel') - currentIndex;
        if(hashpos != 0){
          menuClose();
          resetSlide();
          slideFunc(hashpos);  
        }else{
          menuClose();
        }
      }else{
        if($('body').hasClass('home')){
          e.preventDefault();
          menuClose();
          resetSlide();
          setTimeout(function(){
            let href = $this.attr("href"),
                target = $(href === "#" || href === "" ? 'html' : href);
            target.velocity("scroll", { duration: 600, easing: "easeInOutQuart" });  
            return false;          
          }, 400);          
        }
      }
      });
    });
  }
  initMenu();

  function initPanelSize(){

    $('.panel').each(function(){
      let $this = $(this);
      let panelpadding = 50;
      let panelheight = $(window).innerHeight() - panelpadding;
      $this.height(panelheight);

      $this.off(mousewheelevent);
      if($('.panel-content-wrapper', $this).outerHeight() > $this.height()){
        $this.addClass('scrollable');
      }else{
        $this.removeClass('scrollable');
      }

    });    

    initPanelScroll();
  }
  
  function initPanel(){

    if($('body').hasClass('home')){
    	$('.gnav li a').eq(currentIndex).addClass('nav-current');	
    }
    
    
    slideToAnchor();
    window.onhashchange = slideToHash;
    $('.panel').not('.panel.current').velocity('fadeOut',0);
    $('.bg').show();

    $scrolldown.on('click', function(){
      slideFunc(+1);
    });

    if(currentIndex === $('.panel').length - 1){
      $scrolldown.hide();
    }

    $('body').addClass('panel-initialized');
 
  }
  

  function destroyPanelSlide(){
    
    $('body').removeClass('panel-initialized');
    let currentid = $('.current').attr('id');
    window.history.pushState(null, null, '#' + currentid);
    $('.panel').each(function(){
      let $this = $(this);
      $this.css({'height': '', 'opacity': '1', 'display': 'block'});
      $this.removeClass('scrollable');
      $('.panel-inner', this).removeClass('scrollable-above');
      $('.panel-inner', this).removeClass('scrollable-below');
      window.onhashchange = false;
      $this.off(mousewheelevent);
      $('.panel-inner', this).off('scroll');
      $('.anim', this).addClass('done');
    });
  
  }//destroy


  function init(){
    initPanelSize();
    initPanel();
  }

  if($(window).width() > fstd.breakPoint){
    init();  
  }

  let lastInnerWidth = window.innerWidth ;
  let timer = false;
  $(window).resize(function() {

    if ( lastInnerWidth != window.innerWidth ) {
      lastInnerWidth = window.innerWidth ;

      // 処理内容
      if(!$wrapper.hasClass('is-horizontal-resizing')){
        $wrapper.addClass('is-horizontal-resizing');
      }
    }
    //resize開始でaddlass
    if(!$wrapper.hasClass('is-resizing')){
      $wrapper.addClass('is-resizing');
    }
    
    if (timer !== false) {
        clearTimeout(timer);
    }
    timer = setTimeout(function() {

      if($(window).width() > fstd.breakPoint){

        if(!$('body').hasClass('panel-initialized')){
          fstd.isTouchDevice = 'ontouchend' in document;
          //console.log('init on resize');
          initPanelSize();
          initPanel();
          $('.current .anim').css({'opacity': '1'});
          $('.current .f').css({'opacity': '1'});
        }else{
          initPanelSize();  
        }
        
      }else{

        if($('body').hasClass('panel-initialized')){
          destroyPanelSlide();
          let currentpanel = $('.panel.current').attr('id');
            let currentpaneloffset;
          if($('body').hasClass('home')){
            currentpaneloffset = $('#' + currentpanel).offset().top;	
          }
          
          $(window).scrollTop(currentpaneloffset);

          setTimeout(function(){
            fstd.initSPScrollFunc();  
          }, 200);
        }        
      }
      //resize完了して200msでis-resizingを外す。
      setTimeout(function(){
        if($wrapper.hasClass('is-resizing')){
          $wrapper.removeClass('is-resizing');
        }
        if($wrapper.hasClass('is-horizontal-resizing')){
          $wrapper.removeClass('is-horizontal-resizing');
        }        
      }, 200); 

    }, 200);

  });//window resize  

}//initpanelslide




/* singlemenu==================================================== */
  fstd.initOuterMenu = function(){

    const $menuIcon = $('.menu-icon');
    const $menuSec = $('.menu');
    const $menuBody = $('.menu-wrapper');
    const $menuOverlay = $('.menu-overlay');

    function menuOpen(){
      $('body').addClass('is-menuopen');
      $menuIcon.addClass('active');
      $menuSec.velocity('fadeIn', {
        duration:100,
        complete:function(){
          $menuBody.velocity({
            translateX: [0, 450]
          },{
            duration:600,
            easing: 'easeOutCubic'
          });
        }
      })
    }

    function menuClose(){
      $('body').removeClass('is-menuopen')
      $menuIcon.removeClass('active');
      $menuBody.velocity({
        translateX: [450, 0]
      },{
        duration:600,
        easing: 'easeOutCubic',
        complete:function(){
          $menuSec.velocity('fadeOut');
        }
      })
    }

    $menuIcon.on('click', function(){
      if(!$('body').hasClass('is-menuopen')){
        menuOpen();
      }else{
        menuClose();
        //console.log('close icon');
      }
    });

    $menuOverlay.on('click', function(){
      if($('body').hasClass('is-menuopen')){
        menuClose();  
        //console.log('close overlay');
      }
    });


    $('.menu-nav li a').each(function(){
    let $this = $(this);
    $this.on('click', function(e){

      let _hash = $this.attr('href');

      if($(window).width() > fstd.breakPoint){
        let hashpos = $(_hash).index('.panel') - currentIndex;
        if(hashpos != 0){
          menuClose();
          //slideFunc(hashpos);  
        }        
      }else{
        if($('body').hasClass('home')){
          e.preventDefault();
          menuClose();
          setTimeout(function(){
            let href = $this.attr("href"),
                target = $(href === "#" || href === "" ? 'html' : href);
            target.velocity("scroll", { duration: 600, easing: "ease" });  
            return false;          
          }, 400);          
        }
      }
      });
    });
  }
  //initMenu();


/* singlemenu==================================================== */
fstd.toggleBgImg = function(){

  let smlFlag = false;
  let bgLength = $('.bg').length;

  function toggleFunc(){
    $('.bg').each(function(index){
      let $this = $(this);
      let bgWideSrc = $this.data('bgwide');
      let bgSmlSrc = $this.data('bgsml');

      if($(window).width() < fstd.breakPoint){

        if(!smlFlag){
          if(index === bgLength - 1){
            smlFlag = true;  
          }
          if(bgSmlSrc){
            $this.css({'background-image': 'url(' + bgSmlSrc + ')'});
          }        
        }

      }else{

        if(smlFlag){
          if(index === bgLength - 1){
            smlFlag = false;
          }          
          if(bgWideSrc){
            $this.css({'background-image': 'url(' + bgWideSrc + ')'});
          }
        }


      }
    });
  }
  toggleFunc();

  $(window).on('resize', function(){
    toggleFunc();
  });
}


/* RESIZE UPDATE==================================================== */
fstd.initResizeFunc = function(){

  let timer = false;
  $(window).resize(function() {
      if (timer !== false) {
          clearTimeout(timer);
      }
      timer = setTimeout(function() {

        //fstd.toggleBgImg();

        let smallFlag = false;

        if($(window).width() > fstd.breakPoint){
          smallFlag = false;
          $('.panel-content-wrapper').css({'min-height': ''});
        }else{
          smallFlag = true;
        }

      }, 100);
  });  
}

/* LOADING==================================================== */
fstd.loading = function(){



  $('.loading').addClass('visible');
  $('.loading').addClass('spin-start');

  setTimeout(function(){
    $('.hero').imagesLoaded(function(){

      //$('.loading').addClass('slideout');
      $('.loading').addClass('loading-done');
      $('.loading .spinner').velocity('fadeOut', {
        duration: 800,
        easing: 'easeOutCubic'
      });
      setTimeout(function(){
        $('.loading').velocity('fadeOut',{
            duration: 1400,
            easing:'easeOutCubic',
            begin:function(){
              setTimeout(function(){
                
                //fstd.bannerSwiper.autoplay.start();
                if($(window).width() > fstd.breakPoint){
                  fstd.panelAnimation($('.current.panel'));  
                }
                
                $('.loading-item-01').addClass('loaded');
                setTimeout(function(){
                  $('.loading-item-02').addClass('loaded');
                }, 1000);


              }, 800);            
            }
          });
        }, 600);
    })
  }, 2200); 

}





/* focus==================================================== */
fstd.ignoreScroll = function(){

}

/* INIT==================================================== */
$(document).ready(function(){

  let _hash = location.hash;
  if(_hash){
    $('.panel').removeClass('current');
    $(_hash).addClass('current');
  }
  if($('body').hasClass('error404')){
    setTimeout(function(){
      location.href = 'http://flatstudio.jp/';  
    }, 5000);
    
  }
  //$('.single-article').css({'min-height': $(window).height() - 30 + 'px'});         
  fstd.loading();
  fstd.toggleBgImg();
  fstd.devideText();
  fstd.initSlider();
  fstd.initSPScrollFunc();     
  fstd.initYoutubeFunc();
  fstd.initResizeFunc();

  setTimeout(function(){
      
      if($('body').hasClass('home')){

        fstd.initPanelSlide();
        
      }else{
        fstd.initOuterMenu();
        //fstd.bannerLoop();
        //fstd.bannerSwiper.autoplay.start();
      }

  }, 100);

});

