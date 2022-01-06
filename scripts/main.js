// // var requestId;
// // var canvas = document.querySelector("#mycanvas");
// // var context = canvas.getContext("2d");

// // var element = document.getElementById('myCanvas');
// // var code = document.getElementById('code');
// // var icon = document.getElementsByClassName('icones');

// // function update() {
// //     // element.style.transform = 'rotate(90deg)';
// //     // icon[0].style.transform = 'rotate(90deg)';
// //     // context.rotate(45 * Math.PI / 180)
// //     requestId = requestAnimationFrame(update);
// // }

// // update();

// // function stopAnimation(e) {
// //     // use the requestID to cancel the requestAnimationFrame call
// //     cancelAnimationFrame(requestId);
// //     context.clearRect(0, 0, canvas.width, canvas.height);
// // }

// // console.log(document.getElementById("d2"))
// // document.getElementById("d2").style.WebkitAnimationName = "rotation";

// // function rotate() {
// //     for (var i = 1; i < 11; i++) {
// //         (function (x) {
// //             setInterval(function () {
// //                 console.log(document.getElementById("d" + x))
// //                 // document.getElementById("d" + x).style.WebkitAnimationName = "rotation";
// //             }, 200 * i);
// //         })(i);
// //     }
// // }

// // rotate();

// var current_rotation = 0;

// // change CSS transform property on click
// // document.querySelector("#rotate-button").addEventListener('click', function() {
// 	// update total rotation
// 	// if angle is positive, rotation happens clockwise. if negative, rotation happens anti-clockwise.
// 	current_rotation += 0;

// 	// rotate clockwise by 90 degrees
// 	// document.getElementById("d1").style.transform = 'rotate(' + current_rotation + 'deg)';
// // });
// //  document.getElementById("d1").style.transform = 'translate(-140px, 150px)';
// function rotate() {
//     i=1;
//                 setInterval(function () {
//                     console.log(i)
//                     // document.getElementById('myCanvas').style.transform = 'rotate(' + i + 'deg)';
//                     document.getElementById("d1").style.transform = 'rotate(' + -i + 'deg)';
//                     document.getElementById("d2").style.transform = 'rotate(' + -i + 'deg)';
//                     document.getElementById("d3").style.transform = 'rotate(' + -i + 'deg)';
//                     document.getElementById("d4").style.transform = 'rotate(' + -i + 'deg)';
//                     i=i+2;
//                      console.log(i)
//                 }, 100);
//             };


// // rotate();