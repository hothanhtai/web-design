// JS slide

let isHovered = false;

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }    
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

let slideshowInterval;

function startSlideshow() {
    if (!isHovered) {
        slideshowInterval = setInterval(function() {
          plusSlides(1);
        }, 3000);
      };
}
let slideshowContainer = document.querySelector('.slideshow-container');

slideshowContainer.addEventListener('mouseenter', function() {
  isHovered = true;
  stopSlideshow();
});

slideshowContainer.addEventListener('mouseleave', function() {
  isHovered = false;
  startSlideshow();
});
function stopSlideshow() {
  clearInterval(slideshowInterval);
}

// Gọi hàm startSlideshow để bắt đầu slideshow tự động
startSlideshow();

// --------JS tab menu dropdown

$(document).ready(function() {
  // toggle menu dropdown branding
  $('#tkth').mouseover(function(e) {
      e.preventDefault();
      $(this).addClass('active');
      $('#tvth, #ndth, #apm, #tkbbnm, #cv').removeClass('active');
      $('#menu-tvth, #menu-ndth, #menu-apm, #menu-tkbbnm, #menu-cv').addClass('hidden');
      $('#menu-tkth').removeClass('hidden');
  });

  $('#tvth').mouseover(function(e) {
      e.preventDefault();
      $(this).addClass('active');
      $('#tkth, #ndth, #apm, #tkbbnm, #cv').removeClass('active');
      $('#menu-tkth, #menu-ndth, #menu-apm, #menu-tkbbnm, #menu-cv').addClass('hidden');
      $('#menu-tvth').removeClass('hidden');
  });

  $('#ndth').mouseover(function(e) {
      e.preventDefault();
      $(this).addClass('active');
      $('#tvth, #tkth, #apm, #tkbbnm, #cv').removeClass('active');
      $('#menu-tvth, #menu-tkth, #menu-apm, #menu-tkbbnm, #menu-cv').addClass('hidden');
      $('#menu-ndth').removeClass('hidden');
  });

  $('#apm').mouseover(function(e) {
      e.preventDefault();
      $(this).addClass('active');
      $('#tvth, #ndth, #tkth, #tkbbnm, #cv').removeClass('active');
      $('#menu-tvth, #menu-ndth, #menu-tkth, #menu-tkbbnm, #menu-cv').addClass('hidden');
      $('#menu-apm').removeClass('hidden');
  });

  $('#tkbbnm').mouseover(function(e) {
      e.preventDefault();
      $(this).addClass('active');
      $('#tvth, #ndth, #tkth, #apm, #cv').removeClass('active');
      $('#menu-tvth, #menu-ndth, #menu-tkth, #menu-apm, #menu-cv').addClass('hidden');
      $('#menu-tkbbnm').removeClass('hidden');
  });

  $('#cv').mouseover(function(e) {
      e.preventDefault();
      $(this).addClass('active');
      $('#tvth, #ndth, #tkth, #apm, #tkbbnm').removeClass('active');
      $('#menu-tvth, #menu-ndth, #menu-tkth, #menu-apm, #menu-tkbbnm').addClass('hidden');
      $('#menu-cv').removeClass('hidden');
  });


  
  // toggle menu dropdown marcom
  $('#tt').mouseover(function(e) {
      e.preventDefault();
      $(this).addClass('active');
      $('#dim, #prm, #edt, #demo1, #demo2').removeClass('active');
      $('#menu-dim, #menu-prm, #menu-edt, #menu-demo1, #menu-demo2').addClass('hidden');
      $('#menu-tt').removeClass('hidden');
  });
  $('#dim').mouseover(function(e) {
      e.preventDefault();
      $(this).addClass('active');
      $('#tt, #prm, #edt, #demo1, #demo2').removeClass('active');
      $('#menu-tt, #menu-prm, #menu-edt, #menu-demo1, #menu-demo2').addClass('hidden');
      $('#menu-dim').removeClass('hidden');
  });
  $('#prm').mouseover(function(e) {
      e.preventDefault();
      $(this).addClass('active');
      $('#dim, #tt, #edt, #demo1, #demo2').removeClass('active');
      $('#menu-dim, #menu-tt, #menu-edt, #menu-demo1, #menu-demo2').addClass('hidden');
      $('#menu-prm').removeClass('hidden');
  });
  $('#edt').mouseover(function(e) {
      e.preventDefault();
      $(this).addClass('active');
      $('#tt, #prm, #dim, #demo1, #demo2').removeClass('active');
      $('#menu-dim, #menu-prm, #menu-tt, #menu-demo1, #menu-demo2').addClass('hidden');
      $('#menu-edt').removeClass('hidden');
  });
  $('#demo1').mouseover(function(e) {
      e.preventDefault();
      $(this).addClass('active');
      $('#dim, #prm, #edt, #tt, #demo2').removeClass('active');
      $('#menu-dim, #menu-prm, #menu-edt, #menu-tt, #menu-demo2').addClass('hidden');
      $('#menu-demo1').removeClass('hidden');
  });
  $('#demo2').mouseover(function(e) {
      e.preventDefault();
      $(this).addClass('active');
      $('#dim, #prm, #edt, #demo1, #tt').removeClass('active');
      $('#menu-dim, #menu-prm, #menu-edt, #menu-demo1, #menu-tt').addClass('hidden');
      $('#menu-demo2').removeClass('hidden');
  });



  // id dropdown ===> tg, tn, dmgp1, dmgp2, dmgp3, dmgp4
  // toggle menu dropdown solution
  $('#tg').mouseover(function(e) {
      e.preventDefault();
      $(this).addClass('active');
      $('#tn, #dmgp1, #dmgp2, #dmgp3, #dmgp4').removeClass('active');
      $('#menu-tn, #menu-dmgp1, #menu-dmgp2, #menu-dmgp3, #menu-dmgp4').addClass('hidden');
      $('#menu-tg').removeClass('hidden');
  });
  $('#tn').mouseover(function(e) {
      e.preventDefault();
      $(this).addClass('active');
      $('#tg, #dmgp1, #dmgp2, #dmgp3, #dmgp4').removeClass('active');
      $('#menu-tg, #menu-dmgp1, #menu-dmgp2, #menu-dmgp3, #menu-dmgp4').addClass('hidden');
      $('#menu-tn').removeClass('hidden');
  });
  $('#dmgp1').mouseover(function(e) {
      e.preventDefault();
      $(this).addClass('active');
      $('#tg, #tn, #dmgp2, #dmgp3, #dmgp4').removeClass('active');
      $('#menu-tg, #menu-tn, #menu-dmgp2, #menu-dmgp3, #menu-dmgp4').addClass('hidden');
      $('#menu-dmgp1').removeClass('hidden');
  });
  $('#dmgp2').mouseover(function(e) {
      e.preventDefault();
      $(this).addClass('active');
      $('#tg, #tn, #dmgp1, #dmgp3, #dmgp4').removeClass('active');
      $('#menu-tg, #menu-tn, #menu-dmgp1, #menu-dmgp3, #menu-dmgp4').addClass('hidden');
      $('#menu-dmgp2').removeClass('hidden');
  });
  $('#dmgp3').mouseover(function(e) {
      e.preventDefault();
      $(this).addClass('active');
      $('#tg, #tn, #dmgp1, #dmgp2, #dmgp4').removeClass('active');
      $('#menu-tg, #menu-tn, #menu-dmgp1, #menu-dmgp2, #menu-dmgp4').addClass('hidden');
      $('#menu-dmgp3').removeClass('hidden');
  });
  $('#dmgp4').mouseover(function(e) {
      e.preventDefault();
      $(this).addClass('active');
      $('#tg, #tn, #dmgp1, #dmgp2, #dmgp3').removeClass('active');
      $('#menu-tg, #menu-tn, #menu-dmgp1, #menu-dmgp2, #menu-dmgp3').addClass('hidden');
      $('#menu-dmgp4').removeClass('hidden');
  });

 // id dropdown Về 3T ===> ab3t-gt, ab3t-hsnl, ab3t-bt3t, ab3t-vh3t, ab3t-dnns, ab3t-dvtv, ab3t-tttd
  // toggle menu dropdown solution
  $('#ab3t-gt').mouseover(function(e) {
    e.preventDefault();
    $(this).addClass('active');
    $('#ab3t-hsnl, #ab3t-bt3t, #ab3t-vh3t, #ab3t-dnns, #ab3t-dvtv, #ab3t-tttd').removeClass('active');
  });

  $('#ab3t-hsnl').mouseover(function(e) {
    e.preventDefault();
    $(this).addClass('active');
    $('#ab3t-gt, #ab3t-bt3t, #ab3t-vh3t, #ab3t-dnns, #ab3t-dvtv, #ab3t-tttd').removeClass('active');
  });

  $('#ab3t-bt3t').mouseover(function(e) {
    e.preventDefault();
    $(this).addClass('active');
    $('#ab3t-gt, #ab3t-hsnl, #ab3t-vh3t, #ab3t-dnns, #ab3t-dvtv, #ab3t-tttd').removeClass('active');
  });

  $('#ab3t-vh3t').mouseover(function(e) {
    e.preventDefault();
    $(this).addClass('active');
    $('#ab3t-gt, #ab3t-hsnl, #ab3t-bt3t, #ab3t-dnns, #ab3t-dvtv, #ab3t-tttd').removeClass('active');
  });

  $('#ab3t-dnns').mouseover(function(e) {
    e.preventDefault();
    $(this).addClass('active');
    $('#ab3t-gt, #ab3t-hsnl, #ab3t-bt3t, #ab3t-vh3t, #ab3t-dvtv, #ab3t-tttd').removeClass('active');
  });

  $('#ab3t-dvtv').mouseover(function(e) {
    e.preventDefault();
    $(this).addClass('active');
    $('#ab3t-gt, #ab3t-hsnl, #ab3t-bt3t, #ab3t-vh3t, #ab3t-dnns, #ab3t-tttd').removeClass('active');
  });

  $('#ab3t-tttd').mouseover(function(e) {
    e.preventDefault();
    $(this).addClass('active');
    $('#ab3t-gt, #ab3t-hsnl, #ab3t-bt3t, #ab3t-vh3t, #ab3t-dnns, #ab3t-dvtv').removeClass('active');
  });


   // id dropdown Dự án ===> datb, tvda, dskh, dtcl, dtkdcc
  // toggle menu dropdown project
  $('#datb').mouseover(function(e) {
    e.preventDefault();
    $(this).addClass('active');
    $('#tvda, #dskh, #dtcl, #dtkdcc').removeClass('active');
  });

  $('#tvda').mouseover(function(e) {
    e.preventDefault();
    $(this).addClass('active');
    $('#datb, #dskh, #dtcl, #dtkdcc').removeClass('active');
  });
  
  $('#dskh').mouseover(function(e) {
    e.preventDefault();
    $(this).addClass('active');
    $('#datb, #tvda, #dtcl, #dtkdcc').removeClass('active');
  });

  $('#dtcl').mouseover(function(e) {
    e.preventDefault();
    $(this).addClass('active');
    $('#datb, #tvda, #dskh, #dtkdcc').removeClass('active');
  });

  $('#dtkdcc').mouseover(function(e) {
    e.preventDefault();
    $(this).addClass('active');
    $('#datb, #tvda, #dskh, #dtcl').removeClass('active');
  });

   // id dropdown Dự án ===> education, 3tbooks, 3tblog, toolskit
  // toggle menu dropdown resource
  $('#education').mouseover(function(e) {
    e.preventDefault();
    $(this).addClass('active');
    $('#3tbooks, #3tblog, #toolskit').removeClass('active');
  });
  $('#3tbooks').mouseover(function(e) {
    e.preventDefault();
    $(this).addClass('active');
    $('#education, #3tblog, #toolskit').removeClass('active');
  });
  $('#3tblog').mouseover(function(e) {
    e.preventDefault();
    $(this).addClass('active');
    $('#education, #3tbooks, #toolskit').removeClass('active');
  });
  $('#toolskit').mouseover(function(e) {
    e.preventDefault();
    $(this).addClass('active');
    $('#education, #3tblog, #3tbooks').removeClass('active');
  });
  

  // Xử lý ẩn hiện thay đổi màu chữ cho menu dropdown Branding |
                                                              
  $('#menu-drop-branding').click(function(e){
    e.preventDefault();
    if($('#section-menu-dropdown-branding').hasClass('hidden')){
      $('#section-menu-dropdown-branding').removeClass('hidden');
      $('#section-menu-dropdown-marcom').addClass('hidden')
      $('#section-menu-dropdown-solution').addClass('hidden')
      $('#section-menu-dropdown-project').addClass('hidden')
      $('#section-menu-dropdown-resource').addClass('hidden')
      $('#section-menu-dropdown-about-3t').addClass('hidden')

      $('#menu-drop-branding').addClass('nav-item-active')
      $('#menu-drop-marcom').removeClass('nav-item-active')
      $('#menu-drop-solution').removeClass('nav-item-active')
      $('#menu-drop-project').removeClass('nav-item-active')
      $('#menu-drop-resource').removeClass('nav-item-active')
      $('#menu-drop-about-3t').removeClass('nav-item-active')

      $('#menu-drop-branding').addClass('rotate-up')
      $('#menu-drop-marcom').removeClass('rotate-up')
      $('#menu-drop-solution').removeClass('rotate-up')
      $('#menu-drop-about-3t').removeClass('rotate-up')
      $('#menu-drop-project').removeClass('rotate-up')
      $('#menu-drop-resource').removeClass('rotate-up')
      

    }else{
      $('#section-menu-dropdown-branding').addClass('hidden');
      $('#menu-drop-branding').removeClass('rotate-up')

      // Nếu có class hidden thì remove class nav-item-active css bỏ màu đỏ chữ Branding
      $('#menu-drop-branding').removeClass('nav-item-active')
    }
  });

  // Xử lý ẩn hiện thay đổi màu chữ cho menu dropdown Marcom |
  $('#menu-drop-marcom').click(function(e){
    e.preventDefault();
    if($('#section-menu-dropdown-marcom').hasClass('hidden')){
      $('#section-menu-dropdown-marcom').removeClass('hidden');
      $('#menu-drop-marcom').addClass('nav-item-active')
      $('#menu-drop-branding').removeClass('nav-item-active')
      $('#menu-drop-solution').removeClass('nav-item-active')
      $('#menu-drop-project').removeClass('nav-item-active')
      $('#menu-drop-resource').removeClass('nav-item-active')
      $('#menu-drop-about-3t').removeClass('nav-item-active')

      $('#menu-drop-marcom').addClass('rotate-up')
      $('#menu-drop-branding').removeClass('rotate-up')
      $('#menu-drop-solution').removeClass('rotate-up')
      $('#menu-drop-project').removeClass('rotate-up')
      $('#menu-drop-resource').removeClass('rotate-up')
      $('#menu-drop-about-3t').removeClass('rotate-up')

      $('#section-menu-dropdown-branding').addClass('hidden');
      $('#section-menu-dropdown-solution').addClass('hidden');
      $('#section-menu-dropdown-project').addClass('hidden');
      $('#section-menu-dropdown-resource').addClass('hidden');
      $('#section-menu-dropdown-about-3t').addClass('hidden');
      

      
    }else{
      $('#section-menu-dropdown-marcom').addClass('hidden');
      $('#menu-drop-marcom').removeClass('rotate-up')
      // Nếu có class hidden thì remove class nav-item-active css bỏ màu đỏ chữ Marcom
      $('#menu-drop-marcom').removeClass('nav-item-active')
    }
  });

  // Xử lý ẩn hiện thay đổi màu chữ cho menu dropdown Giải pháp |
  $('#menu-drop-solution').click(function(e){
    e.preventDefault();
    if($('#section-menu-dropdown-solution').hasClass('hidden')){
      $('#section-menu-dropdown-solution').removeClass('hidden');
      $('#menu-drop-solution').addClass('nav-item-active')
      $('#menu-drop-branding').removeClass('nav-item-active')
      $('#menu-drop-marcom').removeClass('nav-item-active')
      $('#menu-drop-project').removeClass('nav-item-active')
      $('#menu-drop-resource').removeClass('nav-item-active')
      $('#menu-drop-about-3t').removeClass('nav-item-active')

      // xoay mũi tên khi dropdown đang mở
      $('#menu-drop-solution').addClass('rotate-up')
      $('#menu-drop-branding').removeClass('rotate-up')
      $('#menu-drop-marcom').removeClass('rotate-up')
      $('#menu-drop-project').removeClass('rotate-up')
      $('#menu-drop-resource').removeClass('rotate-up')
      $('#menu-drop-about-3t').removeClass('rotate-up')

      $('#section-menu-dropdown-branding').addClass('hidden');
      $('#section-menu-dropdown-marcom').addClass('hidden');
      $('#section-menu-dropdown-about-3t').addClass('hidden');
      $('#section-menu-dropdown-project').addClass('hidden');
      $('#section-menu-dropdown-resource').addClass('hidden');

    }else{
      $('#section-menu-dropdown-solution').addClass('hidden');
      $('#menu-drop-solution').removeClass('rotate-up')
      // Nếu có class hidden thì remove class nav-item-active css bỏ màu đỏ chữ Marcom
      $('#menu-drop-solution').removeClass('nav-item-active')
    }
  });
  
  // Xử lý ẩn hiện thay đổi màu chữ cho menu dropdown Về 3T |
  $('#menu-drop-about-3t').click(function(e){
    e.preventDefault();
    if($('#section-menu-dropdown-about-3t').hasClass('hidden')){
      $('#section-menu-dropdown-about-3t').removeClass('hidden');
      $('#menu-drop-about-3t').addClass('nav-item-active')
      $('#menu-drop-branding').removeClass('nav-item-active')
      $('#menu-drop-marcom').removeClass('nav-item-active')
      $('#menu-drop-solution').removeClass('nav-item-active')
      $('#menu-drop-resource').removeClass('nav-item-active')
      $('#menu-drop-project').removeClass('nav-item-active')

      // xoay mũi tên khi dropdown đang mở
      $('#menu-drop-about-3t').addClass('rotate-up')
      $('#menu-drop-branding').removeClass('rotate-up')
      $('#menu-drop-marcom').removeClass('rotate-up')
      $('#menu-drop-solution').removeClass('rotate-up')
      $('#menu-drop-resource').removeClass('rotate-up')
      $('#section-menu-dropdown-branding').addClass('hidden');
      $('#section-menu-dropdown-marcom').addClass('hidden');
      $('#section-menu-dropdown-solution').addClass('hidden');
      $('#section-menu-dropdown-project').addClass('hidden');
      $('#section-menu-dropdown-resource').addClass('hidden');

    }else{
      $('#section-menu-dropdown-about-3t').addClass('hidden');
      $('#menu-drop-about-3t').removeClass('rotate-up')
      // Nếu có class hidden thì remove class nav-item-active css bỏ màu đỏ chữ Marcom
      $('#menu-drop-about-3t').removeClass('nav-item-active')
    }
  });

  // Xử lý ẩn hiện thay đổi màu chữ cho menu dropdown Dự án |
  $('#menu-drop-project').click(function(e){
    e.preventDefault();
    if($('#section-menu-dropdown-project').hasClass('hidden')){
      $('#section-menu-dropdown-project').removeClass('hidden');
      $('#menu-drop-project').addClass('nav-item-active')
      $('#menu-drop-branding').removeClass('nav-item-active')
      $('#menu-drop-marcom').removeClass('nav-item-active')
      $('#menu-drop-solution').removeClass('nav-item-active')
      $('#menu-drop-resource').removeClass('nav-item-active')
      $('#menu-drop-about-3t').removeClass('nav-item-active')

      // xoay mũi tên khi dropdown đang mở
      $('#menu-drop-project').addClass('rotate-up')
      $('#menu-drop-branding').removeClass('rotate-up')
      $('#menu-drop-marcom').removeClass('rotate-up')
      $('#menu-drop-solution').removeClass('rotate-up')
      $('#menu-drop-resource').removeClass('rotate-up')
      $('#menu-drop-about-3t').removeClass('rotate-up')

      $('#section-menu-dropdown-branding').addClass('hidden');
      $('#section-menu-dropdown-marcom').addClass('hidden');
      $('#section-menu-dropdown-solution').addClass('hidden');
      $('#section-menu-dropdown-resource').addClass('hidden');
      $('#section-menu-dropdown-about-3t').addClass('hidden');

    }else{
      $('#section-menu-dropdown-project').addClass('hidden');
      $('#menu-drop-about-3t').removeClass('rotate-up')
      // Nếu có class hidden thì remove class nav-item-active css bỏ màu đỏ chữ Marcom
      $('#menu-drop-project').removeClass('nav-item-active')
    }
  });

  // Xử lý ẩn hiện thay đổi màu chữ cho menu dropdown Tài nguyên|
  $('#menu-drop-resource').click(function(e){
    e.preventDefault();
    if($('#section-menu-dropdown-resource').hasClass('hidden')){
      $('#section-menu-dropdown-resource').removeClass('hidden');
      $('#menu-drop-resource').addClass('nav-item-active')
      $('#menu-drop-branding').removeClass('nav-item-active')
      $('#menu-drop-marcom').removeClass('nav-item-active')
      $('#menu-drop-solution').removeClass('nav-item-active')
      $('#menu-drop-project').removeClass('nav-item-active')
      $('#menu-drop-about-3t').removeClass('nav-item-active')

      // xoay mũi tên khi dropdown đang mở
      $('#menu-drop-resource').addClass('rotate-up')
      $('#menu-drop-project').removeClass('rotate-up')
      $('#menu-drop-branding').removeClass('rotate-up')
      $('#menu-drop-marcom').removeClass('rotate-up')
      $('#menu-drop-solution').removeClass('rotate-up')
      $('#menu-drop-about-3t').removeClass('rotate-up')

      $('#section-menu-dropdown-branding').addClass('hidden');
      $('#section-menu-dropdown-marcom').addClass('hidden');
      $('#section-menu-dropdown-solution').addClass('hidden');
      $('#section-menu-dropdown-project').addClass('hidden');
      $('#section-menu-dropdown-about-3t').addClass('hidden');

    }else{
      $('#section-menu-dropdown-resource').addClass('hidden');
      $('#menu-drop-about-3t').removeClass('rotate-up')
      // Nếu có class hidden thì remove class nav-item-active css bỏ màu đỏ chữ Marcom
      $('#menu-drop-resource').removeClass('nav-item-active')
    }
  });

  // Nếu click vùng ngoài thì ẩn menu branding dropdown
  $(document).click(function(event) {
    var targetElement = event.target;
    if (!$(targetElement).is("#menu-drop-branding") && !$("#section-menu-dropdown-branding").has(targetElement).length) {
      $("#section-menu-dropdown-branding").addClass("hidden");
    }
    if (!$(targetElement).is("#menu-drop-marcom") && !$("#section-menu-dropdown-marcom").has(targetElement).length) {
      $("#section-menu-dropdown-marcom").addClass("hidden");
    }
    if (!$(targetElement).is("#menu-drop-solution") && !$("#section-menu-dropdown-solution").has(targetElement).length) {
      $("#section-menu-dropdown-solution").addClass("hidden");
    }
    if (!$(targetElement).is("#menu-drop-about-3t") && !$("#section-menu-dropdown-about-3t").has(targetElement).length) {
      $("#section-menu-dropdown-about-3t").addClass("hidden");
    }
    if (!$(targetElement).is("#menu-drop-project") && !$("#section-menu-dropdown-project").has(targetElement).length) {
      $("#section-menu-dropdown-project").addClass("hidden");
    }
    if (!$(targetElement).is("#menu-drop-resource") && !$("#section-menu-dropdown-resource").has(targetElement).length) {
      $("#section-menu-dropdown-resource").addClass("hidden");
    }
    if($("#section-menu-dropdown-branding").hasClass("hidden")){
      $('#menu-drop-branding').removeClass('nav-item-active')
      $('#menu-drop-branding').removeClass('rotate-up')
    }
    if($("#section-menu-dropdown-marcom").hasClass("hidden")){
      $('#menu-drop-marcom').removeClass('nav-item-active')
      $('#menu-drop-marcom').removeClass('rotate-up')
    }
    if($("#section-menu-dropdown-solution").hasClass("hidden")){
      $('#menu-drop-solution').removeClass('nav-item-active')
      $('#menu-drop-solution').removeClass('rotate-up')
    }
    if($("#section-menu-dropdown-about-3t").hasClass("hidden")){
      $('#menu-drop-about-3t').removeClass('nav-item-active')
      $('#menu-drop-about-3t').removeClass('rotate-up')
    }
    if($("#section-menu-dropdown-project").hasClass("hidden")){
      $('#menu-drop-project').removeClass('nav-item-active')
      $('#menu-drop-project').removeClass('rotate-up')
    }
    if($("#section-menu-dropdown-resource").hasClass("hidden")){
      $('#menu-drop-resource').removeClass('nav-item-active')
      $('#menu-drop-resource').removeClass('rotate-up')
    }
  });
});

$(window).on("load scroll", function() {
  $(".lazy-section").each(function() {
    if (isElementInViewport($(this))) {
      // Tải nội dung của section
      $(this).removeClass("lazy-section");
    }
  });
});

function isElementInViewport(element) {
  var rect = element[0].getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}