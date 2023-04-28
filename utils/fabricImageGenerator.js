const fabric = require('fabric').fabric;
function isValidHexColor(str) {
    return /^#[0-9A-F]{6}$/i.test(str);
}
function generateImage(text, textColor, backgroundColor,width,height,top,left,fontSize) {
    const fabricCanvas =  new fabric.StaticCanvas(null, { width: width , height: height , backgroundColor: isValidHexColor(`#${backgroundColor}`) ? `#${backgroundColor}` : backgroundColor , });
  const textObj = new fabric.Text(text, {
    fontSize: 50,
    fill: isValidHexColor(`#${textColor}`) ? `#${textColor}` : textColor ,
    top: top ,
    left:  left ? left : width/100,
    textAlign: 'center',
    fontSize: fontSize,
    width: width-width/100,
    height: height
  });
  fabricCanvas.add(textObj);
  fabricCanvas.renderAll();
  return fabricCanvas.toDataURL('image/png');
}
module.exports = {
  generateImage
}
