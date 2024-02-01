function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("show");
}

function loadVideo(videoUrl) {
    var videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.innerHTML = '<iframe width="560" height="315" src="' + videoUrl + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    
    // Close the dropdown after selecting a video
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.remove("show");
}

// Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var seriesList = document.getElementById('seriesList');
    var mainContent = document.querySelector('.main-content');

    // Array of series names
    var seriesNames = [
        'Series 1',
        'Series 2',
        'Series 3',
        'Series 4',
        'Series 5',
        'Series 6',
        'Series 7',
        'Series 8',
        'Series 9',
        'Series 100000'
    ];

    // Number of series
    var numberOfSeries = seriesNames.length;

    // Array of video URLs for each series
    var videoURLs = [
        [
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0',
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0',
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0',
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0',
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0',
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0',
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0',
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0',
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0'
        ],
        [
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0'
        ],
        [
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0',
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0'
        ],
        [
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0',
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0',
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0',
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0'
        ],
        [
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0',
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0',
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0',
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0',
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0'
        ],
        [
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0',
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0',
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0'
        ],
        [
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0',
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0',
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0'
        ],
        [
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0',
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0',
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0'
        ],
        [
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0',
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0',
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0'
        ],
        [
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0',
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0',
            'https://www.youtube.com/embed/6FWEgHPMssU?si=RvZm2eyKOu7CrHh0'
        ]
    ];

    for (var i = 0; i < numberOfSeries; i++) {
        // Add series to the sidebar
        var seriesItem = document.createElement('li');
        seriesItem.innerHTML = '<a href="#label' + (i + 1) + '">' + seriesNames[i] + '</a>';
        seriesList.appendChild(seriesItem);

        // Create a container for each series
        var seriesContainer = document.createElement('div');
        seriesContainer.className = 'series-container';
        seriesContainer.style.overflow = 'hidden'; 
        mainContent.appendChild(seriesContainer);

        // Add label to the series container
        var label = document.createElement('div');
        label.id = 'label' + (i + 1);
        label.className = 'label';
        label.innerHTML = seriesNames[i];
        seriesContainer.appendChild(label);

        // Add videos to the series container
        var currentSeriesVideos = videoURLs[i];
        var videosContainer = document.createElement('div');
        videosContainer.className = 'videos';
        seriesContainer.appendChild(videosContainer);

        for (var j = 0; j < currentSeriesVideos.length; j++) {
            var videoItem = document.createElement('div');
            videoItem.className = 'video-item';
            videoItem.innerHTML = '<h2>Video ' + (j + 1) + '</h2>' +
                '<iframe width="300" height="169" src="' + currentSeriesVideos[j] + '" ' +
                'title="YouTube video player" frameborder="0" ' +
                'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
            videosContainer.appendChild(videoItem);
        }
    }
});