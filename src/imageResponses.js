const fs = require('fs');

const spongegar = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getSpongeGar = (request, response) => {
  response.writeHead(200, { Content_Type: 'image/png' });
  response.write(spongegar);
  response.end();
};

module.exports.getSpongeGar = getSpongeGar;
