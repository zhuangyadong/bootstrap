var HP = function(){}
HP.Main = {
	imgBright : function(){
		$(".hp-img").on("mouseenter",function(){
			var $this = $(this);
			var running = $this.data("running");
			if(!!running) return;
				$this.data("running",1);
			$this.fadeTo(800,0.8,function(){
				$this.fadeTo(800,1);
				$this.data("running",0);
			});
		});
	},
	floorSlide : function(){
		var $container = $(".J_Floor");
		var $floorNav = $(".J_FloorNav",$container);
		var $navItems = $(".J_FloorNavItem",$floorNav);
		var $items = $(".J_FloorItem",$container);
		var offset = $container.offset();
		var $lastItem = $items.eq($items.size() - 1);
		var itemHeight = $lastItem.outerHeight();
		var lastOffset = $lastItem.offset();
		$navItems.on("click",function(){
			var $this = $(this);
			var i = $navItems.index($this);
			var $targetItem = $items.eq(i);
			var navOffset = $floorNav.offset();
			var itemOffset = $targetItem.offset();
			var range = itemOffset.top - navOffset.top;
			var top = parseFloat($floorNav.css("top")) + range + 37;
			$navItems.removeClass("current");
			$this.addClass("current");
			$("html,body").animate({scrollTop:itemOffset.top},500)
		});
		if($container.size() < 1) return;
		$(window).on("scroll",function(){
			var scrollY = $(document).scrollTop();
			if(scrollY >= offset.top && scrollY <= lastOffset.top + itemHeight - 30){
				$floorNav.css({position:'fixed',left:offset.left - 90})	
			}else{
				$floorNav.css({position:'absolute',left:-90})		
			}
		})
	},
	init : function(){
		this.imgBright();
		this.floorSlide();
		this.storeToggle();
		this.addrOper();
	},
	storeToggle : function(){
		var $holder = $(".J_StoreHolder");
		$(".J_StoreMoreBtn").on("click",function(){
			var $this = $(this);
			var $txt = $this.children("span");
			if($holder.hasClass("collapse")){
				$holder.removeClass("collapse");
				$holder.addClass("expand");
				$txt.html("收起");
			}else{
				$holder.removeClass("expand");	
				$holder.addClass("collapse");
				$txt.html("更多");
			}
		});
	},
	addrOper : function(){
		$(".J_AddAddrBtn,.J_AddrEditBtn").on("click",function(){
			var $this = $(this);
			var $cover = $(".J_Cover");
			var $target = $(".J_AddrBox");
			var source = $this.attr("data-source");
			if(source == "uc"){
				var position;
				if($this.hasClass("item")){
					position = $this.position();		
				}else{
					position = $this.parent().position();			
				}
				$target.css({left:position.left,top:position.top});
			}else{		
				var winHeight = $(window).height();
				var height = $target.outerHeight();
				var scrollY = $(document).scrollTop();
				$target.css({top:scrollY + (winHeight-height)/2});
				var scrollWidth = document.body.scrollWidth,scrollHeight = document.body.scrollHeight;
				$cover.width(scrollWidth);
				$cover.height(scrollHeight);
			}
			$cover.show();
			$target.show();
		});
		var $cancel = $(".J_ReselectAddr");
		$cancel.on("click",function(){
			$(".J_AddrBox").hide();
			$(".hp-cover").hide();
		});
	}
}

$(function(){
	HP.Main.init();
});


