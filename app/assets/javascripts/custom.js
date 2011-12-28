function runDay() {
	$("img#day").animate({opacity: 0}, 20000);
	$("img#day").animate({opacity: 1}, 20000, runDay);
};

function runSun() {
           $("div.sun").animate({
             path : new $.path.arc({
                   center : [0,500],
                   radius : 1200,
                   start : 180,
                   end     : -180 * 1,
                   dir : -1
               })
        }, 40000, runSun);
};

function fadeOutSun() {
	$("div#sun").animate({opacity: .5}, 500, function() {
		$("div#sun").animate({opacity: 1}, 500, fadeOutSun);
	});
};

function runMoon() {
           $("div.moon").animate({
             path : new $.path.arc({
                   center : [0,500],
                   radius : 1200,
                   start : 0,
                   end     : -360 * 1,
                   dir : -1
               })
        }, 40000, runMoon);
};

function fadeOutMoon() {
	$("div#moon").animate({opacity: .8}, 1000, function() {
		$("div#moon").animate({opacity: 1}, 1000, fadeOutMoon);
	});
};

function moveWaves1() {
	$("#waves1").animate({ left: '+=500' }, 5000);
	$("#waves1").animate({ left: '-=500' }, 5000, moveWaves1);
};

function moveWaves2() {
	$("#waves2").animate({ left: '-=500' }, 5000);
	$("#waves2").animate({ left: '+=500' }, 5000, moveWaves2);
};

function fadeWaves1() {
	$("#waves1").animate({ opacity: 0 }, 1000);
	$("#waves1").animate({ opacity: 1 }, 1000, fadeWaves1);
};

function fadeWaves2() {
	$("#waves2").animate({ opacity: 0 }, 1000);
	$("#waves2").animate({ opacity: 1 }, 1000, fadeWaves2);
};

function moveCloudsS() {
	$("#clouds-small").animate({ left: '-=10' }, 11000);
	$("#clouds-small").animate({ left: '+=10' }, 11000, moveCloudsS);
};

function moveCloudsL() {
	$("#clouds-big").animate({ left: '+=5' }, 13000);
	$("#clouds-big").animate({ left: '-=5' }, 13000, moveCloudsL);
};

function fadeStars() {
	$("#stars").animate({ opacity: 1 }, 20000);
	$("#stars").animate({ opacity: 0 }, 20000, fadeStars);
};

function fadeStarsF() {
	$("#stars").animate({ opacity: 1 }, 1500);
	$("#stars").animate({ opacity: .25 }, 1500, fadeStarsF);
};

function flashLightning() {
	$("#lightning").animate({ opacity: 0 }, 3000);
	$("#lightning").animate({ opacity: 1 },  100);
	$("#lightning").animate({ opacity: .5 }, 400);
	$("#lightning").animate({ opacity: 1 },  200);
	$("#lightning").animate({ opacity: 0 }, 1000);
	$("#lightning").animate({ opacity: 0 }, 2300, flashLightning);
};

function flashLightning2() {
	$("#lightning2").animate({ opacity: 0 }, 3200);
	$("#lightning2").animate({ opacity: 1 },  100);
	$("#lightning2").animate({ opacity: .5 }, 200);
	$("#lightning2").animate({ opacity: 1 },  100);
	$("#lightning2").animate({ opacity: 0 }, 300);
	$("#lightning2").animate({ opacity: 0 }, 3100, flashLightning2);
};

function flashLightning3() {
	$("#lightning3").animate({ opacity: 0 }, 3300);
	$("#lightning3").animate({ opacity: 1 },  100);
	$("#lightning3").animate({ opacity: .5 }, 200);
	$("#lightning3").animate({ opacity: 1 },  100);
	$("#lightning3").animate({ opacity: 0 }, 300);
	$("#lightning3").animate({ opacity: 0 }, 3000, flashLightning3);
};

function flashCloudsSingle() {
	$("#clouds-single").animate({ opacity: 0 }, 5000);
	$("#clouds-single").animate({ opacity: 1 },  100);
	$("#clouds-single").animate({ opacity: 1 },  200);
	$("#clouds-single").animate({ opacity: 1 },  400);
	$("#clouds-single").animate({ opacity: 0 }, 2500);
	$("#clouds-single").animate({ opacity: 0 }, 7000, flashCloudsSingle);
};

