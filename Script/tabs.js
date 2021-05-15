(function($) {
  // alert("Page is loaded");
  var tabs = $(".tabs li a");
  // var content = '#one';
  // $(this).addClass("active");
  // $("#content").find('div').hide();
  // $(content).fadeIn(200);
  tabs.click(function() {
    var content = this.hash.replace('/', '');
    tabs.removeClass("active");
    // alert(this);
    $(this).addClass("active");
    $("#content").find('div').hide();
    $(content).fadeIn(200);
  });

})(jQuery);

(function init_load_function($) {
  // alert("Page is loaded");
  var tabs = $(".tabs li a");
  var link = window.location.href;
  // alert(link);
  var content = window.location.href.split('#')[1];
  content = "#" + content;
  // alert(content);


  content = content.replace('/', '');
  // alert(content);

  // var content = param;
  // $(this).addClass("active");
  // alert(link);
  // $(".link").addClass("active");
  // alert(link);
  $("#content").find('div').hide();
  $(content).fadeIn(200);
})(jQuery);
