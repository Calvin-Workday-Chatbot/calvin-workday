// // Add event listener to the chatbot input field
// // const API_URL = 'https://api-inference.huggingface.co/models';
// // const HUGGINGFACEHUB_API_TOKEN = "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"
// // const MODEL_NAME = "flan-ul2"

// // Send a request to the Hugging Face's API
// // const sendMessage = () => {
// //   alert("dead");

// //   // Get the user's message from the input field
// //   const message = document.getElementById('user-input').value;
// //   document.getElementById('user-input').value = '';

// //   document.getElementById('bot-response').innerHTML = `<p>${userInput}/p>`;

//   // const body = JSON.stringify({
//   //   inputs: message,
//   //   parameters: {
//   //     "return_tensors": "pt",
//   //     "max_length": 1280,
//   //   },
//   // });

//   // const headers = {
//   //   'Content-Type': 'application/json',
//   //   Authorization: `Bearer ${API_KEY}`,
//   // };

//   // // Send the request to the Hugging Face's API
//   // const response = await fetch(`${API_URL}/${MODEL_NAME}/predict`, {
//   //   method: 'POST',
//   //   headers: headers,
//   //   body: body,
//   // });

//   // const data = await response.json();
//   // const responseText = data.predictions[0];

//   // // Display the response in the Chrome extension
//   // const botResponse = document.getElementById('bot-response');
//   // botResponse.textContent = responseText;

//   // return responseText;
// // };

// // const sendButton = document.getElementById('send-button');
// // sendButton.addEventListener('click', sendMessage);

// // var sendButton = document.getElementById("send-button");
// // sendButton.onclick = () => {

// //     alert("Value stored in chrome.storage: " );
// // }

// // var sendButton = document.getElementById("send-button");

// $(document).ready(function() {
//   $("#messageArea").on("submit", function(event) {
// \
//     var rawText = $("#text").val();

//     var userHtml = '<div class="d-flex justify-content-end mb-4"><div class="msg_cotainer_send">' + rawText + '<span class="msg_time_send">'+ str_time + '</span></div><div class="img_cont_msg"><img src="https://i.ibb.co/d5b84Xw/Untitled-design.png" class="rounded-circle user_img_msg"></div></div>';
    
//     $("#text").val("");
//     $("#messageFormeight").append(userHtml);

//     $.ajax({
//       data: {
//         msg: rawText,	
//       },
//       type: "POST",
//       url: "/get",
//     }).done(function(data) {
//       var botHtml = '<div class="d-flex justify-content-start mb-4"><div class="img_cont_msg"><img src="https://i.ibb.co/fSNP7Rz/icons8-chatgpt-512.png" class="rounded-circle user_img_msg"></div><div class="msg_cotainer">' + data + '<span class="msg_time">' + str_time + '</span></div></div>';
//       $("#messageFormeight").append($.parseHTML(botHtml));
//     });
//     event.preventDefault();
//   });
// });

// // var sendButton = document.getElementById("send-button");

// sendButton.onclick = () => {
//     // // Get the user's message from the input field
//     // const userInput = document.getElementById('user-input').value;

//     // // Store the user input in localStorage
//     // localStorage.setItem('userInput', userInput);

//     // // Display an alert
//     // alert("Value stored in localStorage: " + userInput);

//     const userInput = document.getElementById('user-input').value;

//     // Store the user input in localStorage
//     localStorage.setItem('userInput', userInput);

//     // Display an alert
//     alert("Value stored in localStorage: " + userInput);


//     // Send data to the Python backend using AJAX
//     $.ajax({
//       data: {
//           msg: userInput,    
//       },
//       type: "POST",
//       url: "/get",
//   });
// };


// // $(document).ready(function() {
// //   $("#messageArea").on("submit", function(event) {
// //       var rawText = $("#text").val();
// //       // Display an alert
// //       alert("Value stored in localStorage: " + rawText);

// //       $.ajax({
// //           data: {
// //               msg: rawText,    
// //           },
// //           type: "POST",
// //           url: "/get",
// //       });
// //       event.preventDefault();
// //   });
// // });


$(document).ready(function() {
  $("#messageArea").on("submit", function(event) {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const str_time = hour+":"+minute;
    var rawText = $("#text").val();
    
    alert(rawText);

    var userHtml = '<div class="d-flex justify-content-end mb-4"><div class="msg_cotainer_send">' + rawText + '<span class="msg_time_send">'+ str_time + '</span></div><div class="img_cont_msg"><img src="https://i.ibb.co/d5b84Xw/Untitled-design.png" class="rounded-circle user_img_msg"></div></div>';
    
    $("#text").val("");
    $("#messageFormeight").append(userHtml);

    $.ajax({
      data: {
        msg: rawText,	
      },
      type: "POST",
      url: "/get",
    }).done(function(data) {
      var botHtml = '<div class="d-flex justify-content-start mb-4"><div class="img_cont_msg"><img src="https://i.ibb.co/fSNP7Rz/icons8-chatgpt-512.png" class="rounded-circle user_img_msg"></div><div class="msg_cotainer">' + data + '<span class="msg_time">' + str_time + '</span></div></div>';
      $("#messageFormeight").append($.parseHTML(botHtml));
    });
    event.preventDefault();
  });
});