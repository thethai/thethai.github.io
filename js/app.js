var canvas=document.getElementById("canvastext"),ctx=canvas.getContext("2d"),W=window.innerWidth,H=window.innerHeight,text="2017",text2="Ch\u00fac M\u1eebng N\u0103m M\u1edbi",skipCount=4,gravity=.2,touched=!1,mouse={},minDist=20,bounceFactor=.6;canvas.height=H;canvas.width=W;function trackPos(a){mouse.x=a.pageX;mouse.y=a.pageY}
var Particle1=function(){this.r=6*Math.random();this.y=this.x=-100;this.vy=-5+parseInt(10*Math.random());this.vx=-5+parseInt(10*Math.random());this.isFree=!1;this.a=Math.random();this.draw=function(){ctx.beginPath();ctx.fillStyle="rgba(255, 223, 0, "+this.a+")";ctx.arc(this.x,this.y,this.r,0,2*Math.PI,!1);ctx.fill();ctx.closePath()};this.setPos=function(a,d){this.x=a;this.y=d}},particles1=[];
(function(){ctx.fillStyle="black";ctx.font="100px Arial, sans-serif";ctx.textAlign="center";ctx.fillText(text,W/2,H/3);ctx.fillStyle="#29a1f1";ctx.font="70px Arial, sans-serif";ctx.fillText(text2,W/2,H/3+100)})();(function(){})();(function(){for(var a=ctx.getImageData(0,0,W,W),d=a.data,b=0;b<a.height;b+=skipCount)for(var c=0;c<a.width;c+=skipCount)255==d[c*a.width*4+4*b-1]&&(particles1.push(new Particle1),particles1[particles1.length-1].setPos(b,c))})();function clear(){ctx.clearRect(0,0,W,H)}
function update1(){clear();for(i=0;i<particles1.length;i++){var a=particles1[i];a.r+=.15;a.a-=.015;0>a.a&&(a.r=6*Math.random(),a.a=Math.random());mouse.x>a.x-a.r&&mouse.x<a.x+a.r&&mouse.y>a.y-a.r&&mouse.y<a.y+a.r&&(touched=!0);1==touched&&(Math.sqrt((a.x-mouse.x)*(a.x-mouse.x)+(a.y-mouse.y)*(a.y-mouse.y))<=minDist&&(a.isFree=!0),1==a.isFree&&(a.y+=a.vy,a.x+=a.vx,a.vy+=gravity,a.y+a.r>H&&(a.vy*=-bounceFactor,a.y=H-a.r,a.vx=0<a.vx?a.vx-.1:a.vx+.1),a.x+a.r>W&&(a.vx*=-bounceFactor,a.x=W-a.r),0>a.x-a.r&&
(a.vx*=-bounceFactor,a.x=a.r)));ctx.globalCompositeOperation="lighter";a.draw()}}(function animloop(){requestAnimFrame(animloop);update1()})();
  	
