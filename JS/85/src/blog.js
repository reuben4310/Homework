
/*global $*/

(function () {
    'use strict';
    const content = $('#content');


    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            console.log(users);
            content.empty();
            $(`<h1>Blogs!!!!!!!</h1><div>
            <ul id="users"> </ul></div>`).appendTo(content);
            const usersList = $('#users');
            users.forEach(user => {
                $(`<li><span>${user.name}. </span>
                <span>${user.website}. </span>
                 <span>${user.company.name}. </span>
                  <span>${user.company.catchPhrase}.</span></li>`)
                    .appendTo(usersList).click(() => {

                        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
                            .then(response => response.json())
                            .then(posts => {
                                console.log(posts);
                                content.empty();
                                $(` <div><span class="control" id="left">&lsaquo;</span><ul id="post"></ul></div> <span class="control" id="left">&lsaquo;</span>`).appendTo(content);
                                const postList = $('#post');

                                posts.forEach(post => {


                                    const com = $(`<li><span>${post.body} </span><br><span><button id="comments${post.id}">Show comments</button></span></li>`)
                                        .appendTo(postList);
                                    $(`#comments${post.id}`).click(() => {

                                        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
                                            .then(response => response.json())
                                            .then(comments => {
                                                $(` <div><ul id="comments2${post.id}"></ul></div`).appendTo(com);
                                                console.log(users);
                                                const commentList = $(`#comments2${post.id}`);



                                                console.log($(`#comments2${post.id}`).html());
                                                if ($(`#comments${post.id}`).html() === "Hide comments") {
                                                    commentList.hide();
                                                    $(`#comments${post.id}`).html("Show comments");


                                                    return;
                                                }

                                                commentList.show();
                                                comments.forEach(comment => {

                                                    $(`<li><span>${comment.name}. <span>${comment.email}. <span>${comment.body}.</span></li>`)
                                                        .appendTo(commentList);
                                                    $(`#comments${post.id}`).html("Hide comments");
                                                    // $(`<li><span>${comment.name}. <span>${comment.email}. <span>${comment.body}.</span></li>`).appendTo()

                                                    // $(`#comments${post.id}`).html("Hide comments");

                                                });
                                            });
                                    });
                                });

                            });
                    });
            });
        });
}());