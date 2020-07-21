$(document).ready(function() {		
		var noticed = $.cookie('cookie_notice');
		if (typeof(noticed) == 'undefined' || noticed != 1) {
			if ($.cookie('lang') == 'en') {
				var html = '<p>This site uses cookies to give you a better experience. Read more about <a href="/cookies" target="_blank">cookies policy</a></p><button class="btn js-ok"><span>Accept and close</span></button>';
			} else {
				var html = '<p>Наш сайт использует файлы cookies, чтобы сделать пользовательский опыт лучше. Узнайте больше о <a href="/cookies" target="_blank">cookies</a></p><button class="btn js-ok"><span>Согласиться и закрыть</span></button>';
			}
			$('body').append('<div id="cookies-notice" style="display:none;"><div class="wrapper">' + html + '</div></div>');
			setTimeout(function() {
				$('#cookies-notice').stop().fadeIn(700);
				$('#cookies-notice .js-ok').click(function() {
					$.cookie('cookie_notice', 1);
					$('#cookies-notice').stop().fadeOut(700, function() {
						$('#cookies-notice').remove();
					});
				});
			}, 4000);			
		}
});