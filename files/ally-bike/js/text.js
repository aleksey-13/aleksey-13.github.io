var content = {
	size: 17, //количество символов
	newsContent: document.getElementsByClassName("products__link"), //блок,где урезается текст
	buildText: function() {
		for (var t = 0; t < this.newsContent.length; t++) {
			var e = this.newsContent[t].textContent;
			e.length > this.size && (this.newsContent[t].innerHTML = e.slice(0, this.size) + "...") //урезаем текст до size и в конце ставим троеточие
		}
	}
};
var blogNews = {
	size: 50,
	newsContent: document.getElementsByClassName("item__title"),
	buildText: function() {
		for (var t = 0; t < this.newsContent.length; t++) {
			var e = this.newsContent[t].textContent;
			e.length > this.size && (this.newsContent[t].innerHTML = e.slice(0, this.size) + "...")
		}
	}
};
content.buildText();
blogNews.buildText();