$(document).ready(function() {
  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  // Scroll to functions
  $("#featured-link").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $("#featured").offset().top - 64
    }, 1000);
  });
  $("#voting-link").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $("#voting").offset().top - 64
    }, 1000);
  });
  $("#categories-link").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $("#categories").offset().top - 64
    }, 1000);
  });
  $("#to-top").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $("#voting").offset().top - 64
    }, 1000);
  });
  $('#category-list').on('click', '.category', function(e) {
    e.preventDefault();
    loadFeatured(this);
    $('html, body').animate({
      scrollTop: $("#voting").offset().top - 64
    }, 1000);
  });

  // Function to hide intro title
  function hideTitle() {
    var $panel = $('#hacker-hero');
    var hidePanel = new TimelineMax({delay:1.5});
    hidePanel.to($panel, 0.5, {opacity:0})
      .to($panel, 1, {height:0, minHeight:0, className:"+=hidden"});
  }

  // Create new timeline

  var $titles = $('#title');
  var $title = [];
  $title[0] = $('#title-row-1');
  $title[1] = $('#title-row-2');
  $title[2] = $('#title-row-3');

  var hackerHero = new TimelineMax({delay:1, onComplete:hideTitle});
  hackerHero.from($title[0], 1, {opacity:0, left:-500})
    .from($title[1], 1, {opacity:0, left:500})
    .from($title[2], 1, {opacity:0, left:500});

  var $cards = [];
  $('.card').each(function(index, el) {
    $cards[index] = this;
  });

  var cardMove = new TimelineMax({});
  cardMove.from($cards[0], 0.5, {top: 100})
    .from($cards[1], 0.5, {top: 100})
    .from($cards[2], 0.5, {top: 100});

  var featuredBeer = new TimelineMax({});
  featuredBeer.from($('#featured-title'), 0.5, {opacity: 0})
    .from($('#label'), 0.5, {opacity: 0})
    .from($('#beer-info'), 0.5, {opacity: 0});

  new ScrollMagic.Scene({triggerElement: "#voting", duration: 250, tweenChanges: true})
    .setTween()
    //.addIndicators({name: "Voting Section"})
    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#card-container", duration: 10, tweenChanges: true})
    .setTween(cardMove)
    //.addIndicators({name: "Voting Cards"})
    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#featured", duration: 150, tweenChanges: true})
    .setTween(featuredBeer)
    //.addIndicators({name: "Featured Section"})
    .addTo(controller);
  new ScrollMagic.Scene({triggerElement: "#categories", duration: 250, tweenChanges: true})
    .setTween()
    //.addIndicators({name: "Categories Section"})
    .addTo(controller);
});
