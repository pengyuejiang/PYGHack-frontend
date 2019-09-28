var io = require('./io.js');

class translate {

  constructor() {}

  // search type
  uid() {
    var college = new io(__dirname + '/data').read_json('college.json')['data'];
    var college_map = new Map();
    for (var i = 0; i < college.length; i++) {
      college_map.set(college[i][17], college[i]);
    }
    this.map = college_map;
    return this;
  }

  cip() {
    this.map = new io(__dirname + '/data').csv_to_map('cip.csv', 'code');
    return this;
  }

  // query
  where(query) {
    this.result = this.map.get(query);
    return this;
  }

  // outputs
  to_name() {
    return this.result[4];
  } //get college name

  to_the() {
    return this.result.the;
  }

  to_rur() {
    return this.result.rur;
  }

}

module.exports = translate;
