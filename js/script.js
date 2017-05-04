
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var street = $('#street').val();
    var city = $('#city').val();
    var url_for_image = "http://maps.googleapis.com/maps/api/streetview?size=600x300&location=" + street + "," + city;
    $body.append('<img src="' + url_for_image + '"class="bgimg">');
    // YOUR CODE GOES HERE!
    var ny_url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    ny_url += '?' + $.param({
        'api-key' : "8bab2b2e1cea4d7893a2284117356ba2",
        'q' : street + ',' + city
    });
    // $.ajax({
    //     url : ny_url,
    //     method : 'GET',
    // }).done(function(result){
    //     // console.log(result.response.docs[0].headline.main);
    //     // console.log(result.response.docs[0].web_url);
    //     // console.log(result.response.docs[0].snippet);
    //     var ny_articles = '' ;
    //     for (var i = 0; i < result.response.docs.length; i++) {
    //         ny_articles += '<a href="' + result.response.docs[i].web_url + '">' + result.response.docs[i].headline.main + '</a>'
    //         ny_articles += '<p>' + result.response.docs[i].snippet + '</p>'
    //         // console.log(result.response.docs[i].headline.main);
    //         // console.log(result.response.docs[i].web_url);
    //         // console.log(result.response.docs[i].snippet);
    //     }
    //     $('.nytimes-container').append(ny_articles);
    // }).fail(function(){
    //     console.log('Error occured while fetching ny times article.');
    // })
    $.getJSON(ny_url, function(result){
        // console.log(result);
        var ny_articles = '' ;
    for (var i = 0; i < result.response.docs.length; i++) {
        ny_articles += '<a href="' + result.response.docs[i].web_url + '">' + result.response.docs[i].headline.main + '</a>'
        ny_articles += '<p>' + result.response.docs[i].snippet + '</p>'
        // console.log(result.response.docs[i].headline.main);
        // console.log(result.response.docs[i].web_url);
        // console.log(result.response.docs[i].snippet);
        }
        $('.nytimes-container').append(ny_articles);
    })
    return false;
};

$('#form-container').submit(loadData);
