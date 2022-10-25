class ApiReversegeocoding{
    public apiReversegeocoding(){
    const axios = require('axios');
    const params = {
      auth: '887036383532939572125x23493',
      locate: '58.41032,15.62162',
      json: '1'
    };

    axios.get('https://geocode.xyz', {params})
      .then(response => {
        console.log(response.data);
      }).catch(error => {
        console.log(error);
      });
}
}

