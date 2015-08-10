var hiSupportPrice = 0;
var loSupportPrice = 0;

priceArrayHosted = [[0,0],[120.00,135.00],[300.00,337.50],[300.00,337.50],[600.00,675.00],[900.00,1012.50],[1200.00,1350.00],[1500.00,1687.50]];
priceArrayOnPremise = [[0,0],[0,0],[0,0],[300.00,337.50],[600.00,675.00],[900.00,1012.50],[1200.00,1350.00],[1500.00,1687.50]];

$(document).ready(function(){
	$("#pricingopts .option").click(function(){
		
		if ($(this).hasClass("alacarte selected")){
			$(this).find(".checkme").removeClass('fa-check-circle-o').addClass('fa-circle-o');
		} else {
			$(this).find(".checkme").removeClass('fa-circle-o').addClass('fa-check-circle-o');	
		};
		$(this).toggleClass("selected");
	});

	$(".alacarte, .hosttype").click(function() {
		calculateTotal();
	});

	$('.alacarte').click(function() {
		var target = $(this).data('target');
		$(target).toggleClass('visible');
	})



	// $(".CT").click(function(){
	// 	$("#CT").toggleClass("visible");
	// 	calculateTotal();
		
		
	// });

	// $(".CTHD").click(function(){
	// 	$("#CTHD").toggleClass("visible");
	// 	calculateTotal();
		
	// });

	// $(".WAD").click(function(){
	// 	$("#WAD").toggleClass("visible");
	// 	calculateTotal();
		
	// });

	// $(".IAD").click(function(){
	// 	$("#IAD").toggleClass("visible");
	// 	calculateTotal();
		
	// });


	$(".hosttype").click(function(){
		$('.hosttype').removeClass('selected');
		$(this).addClass('selected');
		var selectedHostType = $(this).find("h4").html();
		$(".basketHost").html(selectedHostType);
		calculateTotal();
	});


	$("#nodeslider").change(function(){
		var nodeValue = $(this).val();
		
		if (nodeValue >= 250) {
			$(".nodeamt").html(nodeValue);
			$("#basket").html("CONTACT US");
		} else {
			$(".nodeamt").html(nodeValue);
			$("#basket").html("GET STARTED");
		};
		calculateTotal();		
	 });
});

var calculateTotal = function(){
	var total = 0;
	var lowerPrice = 0;
	var addOns = function (){
		$(".alacarte").each(function(){
			if($(this).hasClass("selected")) {
				total += parseInt($(this).data("cost"));
				lowerPrice = total;
			}
		});
	}
	var returnPrices = function() {
		var nodeValue = $("#nodeslider").val();
		var returnPrice;
		if (nodeValue<=5) {
			var priceArray=whichArray(priceArray);
			var returnPrice = priceArray[0];
			total += parseInt(returnPrice[1]);
			lowerPrice += parseInt(returnPrice[0]);
		} else if ((nodeValue>5) && (nodeValue<= 20)){
			var priceArray=whichArray(priceArray);
			var returnPrice = priceArray[1];
			total += parseInt(returnPrice[1]);
			lowerPrice += parseInt(returnPrice[0]);
		} else if ((nodeValue>20) && (nodeValue<= 25)) {
			var priceArray=whichArray(priceArray);
			var returnPrice =priceArray[2];
			total += parseInt(returnPrice[1]);
			lowerPrice += parseInt(returnPrice[0]);
		} else if ((nodeValue>25) && (nodeValue<= 50)) {
			var priceArray=whichArray(priceArray);
			var returnPrice =priceArray[3];
			total += parseInt(returnPrice[1]);
			lowerPrice += parseInt(returnPrice[0]);
		} else if ((nodeValue>50) && (nodeValue<= 100)){
			var priceArray=whichArray(priceArray);
			var returnPrice =priceArray[4];
			total += parseInt(returnPrice[1]);
			lowerPrice += parseInt(returnPrice[0]);
		} else if ((nodeValue>100) && (nodeValue<= 150)){
			var priceArray=whichArray(priceArray);
			var returnPrice =priceArray[5];
			total += parseInt(returnPrice[1]);
			lowerPrice += parseInt(returnPrice[0]);
		} else if ((nodeValue>150) && (nodeValue<= 200)){
			var priceArray=whichArray(priceArray);
			var returnPrice =priceArray[6];
			total += parseInt(returnPrice[1]);
			lowerPrice += parseInt(returnPrice[0]);
		} else if ((nodeValue>200) && (nodeValue<= 250)){
			var priceArray=whichArray(priceArray);
			var returnPrice =priceArray[7];
			total += parseInt(returnPrice[1]);
			lowerPrice += parseInt(returnPrice[0]);
		} else {
			$(".bigPrice").html("Please contact us");
			debugger;
		};
	}

	addOns();
	returnPrices();
	updateTotal(total, lowerPrice); 
}

function updateTotal(total, littlePrice){
	$(".bigPrice").html(total);
	$(".littlePrice").html(littlePrice);
}

function whichArray(priceArray){
	if ($("#hostedSelected").hasClass("selected")) {
			var priceArray = priceArrayHosted;
		} else {
			var priceArray = priceArrayOnPremise;
		};
	return priceArray;
}

$(function () {
  $('[data-toggle="popover"]').popover()
})

$('#planHelpModal').on('shown.bs.modal', function() {
    $(document).off('focusin.modal');
});
$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
}); 
// HIGHLIGHT SELECTED



// UNHIGHLIGHT OTHER OPTION



// UPDATE NUMBER OF NODES ON LEFT AND RIGHT



// UPDATE COST



// ADD ALA CARTE ITEMS TO RECEIPT



// CHANGE BUTTON BASED ON NODES



// GREY OUT ANALYTICS IF HOSTED IS SELECTED