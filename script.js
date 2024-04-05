function reverseString(){
    let inputString=document.getElementById('inputString').value;
    let reversedString=inputString.split('').reverse().join('');
    document.getElementById('reversedString').textContent=reversedString;   
   }
   
   function isPalindrome(){
       let inputString=document.getElementById('inputString1').value;
       let reversedString=inputString.split('').reverse().join('');
       
       document.getElementById('isPalindrome').textContent=
       (inputString.toLowerCase()===reversedString.toLowerCase()) ? 'It is Palindrome' : 'It is Not a Palindrome'
   }
   
   
   function anagram(){
       let str1=document.getElementById('str1').value
       let str2=document.getElementById('str2').value
   
       function isAnagram(str1, str2){
           const sortedStr1=str1.toLowerCase().split('').sort().join('');
           const sortedStr2=str2.toLowerCase().split('').sort().join('');
           return sortedStr1===sortedStr2
       }
   
       let result=isAnagram(str1,str2)
       document.getElementById('anagram').textContent=result ? 'It is Anagram':'No it is Not Anagram'
   }

   let longestWord1=document.getElementById('longestWord')
   
   function longestWord(){
    let sentence=document.getElementById('sentence').value;
    let longest='';
    const words=sentence.split(' ');

        for (let word of words){
            if(word.length>longest.length){
                longest=word;
            }            
        }
        return longestWord1.textContent=longest
    }
   
   function factorial(){
       let inputNumber=document.getElementById('inputNumber').value;
       let inputNum=parseInt(inputNumber)
       
       function facto(n){
           if (n===0 || n===1){
               return 1
           }
           return n*facto(n-1)
       }
   
       let result=facto(inputNum)
       document.getElementById('factorial').textContent=result
   }
   
   document.getElementById('generateBtn').addEventListener('click', generateArray);
   document.getElementById('minBtn').addEventListener('click', showMin);
   document.getElementById('maxBtn').addEventListener('click', showMax);
   
   document.getElementById('sumBtn').addEventListener('click', showSum);
   document.getElementById('sortBtn').addEventListener('click', sortArray);
   document.getElementById('mapBtn').addEventListener('click', applyMap);
   document.getElementById('filterBtn').addEventListener('click', applyFilter);
   document.getElementById('reduceBtn').addEventListener('click', applyReduce);
   
   
   let numbersArray = [];
   
   function generateArray() {
       numbersArray = [];
       for (let i = 0; i < 10; i++) {
           numbersArray.push(Math.floor(Math.random() * 100) + 1);
       }
       document.getElementById('arrayOutput').innerText = 'Generated Array: ' +'[ '+ numbersArray.join(', ')+' ]';
       document.getElementById('statsOutput').innerText = '';
   }
   
   function showMin() {
       const min = Math.min(...numbersArray);
       document.getElementById('statsOutput').innerText = 'Min: ' + min;
   }
   
   function showMax() {
       const max = Math.max(...numbersArray);
       document.getElementById('statsOutput').innerText = 'Max: ' + max;
   }
   
   function showSum() {
       const sum = numbersArray.reduce((acc, curr) => acc + curr, 0);
       document.getElementById('statsOutput').innerText = 'Sum: ' + sum;
   }
   
   
   
   function sortArray() {
       
       const sortedArray = numbersArray.slice().sort((a, b) => a - b);
       document.getElementById('sortOutput').innerText = 'Sorted Array: ' +'[ '+ sortedArray.join(', ')+' ]';
       return sortedArray;
   }
   
   function applyMap() {
       const sortedArray = sortArray();
       const mappedArray = sortedArray.map(num => num * 2);
       document.getElementById('mapOutput').innerText = 'Mapped Array: ' + '[ '+ mappedArray.join(', ') +' ]';
   }
   
   function applyFilter() {
       const sortedArray = sortArray();
       const filteredArray = sortedArray.filter(num => num % 2 === 0);
       document.getElementById('filterOutput').innerText = 'Filtered Array: ' + '[ '+ filteredArray.join(', ') +' ]';
   }
   
   function applyReduce() {
       const sortedArray = sortArray();
       const reducedValue = sortedArray.reduce((acc, curr) => acc + curr, 0);
       document.getElementById('reduceOutput').innerText = 'Reduced Value: ' + '[ '+ reducedValue +' ]';
   }
   
   
   let randomnumBtn=document.getElementById('randomnumBtn')
   let randomnumOutput=document.getElementById('randomnumOutput')
   
   randomnumBtn.addEventListener('click', generateRandomNum)
   
   function generateRandomNum(){
       randomnumOutput.textContent=Math.floor(Math.random()*100)
   }
   
   // LOCAL STORAGE
   
   function setData(){
       var username=document.getElementById('username').value;
       var age=document.getElementById('age').value;
       localStorage.setItem('username',username);
       localStorage.setItem('age',age);
       document.getElementById('storagedisplay').textContent="Data Saved Locally";
   }
   
   function getData(){
       var storedUsername=localStorage.getItem('username');
       var storedAge=localStorage.getItem('age');
       var displayText=(storedUsername && storedAge) ? 
       "Username: "+storedUsername + " Age: "+storedAge : "No data found. Please enter and set data"
       document.getElementById("storagedisplay").textContent=displayText;
   }
   
   function removeData(){
       localStorage.removeItem('username');
       localStorage.removeItem('age');
       document.getElementById('storagedisplay').textContent="Data Removed";
   }
   
   
   
   // Schedulers
   
   
   let intervalBtn=document.getElementById('intervalBtn')
   let clearIntervalBtn=document.getElementById('clearIntervalBtn')
   let intervalOutput=document.getElementById('intervalOutput')
   let uniqueId;
   
   intervalBtn.addEventListener('click', startInterval)
   clearIntervalBtn.addEventListener('click', stopInterval)
   
   
   
   function startInterval(){
       let counter=0
       uniqueId=setInterval(function(){
           intervalOutput.textContent=counter
           counter += 1
       }, 1000)
   }
   
   function stopInterval(){
       clearInterval(uniqueId)
       intervalOutput.textContent=''   
   }
   
   document.getElementById('timeoutBtn').addEventListener('click', startTimeout)
   document.getElementById('clearTimeoutBtn').addEventListener('click', stopTimeout)
   let timeoutOutput=document.getElementById('timeoutOutput')
   timeoutOutput.classList.add('heading')
   let uniqueId1;
   
   function startTimeout(){
       setTimeout(function (){
           timeoutOutput.textContent='Hai Imran Khan'
       }, 3000)
   }
   
   function stopTimeout(){
       clearTimeout(uniqueId1)
       timeoutOutput.textContent=''
   }
   
   // EVENT LISTENERS
   
   let oelBtn=document.getElementById('oelBtn')
   let aelBtn=document.getElementById('aelBtn')
   let iel=document.getElementById('iel')
   let oel=document.getElementById('oel')
   let ael=document.getElementById('ael')
   
   function greeting(){
       iel.textContent='Inline Event Listner'
   }
   
   oelBtn.onclick=function(){
       oel.textContent='On Event Listner'
   }
   
   aelBtn.addEventListener('click', function(){
       ael.textContent='addEventListener'
   })
   
   
   // HTTP METHODS
   
   // POST METHOD
   
   let userForm1=document.getElementById('userForm1');
   let requestEl=document.getElementById('request');
   let responseEl=document.getElementById('response');
   let useridEl=document.getElementById('userid');
   
   userForm1.addEventListener('submit', function(event){
       event.preventDefault();
   
       let formData1=new FormData(userForm1);
       let requestBody1={}
   
       formData1.forEach(function(value, key){
           requestBody1[key]=value;
       })
   
       let url="https://gorest.co.in/public-api/users";
   
       let options={
           method:'POST',
           headers: {
               "Content-Type": "application/json",
               "Accept": "application/json",
               "Authorization": "Bearer f081dcd4590a3a1d37c98d9bf2c903a2ff7aa54b20960a30e539d735bcdcb1b6"
           },
           body:JSON.stringify(requestBody1)
       }
   
       fetch(url, options)
           .then(response=>{
               if(!response.ok){
                   throw new Error('Nework Response was not OK')
               }
               return response.json()
           })
           .then(jsonData=>{
               let requestStatus=jsonData.code;
               let httpResponse=JSON.stringify(jsonData)
               requestEl.textContent=requestStatus;
               responseEl.textContent=httpResponse;
               useridEl.textContent=jsonData.data.id;
               localStorage.setItem("userId", jsonData.data.id)
           })
           .catch(error=>{
               requestEl.textContent=error.message;
           })   
   
   });
   
   
   
   // GET METHOD
   let useridEl1=document.getElementById('userid1')
   let getbtnEl=document.getElementById('getbtn')
   let getrequestEl=document.getElementById('getrequest')
   let getresponseEl=document.getElementById('getresponse')
   
   function get(){
       let options={
           method:"GET"
       };
       let url1=`https://gorest.co.in/public-api/users`;
       
   
       fetch(url1, options)
       .then(function(response){
           return response.json();
       })
       .then(function(data){
           let requestStatus1=data.code;
           let httpResponse1=JSON.stringify(data.data)
           getrequestEl.textContent=requestStatus1
           getresponseEl.textContent=httpResponse1
       })
   }
   
   getbtnEl.addEventListener("click", get)
   
   
   // PUT METHOD
   let putinput=document.getElementById('putinput')
   let putrequestbody=document.getElementById('putrequestbody')
   let putbtn=document.getElementById('putbtn')
   let putstatus=document.getElementById('putstatus')
   let putresponse=document.getElementById('putresponse')
   
   function put(){
       let uid=putinput.value;
       let url = "https://gorest.co.in/public-api/users/" + uid
       let requestbody=putrequestbody.value;
       let options={
           method:'PUT',
           headers: {
               "Content-Type": "application/json",
               Accept: "application/json",
               Authorization: "Bearer f081dcd4590a3a1d37c98d9bf2c903a2ff7aa54b20960a30e539d735bcdcb1b6"
           },
           body:requestbody,        
       }
       
       fetch(url, options)
           .then(function(response){
               return response.json();
           })
           .then(function(jsonData){
               let requestStatus=jsonData.code;
               let httpResponse=JSON.stringify(jsonData);
               putstatus.textContent=requestStatus;
               putresponse.textContent=httpResponse;
           })
       
   }
   
   putbtn.addEventListener("click", put)
   
   
   // DELETE METHOD
   
   let deleteinput=document.getElementById('deleteinput')
   let deletebtn=document.getElementById('deletebtn')
   let deletestatus=document.getElementById('deletestatus')
   let deleteresponse=document.getElementById('deleteresponse')
   
   function del(){
       let uid=deleteinput.value;
       let url = "https://gorest.co.in/public-api/users/" + uid
       let options={
           method:'DELETE',
           headers: {
               "Content-Type": "application/json",
               Accept: "application/json",
               Authorization: "Bearer f081dcd4590a3a1d37c98d9bf2c903a2ff7aa54b20960a30e539d735bcdcb1b6"
           },
          
       }
       
       fetch(url, options)
           .then(function(response){
               return response.json();
           })
           .then(function(jsonData){
               let requestStatus=jsonData.code;
               let httpResponse=JSON.stringify(jsonData);
               deletestatus.textContent=requestStatus;
               deleteresponse.textContent="User deleted " +httpResponse;
           })
       
   }
   
   deletebtn.addEventListener("click", del)
   
   
   
   
   
   
   
   
   let jokeTextEl=document.getElementById('jokeText');
   let jokeBtnEl=document.getElementById('jokeBtn');
   
   function sendGetHttpRequest(){
       let url='https://apis.ccbp.in/jokes/random';
       let options={method:'GET'};
       
       fetch(url, options)
       .then(function(response){
           return response.json();
       })
       .then(function(data){
           jokeTextEl.textContent=JSON.stringify(data.value)
       })
   
   }
   jokeBtnEl.addEventListener('click',sendGetHttpRequest)
   
   
   
   
   let userForm = document.getElementById("userForm");
   let requestStatusEl = document.getElementById("requestStatus");
   let httpResponseEl = document.getElementById("httpResponse");
   
   userForm.addEventListener("submit", function(event) {
       event.preventDefault(); // Prevent default form submission behavior
   
       let formData = new FormData(userForm); // Create FormData object from form
       let requestBody = {}; // Initialize empty object for request body
   
       // Convert FormData to JSON object
       formData.forEach(function(value, key){
           requestBody[key] = value;
       });
   
       let options = {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
               "Accept": "application/json",
               "Authorization": "Bearer f081dcd4590a3a1d37c98d9bf2c903a2ff7aa54b20960a30e539d735bcdcb1b6"
           },
           body: JSON.stringify(requestBody)
       };
   
       requestStatusEl.textContent = "Loading..."; // Display loading message
   
       fetch("https://gorest.co.in/public-api/users", options)
           .then(response => {
               if (!response.ok) {
                   throw new Error('Network response was not ok');
               }
               return response.json();
           })
           .then(jsonData => {
               let requestStatus = jsonData.code;
               let httpResponse = JSON.stringify(jsonData);
               requestStatusEl.textContent = requestStatus;
               httpResponseEl.textContent = httpResponse;
           })
           .catch(error => {
               console.error('Error:', error);
               requestStatusEl.textContent = 'Error: ' + error.message;
           });
   });
   