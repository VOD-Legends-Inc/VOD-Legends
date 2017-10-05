
		updateRequest = event => {
    	event.preventDefault();

    	if (
    			this.state.firstName && 
    			this.state.lastName &&
    			this.state.lolUserName &&
    			this.state.role &&
    			this.state.server &&
    			this.state.mainChampion &&
    			this.state.language &&
    			this.state.rating &&
    			this.state.bio &&
    			this.state.role > 0
    		) {

	      CoachAPI.updateRequest(
	      	this.state.id,
	      	{
		        firstName: this.state.firstName,
		        lastName: this.state.lastName,
		        lolUserName: this.state.lolUserName,
		        role: this.state.role,
		        server: this.state.server,
		        mainChampion: this.state.mainChampion,
		        language: this.state.language,
		        rating: this.state.rating,
		        bio: this.state.bio,

	    	}
	       )
	        .then(res => console.log(res))
	        .catch(err => console.log(err));
	      this.setState({updateSent: true})
	    }
    }
	
	handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }