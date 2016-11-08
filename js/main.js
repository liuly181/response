;(function(){
	var imgW=$('#box>ul li').width();
		var lis=$('#box>ul li').length;
		var j=0;
		var timer=null;
		$('#showT,#box').on('mouseover',function(){
			clearInterval(timer);
		})
		/*$('#showT,#box').on('mouseout',function(){
			auto();
		})*/
		$('#left').on('click',function(){
			j--;
			if(j<0){j=lis-1};
			fl();
		})
		$('#right').on('click',function(){
			j++;
			if(j>lis-1){j=0};
			fl();
		})
		$('#list>li').on('click',function(){
			j=$(this).index();
			fl();
		})
		/*function auto(){
			timer=setInterval(function(){
				$('#right').click();
			},1000)
		}
		auto();*/
		function fl(){
			$('#list>li').eq(j).addClass('ck').siblings().removeClass('ck');
		}
		var txt=$("#btn").html();
		$("#btn").on("click",function(){
			if(txt=="="){
				$("#left-menu").animate({'left':0})
				$("#btn").html("-");
				txt="-";
			}else if(txt=="-"){
				$("#left-menu").animate({'left':"-110px"})
				$("#btn").html("=");
				txt="=";
			}
		})
})(Zepto)