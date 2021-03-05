document.getElementsByClassName(".circle").addEventListener("hover", gover);
(".circle").on("hover", function() {
    d3.select(this).remove();
}