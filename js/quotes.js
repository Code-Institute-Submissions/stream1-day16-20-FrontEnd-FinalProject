function generateQuote() {
	let quotes = [
		"<blockquote class='blockquote'><p class='mb-0'>Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.</p><footer class='blockquote-footer text-light'>Waseem Latif</footer></blockquote>",
		"<blockquote class='blockquote'><p class='mb-0'>The best programs are written so that computing machines can perform them quickly and so that human beings can understand them clearly. A programmer is ideally an essayist who works with traditional aesthetic and literary forms as well as mathematical concepts, to communicate the way that an algorithm works and to convince a reader that the results will be correct.</p><footer class='blockquote-footer text-light'>Donald Ervin Knuth</footer></blockquote>",
		"<blockquote class='blockquote'><p class='mb-0'>I am not a great programmer; I am just a good programmer with great habits.</p><footer class='blockquote-footer text-light'>Kent Beck</footer></blockquote>",
		"<blockquote class='blockquote'><p class='mb-0'>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</p><footer class='blockquote-footer text-light'>Martin Fowler</footer></blockquote>",
		"<blockquote class='blockquote'><p class='mb-0'>The most disastrous thing that you can ever learn is your first programming language.</p><footer class='blockquote-footer text-light'>Alan Kay</footer></blockquote>",
		"<blockquote class='blockquote'><p class='mb-0'>Some of the best programming is done on paper, really. Putting it into the computer is just a minor detail.</p><footer class='blockquote-footer text-light'>Max Kanat-Alexander</footer></blockquote>"
		];

	let theIndex = (Math.floor(Math.random() * 6));
	document.getElementById("theWordPar").innerHTML = quotes[theIndex];
}