const ctx = document.getElementById('myChart');
Chart.defaults.backgroundColor = '#9BD0F5';
Chart.defaults.borderColor = '#36A2EB';
Chart.defaults.color = 'red';
const data ={
    labels:['Andrei', 'Vlad', 'Main'],
    datasets:[{
        label:'Progressive',
        data:[10, 9, 12],
        borderWidth:1
    }]

}
const config = {
    type: 'line',
    data: data,
    options: {
      animations: {
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 0,
          to: 1,
          loop: true
        }
      },
      scales: {
        y: { 
          min: 0,
          max: 20
        }
      }
    }
  };
new Chart(ctx, config);
