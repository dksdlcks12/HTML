$(function(){
	$('html').scrollTop(0);
	$('.bt-close').click(function(e){
		$('.box-whale').css('display', 'none')
		e.preventDefault()
	})
	$('.auto-complete').click(function(e){
		if($('.autocomp-icon').hasClass('autocomp-icon-open')){
			$('.autocomp-icon').removeClass('autocomp-icon-open')
			$('.auto-completeframe').css('display', 'none')
		}else{
			$('.autocomp-icon').addClass('autocomp-icon-open')
			$('.auto-completeframe').css('display', 'block')
		}
		e.preventDefault()
	})
	$('.more-bt').click(function(e){
		if($(this).hasClass('more-bt-on')){
			$(this).removeClass('more-bt-on').text('더보기')
			$('.menu-moremenu').css('display', 'none')
			$('.view-more-btbox').css('display', 'none')
		}else{
			$(this).addClass('more-bt-on').text('접기')
			$('.menu-moremenu').css('display', 'block')
			$('.view-more-btbox').css('display', 'block')
		}
		e.preventDefault()
	})
	$('.rtk-filter-helpbt').click(function(e){		
		if($('.rtk-filter-help').hasClass('display-none')){
			$('.rtk-filter-help').removeClass('display-none')
		}else{
			$('.rtk-filter-help').addClass('display-none')
		}
		e.preventDefault()
	})
	$('.rtk-filter-helpclose').click(function(e){
		$('.rtk-filter-help').addClass('display-none')
		e.preventDefault()
	})
	$('.link-keyword').click(function(e){
		$('.rtk-view').css('display', 'block')
		e.preventDefault()
	})
	$('.rtk-view-close').click(function(e){
		$('.rtk-view').css('display', 'none')
		e.preventDefault()
	})
	$('.rtk-filter-guideclose').click(function(e){
		$('.rtk-filter-guide').css('display', 'none')
		e.preventDefault()
	})
	$('.rtk-filter-warningclosebt').click(function(e){
		$('.rtk-filter-warning').css('display', 'none')
		e.preventDefault()
	})
})