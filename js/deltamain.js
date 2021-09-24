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
    let i=1;
    
    while(i<38){
        dataset1[i]=arrdata.map((x) => x.statewise[i].deltaconfirmed);
        i++;
    }
    console.log(dataset1);
    i=1;
    
    while(i<38){
        dataset2[i]=arrdata.map((x) => x.statewise[i].state);
        i++;
    }
    console.log(dataset2);
    i=1;
    
    while(i<38){
        dataset3[i]=arrdata.map((x) => x.statewise[i].deltadeaths);
        i++;
    }
    console.log(dataset3);
}

async function dummyChart() {
    await getDummyData();
  
    let ctx = document.getElementById("horizontalbar").getContext("2d");
  
    let chart = new Chart(ctx, {
      // The type of chart we want to create
      type: "bar",
  
      // The data for our dataset
      data: {
        labels: dataset2,
        datasets: [
          {
            barPercentage: 1.0,
            borderRadius: 3,
            tension: 0.5,
            label: "Total Confirmed Cases",
            backgroundColor: "#7978E9",
            borderColor: "rgb(255, 99, 132)",
            data: dataset1,
          },
          {
            barPercentage: 1.0,
            borderRadius: 5,
            tension: 0.5,
            label: "deaths",
            backgroundColor: "#FE0606",
            borderColor: "rgb(255, 99, 132)",
            data: dataset3,
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
