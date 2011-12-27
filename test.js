
<script type="text/javascript">
$(document).ready(function()
{
  $("img#day").animate({opacity: 0}, 3000).delay(1000).animate({opacity: 1}, 3000);
});
</script>

<script type="text/javascript">
var d = $("img#day");
var n = $("img#night");

function runDay() {
	d.animate({opacity: 0}, 10000);
	d.animate({opacity: 1}, 10000, runDay);
};

function runSun() {
           $("#sun").animate({
             path : new $.path.arc({
                   center : [0,-300],
                   radius : 500,
                   start : 180,
                   end     : -180 * 1,
                   dir : -1
               })
        }, { queue: false, duration: 20000 }, runSun);
};

function fadeOutSun() {
	$("#sun").animate({opacity: .75}, 250, function() {
		$("#sun").animate({opacity: 1}, 250, function() {
			$("#sun").animate({opacity: .5}, 500, fadeOutSun);
		});
	});
};

function runMoon() {
           $("#moon").animate({
             path : new $.path.arc({
                   center : [0,-300],
                   radius : 500,
                   start : 0,
                   end     : -360 * 1,
                   dir : -1
               })
        }, { queue: false, duration: 20000 }, runMoon);
};

function fadeInMoon() {
	$("#moon").animate({opacity: 1}, 7000, function() {
		$("#moon").animate({opacity: .5}, 3000, function() {
			$("#moon").animate({opacity: 0}, 10000, fadeInMoon);
		});
	});
};

runDay();

fadeOutSun();
fadeInMoon();

runSun();
setInterval(function() {
	runSun();
}, 20000);

runMoon();
setInterval(function() {
	runMoon();
}, 20000);

</script>