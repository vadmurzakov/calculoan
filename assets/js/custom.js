/**
 * Created by imvad on 13.04.17.
 */

$(document).ready(function () {

    document.addEventListener('DOMContentLoaded', function () {
        setGetParameters();
    }, false);

	var date = new Date();
	$('#loanStartDate').val(moment(date).format("DD.MM.YYYY"));
	$('#amount').val(150000 + ' руб');
	$('#rate').val(29.9 + ' %');
	$('#minPayment').val(10000 + ' руб');

	setPaymentStartDate();

    $("#amountRange").ionRangeSlider({
        grid: true,
        min: 10000,
        max: 300000,
        from: 150000,
        step: 1000,
        prettify_enabled: true,
        postfix: " р",
        onChange: function (data) {
            $('#amount').val(data.from + ' руб');
        }
    });

    $("#rateRange").ionRangeSlider({
        grid: true,
        from: 0,
        to: 3,
		values: [29.9, 33.9, 49.9],
        prettify_enabled: true,
        prettify_separator: ".",
        postfix: "%",
        onChange: function (data) {
            $('#rate').val(data.from_value + ' %');
        }
    });

    $("#minPaymentRange").ionRangeSlider({
        grid: true,
        min: 3000,
        max: 80000,
        from: 10000,
        step: 1000,
        prettify_enabled: true,
        postfix: " р",
        onChange: function (data) {
            $('#minPayment').val(data.from + ' руб');
        }
    });

	$('.input-append.date').datepicker({
		format: "dd.mm.yyyy",
		language: "ru",
		autoclose: true
	});

	//обновляем слайдер при вводе данных с клавиатуры
	$('#amount').keyup(function(data){
		var amount = $(this).val();
		$('#amountRange').data("ionRangeSlider").update({from: amount});
	});
	$('#rate').keyup(function(data){
		var rate = $(this).val();
		$('#rateRange').data("ionRangeSlider").update({from: rate});
	});
	$('#minPayment').keyup(function(data){
		var minPayment = $(this).val();
		$('#minPaymentRange').data("ionRangeSlider").update({from: minPayment});
	});

	//добавляем префиксы при потере фокуса
	$('#amount').blur(function(){
		$(this).val($(this).val() + ' руб');
	});
	$('#minPayment').blur(function(){
		$(this).val($(this).val() + ' руб');
	});

	//выделение при получении фокуса
	$('#amount').focus(function () {
		$(this).select();
	});
	$('#minPayment').focus(function () {
		$(this).select();
	});


	//копирование ссылки
    $('#copyLink').on("click", function(){
        document.getElementById("directLinkEx").select();
        document.execCommand('copy');
    });

});

