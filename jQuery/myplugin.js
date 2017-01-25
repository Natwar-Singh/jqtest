jQuery(document).ready(function(){
  jQuery.fn.dialog = function() {
    var obj=this;
    return this.each(function(evt) {
      obj.show();
      obj.css({"position":"fixed","top":"35%","left":"35%","background-color":"#777777","color":"blue","position":"absolute","resize":"both",
      "overflow":"auto","resize": "both","height":"30%","width":"30%","opacity":"0.6"});
      jQuery("#cross").click(function(){
        jQuery("#cross").css({"position":"absolute","top":"0","right":"0"})
        jQuery("#cross").parent().hide();
      });
  });
  };
 jQuery("#display").click( function(){
 jQuery("#popup").dialog();
 });
   
});


