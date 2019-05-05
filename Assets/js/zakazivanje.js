function makeReservation() {
    let form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "https://formspree.io/djordjevicmilos993@gmail.com");

    document.body.appendChild(form);
    form.submit();   
}

var btn = $('#button');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });