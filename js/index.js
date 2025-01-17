const ctx = document.getElementById('myChart');
Chart.defaults.backgroundColor = 'lightgreen';
Chart.defaults.borderColor = 'pink';
Chart.defaults.color = 'red';
const data ={
    labels:['Andrei', 'Vlad', 'Main', 'Some', 'Jeka', 'Illya', 'Nadya'],
    datasets:[{
        label:'Progressive',
        data:[25,26, 30, 15, 12, 6, 17 ],
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
          to: 0.5,
          loop: true
        }
      },
      scales: {
        y: { 
          min: 0,
          max: 40
        }
      }
    }
  };
new Chart(ctx, config);
