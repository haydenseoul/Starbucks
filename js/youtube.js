
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// onYouTubeIframeAPIReady 함수 이름은, 그대로 써야 하고 아님 동작 안함
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
    // <div id="player"></div>
    new YT.Player('player', {
        videoId: 'An6LvWQuj_8',
        playerVars: {
            autoplay:true, //자동 재생 유무
            loop: true, //반복 재생 유뮤
            playlist: 'An6LvWQuj_8' //반복 재생할 유투브 영상 ID 목록
        },
        events: {
        //영상이 준비되었을때, 
        'onReady': function (event){
            event.target.mute() //음소거!
        }}
    });
}
