!function(){"use strict";const n=$("#content");fetch("https://jsonplaceholder.typicode.com/users").then((n=>n.json())).then((o=>{console.log(o),n.empty(),$('<h1>Blogs!!!!!!!</h1><div>\n            <ul id="users"> </ul></div>').appendTo(n);const s=$("#users");o.forEach((e=>{$(`<li><span>${e.name}. </span>\n                <span>${e.website}. </span>\n                 <span>${e.company.name}. </span>\n                  <span>${e.company.catchPhrase}.</span></li>`).appendTo(s).click((()=>{fetch(`https://jsonplaceholder.typicode.com/posts?userId=${e.id}`).then((n=>n.json())).then((s=>{console.log(s),n.empty(),$(' <div><span class="control" id="left">&lsaquo;</span><ul id="post"></ul></div> <span class="control" id="left">&lsaquo;</span>').appendTo(n);const e=$("#post");s.forEach((n=>{const s=$(`<li><span>${n.body} </span><br><span><button id="comments${n.id}">Show comments</button></span></li>`).appendTo(e);$(`#comments${n.id}`).click((()=>{fetch(`https://jsonplaceholder.typicode.com/comments?postId=${n.id}`).then((n=>n.json())).then((e=>{$(` <div><ul id="comments2${n.id}"></ul></div`).appendTo(s),console.log(o);const t=$(`#comments2${n.id}`);if(console.log($(`#comments2${n.id}`).html()),"Hide comments"===$(`#comments${n.id}`).html())return t.hide(),void $(`#comments${n.id}`).html("Show comments");t.show(),e.forEach((o=>{$(`<li><span>${o.name}. <span>${o.email}. <span>${o.body}.</span></li>`).appendTo(t),$(`#comments${n.id}`).html("Hide comments")}))}))}))}))}))}))}))}))}();
//# sourceMappingURL=main.js.map