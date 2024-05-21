/*
	
	Social media sharer
	====================================
	
	Sharing links
	
	- Facebook
	https://www.facebook.com/sharer/sharer.php?u=<?= urlencode( $url ) ?>&amp;title=<?= urlencode( $title ) ?>

	- Twitter
	https://twitter.com/intent/tweet?status=<?= urlencode( $title ) ?>+<?= urlencode( $url ) ?>

	- Google Plus
	https://plus.google.com/share?url=<?= urlencode( $url ) ?>

	- Mailto
	mailto:?subject=<?= urlencode( $title ) ?>&body=<?= urlencode( $url ) ?>

	- LinkedIn
	https://www.linkedin.com/shareArticle?mini=true&url=<?= urlencode( $url ) ?>&title=<?= urlencode( $title ) ?>&summary=&source=

	- Delicious
	https://delicious.com/save?v=5&provider=<?= urlencode( $modal_title ) ?>&noui&jump=close&url=<?= urlencode( $url ) ?>&title=<?= urlencode( $title ) ?>

	- Tumblr
	https://www.tumblr.com/widgets/share/tool?posttype=link&canonicalUrl=<?= urlencode( $url ) ?>&title=<?= urlencode( $title ) ?>&content=<?= urlencode( $url ) ?>

	- Whatsapp
	whatsapp://send?text=<?= urlencode( $url ) ?>



*/

( function ( $ ){

	var Sharer = {
		options : {
			//..
		},
		initServices: function(e){
			var title = e.data('title');
			var url = e.data('url');
			var image_url = e.data('image-url');


			//Twitter
			var twitter_target = e.find('a.share-twitter');
			if ( twitter_target.length > 0 ){
				twitter_target.attr('href', 'https://twitter.com/intent/tweet?status=' + encodeURIComponent(title) + '+' + encodeURIComponent(url) );
			}


			//Facebook
			var fb_target = e.find('a.share-facebook');
			if ( fb_target.length > 0 ){
				fb_target.attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title) );
			}


			//GooglePlus
			var gplus_target = e.find('a.share-googleplus');
			if ( gplus_target.length > 0 ){
				gplus_target.attr('href', 'https://plus.google.com/share?url=' + encodeURIComponent(url) );
			}


			//Mailto
			var mailto_target = e.find('a.share-mailto');
			if ( mailto_target.length > 0 ){
				mailto_target.attr('href', 'mailto:?subject=' + encodeURIComponent(title) + '&body=' + encodeURIComponent(url) );
			}


			//LinkedIn
			var linkedin_target = e.find('a.share-linkedin');
			if (linkedin_target.length > 0 ){
				linkedin_target.attr('href', 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title) + '&summary=&source=');
			}


			//Delicious
			var delicious_target = e.find('a.share-delicious');
			if (delicious_target.length > 0 ){
				delicious_target.attr('href', 'https://delicious.com/save?v=5&provider=humaan-share-helper&noui&jump=close&url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title) );
			}


			//Tumblr
			var tumblr_target = e.find('a.share-tumblr');
			if (tumblr_target.length > 0 ){
				tumblr_target.attr('href', 'https://www.tumblr.com/widgets/share/tool?posttype=link&canonicalUrl=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title) + '&content=' + encodeURIComponent(url));
			}


			//Pinterest
			var pinterest_target = e.find('a.share-pinterest');
			if (pinterest_target.length > 0 ){
				pinterest_target.attr('href', 'https://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(url) + '&media=' + encodeURIComponent( image_url ) );
			}


			//Whatsapp
			var whatsapp_target = e.find('a.share-whatsapp');
			if (whatsapp_target.length > 0 ){
				whatsapp_target.attr('href', 'whatsapp://send?text=' + encodeURIComponent(url) );
			}


			//Everything but whatsapp, it shouldn't need a popup window
			e.find('a.share-twitter, a.share-facebook, a.share-googleplus, a.share-linkedin, a.share-delicious, a.share-tumblr, a.share-pinterest').unbind('click').click(function(){
				var trigger = $(this);
				var url = trigger.attr('href');
				window.open(url, 'shareWindow', config='width=600, height=300');
				Sharer.options.after_click(trigger);
				return false;
			});
			

		}

	};



	$.fn.SocialIntercourse = function( options ){

		var elements = $(this);

		elements.each(function(){
			
			var e = $(this);
			var default_opts = {

				//Callback after clicking on a share trigger
				after_click : function(trigger){
					//..
				}

			};

			Sharer.options = $.extend( true, {}, default_opts, options );
			Sharer.initServices(e);

		});

		return this;

	};


}( jQuery ));