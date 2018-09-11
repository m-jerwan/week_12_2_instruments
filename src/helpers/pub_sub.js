const PubSub = {
	publish: function(channel, payload){
		const event = new CustomEvent(channel, {
			detail: payload
		});
		console.log(`publishing. channel: ${channel}, payload: ${payload}`)
		document.dispatchEvent(event);
	},

	subscribe: function(channel, callback){
		console.log(`subscribing. channel: ${channel}`);
		document.addEventListener(channel, callback);
		
	}
}

module.exports = PubSub;
