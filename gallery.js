document.addEventListener("DOMContentLoaded", function() {
    const clubTitle = document.querySelector(".club-title");
    clubTitle.addEventListener("click", function() {
        window.location.href = "index.html";
    });
});

lightGallery(document.getElementById('gallery-videojs-demo'), {
    plugins: [lgVideo],
    videojs: true,
    videojsOptions: {
        muted: true,
    },
    thumbnail: true,
    animateThumb: false,
    zoomFromOrigin: false,
    allowMediaOverlap: true,
    toggleThumb: true,
});

document.addEventListener("DOMContentLoaded", function () {
    const API_KEY = 'AIzaSyDiFHR0ioz0khJzBzppziDnyUUmjYnYdp4'; // Replace with your YouTube API key
    const PLAYLIST_ID = 'PL7I-IcMsTVYL9jeUj60M6TRDY2j6zFQ28'; // Replace with your YouTube playlist ID
    const NUM_VIDEOS = 100; // Number of videos to fetch

    // Fetch latest videos from YouTube playlist
    $.ajax({
        url: `https://www.googleapis.com/youtube/v3/playlistItems`,
        type: 'GET',
        data: {
            part: 'snippet',
            maxResults: NUM_VIDEOS,
            playlistId: PLAYLIST_ID,
            key: API_KEY
        },
        success: function (data) {
            updateGalleryWithVideos(data.items);
        },
        error: function (error) {
            console.error('Failed to fetch videos from YouTube:', error);
        }
    });

    // Function to update gallery with videos
    function updateGalleryWithVideos(videos) {
        const gallery = $('#gallery-videojs-demo');
        
        // Add YouTube videos to the gallery
        videos.forEach(video => {
            const videoId = video.snippet.resourceId.videoId;
            const thumbnail = video.snippet.thumbnails.high.url;
            const videoTitle = video.snippet.title;

            const videoItem = `
                <a
                    data-lg-size="1280-720"
                    data-src="https://www.youtube.com/watch?v=${videoId}&mute=0"
                    data-poster="${thumbnail}"
                    class="gallery-item"
                >
                    <img src="${thumbnail}" alt="${videoTitle}" />
                    <div class="play-button"></div>
                </a>
            `;

            gallery.append(videoItem);
        });

        // Add custom images to the gallery
        const images = [
            'assets/images/bg1.jpg',
            'assets/images/bg2.jpg',
            'assets/images/bg3.jpg'
        ];
        
        images.forEach(image => {
            const imageItem = `
                <a class="gallery-item" href="${image}">
                    <img src="${image}" />
                </a>
            `;

            gallery.append(imageItem);
        });

        // Initialize lightGallery after dynamically adding the video items and images
        lightGallery(document.getElementById('gallery-videojs-demo'), {
            plugins: [lgVideo, lgThumbnail],
            speed: 500,
        });
    }
});