$(document).ready(function(){

	var listBgMusic = [		
		{
			title: "Mot Nam Moi Binh An",
			artist:"MTP",
			mp3:"../mp3/motnammoibinhan.mp3"
		},{
			title: "ChucMungNamMoi",
			artist:"HoQuangHieu",
			mp3:"../mp3/ChucMungNamMoi-HoQuangHieu-3748398.mp3"
		},{
			title: "MeMangXuanVe",
			artist:"LyHaiBeNgocThanhThao",
			mp3:"../mp3/MeMangXuanVe-LyHaiBeNgocThanhThao-4288983.mp3"
		},{
			title: "ChucTet",
			artist:"KhoiMy_4gtbk",
			mp3:"../mp3/ChucTet-KhoiMy_4gtbk.mp3"
		},{
			title: "XuanNayConKhongVe",
			artist:"QuangLe",
			mp3:"../mp3/XuanNayConKhongVe-QuangLe-1428282.mp3"
		},{
			title: "ConBuomXuan",
			artist:"HienThuc",
			mp3:"../mp3/ConBuomXuan-HienThuc-2865457.mp3"
		},{
			title: "AnhChoEmMuaXuan",
			artist:"PhanDinhTung",
			mp3:"../mp3/AnhChoEmMuaXuan-PhanDinhTung-2935811.mp3"
		},{
			title: "LangNgheMuaXuanVe",
			artist:"DoanTrang_h9m7",
			mp3:"../mp3/LangNgheMuaXuanVe-Remix-DoanTrang_h9m7.mp3"
		},{
			title: "NgayTetQueEm",
			artist:"ThuyChi",
			mp3:"../mp3/NgayTetQueEm-ThuyChi-3760419.mp3"
		},{
			title: "NgayXuanLongPhungSumVay",
			artist:"DaoBaLoc_4j7eu",
			mp3:"../mp3/NgayXuanLongPhungSumVay-DaoBaLoc_4j7eu.mp3"
		},{
			title: "NhuHoaMuaXuan",
			artist:"MinhHangThuyTienHoNgocHa",
			mp3:"../mp3/NhuHoaMuaXuan-MinhHangThuyTienHoNgocHa-2905741.mp3"
		},{
			title: "DemGiaoThuaNgheKhucDanCa",
			artist:"PhuongMyChi",
			mp3:"../mp3/DemGiaoThuaNgheKhucDanCa-PhuongMyChi-3760711.mp3"
		},{
			title: "HanhPhucXuanNgoi",
			artist:"NooPhuocThinh",
			mp3:"../mp3/HanhPhucXuanNgoi-NooPhuocThinh-2919540.mp3"
		}
		
	];
	
	var ranBg = Math.floor(Math.random() * listBgMusic.length);
	
	var MBG = $("#bg-music").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", listBgMusic[ranBg]).jPlayer("play");
        },
		ended: function() {
			var ranBgNew = Math.floor(Math.random() * listBgMusic.length);
			while(ranBgNew == ranBg){
				ranBgNew = Math.floor(Math.random() * listBgMusic.length);
			}	
			$(this).jPlayer("setMedia", listBgMusic[ranBgNew]).jPlayer("play");
		},
		error: function(){
			var ranBgNew = Math.floor(Math.random() * listBgMusic.length);
			while(ranBgNew == ranBg){
				ranBgNew = Math.floor(Math.random() * listBgMusic.length);
			}	
			$(this).jPlayer("setMedia", listBgMusic[ranBgNew]).jPlayer("play");
		},
        cssSelectorAncestor: "",		
        swfPath: "../lib/jplayer/jquery.jplayer.swf",
        supplied: "m4a,oga,mp3",
		preload: "auto",
		volume: 1
    });

	$("#footer-controls a.music-control").on("click", function(){
		var curState = $(this).data("play-pause");
		if(curState == "play"){
			MBG.jPlayer("pause");
			$(this).data("play-pause", "pause").html('Bật nhạc <i class="fa fa-play-circle"></i>');
		}else{
			MBG.jPlayer("play");
			$(this).data("play-pause", "play").html('Tắt nhạc <i class="fa fa-pause-circle"></i>');
		}
	});	
		     
	$('#count-down-wrapper .soon').attr('data-now',moment().format());     
	var soon = document.querySelectorAll('#count-down-wrapper .soon');
	Soon.create(soon[0]);
		
	var vnCurrentTime = moment.tz("Asia/Saigon");
	var dd = vnCurrentTime.date();
	var mm = vnCurrentTime.month()+1;
	var yy = vnCurrentTime.year();	
	var ld = getLunarDate(dd, mm, yy);
	
	$(".SLToday").html("Hôm nay: " + vnCurrentTime.format("DD-MM-YYYY") + " <i class='fa fa-calendar'></i> " + ld.day + "-" + ld.month + "-" + ld.year + ", " + getYearCanChi(ld.year));
	
	var monkeyCD = ["../images/mcd.png", "../images/mcd2.png", "../images/mcd3.png", "../images/mcd4.png"];
	var textCD = [
		"Thế Thái Kính chúc bạn cùng gia đình tràn đầy sức khỏe, thành công và hạnh phúc.",
		"Năm mới Tết đến. Rước hên vào nhà. Quà cáp bao la. Mọi nhà no đủ. Vàng bạc đầy hũ. Gia chủ phát tài. Già trẻ gái trai. Sum vầy hạnh phúc. Cầu tài chúc phúc. Lộc đến quanh năm. An khang thịnh vượng!",
		"Năm mới: Ngàn lần như ý, Vạn lần như mơ, Triệu sự bất ngờ, Tỷ lần hạnh phúc.",
		"Chúc bạn: 12 tháng phú quý, 365 ngày phát tài, 8760 giờ sung túc, 525600 phút thành công 31536000 giây vạn sự như ý.",
		"Sang năm mới chúc mọi người có một bầu trời sức khoẻ, một biển cả tình thương, một đại dương tình cảm, một điệp khúc tình yêu, một người yêu chung thủy, một tình bạn mênh mông, một gia đình thịnh vượng."
	];
	var monkeyX = $(window).width()/2 - $(".soon-group").outerWidth()/2 - 110 - 10;
	var idcd = Math.floor(Math.random() * monkeyCD.length);
	
	var monkey = '<div id="mcd" style="display:block;width:140px; height:182px;position: absolute;z-index:30; top:0; left: ' + monkeyX + 'px"><div class="mkCD" style="background: transparent url('+ monkeyCD[idcd] +') center center no-repeat;background-size:100% 100%;"></div><div class="textCD"><div class="texts1">Chúc Mừng Năm Mới 2016</div><div class="texts1">'+ textCD[idcd] +'</div></div></div>';
	
	$("#count-down-wrapper").append(monkey);
	
	$(window).resize(function(){
		monkeyX = $(window).width()/2 - $(".soon-group").outerWidth()/2 - 110 - 10;
		$("#mcd").css("left", monkeyX+"px");
	});
	
	$('.texts1').textillate({		
		autoStart: false,
		in: { effect: 'flipInY' },
		out: { effect: 'hinge' }		
	});
	
	$("#mcd").on('mouseenter', function(){
		$(this).animate({width: "+=100", height: "+=130", top: "-=65"});
		$(".mkCD").animate({width: "+=100", height: "+=130"});
		$(".textCD").animate({width: "+=457", height: "+=210", left: "+=200"});
		
		$('.texts1').textillate('start');
		$('.texts1').textillate('in');
	})
	.on('mouseleave', function(){
		$(this).animate({width: "-=100", height: "-=130", top: 0});
		$(".mkCD").animate({width: "-=100", height: "-=130"});
		$(".textCD").animate({width: "-=457", height: "-=210", left: 0});
				
		$('.texts1').textillate('out');		
	})	
		
});