$(function () {

    // Header Section 
    $('header').waypoint(function () {
        var tl = anime.timeline({
            easing: 'linear'
        });

        tl
            .add({
                targets: ['header h1', 'header h3'],
                translateY: ['-400', '0'],
                duration: 600,
                scale: ['2', '1'],
                opacity: ['0', '1']
            });
        tl
            .add({
                targets: 'header nav',
                opacity: ['0', '1'],
                duration: 1000

            });
        tl
            .add({
                targets: 'header hr',
                scale: ['2', '1'],
                opacity: ['0', '1'],
                duration: 800
            });
    });

    // Blog Section 
    $('#blog').waypoint(function () {
        var tl = anime.timeline({
            easing: 'linear',
            duration: 800
        });

        tl
            .add({
                targets: '#blog h3',
                scale: ['4', '1'],
                opacity: ['0', '1']
            });
        tl
            .add({
                targets: '#blog hr',
                scale: ['2', '1'],
                opacity: ['0', '1']
            }, 200);
        tl
            .add({
                targets: '#blog .owl-stage-outer',
                opacity: ['0', '1']
            }, 200);
        tl
            .add({
                targets: '#blog .owl-dots',
                scale: ['2', '1'],
                opacity: ['0', '1'],
                delay:300
            }, 400);
    }, {
        offset: 550
    });


    // About Section 
    $('#about').waypoint(function () {
        var tl = anime.timeline({
            easing: 'linear',
            duration: 400
        });

        tl
            .add({
                targets: ['#about img','#about h3'],
                scale: ['2', '1'],
                opacity: ['0', '1']
            });
        tl
            .add({
                targets: '#about hr',
                scale: ['2', '1'],
                opacity: ['0', '1'],
                delay:400
            }, 400);
        tl
            .add({
                targets: '#about p',
                scale: ['2', '1'],
                opacity: ['0', '1'],
                delay:400
            }, 600);
    }, {
        offset: 550
    });

    // Subscribe Section 
    $('#subscribe').waypoint(function () {
        var tl = anime.timeline({
            easing: 'linear',
            duration: 400
        });

        tl
            .add({
                targets: ['#subscribe h3','#subscribe h4'],
                scale: ['2', '1'],
                opacity: ['0', '1']
            });
        tl
            .add({
                targets: '#subscribe input:not(.btn)',
                scale: ['2', '1'],
                opacity: ['0', '1']
            }, 200);
        tl
            .add({
                targets: '#subscribe .btn',
                scale: ['2', '1'],
                opacity: ['0', '1']
            }, 400);
    }, {
        offset: 550
    });

    // Footer Section 
    $('footer').waypoint(function () {
        var tl = anime.timeline({
            easing: 'linear',
            duration: 400
        });

        tl
            .add({
                targets: 'footer .col:nth-of-type(1)',
                scale: ['2', '1'],
                opacity: ['0', '1']
            });
        tl
            .add({
                targets: 'footer .col:nth-of-type(2)',
                scale: ['2', '1'],
                opacity: ['0', '1']
            }, 200);
        tl
            .add({
                targets: 'footer .col:nth-of-type(3)',
                scale: ['2', '1'],
                opacity: ['0', '1']
            }, 200);
    }, {
        offset: 600
    });

});