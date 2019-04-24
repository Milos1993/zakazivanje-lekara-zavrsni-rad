function makeReservation() {
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "https://formspree.io/djordjevicmilos993@gmail.com");

    document.body.appendChild(form);
    form.submit();
    alert("aaa");
}