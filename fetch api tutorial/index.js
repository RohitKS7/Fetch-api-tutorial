console.log('gello');

let mybtn = document.getElementById('myBtn');
let myContent = document.getElementById('content');


// Function to get data -
// function getData() {
//    fetch('https://jsonplaceholder.typicode.com/users')
//    .then((response) => {
//       return response.json();
//    })
//    .then((data) => {
//       console.log(data);
//    })
// }
// getData();

// Function to postrequst data -
let url= 'https://api.instantwebtools.net/v1/passenger';
let data = '{"name": "rohit34787","trips": 250,"airline": 5}'
params = {
   method: 'post',
   headers: {
      'Content-type': 'application/json'
   },
   body:data
}
function postData() {
   fetch(url, params)
   .then(response => response.json())
   .then(data => console.log(data))
}
postData();
