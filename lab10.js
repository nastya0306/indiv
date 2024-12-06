$(document).ready(function () {
    $(".card").on("click", function () {
        $(".card").removeClass("selected");
        $(this).addClass("selected");
    });
});
