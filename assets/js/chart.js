/**
 * Created by imvad on 13.04.17.
 */
$(document).ready(function(){

	$("[data-chart]").on('click', function(){

		var arrLabels = [];
		var arrSeries = [];
		var arrPercent = [];

		if (dataChart === undefined) {
			arrPercent[0] = 0;
			arrSeries[0] = 0;
		} else {
			for (var i = 0; i < dataChart.length; i++) {
				arrLabels[i] = moment(dataChart[i].date).format("DD.MM");
				arrSeries[i] = dataChart[i].loan;
				arrPercent[i] = dataChart[i].percent;
			}
		}


		new Chartist.Bar('.ct-chart', {
			labels: arrLabels,
			series: [
				{"name": "основной долг", "data": arrSeries},
				{"name": "проценты", "data": arrPercent}
			]
		}, {
			stackBars: true,
			plugins: [
				Chartist.plugins.legend()
			],
			axisY: {
				labelInterpolationFnc: function (value) {
					return (value / 1000) + 'k';
				}
			}
		}).on('draw', function (data) {
			if (data.type === 'bar') {
				data.element.attr({
					style: 'stroke-width: 20px'
				});
			}
		});
	});
});