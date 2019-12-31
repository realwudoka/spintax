var PATTERN = /\{[^"\r\n\}]*\}/;
var spinner = function (text) {
	var match;
	while (match = text.match(PATTERN)) {
		match = match[0];
		var candidates = match.substring(1, match.length - 1).split("|");
		text = text.replace(match, candidates[Math.floor(Math.random() * candidates.length)])
	}
	return text;
}
var spin_countVariations = function (text) {
		text = text.replace(/[^{|}]+/g, '1');
		text = text.replace(/\{/g, '(');
		text = text.replace(/\|/g, '+');
		text = text.replace(/\}/g, ')');
		text = text.replace(/\)\(/g, ')*(');
		text = text.replace(/\)1/g, ')*1');
		text = text.replace(/1\(/g, '1*(');
    console.log(text);
		return eval(text);
	}

document.getElementById('run').onclick = function() {
    var source = document.getElementById('text');
    var result = document.getElementById('result');
    result.value = spinner(source.value);
}
