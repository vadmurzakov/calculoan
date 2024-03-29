/**
 * Created by imvad on 13.04.17.
 */

var date = new Date();
$('#loanStartDate').val(moment(date).format("DD.MM.YYYY"));
$('#amount').val(150000 + ' руб');
$('#rate').val(29.9 + ' %');
$('#minPayment').val(10000 + ' руб');

$(document).ready(function () {

	// document.addEventListener('DOMContentLoaded', function () {
	// 	setGetParameters();
	// }, false);

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
	$('#amount').keyup(function (data) {
		var amount = $(this).val().replace(" руб", "");
		$('#amountRange').data("ionRangeSlider").update({from: amount});
	});
	$('#rate').keyup(function (data) {
		var rate = $(this).val();
		$('#rateRange').data("ionRangeSlider").update({from: rate});
	});
	$('#minPayment').keyup(function (data) {
		var minPayment = $(this).val().replace(" руб", "");
		$('#minPaymentRange').data("ionRangeSlider").update({from: minPayment});
	});

	//добавляем префиксы при потере фокуса
	$('#amount').blur(function () {
		var curr = $(this).val().replace(" руб", "");
		$(this).val(curr + " руб");
	});
	$('#minPayment').blur(function () {
		var curr = $(this).val().replace(" руб", "");
		$(this).val(curr + " руб");
	});

	//выделение при получении фокуса
	$('#amount').focus(function () {

		$(this).select();
	});
	$('#minPayment').focus(function () {
		$(this).select();
	});


	//копирование ссылки
	$('#copyLink').on("click", function () {
		document.getElementById("directLinkEx").select();
		document.execCommand('copy');
	});


    if(url('?calculoan')){
        $('#amount').val(url('?amount'));
        $('#rate').val(url('?rate'));
        $('#minPayment').val(url('?minPayment'));
        $('#loanStartDate').val(url('?loanStartDate'));
        $('#amountRange').data('ionRangeSlider').update({from: url('?amountRange')});
        if(url('?rateRange') == '29.9') $('#rateRange').data('ionRangeSlider').update({from: 0});
        if(url('?rateRange') == '33.9') $('#rateRange').data('ionRangeSlider').update({from: 1});
        if(url('?rateRange') == '49.9') $('#rateRange').data('ionRangeSlider').update({from: 2});
        $('#minPaymentRange').data('ionRangeSlider').update({from: url('?minPaymentRange')});
        computeAndShowCard();
    }

});

