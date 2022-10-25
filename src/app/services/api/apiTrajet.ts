class ApiTrajet{
    public apiTrajet(){
        const axios = require('axios');
        const params = {
            pts:  '49.8998757,2.300284|48.4510104,6.7483327',
            nb: 2,
            mode: 'driving',
            unit: 'm',
            tour:'open',
            key:'877ef5742eba1d157f7732ae96892f88'
        };
        axios.get('https://maps.open-street.com/api/tsp/?',{params})
        .then(response => {
            console.log(response.data);
          }).catch(error => {
            console.log(error);
          });
    }
}