/***** 滚动功能 *****/
(function(){
	$.fn.scrollable = function(options){
		var defaults = {
			scrollbar : '.scrollbar',
			scrollcontent : '.scrollcontent',
			scrollbtn : '.scroll-btn',
			scrollpixels : 20
		}
		var vars = $.extend({},defaults,options);
		return this.each(function(options){
			var $this = $(this);
			var $scrollbar = $(vars.scrollbar,$this);
			var $scrollcontent = $(vars.scrollcontent,$this);
			var $scrollbtn = $(vars.scrollbtn,$this);
			var container_height = $this.height();
			var scrollbar_height = $scrollbar.height();
			var scrollcontent_height = $scrollcontent.outerHeight();
			var scrollpixels = vars.scrollpixels;
			if(scrollcontent_height <= container_height){
				return;
			}
			var ratio = scrollcontent_height / container_height;
			var scrollbtn_height = scrollbar_height / ratio;
			$scrollbar.show();
			var move_range = scrollbar_height - scrollbtn_height;
			var content_range = scrollcontent_height - container_height;
			$scrollbtn.height(scrollbtn_height);
			var drag_status = false;
			var startY = 0;
			$scrollbtn.on("mousedown",function(e){
				e.preventDefault();
				e.stopPropagation();	
				drag_status = true;
				startY = e.pageY;
			});
			$("body").on("mousemove",function(e){
				e.preventDefault();
				e.stopPropagation();	
				if(!drag_status) return;
				var moveY  = e.pageY - startY;
				startY = e.pageY;
				var scrollbtnTop = parseFloat($scrollbtn.css("top"));
				scrollbtnTop = isNaN(scrollbtnTop) ? 0 : scrollbtnTop;
				var scrollcontentTop = parseFloat($scrollcontent.css("top"));
				scrollcontentTop = isNaN(scrollcontentTop) ? 0 : scrollcontentTop;
				$scrollbtn.css("top",Math.min(Math.max(0,scrollbtnTop+moveY),move_range));
				var mY = moveY * ratio;
				if($.browser.msie){
					mY = Math.round(mY);
				}
				$scrollcontent.css("top",Math.max(Math.min(0,scrollcontentTop-mY),-content_range));
			}).on(" mouseup",function(e){
				e.preventDefault();
				e.stopPropagation();	
				drag_status = false;
			});
			$this.on("mousewheel",function(e,delta){ // delta 1 向上  -1 向下
				var scrollcontentTop = parseFloat($scrollcontent.css("top"));
				scrollcontentTop = isNaN(scrollcontentTop) ? 0 : scrollcontentTop;
				if(scrollcontentTop == 0 && delta > 0) return;
				else if(scrollcontentTop == -content_range && delta < 0) return;
				var pixels = scrollpixels * delta;
				e.preventDefault();
				e.stopPropagation();
				var scrollbtnTop = parseFloat($scrollbtn.css("top"));
				scrollbtnTop = isNaN(scrollbtnTop) ? 0 : scrollbtnTop;
				$scrollcontent.css({top:Math.max(Math.min(0,scrollcontentTop+pixels),-content_range)});
				var mY = pixels / ratio;
				if($.browser.msie){
					mY = Math.round(mY);
				}
				$scrollbtn.css("top",Math.min(Math.max(0,scrollbtnTop-mY),move_range));
			});
		});
	}
	$(function(){
		$(".scrollable").scrollable();
	});
})();

(function(){
	$.fn.spinner = function(){
		return this.each(function(){
			var $this = $(this);
			var $plus = $(".J_Plus",$this);
			var $minus = $(".J_Minus",$this);
			var $num = $(".J_Num",$this);
			$plus.on("click",function(e){
				$num.val(parseInt($num.val()) + 1);
				e.preventDefault();
				e.stopPropagation();	
			});
			$minus.on("click",function(e){
				$num.val(Math.max(parseInt($num.val()) - 1,1));
				e.preventDefault();
				e.stopPropagation();
			});
		});
	}
	$.fn.choose = function(){
		return this.each(function(){
			var $this = $(this);
			var $items = $(".option",$this);
			$items.on("click",function(){
				var $item = $(this);
				$items.removeClass("selected");
				$item.addClass("selected");
			}); 
		});
	}
	$(function(){
		$(".J_Quantity").spinner();
		$(".J_OptionSelect").choose();
	})
})();

$(function(){
	var defaults = {
		container:'slide-content',
		generatePagination:false,
		paginationClass:'slide-nav',
		currentClass:'active',
		hoverPause:true,
		play:4000,
		pause:2500,
		crossfade:true
	};
	$(".slide").each(function(){
		var $this = $(this);
		var config = $this.attr("data-config");
		var options = $.extend({},defaults);
		if(config != null){
			config = eval("(" + config + ")");
			options = $.extend(options,config);
		}
		$this.slides(options);
	})
});

