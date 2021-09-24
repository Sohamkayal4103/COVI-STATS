console.log("Hello World!");
let dataset2=[];
let dataset1=[];
let dataset3=[];


async function getDummyData() {
    const apiUrl = "https://data.covid19india.org/data.json";
    const response = await fetch(apiUrl);
    const barChatData = await response.json();
    const arrdata=[barChatData];
    console.log(arrdata);
    let i=0,j=1;
    
    while(j<20){
        dataset1[j]=arrdata.map((x) => x.cases_time_series[i].dailyconfirmed);
        i=i+30;
        j++;
    }
    console.log(dataset1);
    i=0,j=1;
    
    while(j<20){
        dataset2[j]=arrdata.map((x) => x.cases_time_series[i].date);
        i=i+30;
        j++;
    }
    console.log(dataset2);
}

async function dummyChart() {
    await getDummyData();
  
    let ctx = document.getElementById("horizontalbar").getContext("2d");
  
    let chart = new Chart(ctx, {
      // The type of chart we want to create
      type: "line",
  
      // The data for our dataset
      data: {
        labels: dataset2,
        datasets: [
          {
            barPercentage: 1.0,
            fill:true,
            borderRadius: 3,
            tension: 0.5,
            label: "Daily Confirmed cases",
            backgroundColor: "#06FE08",
            borderColor: "rgb(255, 99, 132)",
            data: dataset1,
          },
          
        ],
      },
  
      // Configuration options go here
      options: {
        //   indexAxis:'y',  //for horizontal chart ye line imp he because in latest chartjs library there is no explicit chart for horizontalBar
        scales: {
          x: {
            grid: {
              display: true,
            },
          },
          y: {
            grid: {
              display: false,
            },
          },
        },
        cornerRadius: 5,
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }
  
  dummyChart();