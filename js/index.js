//左侧全部导航按钮
$(function(){
	$('.bottom-menu-left-1 li').mouseover(function(){
	let _index=$(this).index();
	$('.bottom-menu-left-child').eq(_index).show().siblings().hide();
	})
	$('.bottom-menu-left-child').mouseout(function(){
		$('.bottom-menu-left-child').hide()
	})
})




//main-product点击事件
//
$(function(){
	$('.main-product-ul-top li').click(function(){
		let _index=$(this).index();
		$('.main-product-content-wrap').eq(_index).show().siblings().hide();
	})

})

// main-product-ul-top click
// 
$(function(){
	$('.main-product-ul-top li').click(function(){
		let _index=$(this).index();
		$('.main-product-ul-top li i').removeClass('main-product-li-active')
		$('.main-product-ul-top li i').eq(_index).addClass('main-product-li-active');
		$('.main-product-ul-top li p').removeClass();
		$('.main-product-ul-top li p').eq(_index).addClass('main-product-ul-p-active');
	})
})

/*header移动条*/
$(function(){
	var i

$('.bottom-left-content li').mouseenter(function(){
	
	let n=0;

	i=$(this).index();
	
	for(let j=0;j<i;j++){
		n+=$('.bottom-left-content li').eq(j).innerWidth()
	}
	let w=$('.bottom-left-content li').eq(i).innerWidth();
	
	$('.header-move-item').animate({'left':n+'px',width:w},50);
	$('.header-move-item').show(50)
	
})

$('.bottom-left-content').mouseleave(function(){
	$('.header-move-item').hide()
	
})
})
