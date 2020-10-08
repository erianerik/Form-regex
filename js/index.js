const regexEmail = new RegExp("^[a-z 0-9]{2,}\@{1}([a-z]{2,})\.[a-z]{2,3}$", "g");
const regexPassword = new RegExp("[A-Za-z]+[0-9]{2,}", "g");

var inputEmailValue;
var inputPasswordValue;

$(".regex-error").hide();

$("#input-email").change(function (element) {
   inputEmailValue = element.target.value;

})

$("#input-password").change(function (element) {
   inputPasswordValue = element.target.value;
})

$(".submit").click(function () {
   $(".regex-error").hide();
   $("#input-email").removeClass("sucess-input");
   $("#input-email").removeClass("error-input");
   $("#input-password").removeClass("sucess-input");
   $("#input-password").removeClass("error-input");


   if (inputEmailValue != undefined && inputEmailValue.match(regexEmail)) {
      $(".form-input").removeClass("margin-zero");
      $("#input-email").addClass("sucess-input");
   } else {
      $(".form-input").addClass("margin-zero");
      $("#input-email").addClass("error-input");
      $(".regex-error-email").show();
   }

   if (inputPasswordValue != undefined && inputPasswordValue.match(regexPassword)) {
      $(".form-input").removeClass("margin-zero");
      $("#input-password").addClass("sucess-input");
   } else {
      $(".form-input").addClass("margin-zero");
      $("#input-password").addClass("error-input");
      $(".regex-error-password").show();
   }


})
// <div class="regex-error regex-error-email">
//                <img src="./img/error.svg" alt="" class="img-error">
//                <span class="error-title">Email Invalido!</span>
//             </div>

// <div class="regex-error regex-error-password">
//          <img src="./img/error.svg" alt="" class="img-error">
//          <span class="error-title">Password Invalido!</span>
//       </div>