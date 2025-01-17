const ctx = document.getElementById('myChart');
ctx.width = 500
ctx.heigth = 500
new Chart(ctx, {
    type:'bar',
    data:{
        labels:['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets:[{
            label:'# of Votes',
            data:[12,1,3,5,2,3],
            borderWidth:1
        }]
    },
    options:{
        scale:{
            y:{
                beginAtZero:true
            }
        }
    }
});
