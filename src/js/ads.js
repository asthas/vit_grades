
// Ads
// let eventsInCodePark = '';
// axios.get('https://www.codepark.in/events')
//   .then(function (response) {
//     // handle success
//     eventsInCodePark = response.data.eventData;
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
let getAds = ()=>{ //typeOfAd
    let ads = [
        {
            type : `g`,
            body : `Check coronavirus updates`,
            link : `https://corona-go.info/`,
            linkText : `Check Now`
        },
        {
            type : `e`,
            body : `Stay Home, Save Lives!`,
            link : `https://corona-go.info/`,
            linkText : `View Now`
        },
        {
            type : `tw`,
            body : `Stay Indoor, Play Color Game`,
            link : `http://color-tile.rajchandra.me`,
            linkText : `Play Now`
        },
        {
            type : `tf`,
            body : `I challenge you to win 5 games in a row, can you?`,
            link : `http://color-tile.rajchandra.me`,
            linkText : `Challenge Accepted?`
        },
        {
            type : `ts`,
            body : `Aren't you bored yet? Huh, I am, I play color tile do you?`,
            link : `http://color-tile.rajchandra.me`,
            linkText : `Play Color Tile`
        },
        {
            type : `i`,
            body : `Checking my cgpa all the time is no fun, you know what is fun, THE COLOR GAME`,
            link : `http://color-tile.rajchandra.me`,
            linkText : `Let's play`
        }
    ]

    let AdNumber = Math.floor(Math.random()*(ads.length));
    ad = ads[AdNumber];
    let templates = [
            `<div class="custom-ads" style="
                margin : 15px;
                border-radius : 5px;
                border : 0.5px solid #007bff;
                padding : 8px 8px 8px 8px;
                text-align : center;">
                <p style="
                    font-size : 10;
                    font-style: monospace;
                    font-weight : normal;">${ad.body}</p>
                    <a
                        class="btn btn-success btn-lg badge-pill badge-success"
                        href="${ad.link}"
                        target="_blank"
                        role="button">
                        ${ad.linkText}
                    </a>
            </div>`
    ]
    let templateNumber = Math.floor(Math.random()*(templates.length));
    return templates[templateNumber];
}