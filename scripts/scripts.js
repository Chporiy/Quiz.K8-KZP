
$(document).ready(function () {
  var isMobile = {
      Android:        function() { return navigator.userAgent.match(/Android/i) ? true : false; },
      BlackBerry:     function() { return navigator.userAgent.match(/BlackBerry/i) ? true : false; },
      iOS:            function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false; },
      Windows:        function() { return navigator.userAgent.match(/IEMobile/i) ? true : false; },
      any:            function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());  }
  };
  if ( isMobile.any() ) {
    if($(window).width() == '375') {
      $('.main').height(function () {
        return $(document).height();
      });
      $('.overlay').height(function () {
        return $(document).height() + 1;
      });
      $('.overlayThanks').height(function () {
        return $(document).height() + 1;
      });
    } else {
      $('.overlay').height(function () {
        return $(document).height() + 1;
      });
      $('.overlayThanks').height(function () {
        return $(document).height() + 1;
      });
    }
  }
  $(document).on('click', '.popup-content__btn', function () {
          var
            $this = $(this),
            id = $this.data('id'),
            condition = $this.closest('.overlay').find('button').toArray().some(function (i) {
              return $(i).is(':active');
            });
            
            $this.closest('.overlay').find('.popup-content__btn[data-id=' + id + ']').toggleClass('active');
            

          });
  function line () {
    $('#line').hover(function(){
      $('.popupOverlay').show();
      $('#popup').css("display", 'block');
    });
  }

  setInterval(line, 5000);

  function line1 () {
    $('#line1').hover(function(){
      $('.popupOverlay').show();
      $('#popup1').css("display", 'block');
    });
  }

  setInterval(line1, 500);

  function line2 () {
    $('#line2').hover(function(){
      $('.popupOverlay').show();
      $('#popup').css("display", 'block');
    });
  }

  setInterval(line2, 500);

	$('.main-center__btn').on("click", function(){
		$('.overlay').show();
    $('.step1').show();
	});
  $('#Quiz').on("click", function(){
    setTimeout(function () {
      $('.overlay').show();
      $('.step1').show();
      $('.popup').hide();
      $('.popupOverlay').hide();
      $('html, body').animate({scrollTop: 0}, 300);
          return false;
    }, 600);
  });
  $('#sendTel').on("click", function(){
    setTimeout(function () {
      $('.popup').hide();
      $('.popupOverlay').hide();
      $('html, body').animate({scrollTop: 0}, 300);
          return false;
    }, 600);
  });
  $('.step1-left__btn').on("click", function(){
    setTimeout(function () {
      $('.step2').show();
      $('.step1').hide();
      $('html, body').animate({scrollTop: 0}, 300);
          return false;
    }, 600);
  });
  $('.step2-left__btn').on("click", function(){
    setTimeout(function () {
      $('.step3').show();
      $('.step2').hide();
      $('html, body').animate({scrollTop: 0}, 300);
          return false;
    }, 600);
  });
  $('.step3-left__btn').on("click", function(){
    setTimeout(function () {
      $('.step4').show();
      $('.step3').hide();
      $('html, body').animate({scrollTop: 0}, 300);
          return false;
    }, 600);
  });
  $('.step4-left__btn').on("click", function(){
    setTimeout(function () {
      $('.step5').show();
      $('.step4').hide();
      $('html, body').animate({scrollTop: 0}, 300);
          return false;
    }, 600);
  });
  $('.step5-left__btn').on("click", function(){
    setTimeout(function () {
      $('.step6').show();
      $('.step5').hide();
      $('html, body').animate({scrollTop: 0}, 300);
          return false;
    }, 600);
  });
  $('.step6-left__btn').on("click", function(){
     setTimeout(function () {
           $('.step6').hide();
           $('html, body').animate({scrollTop: 0}, 300);
         }, 600);
      $('.main').hide();
      $('.overlay').animate({opacity: "hide"}, 500);
      $('.result').show();
  });

  $('.popup-content__close').on("click", function () {
    $('.popup').hide();
    $('.popupOverlay').hide();
  })

  $('.notwork-right__choose').on("click", function(){
      $('.notwork-right__times').css('display', 'flex')
    });

  $('.result-center__btn').prop('disabled', true);


  function setSelectionRange(input, selectionStart, selectionEnd) {
    if (input.setSelectionRange) {
      input.focus();
      input.setSelectionRange(selectionStart, selectionEnd);
    } else if (input.createTextRange) {
      var range = input.createTextRange();
      range.collapse(true);
      range.moveEnd('character', selectionEnd);
      range.moveStart('character', selectionStart);
      range.select();
    }
  }

  function setCaretToPos(input, pos) {
    setSelectionRange(input, pos, pos);
  }

  $("#tel").click(function() {
    setCaretToPos($("#tel")[0], 3);
  });
  
  $(function(){
    
    $("#tel").mask("8 (999) 999-99-99", {
      placeholder: "8 (XXX) XXX-XX-XX",
      completed: function(){ 
        $('.result-center__btn').prop('disabled', false);
           $('.result-center__btn').toggleClass('button-disabled');
      }
    });

  });

  $('.result-center__btn').on("click", function () {
    $('.overlayThanks').show();
  });

  $('.thanks-content__close').on("click", function () {
    $('.overlayThanks').animate({opacity: "hide"}, 500);
  });
  $('.thanks-content__btn').on('click', function() {
    $(this).toggleClass('active');    
  });

  if($(window).width() == '812' && $(window).height() == '375')
    $("meta[name='viewport']").remove();
});


	// $(document).on('click', '.step input', function () {
	//         var
	//           $this = $(this),
	//           id = $this.data('id'),
	//           condition = $this.closest('.step').find('input').toArray().some(function (i) {
	//             return $(i).is(':checked');
	//           });
            
 //            $this.closest('.step').find('.step-left__answer span[data-id=' + id + ']').toggleClass('active');
 //            $this.closest('.step').find('.step5-center__budget[data-id=' + id + ']').toggleClass('active');
 //            $this.closest('.step').find('.step6-center__way[data-id=' + id + ']').toggleClass('active');
 //            // $this.closest('.step').find('.step1-center__area input[data-id="8"]').not(this).toggleClass('active');;

	//         });
