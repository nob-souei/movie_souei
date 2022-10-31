//fedein
$(function () {
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});

//モーダル
$(".movie1").modalVideo({
  channel: "custom",
  url: "movie/color rating.mp4",
});
$(".movie2").modalVideo({
  channel: "custom",
  url: "movie/color rating.mp4",
});
$(".movie3").modalVideo({
  channel: "custom",
  url: "movie/color rating.mp4",
});
