function editStik(){
		if ($('#addstick').val() >= 0) {
		$('.check-list__stick').text($('#addstick').val())

	}
	if ($('#addstick_stud').val() >= 0) {
		$('.check-list__nub-stick').text($('#addstick_stud').val())
	}
	}

function changeSticksValue(resValue, elementId){
	var curValue = document.getElementById(elementId).value;
	curValue = Number(curValue) + Number(resValue);
	curValue = Math.max(curValue, 0);
	document.getElementById(elementId).value = curValue;
	editStik();
	/*alert( "Animation complete." );
	document.getElementById("contact-form-sel-time").style.display = "none";
	document.getElementById("contact-form-sel-time").style.visibility = "hidden";*/
	//document.getElementById("contact-form-sel-time").style.visibility = "visible";
}
function fixTime(getTime,elementId){
	if (getTime < 10) {
		document.getElementById(elementId).value ='0' + getTime;
	}
	else{
		document.getElementById(elementId).value = getTime;
	}
}
function changeDateValue(resValue, maxValue, elementId) {
	var curValue = document.getElementById(elementId).value;
	curValue = Number(curValue) + Number(resValue);
	if (curValue > maxValue){
		curValue = 0
	} else if (curValue < 0) {
		curValue = maxValue;
	}	
	
	fixTime(curValue, elementId)
}

function getElementValue(elementId){
	var curValue = document.getElementById(elementId).value;
	return curValue;
}

function showHideDeliveryTime() {
	
	if (document.getElementById("chbox").checked) {
		document.getElementById("contact-form-sel-time").style.display = "flex";
		document.getElementById("contact-form-sel-time").style.visibility = "visible";
		
	} else {
		document.getElementById("contact-form-sel-time").style.display = "none";
		document.getElementById("contact-form-sel-time").style.visibility = "hidden";
	}

}

$(function () {

})

$(document).ready(function() {
	setCurrentDateToDelivery();
	$('input[type=radio][name=radio-sel]').change(function () {
		var curDeliverySum = $(this).attr('data-price');
		$('#del-sum').text(curDeliverySum);
		var curOrderSum = $('#order-sum').text();
		var curOrderSumWithDelivery = (parseFloat(curDeliverySum) + parseFloat(curOrderSum)).toFixed(2);
		$('#order-sum-with-del').text(curOrderSumWithDelivery);
	})
});

function setCurrentDateToDelivery(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();
	var hours = today.getHours();
	var minutes = today.getMinutes()+20;
	if(dd<10) {
    	dd = '0'+dd
	} 

	if(mm<10) {
    	mm = '0'+mm
	} 
	document.getElementById("date-input").value = yyyy + "-" + mm + "-" + dd;
	if ((minutes>0)&&(minutes>=30)){
		minutes = 0;
		hours = hours + 1;
	} else if ((minutes>=0)&&(minutes<30)) {
		minutes = 30;
	}
	if (minutes < 10 ) {
		document.getElementById("sel-minutes-input").value = '0' + minutes;
	}else{
		document.getElementById("sel-minutes-input").value = minutes;
	}
	if (hours < 10) {
		document.getElementById("sel-hours-input").value = '0' + hours;
	}else{
		document.getElementById("sel-hours-input").value = hours;
	}
	

}

$(function(){

// 	if($(window).width() < 1024) {
// 	$( ".check-list" ).dialog({
//       autoOpen: false,
//       show: {
//         effect: "blind",
//         duration: 500
//       },
//       hide: {
//         effect: "explode",
//         duration: 500
//       }
//     });

// 	$('.check-list__show-list').click(function(){
// 		$('.check-list').dialog('open');
// 	})
// }
$('.check-list-wrap__item').click(function(){
	$('.check-list').toggle();
})
	$('#cart-container').click(function(event){
		event.preventDefault();
		$('.order-list').toggle();
		
		$('.hide-menu__item').toggleClass('rotate-arrow');
		// $('.sushi-menu__adaptive').css('margin-top', $(".order-list").height() + 140);
	})
	var itemCount = $("#itemCount").attr("itemData");
	$('#itemCount').html(itemCount).css('display', 'block');

function remActive(el){
	$('.check-list--active').removeClass('check-list--active');
	el.addClass('check-list--active')
}

function setDeliveryPriceToReceipt(){
	var curDeliverySum = $('.contact-form-type-del__list input:checked').attr('data-price');
	//var curDeliverySum = $('input:radio[name=radio-sel]:checked').attr('data-price');
	$('#del-sum').text(curDeliverySum);
}


	
	$('.del-to-house').click(function(){
		remActive($(this))
		
		$('.contact-form-addres__right-item').css('display', 'none');
		if ($('.hide-items').css('display') == 'none') {
			$('.contact-form-adr-self-srv input').prop('checked',false);
			$('.contact-form-addres__left-item  input').attr('required', true);
			$('#personal-home').attr('required', true);
			$('.hide-items').css('display', 'inherit');
			$('.contact-form-adr-self-srv').css('display', 'none');
			$('.contact-form-addres__right-item').css('display', 'none');
			$('.contact-form-adr-self-srv ').removeClass('red-rdo');
			
		}
		//setDeliveryPriceToReceipt();
	})
	$('.del-to-flat').click(function(){
		
		remActive($(this))
		if ($('.hide-items').css('display') == 'none') {
			$('.contact-form-addres__left-item  input').attr('required', true);
			$('.contact-form-adr-self-srv input').prop('checked',false);
			$('#personal-home').attr('required', true);
			$('.contact-form-addres__right-item input').attr('required', true);
			$('.hide-items').css('display', 'inherit');
			$('.contact-form-adr-self-srv').css('display', 'none');
			$('.contact-form-adr-self-srv ').removeClass('red-rdo');
		}else{
			$('.contact-form-addres__right-item').css('display', "inherit");
		}
		//setDeliveryPriceToReceipt();
	});

	function clearAdress(){
		$('.contact-form-addres__street  input').val('');
		$('.contact-form-addres__left-item  input').val('');
		$('.contact-form-addres__center-item  input').val('');
		$('.contact-form-addres__right-item input').val('');
	}

	$('.self-srv-bnt').click(function(){
		
		remActive($(this))
		clearAdress();
		$('.contact-form-addres__left-item  input').removeAttr('required');
		$('#personal-home').removeAttr('required');
		$('.contact-form-addres__right-item input').removeAttr('required');
		$('.hide-items').css('display', 'none');
		$('.contact-form-adr-self-srv').css('display', 'block')
		if ($('.contact-form-adr-self-srv input:checked').length == 0 ) {
			$('.contact-form-adr-self-srv ').addClass('red-rdo')
		}
		//setDeliveryPriceToReceipt();
		
	})
	$('.contact-form-adr__item').click(function(){
		if ($('.red-rdo').css('display') == 'block') {
			$('.contact-form-adr-self-srv ').removeClass('red-rdo')
		}
	})

	$('.next-button').click(function(){
		if (($('.red-rdo').css('display') == 'block') ) {
			return false
		}else{
			return true;
		}
	})
	

})