const PubSub = {
	publish: function(who, channel, payload){
		const event = new CustomEvent(channel, {
			detail: payload
		});
		console.log(`${who} publishing. channel: ${channel}, payload: ${payload}`)
		document.dispatchEvent(event);
	},

	subscribe: function(who, channel, callback){
		console.log(`${who} subscribing. channel: ${channel}`);
		document.addEventListener(channel, callback);
		
	}
}

module.exports = PubSub;
