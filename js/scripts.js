
$(document).ready(function(){
  $("form#form").submit(function(event){
  event.preventDefault();
  var name = $("#name").val();
  var descr = $("#descr").val();
  var date = $("#date").val();
  var time = $("#time").val();


  $("#output1").text(name + " "+ descr + " " + date + " " + time);
  // $("#output2").text(descr);
  // $("#output3").text(date);
  // $("#output4").text(time);
  $("#response").show();
  });
});
