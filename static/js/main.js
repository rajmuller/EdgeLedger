function initMap() {
    const map = new google.maps.Map(document.querySelector('.map'), {
        center: {
            lat: 47.505002,
            lng: 19.057748,
        },
        zoom: 14
    });

    const maker = new google.maps.Marker({
        position: {
            lat: 47.505002,
            lng: 19.057748,
        },
        map: map
    });
}


// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100
        },
        800
      );
    }
  });


    //Scroll Navbar Opacity
    window.addEventListener("scroll", function(){
        if (window.scrollY > 150) {
            document.querySelector("#navbar").style.opacity = 0.85;
        } else {
            document.querySelector("#navbar").style.opacity = 1;
        }
    })