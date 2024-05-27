$(document).ready(function() {
    const options = {
        events: [
            {
                date: new Date("2024-04-05"),
                eventName: "Spring Wildflower Walk",
                dateColor: "orange",
            },
            {
                date: new Date("2024-04-12"),
                eventName: "Trail Maintenance Day",
                dateColor: "green",
            },
            {
                date: new Date("2024-04-22"),
                eventName: "Earth Day Cleanup Hike",
                dateColor: "blue",
            },
            {
                date: new Date("2024-05-03"),
                eventName: "Bird Watching Expedition",
                dateColor: "red",
            },
            {
                date: new Date("2024-05-11"),
                eventName: "Sunset Photography Hike",
                dateColor: "purple",
            },
            {
                date: new Date("2024-05-21"),
                eventName: "Family Nature Scavenger Hunt",
                dateColor: "yellow",
            },
            {
                date: new Date("2024-05-29"),
                eventName: "Memorial Day Weekend Camping Trip",
                dateColor: "pink",
            },
            {
                date: new Date("2024-06-05"),
                eventName: "National Trails Day Celebration",
                dateColor: "orange",
            },
            {
                date: new Date("2024-06-11"),
                eventName: "Fathers Day Hike and Picnic",
                dateColor: "green",
            },
            {
                date: new Date("2024-06-18"),
                eventName: "Summer Solstice Sunrise Hike",
                dateColor: "blue",
            },
            {
                date: new Date("2024-06-24"),
                eventName: "Waterfall Exploration Trek",
                dateColor: "red",
            },
            {
                date: new Date("2024-07-02"),
                eventName: "Independence Day Fireworks View Hike",
                dateColor: "purple",
            },
            {
                date: new Date("2024-07-09"),
                eventName: "Beginner's Backpacking Trip",
                dateColor: "yellow",
            },
            {
                date: new Date("2024-07-16"),
                eventName: "Midsummer Night Stargazing Hike",
                dateColor: "pink",
            },
            {
                date: new Date("2024-07-22"),
                eventName: "Trail Running Challenge",
                dateColor: "orange",
            },
            {
                date: new Date("2024-07-28"),
                eventName: "Moonlit Campfire Stories",
                dateColor: "green",
            },
            {
                date: new Date("2024-08-03"),
                eventName: "Full Moon Night Hike",
                dateColor: "blue",
            },
            {
                date: new Date("2024-08-11"),
                eventName: "Wildlife Tracking Adventure",
                dateColor: "red",
            },
            {
                date: new Date("2024-08-17"),
                eventName: "Mountain Yoga Retreat",
                dateColor: "purple",
            },
            {
                date: new Date("2024-08-25"),
                eventName: "Sunflower Fields Photography Walk",
                dateColor: "yellow",
            }
        ]};

    $("#calendar").calendarGC(options);
});

document.addEventListener("DOMContentLoaded", function() {
    const clubTitle = document.querySelector(".club-title");
    clubTitle.addEventListener("click", function() {
        window.location.href = "index.html";
    });
});