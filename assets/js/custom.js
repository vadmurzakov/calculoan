/**
 * Created by imvad on 13.04.17.
 */

$(document).ready(function () {
    document.addEventListener('DOMContentLoaded', function () {
        setGetParameters();
    }, false);

    $("#amountRange").ionRangeSlider({
        grid: true,
        min: 10000,
        max: 300000,
        from: 155000,
        step: 1000,
        prettify_enabled: true,
        postfix: " р",
        onChange: function (data) {
            $('#amount').val(data.from);
        }
    });

    $("#rateRange").ionRangeSlider({
        grid: true,
        min: 13.5,
        max: 25.5,
        from: 18.5,
        step: 0.5,
        prettify_enabled: true,
        prettify_separator: ".",
        postfix: "%",
        onChange: function (data) {
            $('#rate').val(data.from);
        }
    });

    $("#minPaymentRange").ionRangeSlider({
        grid: true,
        min: 3000,
        max: 80000,
        from: 41500,
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

    $('#copyLink').on("click", function(){
        document.getElementById("directLinkEx").select();
        document.execCommand('copy');
    });

});

