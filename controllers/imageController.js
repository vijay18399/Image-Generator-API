const fabricImageGenerator = require('../utils/fabricImageGenerator');
exports.generateImage = (req, res) => {
  const text = req.query.text || 'Hello World!';
  const textColor = req.query.color || 'white';
  const backgroundColor = req.query.background || 'orange';
  const width = req.query.width || 1980;
  const height = req.query.height || 1080;
  const img = fabricImageGenerator.generateImage(text, textColor, backgroundColor,width,height,height/2,width/100,20);
  const base64Data = img.replace(/^data:image\/png;base64,/, "");
  const binaryData = Buffer.from(base64Data, 'base64');
  res.writeHead(200, {
    'Content-Type': 'image/png',
    'Content-Length': binaryData.length
  });
  res.end(binaryData);
};
exports.generateAvatar = (req, res) => {
  const text = req.query.name ? (req.query.name).match(/\b\w/g).join('') : 'VJ';
  const textColor = req.query.color || 'white';
  const backgroundColor = req.query.background || 'orange';
  const img = fabricImageGenerator.generateImage(text, textColor, backgroundColor,60,60,10,10,30);
  const base64Data = img.replace(/^data:image\/png;base64,/, "");
  const binaryData = Buffer.from(base64Data, 'base64');
  res.writeHead(200, {
    'Content-Type': 'image/png',
    'Content-Length': binaryData.length
  });
  res.end(binaryData);

}