(function($){
	var defaults = {
		booth : '.booth',
		thumbs : '.thumbs',
		prev : '.prev',
		next : '.next',
		active : 'active',
		num : 5,
		duration : 250
	};
	var Gallery = function(element,options){
		this.container = $(element);
		var config = this.container.attr("data-config");
		this.props = $.extend({},defaults,options,config);
		this.init();
	}
	Gallery.prototype = {
		init : function(){
			var props = this.props,
				container = this.container;
			this.booth = $(props.booth,container);
			this.thumbs = $(props.thumbs,container);
			this.prev = $(props.prev,container);
			this.next = $(props.next,container);
			this.active = props.active;
			this.duration = props.duration;
			this.picture = this.booth.find("img");
			this.items = this.thumbs.children();
			this.index = 0;
			this.size = this.items.size();
			this.num = props.num;
			this.len = this.size - this.num;
			this.itemWidth = this.items.eq(0).outerWidth(true);			
			this.prev.on("click",{direction:0,_this:this},this.controlHandle);
			this.next.on("click",{direction:1,_this:this},this.controlHandle);
			this.items.on("mouseenter",{_this:this},this.coreHandle);
			this.initWidth();
			this.initDisable();
			this.initTransition();
			this.items.eq(0).addClass(this.active);
		},
		initWidth : function(){
			this.thumbs.width(this.itemWidth * this.size);
		},
		controlHandle : function(e){
			var target = $(this);
			if(target.hasClass("disable"))
				return;
			var data = e.data;
			var direction = data.direction;
			var _this = data._this;
			var index = _this.getIndex(direction);
			if(!_this.checkIndex(index)) return;
			_this.animate(index);
		},
		coreHandle : function(e){
			var target = $(this);
			_this = e.data._this;
			var img = target.find("img");
			var src = img.attr("data-src");
			_this.setActive(target)
			_this.picture.attr("src",src);
		},
		setActive : function(target){
			var active = this.active;
			this.items.removeClass(active);
			target.addClass(active);
		},
		getIndex : function(direction){
			var index = this.index; 
			if(!!!direction){
				index -= 1;
			}else{
				index += 1;
			}
			return index;
		},
		checkIndex : function(index){
			if(this.size <= this.num)
				return false;
			if(index < 0) return false;
			if(index > this.len) return false;
			return true;
		},
		initDisable : function(){
			this.setDisable(this.prev);
			if(this.size <= this.num){
				this.setDisable(this.next);
			}
		},
		setDisable : function(target){
			target.addClass("disable");
		},
		removeDisable : function(target){
			target.removeClass("disable");
		},
		animate : function(index){
			var offset = this.getOffset(index);
			if(this.supportTransition){
				this.thumbs.css({left:offset});
				this.complete(index);
			}else{
				var _this = this;
				this.thumbs.animate({left:offset},this.duration,'swing',function(){
					_this.complete(index);
				});
			}
		},
		complete : function(index){
			this.index = index;
			if(index == 0){
				this.setDisable(this.prev);
				this.removeDisable(this.next);
			}else if(index == this.len){
				this.setDisable(this.next);
				this.removeDisable(this.prev);
			}else{
				this.removeDisable(this.prev);
				this.removeDisable(this.next);
			}
		},
		getOffset : function(index){
			return -index * this.itemWidth;
		},
		initTransition : function(){
			this.supportTransition = this.checkSupportTransition();
			if(this.supportTransition){
				this.setTransition();
			}
		},
		setTransition : function(){
			var thumbs = this.thumbs;
			var props = "-webkit-transition -moz-transition -o-transition -ms-transition transition".split(" ");
			for(var i = 0; i < props.length; i++){
				var prop = "" + props[i] + "";
				thumbs.css(prop,"left " + this.duration/1000 + "s" + " ease");
			}
		},
		checkSupportTransition : function(){
			var style = document.createElement("div").style;
			var props = "transition webkitTransition mozTransition oTransition msTransition".split(" ");
			for(var i = 0; i < props.length; i++){
				var prop = props[i];
				if(style[prop] !== undefined){
					return true;
				}
			}
			return false;
		}
	};
	$.fn.gallery = function(options){
		return this.each(function(){
			new Gallery(this,options);
		});
	};
})(jQuery);

$(function(){
	$(".gallery").gallery();
})

