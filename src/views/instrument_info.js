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

    const smallTitle = document.createElement('h3');
    smallTitle.textContent = "Instruments from this family:"
    this.resultsSection.appendChild(smallTitle);

    const instrumentsUl = document.createElement('ul');
    this.resultsSection.appendChild(instrumentsUl);

 


    wholeFamilyInfo.instruments.forEach(element => {
        const instrumentLi = document.createElement('li');
        instrumentLi.textContent = element;
        instrumentsUl.appendChild(instrumentLi);
    });
}


module.exports = InstrumentInfo;