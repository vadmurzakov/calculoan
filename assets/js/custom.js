/**
 * Created by imvad on 13.04.17.
 */

$(document).ready(function () {

    document.addEventListener('DOMContentLoaded', function () {
        setGetParameters();
    }, false);

	var date = new Date();
	$('#loanStartDate').val(date.getDate() + '.' + (date.getMonth() + 1) + '.' +  date.getFullYear());
	$('#amount').val(150000);
	$('#rate').val(29.9);
	$('#minPayment').val(10000);

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
            $('#amount').val(data.from);
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
            $('#rate').val(data.from_value);
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
            $('#minPayment').val(data.from);
        }
    });


    $('#loanStartDate').datepicker({
        autoclose: true,
        format: 'dd.mm.yyyy',
        locale: 'ru',
        weekStart: 1
    });

    $('#firstPaymentDate').datepicker({
        autoclose: true,
        format: 'dd.mm.yyyy',
        locale: 'ru',
        weekStart: 1
    });

    $('#basic-addon1').datepicker({
		autoclose: true,
		format: 'dd.mm.yyyy',
		locale: 'ru',
		weekStart: 1
    });

	$('#basic-addon2').datepicker({
		autoclose: true,
		format: 'dd.mm.yyyy',
		locale: 'ru',
		weekStart: 1
	});

    $('#copyLink').on("click", function(){
        document.getElementById("directLinkEx").select();
        document.execCommand('copy');
    });

});

