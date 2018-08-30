var tesseract = require('node-tesseract');

tesseract.process('./canelo-golovkin-compubox-punch-stats.jpg', function(err, text) {
    if (err) {
	return console.log("An error occured: ", err);
    }

    console.log("Recognized text:");
    console.log(text);
});
