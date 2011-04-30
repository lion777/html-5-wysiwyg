(function($) {
	jQuery.fn.h5w = function(options) {
		if(options == "destroy"){
			$(this).trigger('h5w.destroy');
			return this;
		}
;
		var options = jQuery.extend({
				onStart: function(teadasd) {
								return true;
							},
				onIconClick : function(icon){
				
				
				}
						

		}, options);
	
		var functions = {
				italic: function(main, icon) {;
								document.execCommand('italic',null,false);
								return true;
							},
				bold: function(main, icon) {;
								document.execCommand('bold',null,false);
								return true;
							},
				underline: function(main, icon) {;
								document.execCommand('underline',null,false);
								return true;
							},
				strike: function(main, icon) {;
								document.execCommand('strikeThrough',null,false);
								return true;
							},
				createlink: function(main, icon) {
								document.execCommand('CreateLink', null , 'changeit');
								$(main).find(".h5w-content a[href='changeit']").attr({
									href: prompt("Please URL", "http://"),
									target: "_blank"
								});
			
								return true;
							},
				unlink: function(main, icon) {
								document.execCommand('Unlink', false, null);
								return true;
							},
							
				justifyright: function(main, icon) {
								document.execCommand('justifyRight', false, null);
								return true;
							},	
				justifycenter: function(main, icon) {
								document.execCommand('justifyCenter', false, null);
								return true;
							},
				justifyleft: function(main, icon) {
								document.execCommand('justifyLeft', false, null);
								return true;
							},
							
				onIconClick : function(icon){
				
				
				}
						

		};
		function replaceSelectedText(replacementText) {
				var sel, range;
				if (window.getSelection) {
					sel = window.getSelection();
					if (sel.rangeCount) {
						range = sel.getRangeAt(0);
						range.deleteContents();
						range.insertNode(document.createTextNode(replacementText));
					}
				} else if (document.selection && document.selection.createRange) {
					range = document.selection.createRange();
					range.text = replacementText;
				}
		};
		
		function getSelectedText(){
			    var txt = '';
			     if (window.getSelection)
			        txt = window.getSelection();
			    else if (document.getSelection)
			        txt = document.getSelection();
			    else if (document.selection)
			        txt = document.selection.createRange().text;
				return txt;
			}

		function destroy(){
		
		
		}
		return this.each(function() {

			this.h5w = {
				test:	true
			};
			var MainHandle = this;
			$(MainHandle).bind('h5w.destroy', destroy);

				$(MainHandle).find('.h5w-tabs').tabs({
					
				}).find( ".ui-tabs-nav" ).sortable({ axis: "x" });
				$(MainHandle).find(".h5w-icon").bind("click", function(){
					FunName = $(this).data("h5w-function");
					ToUseFunction = eval("functions."+FunName);
					if($.isFunction(ToUseFunction))
						ToUseFunction(MainHandle, this); else 
						alert("No found function: "+FunName);
					
					return false;
				})
		});
	};
})(jQuery);
