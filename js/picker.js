
console.clear();
if(window.location['href'].indexOf('https://tiktok.com/' === -1)){
    var img = document.createElement("div");
    img.innerHTML = "<p>Image</p>";
    img.style.cssText = "z-index: 999999; width: 50px; height:50px; position: fixed; float: left; top: 0em; left: 1em; background-color: white; padding-top: 13px;cursor:pointer;text-align:center"
    img.addEventListener("click", function () {
        let elements = [];
        elements = getAllElementsWithAttribute('img','decoding')
        if(window.location['href'].indexOf('/p/') > 0){
            elements = [];
            el = document.getElementsByClassName('FFVAD');
            elements = el;
        }
        for (element of elements) {
            if(element.clientHeight > 500 || element.clientWidth > 500){
                window.open(element['src'], '_blank');
            }
        }
    })
    document.body.appendChild(img);

    var video = document.createElement("div");
    video.innerHTML = "<p>Video</p>";
    video.style.cssText = "z-index: 999999; width: 50px; height:50px; position: fixed; float: left; top: 0em; left: 5em; background-color: white; padding-top: 13px;cursor:pointer;text-align:center"
    video.addEventListener("click", function () {
        let el = [];
        if(window.location['href'].indexOf('stories') === -1){
            el = getAllElementsWithAttribute('video');
        }else{
            let elo = getAllElementsWithAttribute('source');
            el.push(elo[0]);
        }

        for (element of el){
            window.open(element['src'], '_blank');
        }
    })
    document.body.appendChild(video);
}/* else {
    var videoTikTok = document.createElement("div");
    videoTikTok.innerHTML = "<p>Video</p>";
    videoTikTok.style.cssText = "z-index: 999999; width: 50px; height:50px; position: fixed; float: left; top: 5em; left: 1em; background-color: white; padding-top: 13px;cursor:pointer;text-align:center"
    videoTikTok.addEventListener("click", function () {
        let el = [];
        let elo = getAllElementsWithAttribute('video', 'loop');
        el.push(elo[0]);

        for (element of el){
            window.open(element['src'], '_blank');
        }
    })
    document.body.appendChild(videoTikTok);



    var imgTikTok = document.createElement("div");
    imgTikTok.innerHTML = "<p>Image</p>";
    imgTikTok.style.cssText = "z-index: 999999; width: 50px; height:50px; position: fixed; float: left; top: 10em; left: 1em; background-color: white; padding-top: 13px;cursor:pointer;text-align:center"
    imgTikTok.addEventListener("click", function () {
        let elements = [];
        el = document.getElementsByClassName('background-image');
        elements = el;
        console.log(elements);
        for (element of elements) {
            window.open(element['firstChild']['src'], '_blank');
        }
    })
    document.body.appendChild(imgTikTok);
}*/



function getAllElementsWithAttribute(tagname, attribute)
{
    var matchingElements = [];
    var allElements = document.getElementsByTagName(tagname);
    if (attribute) {
        for (var i = 0, n = allElements.length; i < n; i++)
        {
            if (allElements[i].getAttribute(attribute) !== null)
            {
                // Element exists with attribute. Add to array.
                matchingElements.push(allElements[i]);
            }
        }
        return matchingElements;
    }
    return allElements;
}

