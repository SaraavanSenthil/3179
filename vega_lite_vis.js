

var vg_0 = "number_of_medals_by_countries.vg.json";

vegaEmbed("#map", vg_0).then(function(result) {

}).catch(console.error);


var vg_1 = "total_medals_by_countries.vg.json";

vegaEmbed("#stacked_bar_chart", vg_1).then(function(result) {

}).catch(console.error);


var vg_2 = "average_age_by_countries_medals.vg.json";

vegaEmbed("#side_by_side_chart", vg_2).then(function(result) {

}).catch(console.error);


var vg_3 = "age_distribution.vg.json";

vegaEmbed("#boxplot", vg_3).then(function(result) {

}).catch(console.error);


var vg_4 = "top_performing_athletes.vg.json";

vegaEmbed("#horizontal_bar", vg_4).then(function(result) {

}).catch(console.error);


var vg_5 = "number_of_medals_by_country_gender.vg.json";

vegaEmbed("#diverging_bar", vg_5).then(function(result) {

}).catch(console.error);



var vg_6 = "age_medal_count.vg.json";

vegaEmbed("#scatterplot", vg_6).then(function(result) {

}).catch(console.error);

document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight -50,
                behavior: 'smooth'
            });
        });
    });
});