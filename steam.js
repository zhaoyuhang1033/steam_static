var timer = null;
$(function(){
  $('.supernav').on('mouseenter','.super',function (){
    $('.supernav_content').hide();
    $('.supernav_content').eq($(this).index()).show();
    if($(this).index() > 2) {
      $('.supernav_content').hide();
    }
  });
  $('.supernav').on('mouseleave',function (){
    $('.supernav_content').hide();
  });
  $('.language').click(function (){
    $('.language_body').toggle();
  });
  var pulldownIdx;
  $('.store_nav').on('mouseenter','.pulldown',function(){
    pulldownIdx = $(this).parent().index()/2;
    $('.tab').removeClass('body_sildedown_active');
    $('.pulldown').children(0).removeClass('pulldown_lnk_active');
    $(this).parent().addClass('body_sildedown_active');
    $(this).children(0).addClass('pulldown_lnk_active');
    $('.body_sildedown').hide();
    $('.body_sildedown').eq(pulldownIdx).show();
  });
  $('.store_nav').on('mouseleave',function(){
    $('.body_sildedown').hide();
    $('.tab').removeClass('body_sildedown_active');
    $('.pulldown').children(0).removeClass('pulldown_lnk_active');
    
  });
  $('#key').focus(function(){
    if(this.value == '搜索商店'){
      this.value = '';
    }
  });
  $('#key').blur(function(){
    if(this.value == ''){
      this.value = '搜索商店';
    }
  });
  var imgIDX = 0;
  var parentNod = null;
  var that = null;
  $('.banner_item').on('mouseenter','.screenshots>div',function(){
    imgIDX = $(this).index();
    that = $(this).parent();
    console.log($(this).children(0).attr('src'));
    parentNod = $(this).parent().parent().siblings('.banner_image_interface').children('.screenshot');
    parentNod.eq($(this).index()+1).show().siblings().hide();
      $(that).on('mouseleave',function(){
      $(parentNod).eq(0).show().siblings().hide();
    });
  });

  var count = 0;

  $('.left').click(function(){
    
    count--;
    if(count < 0) {
      count = 10;
    }
    
    $('.banner_item').eq(count).fadeIn().siblings().fadeOut();
    $('.banner_items_index>div').removeClass('focus').addClass('index_item');
    $('.banner_items_index>div').eq(count).removeClass('index_item').addClass('focus');
    
  });
  
  $('.right').click(function (){
    count++;
    if(count > 10) {
      count = 0;
    }
    $('.banner_item').eq(count).fadeIn().siblings().fadeOut();
    $('.banner_items_index>div').removeClass('focus').addClass('index_item');
    $('.banner_items_index>div').eq(count).removeClass('index_item').addClass('focus');
  });
  $('.banner_items_index>div').click(function(){
    $('.banner_items_index>div').removeClass('focus').addClass('index_item');
    $(this).removeClass('index_item').addClass('focus');
    $('.banner_item').eq($(this).index()).fadeIn().siblings().fadeOut();
    count = $(this).index();
  });
  
  
  
  
  var flag = true;
  $('.banner_item').on('mouseenter',function(){
   var innerImg = $(this).children('.banner_image_interface').children('.screenshot').children('img');
   var imgSrc = [];
    for(var i = 1,j = 0; i < 5; i++,j++ ) {
      imgSrc[j] = $(innerImg).eq(i).attr('src');
    }

    $('.hover_box').eq($(this).index()).show().siblings().hide();
    var hoverBoxImg =  $('.hover_box').children('.box_item').children('.hover_screenshots').children('img');
    imgSrcIdx = 0;
    hoverBoxImg.attr('src',imgSrc[0]);
    if(flag) {
    timer =   setInterval(function(){
        if(imgSrcIdx > 4) {
          imgSrcIdx = 0;
        }
        $(hoverBoxImg).attr('src',imgSrc[imgSrcIdx++]);
      },1000);
      flag = false;
    }
  });
  $('.banner_item').on('mouseleave',function (){
    clearInterval(timer);
    flag = true;
    $('.hover_box').hide();
  });
  $('.right_2').click(function (){
    $('.special_items').eq(0).fadeOut();
    $('.special_items').eq(1).fadeIn();
    $('.special_items_idx>div').eq(1).addClass('focus').siblings().removeClass('focus');
    return false ;
  });
  $('.left_2').click(function (){
    $('.special_items').eq(1).fadeOut();
    $('.special_items').eq(0).fadeIn();
    $('.special_items_idx>div').eq(0).addClass('focus').siblings().removeClass('focus');
    return false ;
  });
  $('.special_items_idx>div').click(function (){
    $('.special_items').eq($(this).index()).fadeIn().siblings('.special_items').fadeOut();
    $(this).addClass('focus').siblings().removeClass('focus');
  });

  var connoisseurCount = 0;
  
  $('.right_3').click(function (){
    connoisseurCount++;
    if(connoisseurCount > 4) {
      connoisseurCount = 0;
    }
    var $height = $('.connoisseur_item').eq(connoisseurCount).innerHeight();
    var basicHeight = 406;
    var reality = $height - basicHeight + 500;
    $('.connoisseur_items_idx').css('top',reality);
    
    $('.connoisseur_item').eq(connoisseurCount).fadeIn().siblings().fadeOut();
    $('.connoisseur_items_idx>div').eq(connoisseurCount).addClass('focus').siblings().removeClass('focus');
    
  });
  $('.left_3').click(function (){
    connoisseurCount--;
    if(connoisseurCount < 0) {
      connoisseurCount = 4;
    }
    var $height = $('.connoisseur_item').eq(connoisseurCount).innerHeight();
    var basicHeight = 406;
    var reality = $height - basicHeight + 500;
    $('.connoisseur_items_idx').css('top',reality);
    $('.connoisseur_item').eq(connoisseurCount).fadeIn().siblings().fadeOut();
    $('.connoisseur_items_idx>div').eq(connoisseurCount).addClass('focus').siblings().removeClass('focus');

  });
  $('.connoisseur_items_idx>div').click(function (){
    var $height = $('.connoisseur_item').eq($(this).index()).innerHeight();
    var basicHeight = 406;
    var reality = $height - basicHeight + 500;
    $('.connoisseur_items_idx').css('top',reality);
    $('.connoisseur_item').eq($(this).index()).fadeIn().siblings().fadeOut();
    $(this).addClass('focus').siblings().removeClass('focus');
    connoisseurCount = $(this).index();

  });

  $('.left_col_content_item').mouseenter(function (){
    $(this).addClass('focus').siblings().removeClass('focus');
    $('.inner_tabs_right_item').eq(10 * $(this).parent().index() + $(this).index()).show().siblings().hide();
      $('.after_price').removeClass('blackfont');
      $('.tab_item_name').removeClass('blackfont');
      
     $('.after_price').eq(10 * $(this).parent().index() + $(this).index()).addClass('blackfont');
     $('.tab_item_name').eq(10 * $(this).parent().index() + $(this).index()).addClass('blackfont');
     console.log(10 * $(this).parent().index() + $(this).index());
  });
  $('.left_col_row_item').click(function (){
    $('.left_col_row_item').children('.left_col_row_item_lnk').removeClass('focus');
    $(this).children('.left_col_row_item_lnk').addClass('focus');
    $('.left_col_content_items').eq($(this).index()).show().siblings().hide();
  });

});
