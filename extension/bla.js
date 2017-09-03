var playlists = $(".playlists");

var cid = playlists.attr('cid');
var course = $(".course_header")[1];
var courseID = $(course).attr('href').replace("/course/view.php?id=", "");
var mid = "XAOe";

playlists.children().each(function (index, value) {
    var video = $(this).children();

    var playlistid = $(this).attr('id').replace("playlist", "");

    video.each(function (video_index, video_value) {
        var block = $(video_value);

        var element = $("<button></button>").text("הורד סרטון").attr('class', 'getvideo').attr('cid', cid).attr('playlistid', playlistid).attr('courseID', courseID).attr('mid', mid);

        var link = block.find("div.ovc_descr_short");
        link.append(element);
    });
});

$(".getvideo").click(function () {
    var url = "http://opal.openu.ac.il/mod/ouilvideocollection/actions.php";
    var action = "getplaylist";
    var context = $(this).attr('cid');
    var playlistid = $(this).attr('playlistid');
    var courseID = $(this).attr('courseID');
    var mid = $(this).attr('mid');

    jQuery.ajax({
        type: "POST",
        url: url,
        data: {action: action, context: context, playlistid: playlistid, course: courseID, mid: mid},
        success: function (data) {
            var obj = jQuery.parseJSON(data);
            var cdnid = obj.cdnid;

            var getURL = "http://opal.openu.ac.il/local/ouil_video/player.php?mediaid=" + cdnid + "&ie9=2"
            $.get(getURL, function (data) {
                var info = $(data.html)[2];
                var href = $(info).find("source").attr('src');
                window.location.href = href;
            });
        }
    });
});
