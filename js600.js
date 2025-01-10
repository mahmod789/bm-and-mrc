document.addEventListener('DOMContentLoaded', function() {
    const headerHeight = document.querySelector('header').offsetHeight;

    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = targetPosition - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
});
function openNewWindow() {
    var newWindow = window.open("", "_blank");
    newWindow.document.write("<html><head><title>Motorres</title>");
    newWindow.document.write("<style>");
    newWindow.document.write("body {");
    newWindow.document.write("font-family: Arial, sans-serif;");
    newWindow.document.write("margin: 0;");
    newWindow.document.write("padding: 0;");
    newWindow.document.write("background-image: url('d:/Practical/image/2023-BMW-S1000RR-in-Red-wallpaper.jpg');");
    newWindow.document.write("background-size: cover;");
    newWindow.document.write("background-repeat: no-repeat;");
    newWindow.document.write("background-attachment: fixed;");
    newWindow.document.write("text-align: center;");
    newWindow.document.write("}");
    newWindow.document.write("header {");
    newWindow.document.write("backdrop-filter: blur(10px);");
    newWindow.document.write("top: 0;");
    newWindow.document.write("left: 0;");
    newWindow.document.write("");
    newWindow.document.write("color: #204b79;");
    newWindow.document.write("padding: 3px 5%;");
    newWindow.document.write("text-align: center;");
    newWindow.document.write("}");
    newWindow.document.write("video {");
    newWindow.document.write("width: 100%;");
    newWindow.document.write("height: auto;");
    newWindow.document.write("}");
    newWindow.document.write("h1 {");
    newWindow.document.write("font-size: 36px;");
    newWindow.document.write("margin-bottom: 10px;");
    newWindow.document.write("}");
    newWindow.document.write(".container7 {");
    newWindow.document.write("max-width: 1250px;");
    newWindow.document.write("backdrop-filter: blur(5px);");
    newWindow.document.write("color: white;");
    newWindow.document.write("margin: 20px auto;");
    newWindow.document.write("padding: 20px;");
    newWindow.document.write("}");
    newWindow.document.write(".container8 {");
    newWindow.document.write("max-width: 1250px;");
    newWindow.document.write("backdrop-filter: blur(5px);");
    newWindow.document.write("color: white;");
    newWindow.document.write("margin: 20px auto;");
    newWindow.document.write("padding: 20px;");
    newWindow.document.write("}");
    newWindow.document.write(".gallery {");
    newWindow.document.write("display: flex;");
    newWindow.document.write("flex-wrap: wrap;");
    newWindow.document.write("justify-content: space-around;");
    newWindow.document.write("}");
    newWindow.document.write(".gallery img {");
    newWindow.document.write("width: 30%;");
    newWindow.document.write("margin-bottom: 20px;");
    newWindow.document.write("}");
    newWindow.document.write("img {");
    newWindow.document.write("max-width: 100%;");
    newWindow.document.write("height: auto;");
    newWindow.document.write("backdrop-filter: blur(5px);");
    newWindow.document.write("display: block;");
    newWindow.document.write("margin: 20px auto;");
    newWindow.document.write("border-radius: 8px;");
    newWindow.document.write("box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);");
    newWindow.document.write("}");
    newWindow.document.write(".section-title {");
    newWindow.document.write("font-size: 30px;");
    newWindow.document.write("position: relative;");
    newWindow.document.write("background-color: #9ea8e2;");
    newWindow.document.write("text-align: center;");
    newWindow.document.write("margin-bottom: 10px;");
    newWindow.document.write("color: #204b79;");
    newWindow.document.write("text-transform: uppercase;");
    newWindow.document.write("border-radius: 8px;");
    newWindow.document.write("padding-bottom: 10px;");
    newWindow.document.write("}");
    newWindow.document.write(".section-content {");
    newWindow.document.write("font-size: 20px;");
    newWindow.document.write("}");
    newWindow.document.write("</style>");
    newWindow.document.write("</head><body>");
    newWindow.document.write("<header><h1>BMW In Motorres</h1></header>");
    newWindow.document.write("<div class='container7'>");
    newWindow.document.write("<h2 class='section-title'>Example is BMW r1000</h2>");
    newWindow.document.write("<p class='section-content'>The 2023 BMW S 1000 R is a high-performance BMW roadster at the top of their 2023 model lineup and is designed for riders who seek speed and agility. It is equipped with a powerful 999cc engine that delivers 165 horsepower and 84 lb-ft of torque, paired with a six-speed transmission and quickshifter for smooth gear changes.</p>");
    newWindow.document.write("<video controls>");
    newWindow.document.write('<source src="d:/Practical/image/Video/The new BMW S 1000 RR.mp4" type="video/mp4">');
    newWindow.document.write("</video>    ");
    newWindow.document.write("</div>");
    newWindow.document.write("<div class='container8'>");
    newWindow.document.write("<h1 class='section-title'>Example is BMW F 900 GS</h1>");
    newWindow.document.write("<p class='section-content'>This is where it begins. Your next adventure that takes you where hardly anyone else goes. Anyone except for you and your GS. Over stones and gravel, through wind and water, into deep ditches and over the highest hills. Joy in your heart, sand in your teeth, adrenaline in your blood – fully in your element and in the #SpiritOfGS flow. We built the F 900 GS for precisely such experiences. The engine, the body – we have optimized everything to achieve a bike with maximum power but at a light weight. And here it is: your Enduro.</p>");
    newWindow.document.write('<section id="gallery">');
    newWindow.document.write('<h2>Photos</h2>');
    newWindow.document.write('<div class="gallery">');
    newWindow.document.write('<img src="d:/Practical/image/BMW-F900-GS-2024-2.jpg" alt="BMW Gallery Image 1">');
    newWindow.document.write('<img src="d:/Practical/image/bmw-r1200gs-2017-209.jpg">');
    newWindow.document.write('<img src="d:/Practical/image/OIP (1).jpeg" alt="BMW Gallery Image 3">');
    newWindow.document.write('<img src="d:/Practical/image/R (2)2.jpeg" alt="BMW Gallery Image 4">');
    newWindow.document.write('<img src="d:/Practical/image/BMW-Motorrad-Concept-R18-02-1.jpg" alt="BMW Gallery Image 5">');
    newWindow.document.write('</div>');
    newWindow.document.write('</section>');
    newWindow.document.write("</div>");
    newWindow.document.write("</body></html>");
    }