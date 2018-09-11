const PubSub = require('../helpers/pub_sub');

const InstrumentInfo = function(){

};

InstrumentInfo.prototype.bindEvents = function(){
    PubSub.subscribe('InstrumentFamilies:sending-choosen-whole-family', (event)=>{
        console.log('ready to display:', event.detail);
    })
}


module.exports = InstrumentInfo;