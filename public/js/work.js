data = {
    "work-01": {
        "name": "Project 01",
        "desc": "Curabitur at velit at nunc suscipit auctor. Suspendisse ut tincidunt mi. Morbi vitae egestas elit. Morbi viverra ligula nisl, ac congue risus imperdiet id. Proin venenatis lectus eu felis viverra, quis efficitur nulla placerat. Sed in commodo ipsum.",
        "images": [
            "/img/cat.jpg",
            "/img/cat.jpg"
        ]
    }
}

$(document).ready(function() {
    // Work item click -> show detail
    $('.work-grid-item').click((event) => {
        // var id = event.target.parentNode.id;
        var id = 'work-01';
        var curData = data[id];

        $('#work-detail').addClass('active');
        $('#work-detail .cover img').attr('src', event.target.src);

        $('#work-detail .name').html(curData['name']);
        $('#work-detail .desc').html(curData['desc']);
        
        $('#work-detail .images').html('');
        for (var i = 0; i < curData["images"].length; i++) {
            $('#work-detail .images').append(
                '<img src=' + curData['images'][i] + '>'
            );
        }
    });

    $('#work-detail .close-button').click((event) => {
        $('#work-detail').removeClass('active');
    });
});