$(function(){
  $(window).scroll(function(){
    /*스크롤을 내렸을때 500px 보다 많으면 
    클래스가 추가되고,
    500px 보다 적으면 클래스가 삭제된다*/
    if($(window).scrollTop()>500){
      $('.download').addClass('active')
    }
    else{
      $('.download').removeClass('active')
    }
  })

  // 사이트맵 아코디언
  /* b를 클릭하면 
      a 슬라이드 다운*/
  $('.sitemap_title').click(function(){
    // $(this).next().slideToggle() /* 토글= 슬라이드 업 다운 동시에 가능 */
    $(this).next().slideDown()
    $(this).parent().siblings().children('.sitemap_content').slideUp()
    /* 타이틀을 클릭했을때 다음선택자가 슬라이드 다운되고
    형제를 클릭하면 슬라이드 업된다. */

   // rotate 클래스 추가삭제
   $(this).addClass('rotate')
   $(this).parent().siblings().children('.sitemap_title').removeClass('rotate')
   /* rotate class 를 추가하고 title의 부모의 형제의 자식인 title을 클릭할경우 기존에 있던 rotate값을 
   삭제한다.*/
  })
})
