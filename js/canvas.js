
"use strict";

(function () {
        // function draw() {
        //     var canvas = document.getElementById("canvas");
        //     var context = canvas.getContext("2d");
        //     context.beginPath();
        //     context.moveTo(300, 100);
        //     context.lineTo(100, 300);
        //     context.stroke();
        // }

        // if (window.addEventListener)
        //     window.addEventListener("load", draw, true);

        function createBarChart(canvas, data, width, height, color) {

            canvas = document.getElementById(canvas);
            canvas.width = width;
            canvas.height = height;
            var context = canvas.getContext("2d");

            var max = Number.NEGATIVE_INFINITY;
            for (var i = 0; i < data.length; i++) {
                if (max < data[i]) max = data[i];
            }

            var scale = height / max;
            var barWidth = Math.floor(width / data.length);

            for (var i = 0; i < data.length; i++) {
               
                var barHeight = data[i] * scale,
                    x = barWidth * i,
                    y = height - barHeight;

                context.fillStyle = color;
                context.fillRect(x, y, barWidth - 2, barHeight);
            }
        }
        createBarChart('canvas', [10, 20, 30, 10, 40, 60,20], 800, 600, 'coral');


})();
