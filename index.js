var lineChartData = {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"],
    datasets: [{
        fillColor: "rgba(220,220,220,0)",
        strokeColor: "rgba(220,180,0,1)",
        pointColor: "rgba(220,180,0,1)",
        data: [200, 300, 150, 120, 400, 100, 300]
    
    }]

}



var ctx = document.getElementById("canvas").getContext("2d");
var LineChartDemo = new Chart(ctx).Line(lineChartData, {
    pointDotRadius: 5,
    bezierCurve: false,
    scaleShowVerticalLines: false,
    scaleGridLineColor: "black"
});