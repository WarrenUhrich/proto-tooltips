/*!
 * Proto-Tooltips (jQuery Plugin)
 * Author: Warren Uhrich
 * Licensed under the MIT license
 */

;(function ( $ ) {
  $(document).ready(function() {
 
    protoTooltip = function( options ) {
 
      var settings = $.extend({
        tooltipClass: '.proto-tooltip',
        time: 1000,
        flash: true,
        opacity: '0.6',
        tooltipStyles: 'display: inline-block;'
          + 'padding: 5px;'
          + 'margin: 0;'
          + 'background: #fff;'
          + 'position: absolute;'
          + 'border: 1px solid black;'
          + 'border-radius: 3px;'
          + 'box-shadow: 1px 1px #000;'
          + 'color: #000;'
          + 'max-width: 100px;'
      }, options );


      tooltipClass = $(settings.tooltipClass);
      time = settings.time;
      flash = settings.flash;
      opacity = settings.opacity;
      tooltipStyles = settings.tooltipStyles;

      function flashTimer(){
        if (flash == true) {
          var fade = true;
          tooltipClass.css('transition', 'opacity 0.5s ease;')
          function timeout() {
              setTimeout(function () {
                switch (fade) {
                  case true:
                    if (flash == true) {
                      tooltipClass.css('opacity', opacity);
                      fade = false;
                    }
                    break;
                  case false:
                    tooltipClass.css('opacity', '1');
                    fade = true;
                    break;
                }
                timeout();
              }, time);
          }
          timeout();
        }
      }
      
      var flashcheck;
      if (flash == true) { flashcheck = true }
      tooltipClass.hover(
        function() {
          if (flashcheck == true) {
            flash = false;
            tooltipClass.css('opacity', '1');
          }
          tooltip = $(this).data('proto-tooltip');
          $(this).after('<div id="proto-tooltip" style="'
            + tooltipStyles
            + '">'
            + tooltip 
            + '</div>');
        }, function() {
          if (flashcheck == true) {
            flash = true;
          }
          $(document).find('#proto-tooltip').remove();
        }
      );

      flashTimer();
    };

  protoTooltip();
  });
}( jQuery ));
