fetch('https://weather-backend-kappa.vercel.app/reactions', {
        method: 'POST',
        headers: {
            'Content-Tpye': 'application/json',
            keys:'321dd35cfdb912208ad17ff541fa5335170e957ef19362431897d25599b703d0'
        },
     }).then(res => res.json())
       .then(data => console.log(data))
       .catch(error => console.log(error));