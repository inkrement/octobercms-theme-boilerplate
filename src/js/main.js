(function ($, window, document, undefined) {

  'use strict';

  //----------------------------------*\
  // Get Viewport Dimensions
  //----------------------------------*/
    /*
     * Get Viewport Dimensions
     * returns object with viewport dimensions to match css in width and height properties
     * ( source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript )
    */
    // function updateViewportDimensions() {
    //   var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
    //   return { width:x,height:y };
    // }
    // // setting the viewport width
    // var viewport = updateViewportDimensions();

  //----------------------------------*\
  // Throttle Resize-triggered Events
  //----------------------------------*/
    /*
     * Throttle Resize-triggered Events
     * Wrap your actions in this function to throttle the frequency of firing them off, for better performance, esp. on mobile.
     * ( source: http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed )
    */
    // var waitForFinalEvent = (function () {
    //   var timers = {};
    //   return function (callback, ms, uniqueId) {
    //     if (!uniqueId) { uniqueId = 'Don\'t call this twice without a uniqueId'; }
    //     if (timers[uniqueId]) { clearTimeout (timers[uniqueId]); }
    //     timers[uniqueId] = setTimeout(callback, ms);
    //   };
    // })();
    // // how long to wait before deciding the resize has stopped, in ms. Around 50-100 should work ok.
    // var timeToWaitForLast = 100;

  //----------------------------------*\
  // Conditionally Load Content
  //----------------------------------*/
    /*
     * Here's an example so you can see how we're using the above function
     *
     * This is commented out so it won't work, but you can copy it and
     * remove the comments.
     *
     *
     *
     * If we want to only do it on a certain page, we can setup checks so we do it
     * as efficient as possible.
     *
     * if( typeof is_home === "undefined" ) var is_home = $('body').hasClass('home');
     *
     * This once checks to see if you're on the home page based on the body class
     * We can then use that check to perform actions on the home page only
     *
     * When the window is resized, we perform this function
     * $(window).resize(function () {
     *
     *    // if we're on the home page, we wait the set amount (in function above) then fire the function
     *    if( is_home ) { waitForFinalEvent( function() {
     *
     *      // if we're above or equal to 768 fire this off
     *      if( viewport.width >= 768 ) {
     *        console.log('On home page and window sized to 768 width or more.');
     *      } else {
     *        // otherwise, let's do this instead
     *        console.log('Not on home page, or window sized to less than 768.');
     *      }
     *
     *    }, timeToWaitForLast, "your-function-identifier-string"); }
     * });
     *
     * Pretty cool huh? You can create functions like this to conditionally load
     * content and other stuff dependent on the viewport.
     * Remember that mobile devices and javascript aren't the best of friends.
     * Keep it light and always make sure the larger viewports are doing the heavy lifting.
     *
    */

  //----------------------------------*\
  // Load Gravatars
  //----------------------------------*/
    /*
     * We're going to swap out the gravatars.
     * In the functions.php file, you can see we're not loading the gravatar
     * images on mobile to save bandwidth. Once we hit an acceptable viewport
     * then we can swap out those images since they are located in a data attribute.
    */
    // function loadGravatars() {
    //   // set the viewport using the function above
    //   viewport = updateViewportDimensions();
    //   // if the viewport is tablet or larger, we load in the gravatars
    //   if (viewport.width >= 768) {
    //   jQuery('.comment img[data-gravatar]').each(function(){
    //     jQuery(this).attr('src',jQuery(this).attr('data-gravatar'));
    //   });
    //   }
    // } // end function

  //----------------------------------*\
  // isMobile
  //----------------------------------*/
    // http://coveroverflow.com/a/11381730/989439
    // function isMobile() {
    //     var check = false;
    //     (function(a){
    //       if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))){
    //           check = true;
    //         }
    //       })(navigator.userAgent||navigator.vendor||window.opera);
    //     return check;
    // }

})(jQuery, window, document);
