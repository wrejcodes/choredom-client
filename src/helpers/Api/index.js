import fetch from 'whatwg-fetch';

const POST = 'POST';

const GET = 'GET';

const baseUrl = 'http://0.0.0.0:3001/api/';

const headers = new Headers({
	'content-type': 'application/json'
});

const getOptions = (method, body = '') => (
	{
		method,
		headers,
		mode: 'cors'
		body	
	}
);

const checkStatus = (response) => {
	if(response.status >= 200 && response.status < 300){
		return response
	}

	const error = new Error(response.statusText);
	error.response = response;
	throw error;
};

const parseJSON = (response) => {
	if ( response.status === 204 || response.status === 205 ){
		return null;
	}
	return response.json();
};

const request = (url, options) => {
	return fetch(url, options)
		   .then(checkStatus)
		   .then(parseJSON);
};

class Api {


	// this is where we can create requests for our api, whatever functionality we need
	static fetchGroups(userId){
		const url = baseUrl + `/groups/?user=${userId}`;
		try{
			let results = request(url, getOptions(GET));
			return results;
		} catch(err){
			throw err;
		}
	}


	
}