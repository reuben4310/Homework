$("#commentButton").on('click', function (e) {
    var buttonNo = $(this).attr('id');
    const postId = $(e.target).closest('.post').attr("id");
    console.log(postId);
});
