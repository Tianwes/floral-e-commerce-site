$('#searchicon').click(function(){
    $('#itemwrap').toggleClass('active');
     $('#search').toggleClass('active');
    $('#search').focus();
  });
  
  //the nav items are wrapped in #itemwrap while the search bar is set to 0% width. On click #itemwrap is set to 0% width and the search bar expands to fill the wrapper. overflow:hidden; hides the nav items as their wrapper shrinks.