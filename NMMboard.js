/**
 * Created by Chin on 4/19/17.
 */

//Store the Canvas Object into Variable
var $myCanvas = $('#gameCanvas');

$myCanvas.drawRect({
    fillstyle: 'steelblue',
    layer: true,
    name: 'blueRectangle',
    fromCenter: false,
    x: 50, y: 50,
    width: 400, height: 200
})