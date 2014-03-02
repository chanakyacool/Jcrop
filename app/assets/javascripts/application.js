// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery.Jcrop
//= require jquery.Jcrop.min
//= require jquery.color
//= require_tree .


   jQuery(function($) 
   {
        $('#cropbox').Jcrop({
          
            aspectRatio: 1,
            setSelect: [0, 0, 600, 600],
            onSelect: showCoords,
            onChange: showCoords
        });     
    });

    function showCoords(c) {
	$('#user_crop_x').val(c.x);
	$('#user_crop_y').val(c.y);
	$('#user_crop_w').val(c.w);
	$('#user_crop_h').val(c.h);

	$('#preview').css({
			width: Math.round(100/c.w * $('#cropbox').width()) + 'px',
			height: Math.round(100/c.h * $('#cropbox').height()) + 'px',
			marginLeft: '-' + Math.round(100/c.w * c.x) + 'px',
			marginTop: '-' + Math.round(100/c.h * c.y) + 'px'
		});
	
};


