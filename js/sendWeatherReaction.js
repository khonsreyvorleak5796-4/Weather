const forme1 = document.querySelector('.form');
forme1.addEventListener('submit', event => {
     event.preventDefault();

     const formdata = new FormData(forme1);
     const data = Object.fromEntries(formdata);
     console.log(data);
     
     fetch('https://weather-backend-kappa.vercel.app/reactions', {
        method: 'POST',
        headers: {
          'api-key': '321dd35cfdb912208ad17ff541fa5335170e957ef19362431897d25599b703d0',
          'Content-Type': 'application/json , charset=UTF-8'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
       .then(data => console.log(data))
       .catch(error => console.log(error));
});

// var save = localStorage.getItem('userEmail');
// document.getElementById('getlocal').value = save;