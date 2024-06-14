    function ImageToPrint(source)
    {
        return "<html><head><scri"+"pt>function step1(){\n" +
                "setTimeout('step2()', 10);}\n" +
                "function step2(){window.print();window.close()}\n" +
                "</scri" + "pt></head><body onload='step1()'>\n" +
                "<img src='" + source + "' /></body></html>";
    }

    function printImage(source)
    {
        var Pagelink = "about:blank";
        var pwa = window.open(Pagelink, "_new");
        pwa.document.open();
        pwa.document.write(ImageToPrint(source));
        pwa.document.close();
    }

    function toggleNumbers() {
        var img = document.getElementById('art1').src;
        if (img.indexOf('pretty-puzzle-twilight.png')!=-1) {
            document.getElementById('art1').src  = '/assets/art-page/pretty-puzzle-twilight_solved.png';
        }
         else {
           document.getElementById('art1').src = '/assets/art-page/pretty-puzzle-twilight.png';
       }

        var img = document.getElementById('art2').src;
        if (img.indexOf('pretty-puzzle-Spectral.png')!=-1) {
            document.getElementById('art2').src  = '/assets/art-page/pretty-puzzle-Spectral_solved.png';
        }
         else {
           document.getElementById('art2').src = '/assets/art-page/pretty-puzzle-Spectral.png';
       }

        var img = document.getElementById('art3').src;
        if (img.indexOf('pretty-puzzle-plasma.png')!=-1) {
            document.getElementById('art3').src  = '/assets/art-page/pretty-puzzle-plasma_solved.png';
        }
         else {
           document.getElementById('art3').src = '/assets/art-page/pretty-puzzle-plasma.png';
       }



    }
