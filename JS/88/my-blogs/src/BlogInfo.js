export default function createBlogEntry(info){
return (<div class="blog">
            <div class="title">${info.name}</div>
            <div class="website">${info.website}</div>
            <div class="company">
              <div>${info.company.name}</div>
              <div>${info.company.catchPhrase}</div>
              <div>${info.company.bs}</div>
            </div>
          </div>)}