
const checkIfAdmin = (request, response, next) => {
	if (request.body.isAdmin){
		request.auth = {
			isAdmin: true
		};
	}
}