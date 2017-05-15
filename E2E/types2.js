function test2() {
    console.log('lets write the typescript code');
}
var e;
(function (e) {
    e[e["red"] = 1] = "red";
    e[e["blue"] = 2] = "blue";
    e[e["orange"] = 3] = "orange";
})(e || (e = {}));
;
console.log(e.blue);
test2();
var n;
n = [1, 2, 3];
console.log(n[2]);
