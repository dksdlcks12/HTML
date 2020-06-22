$(function(){
	$('html').scrollTop(0);
	// 설정한 메뉴 갯수
	var checkcont
	// 메뉴 세이브포인트
	var savemenu
	// 설정한 메뉴 갯수 세이브포인트
	var savecheck
	// 리셋포인트
	var resetpoint = $('.changeable-menu').html()
	// 메뉴 설정시 moremenu 화면 선택하는 함수
	$.menuselect = function(){
		$('.moremenu-setting .moremenu-item').click(function(e){
		var i = 0
		checkcont = $('.check-icon-checked').length
		if(!$(this).hasClass('check-icon-checked')){
			var text = $(this).text()
			if($(this).text().length>=4){
				if($(this).text().slice(0,4)=='네이버 '){
					text = $(this).text().slice(4,)
				}
				if($(this).text().slice(-2)=='사전'){
					text = $(this).text().slice(0,-2)
				}
			}
			if(checkcont<4){
				$(this).addClass('check-icon-checked')
				$('.changeable-menu-empty .type-point').parent().before('<li class="menu-item"><span class="'+$(this).text()+'">'+text+'</span></li>')
				$('.changeable-menu-empty .type-point').parent().next().remove()
			}if(checkcont==4){
				$(this).addClass('check-icon-checked')
				$('.changeable-menu-empty .type-point').parent().before('<li class="menu-item"><span class="'+$(this).text()+'">'+text+'</span></li>')
				$('.changeable-menu-empty .type-point').parent().remove()
			}
			checkcont = $('.check-icon-checked').length
		}
		else{
			$(this).removeClass('check-icon-checked')	
			while(!($('.changeable-menu-empty .menu-item').eq(i).find('span').hasClass($(this).text()))){
				++i
			}
			if(checkcont==5){
				$('.changeable-menu-empty .menu-item').eq(i).find('span').parent().remove()
				$('.changeable-menu-empty').append('<li class="menu-item"><div class="empty-box type-point"></div></li>')
			}else if(checkcont<5){
				$('.changeable-menu-empty .menu-item').eq(i).find('span').parent().remove()
				$('.changeable-menu-empty').append('<li class="menu-item"><div class="empty-box"></div></li>')
			}
			checkcont = $('.check-icon-checked').length
		}
		e.preventDefault()
	})}	
	// 초기화 함수
	$.reset = function(){
		savemenu = null
		savecheck = null
		$('.changeable-menu').html(resetpoint)
		$('.more-bt').removeClass('more-bt-on').text('더보기')
		$('.menu-moremenu').css('display', 'none')
		$('.view-more-btbox').css('display', 'none')
		$('.changeable-menu').css('display','block')
		$('.changeable-menu-empty').css('display', 'none')
		$('.moremenu-setting').css('display', 'none')
		$('.moremenu-window').css('display','block')
		$('.view-all').css('display','inline-block')
		$('.setting-menu').css('display','inline-block')
		$('.reset').css('display', 'none')
		$('.save').css('display', 'none')
		$('.moremenu-setting .moremenu-item').removeClass('check-icon-checked')
		$('.changeable-menu-empty').empty()
	}
	// 상단배너 닫기
	$('.bt-close').click(function(e){
		$('.box-whale').css('display', 'none')
		e.preventDefault()
	})
	// 검색창의 화살표 아이콘(자동완성기능) 클릭시
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
	// 실시간 검색어필터 도움말 클릭시
	$('.rtk-filter-helpbt').click(function(e){		
		if($('.rtk-filter-help').hasClass('display-none')){
			$('.rtk-filter-help').removeClass('display-none')
		}else{
			$('.rtk-filter-help').addClass('display-none')
		}
		e.preventDefault()
	})
	// 실시간 검색어필터 도움말 닫기 클릭시
	$('.rtk-filter-helpclose').click(function(e){
		$('.rtk-filter-help').addClass('display-none')
		e.preventDefault()
	})
	// 실시간 검색어창 열기
	$('.link-keyword').click(function(e){
		$('.rtk-view').css('display', 'block')
		e.preventDefault()
	})
	// 실시간 검색어창 닫기
	$('.rtk-view-close').click(function(e){
		$('.rtk-view').css('display', 'none')
		e.preventDefault()
	})
	// 검색어 설정 가이드 닫기
	$('.rtk-filter-guideclose').click(function(e){
		$('.rtk-filter-guide').css('display', 'none')
		e.preventDefault()
	})
	// 검색어 설정 경고가이드 닫기
	$('.rtk-filter-warningclosebt').click(function(e){
		$('.rtk-filter-warning').css('display', 'none')
		e.preventDefault()
	})
	// 메뉴설정시 moermenu를 선택 할수 있도록 하는 함수
	$.menuselect()
	// 더보기 버튼 클릭시
	$('.more-bt').click(function(e){
		if($(this).hasClass('more-bt-on')){
			$(this).removeClass('more-bt-on').text('더보기')
			$('.menu-moremenu').css('display', 'none')
			$('.view-more-btbox').css('display', 'none')
			$('.changeable-menu').css('display','block')
			$('.changeable-menu-empty').css('display', 'none')
			$('.moremenu-setting').css('display', 'none')
			$('.moremenu-window').css('display','table')
			$('.view-all').css('display','inline-block')
			$('.setting-menu').css('display','inline-block')
			$('.reset').css('display', 'none')
			$('.save').css('display', 'none')
			$('.moremenu-setting .moremenu-item').removeClass('check-icon-checked')
		}else{
			$(this).addClass('more-bt-on').text('접기')
			$('.menu-moremenu').css('display', 'block')
			$('.view-more-btbox').css('display', 'block')
		}
		e.preventDefault()
	})
	// 메뉴설정버튼 클릭시
	$('.setting-menu').click(function(e){
		$('.moremenu-window').css('display','none')
		$('.changeable-menu').css('display','none')
		$('.changeable-menu-empty').css('display', 'block')
		$('.moremenu-setting').css('display', 'table')
		$('.view-all').css('display','none')
		$('.setting-menu').css('display','none')
		$('.reset').css('display', 'inline-block')
		$('.save').css('display', 'inline-block')
		$('.changeable-menu-empty').empty()
		if(!(savecheck==null)){
			$('.moremenu-setting').html(savecheck)
			$('.changeable-menu-empty').html(savemenu)
			$.menuselect()
		}
		checkcont = $('.check-icon-checked').length
		for(i=0;i<(5-checkcont);++i){
			if(i==0){
				$('.changeable-menu-empty').append('<li class="menu-item"><div class="empty-box type-point"></div></li>')
			}else{
				$('.changeable-menu-empty').append('<li class="menu-item"><div class="empty-box"></div></li>')
			}
		}
		e.preventDefault()
	})
	// 저장버튼 클릭시
	$('.save').click(function(e){
		if(checkcont==0){
			alert('선택된 메뉴가 없습니다. 초기설정으로 돌아갑니다.')
			$.reset()
		}else{
			savemenu = ''
			savecheck = $('.moremenu-setting').html()
			var tmp = ''
			for(i=0;i<checkcont;++i){
				var text = $('.changeable-menu-empty .menu-item').eq(i).find('span').text()
				savemenu += '<li class="menu-item">'+$('.changeable-menu-empty .menu-item').eq(i).html()+'</li>'
				tmp += '<li class="menu-item"><a href="#" class="changeable-menu">'+text+'</a></li>'
			}
			$('.changeable-menu').html(tmp)
			$('.more-bt').removeClass('more-bt-on').text('더보기')
			$('.menu-moremenu').css('display', 'none')
			$('.view-more-btbox').css('display', 'none')
			$('.changeable-menu').css('display','block')
			$('.changeable-menu-empty').css('display', 'none')
			$('.moremenu-setting').css('display', 'none')
			$('.moremenu-window').css('display','block')
			$('.view-all').css('display','inline-block')
			$('.setting-menu').css('display','inline-block')
			$('.reset').css('display', 'none')
			$('.save').css('display', 'none')
			e.preventDefault()
		}
	})
	// 초기화 버튼 클릭시
	$('.reset').click(function(e){
		alert('초기설정으로 돌아갑니다.')
		$.reset()
	})
})