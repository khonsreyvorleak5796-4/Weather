async function fet() {
const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=phnom%20penh';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3af509500fmshb48fcdcc6b8a076p1dd46cjsn7c218f786dbd',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
console.log('non');
try {
	const res = await fetch(url, options);
	const data = await res.json();
   let card = document.getElementById('current');



   card.innerHTML += `<button type="button" class="btn btn-danger">Log Out</button>
   <div class="text">
     <h1>${data.location.name} Weather Website</h1>
     <p>Login as:</p>
   </div>
   <div class="box ">
     <div class="left">
       <h3>Weather</h3>
       <h6>${data.location.localtime}</h6>
       <img src="${data.current.condition.icon}" alt="" />
       <div class="num">
         <h1>${data.current.feelslike_c}</h1>
         <h5>°C</h5>
       </div>
       <p>"${data.current.condition.text}"</p>
     </div>
     <div class="rigth">
       <h3>Conditions</h3>
       <div class="box-right">
         <div class="title">
           <p>Feels Like</p>
           <p>Humidity</p>
           <p>Wind (Kph)</p>
           <p>UV</p>
           
         </div>
         <div class="number">
           <p>${data.current.feelslike_c} C</p>
           <p>${data.current.humidity}%</p>
           <p>${data.current.wind_kph}</p>
           <p>${data.current.uv}</p>
          
         </div>
       </div>
       <div class="border"></div>
       <div class="box-right">
         <div class="title">          
           <p>Country</p>
           <p>Zone</p>
         </div>
         <div class="number">
           <p>${data.location.country}</p>
           <p>${data.location.tz_id}</p>
         </div>
       </div>
 
     </div>
   </div>
   <button type="button" class="btn btn-primary">Share Reaction</button>`;  




	console.log(data);
} catch (error) {
	console.error(error);
}
}

fet();

