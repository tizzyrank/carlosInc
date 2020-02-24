$(function(){
	function cream01(){
		$('.cream01 .change1').delay(2000).animate({'opacity':'0'},800).delay(2000).animate({'opacity':'1'},800);
		$('.cream01 .change2').delay(2000).animate({'opacity':'1'},800).delay(2000).animate({'opacity':'0'},800);
		setTimeout(cream01,11200);
	} 
	function cream02(){
		$('.cream02 .change1').delay(4800).animate({'opacity':'0'},800).delay(2000).animate({'opacity':'1'},800);
		$('.cream02 .change2').delay(4800).animate({'opacity':'1'},800).delay(2000).animate({'opacity':'0'},800);
		setTimeout(cream02,11200);
	} 
	function cream03(){
		$('.cream03 .change1').delay(7600).animate({'opacity':'0'},800).delay(2000).animate({'opacity':'1'},800);
		$('.cream03 .change2').delay(7600).animate({'opacity':'1'},800).delay(2000).animate({'opacity':'0'},800);
		setTimeout(cream03,11200);
	} 
	function cream04(){
		$('.cream04 .change1').delay(10400).animate({'opacity':'0'},800).delay(2000).animate({'opacity':'1'},800);
		$('.cream04 .change2').delay(10400).animate({'opacity':'1'},800).delay(2000).animate({'opacity':'0'},800);
		setTimeout(cream04,11200);
	} 
	cream01();
	cream02();
	cream03();
	cream04();

	new WOW().init();
	$('.item a').attr('target','_blank');
	$.scrollUp();
})