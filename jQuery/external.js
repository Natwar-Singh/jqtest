$.fn.External=function(){
		var obj=this;
		
		return jQuery.each(this, function(index, value){
			var variable=window.location.hostname;console.log(variable);
			variable=variable.replace(/www./i,"");
			console.log(variable);
			var pattern=RegExp(variable,"i");
			
			var link=jQuery(value).attr("href");
            var n = pattern.test(link);
            if(!n){
            	jQuery(value).append("<img src='icon.gif' ></img>")
                 jQuery(value).attr("target","_blank");}
		});
	};
		jQuery(document).ready(function(){
			jQuery("a").External();

		});
