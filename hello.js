//console.log("hello");

//non blocking(�m�[�hjs�ł悭���鏑����)
/*setTimeout(function() {
    console.log("hello");
}, 1000);
console.log("world");
*/
// blocking
var start = new Date().getTime();
while (new Date().getTime() < start + 1000);
console.log("world");
