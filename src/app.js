const SelectView = require('./views/select_view');
const InstrumentInfo = require('./views/instrument_info');
const InstrumentFamilies = require('./models/instrument_families');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectionCarousel = document.querySelector('#instrument-families');
  const selectView = new SelectView(selectionCarousel);
  selectView.bindEvents();

  // const instrumentInfo = new InstrumentInfo();
  // instrumentInfo.bindEvents();

  const instrumentFamilies = new InstrumentFamilies();
  instrumentFamilies.bindEvents();  





});
