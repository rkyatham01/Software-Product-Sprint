// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

async function loadingContentOfUserInput() {
    const serverResponse  = await fetch('/hello');
    const textDisplayed = await serverResponse.json();
    const returnedString = textDisplayed[Math.floor(Math.random() * textDisplayed.length)];
    const inputtedUserInfo = document.getElementById('element-container');
    inputtedUserInfo.innerText = returnedString;
  }
  //Creating the pieChart Element here
  const pieChart = {
      chart: null,
      data: [
          ['Stock', 'Prices'], //The schema
          ['Amazon', 108.95],
          ['Google', 2,229.75],
          ['Facebook', 155.85],
          ['Microsoft', 253.13],
          ['Goldman Sachs', 284.54],
          ['Tesla Inc', 708.26],
          ['Walmart', 120.69],
          ['Target', 140.81]
      ],
      element: '#pie-chart', //for the id tag in html
      options :{
        title: "Company Stock Prices",
        width: 450, 
        height: 450
      }
  };

  const init = () => {
      pieChart.chart  = new google.visualization.PieChart(
          document.querySelector(pieChart.element)
      );
      pieChart.chart.draw(
        google.visualization.arrayToDataTable(pieChart.data),
        pieChart.options
      );
  };

  google.charts.load('current', {
      packages: ['corechart'],
      callback: init
  });