function flashCloudsSingleS() {
	$("#clouds-single-small").animate({ opacity: 0 }, 5200);
	$("#clouds-single-small").animate({ opacity: 1 },  100);
	$("#clouds-single-small").animate({ opacity: 1 },  100);
	$("#clouds-single-small").animate({ opacity: 1 },  200);
	$("#clouds-single-small").animate({ opacity: 0 }, 1500);
	$("#clouds-single-small").animate({ opacity: 0 }, 7900, flashCloudsSingleS);
};

function flashCloudsSingleS2() {
	$("#clouds-single-small2").animate({ opacity: 0 }, 5300);
	$("#clouds-single-small2").animate({ opacity: 1 },  100);
	$("#clouds-single-small2").animate({ opacity: 1 },  100);
	$("#clouds-single-small2").animate({ opacity: 1 },  200);
	$("#clouds-single-small2").animate({ opacity: 0 }, 1500);
	$("#clouds-single-small2").animate({ opacity: 0 }, 7800, flashCloudsSingleS2);
};

function airplane() {
	$("div.airplane").animate({ left: "+=2500px" }, 15000, "linear").animate({ left: "-=2500px" }, 0, airplane);
};

function cloud1a() {
	$("div#cloud1a").animate({ right: "+=6000px" }, 15000, "linear").animate({ right: "-=6000px" }, 0, cloud1a);
};

function cloud2a() {
	$("div#cloud2a").animate({ right: "+=6100px" }, 15000, "linear").animate({ right: "-=6100px" }, 0, cloud2a);
};

function cloud3a() {
	$("div#cloud3a").animate({ right: "+=6200px" }, 15000, "linear").animate({ right: "-=6200px" }, 0, cloud3a);
};

function cloud1b() {
	$("div#cloud1b").delay(2000).animate({ right: "+=2500px" }, 13000, "linear").animate({ right: "-=2500px" }, 0, cloud1b);
};

function cloud2b() {
	$("div#cloud2b").delay(2000).animate({ right: "+=2600px" }, 13000, "linear").animate({ right: "-=2600px" }, 0, cloud2b);
};

function cloud3b() {
	$("div#cloud3b").delay(2000).animate({ right: "+=2700px" }, 13000, "linear").animate({ right: "-=2700px" }, 0, cloud3b);
};

function hideFailure() {
	$("div#failure").fadeOut(300);
};

function moveWavesL() {
	$("div#waves").animate({ left: "+=1000" }, 20000, "linear").animate({ left: "-=1000" }, 0, moveWavesL);
};

function moveWavesS() {
	$("div#moving_waves1").animate({ left: "+=1000" }, 10000, "linear").animate({ left: "-=1000" }, 0, moveWavesS);
};

function bobWaves() {
	$("div#moving_waves").animate({ height: "+=10" }, 1000).animate({ height: "-=10" }, 1000, bobWaves);
};

function bobWaves1() {
	$("div.waves2").delay(200).animate({ height: "+=10" }, 800).animate({ height: "-=10" }, 1000, bobWaves1);
};

function bobWaves2() {
	$("div.waves3").delay(500).animate({ height: "+=10" }, 500).animate({ height: "-=10" }, 1000, bobWaves2);
};

function bobCloudsS() {
	$("#clouds-small").animate({ bottom: "+=10" }, 1000).animate({ bottom: "-=10" }, 1000, bobCloudsS);
};

function bobCloudsL() {
	$("#clouds-big").animate({ bottom: "+=10" }, 1000).animate({ bottom: "-=10" }, 1000, bobCloudsL);
};

function moveCloudsS2() {
	$("#clouds-small").animate({ left: "+=25" }, 1250).animate({ left: "-=25" }, 1250, moveCloudsS2);
};

function moveCloudsS3() {
	$("#clouds-small").animate({ left: "-=602" }, 15000, "linear").animate({ left: "+=602" }, 0, moveCloudsS3);
};

function moveCloudsB3() {
	$("#clouds-big").animate({ left: "-=650" }, 7000, "linear").animate({ left: "+=650" }, 0, moveCloudsB3);
};

function moveMountain1() {
	$("div.mountain1").css("left", "2500px").animate({ left: "-=3800" }, 30000, "linear", moveMountain1);
};

function moveMountain2() {
	$("div.mountain2").css("left", "2825px").animate({ left: "-=3800" }, 30000, "linear", moveMountain2);
};