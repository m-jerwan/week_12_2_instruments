const PubSub = require('../helpers/pub_sub');

const InstrumentInfo = function (resultsSection){
    this.resultsSection = resultsSection;

};

InstrumentInfo.prototype.bindEvents = function(){
    PubSub.subscribe('InstrumentInfo','InstrumentFamilies:sending-choosen-whole-family', (event)=>{
        this.displayResults(event.detail);
    })
}

InstrumentInfo.prototype.displayResults = function(wholeFamilyInfo){
    const title = document.createElement('h1');
    title.textContent = wholeFamilyInfo.name;
    this.resultsSection.appendChild(title);
    const paragraph = document.createElement('p');
    paragraph.textContent = wholeFamilyInfo.description;
    this.resultsSection.appendChild(paragraph);
}


module.exports = InstrumentInfo;