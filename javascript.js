window.onload = function() {
    var x = document.getElementById("event-hide");

    x.onclick = function() {
        var y = document.getElementById("code").value;
        var z=document.getElementById("Output");
        z.innerHTML=y;
        var hidefield = document.getElementById("data");
        hidefield.style.display="none";
        var showfield =document.getElementById("show");
        showfield.style.display="block";
        var r_btn = document.getElementById("event-hide");
        r_btn.style.display="none"
        var b_btn = document.getElementById("event-show");
        b_btn.style.display="block"
    };
      var p = document.getElementById("event-show");

    p.onclick = function() {
      
        var hidefield = document.getElementById("data");
        hidefield.style.display="block";
        hidefield.setAttribute("class","animate__animated animate__backInLeft")
        var showfield =document.getElementById("show");
        showfield.style.display="none";
         showfield.setAttribute("class","animate__animated animate__backInRight")
        var r_btn = document.getElementById("event-hide");
        r_btn.style.display="block"
        var b_btn = document.getElementById("event-show");
        b_btn.style.display="none"
    };
};
