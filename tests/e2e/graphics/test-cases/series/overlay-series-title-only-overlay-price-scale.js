function generateData(func) {
	const res = [];
	const time = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0));
	for (let i = 0; i < 500; ++i) {
		res.push({
			time: time.getTime() / 1000,
			value: func(i),
		});

		time.setUTCDate(time.getUTCDate() + 1);
	}
	return res;
}

function runTestCase(container) {
	const chart = LightweightCharts.createChart(container);

	const line1 = chart.addLineSeries({
		priceScaleId: 'overlay',
		color: 'rgb(255, 0, 0)',
		title: 'SIN',
	});
	const line2 = chart.addLineSeries({
		priceScaleId: 'overlay',
		color: 'rgb(0, 255, 0)',
		title: 'COS',
	});

	line1.setData(generateData(Math.sin));
	line2.setData(generateData(Math.cos));
}
