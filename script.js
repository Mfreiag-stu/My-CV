function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

function popupshow(element) {
    $( "#popUp" ).show(); 
    setTimeout(function() {
        $( "#popUp" ).hide();
    }, 1500);
}