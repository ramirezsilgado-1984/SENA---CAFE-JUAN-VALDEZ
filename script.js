function scrollToSection(id){
 document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

new Chart(document.getElementById("consumoChart"), {
 type: 'bar',
 data: { labels: ["Mañana","Tarde","Noche"], datasets:[{ data:[100,60,30]}]}
});

new Chart(document.getElementById("estratoChart"), {
 type: 'pie',
 data: { labels: ["1-2","3-4","5-6"], datasets:[{ data:[20,50,30]}]}
});
