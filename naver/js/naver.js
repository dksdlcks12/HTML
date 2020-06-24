$(function(){
	window.onload = function(){
		setTimeout(function(){
			scrollTo(0,0)
		}, 100)
	}
	// 설정한 메뉴 갯수
	var checkcont
	// 메뉴 세이브포인트
	var savemenu
	// 설정한 메뉴 갯수 세이브포인트
	var savecheck
	// 리셋포인트
	var resetpoint = $('.changeable-menu').html()
	// 메뉴 설정시 moremenu 화면 선택하는 함수
	$('a').click(function(e){e.preventDefault()})
	$menuselect = function(){
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
	$reset = function(e){
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
		e.preventDefault()
	}
	var newsisuelist = []
	var newsisuelistindex = 0
	newsisuelist.push('55→61→92 부산항 확진 러 선원 밀접접촉자 계속 늘어')
	newsisuelist.push('분당 유주택자가 잠실 집 사면 원래 집 처분계획서 내야')
	newsisuelist.push("재난지원금 다 썼나…골목상권 '반짝 특수' 뒤 원위치")
	var lollnewshover = 0
	var newspage = 0
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
	$('.keyword-window').click(function(e){
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
	$menuselect()
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
			$menuselect()
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
			$reset()
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
		$reset()
	})
	$('.main-news-isuetitle').hover(function(){
		lollnewshover=1
	})
	$('.main-news-isuetitle').mouseleave(function(){
		lollnewshover=0
	})
	setInterval(function(){
		if(lollnewshover==1){
			$('.main-news-isuetitlebox').animate({'margin-top':'0px'},500,function(){
			$(this).css('margin-top', '0px')
		})
		}
		if(lollnewshover==0){
			$('.main-news-isuetitlebox').append('<div class="main-news-isuetitleview"><a href="//news.naver.com/main/list.nhn?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0011695381" class="main-news-isuetitle">'+ newsisuelist[newsisuelistindex] +'</a></div>')
			$('.main-news-isuetitlebox').animate({'margin-top':'-24px'},500,function(){
				$(this).css('margin-top', '0px')
				$('.main-news-isuetitlebox').children().eq(0).remove()
			})
			newsisuelistindex++
			if(newsisuelistindex==newsisuelist.length){
				newsisuelistindex=0
			}
		}
		$('.main-news-isuetitle').hover(function(){
			lollnewshover=1
		})
		$('.main-news-isuetitle').mouseleave(function(){
			lollnewshover=0
		})
	},3500)
	$('.main-news-viewsortbt').click(function(e){
		$('.main-news-viewsortbt').removeClass('main-news-viewsorton')
		$(this).addClass('main-news-viewsorton')
		e.preventDefault()
	})
	$('.main-news-setbt').click(function(e){
		$('.main-news-setbt').removeClass('main-news-seton')
		$(this).addClass('main-news-seton')
		e.preventDefault()
	})
	$('.main-news-subscribe').click(function(e){
		$(this).next().css('display','inline-block')
		$(this).css('display','none')
		e.preventDefault()
	})
	$('.main-news-unsubscribe').click(function(e){
		$(this).prev().css('display','inline-block')
		$(this).css('display','none')
		e.preventDefault()
	})
	$('.main-news-logobox').hover(function(e){
		$('.main-news-logopopup').css('display','none')
		$(this).siblings('.main-news-logopopup').css('display','block')
		e.preventDefault()
	})
	$('.main-news-logopopup').mouseleave(function(e){
		$('.main-news-logopopup').css('display','none')
		e.preventDefault()
	})
	$('.main-news-prevbt').css('display', 'none')
	$('.main-news-window').css('display', 'none')
	$('.main-news-window').eq(newspage).css('display', 'block')
	$('.main-news-prevbt').click(function(e){
		if(0<newspage){
			--newspage
			$('.main-news-window').css('display', 'none')
			$('.main-news-window').eq(newspage).css('display', 'block')
		}
		if(newspage==0){
			$('.main-news-prevbt').css('display', 'none')
		}else{
			$('.main-news-prevbt').css('display', 'block')
		}
		if(newspage==($('.main-news-window').length-1)){
			$('.main-news-nextbt').css('display', 'none')
		}else{
			$('.main-news-nextbt').css('display', 'block')
		}
		e.preventDefault()
	})
	$('.main-news-nextbt').click(function(e){
		if(newspage<($('.main-news-window').length-1)){
			++newspage
			$('.main-news-window').css('display', 'none')
			$('.main-news-window').eq(newspage).css('display', 'block')
		}
		if(newspage==0){
			$('.main-news-prevbt').css('display', 'none')
		}else{
			$('.main-news-prevbt').css('display', 'block')
		}
		if(newspage==($('.main-news-window').length-1)){
			$('.main-news-nextbt').css('display', 'none')
		}else{
			$('.main-news-nextbt').css('display', 'block')
		}
		e.preventDefault()
	})
	setInterval(function(){
		if(newspage<($('.main-news-window').length-1)){
			++newspage
			$('.main-news-window').css('display', 'none')
			$('.main-news-window').eq(newspage).css('display', 'block')
			$('.main-news-prevbt').css('display', 'block')
		}
		if(newspage==($('.main-news-window').length-1)){
			$('.main-news-nextbt').css('display', 'none')
		}
	}, 15000)
})