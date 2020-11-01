



$(document).ready(function(){
	
	
	//모바일
	//메뉴버튼 클릭하면 메뉴 나타나기
	$("#menu_btn").click(function(){
		$("#mobile_menu").stop().animate({right:0},"fast");
	});
	
	$("#close_btn").click(function(){
		$("#mobile_menu").stop().animate({right:"-100%"},"fast");
	});
	
	var show_menu=false;
	$("#mobile_menu > ul > li").click(function(){
		show_menu=!show_menu;
		if(show_menu==true){
			$("> a",this).css("color","#00c0ff");
			$(this).children("ul").slideDown(300);
		}else{
			$("> a",this).css("color","");
			$(this).children("ul").slideUp(300);
		}
	});
	
});//end

