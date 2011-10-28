(function($) { 

	$.fn.biseau = function(options) {
		// in 1.3+ we can fix mistakes with the ready state
		if (this.length == 0) {
			if (!$.isReady && this.selector) {
				var s = this.selector, c = this.context;
				$(function() {
					$(s,c).biseau(options);
				});
			}
			return this;
		}

		return this.each(function(index){
			var $this = $(this);
			
			/* On initialise/récupère les variables qui nous seront utiles par la suite */
			var color = $(this).css("background-color");
			var width = $(this).innerWidth();
			var height = $(this).innerHeight();
			//var border = (options.corner != null && options.corner != undefined )?Math.round(options.corner):10;
			var topLeft = (options.tl != null && options.tl != undefined )?Math.round(options.tl):0;
			var topRight = (options.tr != null && options.tr != undefined )?Math.round(options.tr):0;
			var bottomLeft = (options.bl != null && options.bl != undefined )?Math.round(options.bl):0;
			var bottomRight = (options.br != null && options.br != undefined )?Math.round(options.br):0;
			var zIndex = (options.zindex != null && options.zindex != undefined )?Math.round(options.zindex):4;
			
			var centerWidth = width - Math.max(topLeft,bottomLeft) - Math.max(topRight,bottomRight);
			
			/* C'est bon, on a tout ? alors on commence à construire */
			$(this).css("background-color",'transparent');
			var pos = $(this).css('position');
			if(pos != 'relative' && pos != 'absolute'){
				$(this).css('position','relative');
			}
			
			var contentContainer = $('<div></div>');
			contentContainer.css("z-index",zIndex+1);
			contentContainer.css("position","relative");
			contentContainer.html($(this).html());
			$(this).html('');
			$(this).append(contentContainer);
			
			var blocCentral = $('<div></div>');
			blocCentral.css("z-index",zIndex);
			blocCentral.css("background-color",color);
			blocCentral.css("height",height);
			blocCentral.css("width",centerWidth);
			blocCentral.css("position","absolute");
			blocCentral.css("top","0");
			blocCentral.css("left",Math.max(topLeft,bottomLeft) + "px");
			$(this).prepend(blocCentral);
			
			//return;
			console.log(topLeft+"px");
			if(Math.max(topLeft,bottomLeft) > 0){
				if(topLeft != bottomLeft){
					var blocTL = $('<div></div>');
					blocTL.css("z-index",zIndex);
					blocTL.css("position","absolute");
					blocTL.css("top","0");
					blocTL.css("left","0");
					blocTL.css("border-style","solid");
					if(topLeft > bottomLeft){
						blocTL.css("border-color","transparent "+color+" "+color+" transparent");
						blocTL.css("border-width",topLeft+"px "+topLeft+"px "+(height-bottomLeft-topLeft)+"px 0");
					}else{
						blocTL.css("border-color","transparent "+color+" "+color+" transparent");
						blocTL.css("border-width","0 "+bottomLeft+"px "+topLeft+"px "+topLeft+"px ");
					}
					//$(this).prepend(blocTL);
					var blocBL = $('<div></div>');
					blocBL.css("z-index",zIndex);
					blocBL.css("position","absolute");
					blocBL.css("left","0");
					blocBL.css("border-style","solid");
					if(topLeft > bottomLeft){
						blocBL.css("top",(height-bottomLeft)+"px");
						blocBL.css("border-color",""+color+" "+color+" transparent transparent");
						blocBL.css("border-width",""+bottomLeft+"px "+(topLeft-bottomLeft)+"px 0 "+bottomLeft+"px");
					}else{
						blocBL.css("top",topLeft+"px");
						blocBL.css("border-color",""+color+" "+color+" transparent transparent");
						console.log((height-bottomLeft-topLeft)+"px "+bottomLeft+"px "+bottomLeft+"px 0")
						blocBL.css("border-width",(height-bottomLeft-topLeft)+"px "+bottomLeft+"px "+bottomLeft+"px 0");
					}
					//$(this).prepend(blocBL);
				}else{
					var blocL = $('<div></div>');
					blocL.css("z-index",zIndex);
					blocL.css("height",(height-topLeft*2)+"px");
					blocL.css("position","absolute");
					blocL.css("top","0");
					blocL.css("left","0");
					blocL.css("border-width", topLeft+"px "+topLeft+"px "+topLeft+"px 0");
					blocL.css("border-style","solid");
					blocL.css("border-color","transparent "+color+" transparent transparent");
					$(this).prepend(blocL);
				}
			}
			if(Math.max(topRight,bottomRight) > 0){
				if(topRight != bottomRight){
					var blocTL = $('<div></div>');
					blocTL.css("z-index",zIndex);
					blocTL.css("position","absolute");
					blocTL.css("top","0");
					blocTL.css("left",(width-Math.max(topRight,bottomRight))+"px");
					blocTL.css("border-style","solid");
					if(topRight > bottomRight){
						blocTL.css("border-color","transparent transparent "+color+" "+color+"");
						blocTL.css("border-width",topRight+"px 0 "+(height-bottomRight-topRight)+"px "+topRight+"px");
					}else{
						blocTL.css("border-color","transparent transparent "+color+" "+color+"");
						blocTL.css("border-width","0 "+topRight+"px "+topRight+"px "+(bottomRight-topRight)+"px");
					}
					$(this).prepend(blocTL);
					var blocBL = $('<div></div>');
					blocBL.css("z-index",zIndex);
					blocBL.css("position","absolute");
					blocBL.css("left",(width-Math.max(topRight,bottomRight))+"px");
					blocBL.css("border-style","solid");
					if(topRight > bottomRight){
						blocBL.css("top",(height-bottomRight)+"px");
						blocBL.css("border-color",""+color+" transparent transparent "+color+"");
						blocBL.css("border-width",""+bottomRight+"px "+bottomRight+"px 0 "+(topRight-bottomRight)+"px");
					}else{
						blocBL.css("top",topRight+"px");
						blocBL.css("border-color",""+color+" transparent transparent "+color+"");
						//console.log((height-bottomRight-topRight)+"px "+bottomRight+"px "+bottomRight+"px 0")
						blocBL.css("border-width",(height-bottomRight-topRight)+"px 0 "+bottomRight+"px "+bottomRight+"px");
					}
					$(this).prepend(blocBL);
				}else{
					var blocR = $('<div></div>');
					blocR.css("z-index",zIndex);
					blocR.css("height",(height-topRight*2)+"px");
					blocR.css("position","absolute");
					blocR.css("top","0");
					blocR.css("left",(width-Math.max(topRight,bottomRight))+"px");
					blocR.css("border-width", topRight+"px 0 "+topRight+"px "+topRight+"px");
					blocR.css("border-style","solid");
					blocR.css("border-color","transparent transparent transparent "+color);
					$(this).prepend(blocR);
				}
			}
			

		});
	};

    
})(jQuery);
