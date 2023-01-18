document.onclick= function(event) {
    // Compensate for IE<9's non-standard event model
    //
    if (event===undefined) event= window.event;
    var target= 'target' in event? event.target : event.srcElement;

    alert('clicked on '+target.className);
};