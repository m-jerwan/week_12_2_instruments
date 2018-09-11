const PubSub = require('../helpers/pub_sub');

const SelectView = function (selection) { 
    this.selection = selection;
};

SelectView.prototype.bindEvents = function () {
    PubSub.subscribe('InstrumentFamilies:sending-names', (event) => {
    this.makeOptions(event.detail);
    })
}

SelectView.prototype.makeOptions = function (arrayOfInstrumentFamilies) {
    
    arrayOfInstrumentFamilies.forEach((familyName, index) => {
        const option = document.createElement('option');
        option.textContent = familyName;
        option.value = index;
        this.selection.appendChild(option);
    });
}



module.exports = SelectView;