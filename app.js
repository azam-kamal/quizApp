function check_Score()
{
    var score=0;
    var txt=""
  var asnwer_No_1=document.getElementById("Q1 Answer no 2"); 
  var asnwer_No_2=document.getElementById("Q2 Answer no 2"); 
  var asnwer_No_3=document.getElementById("Q3 Answer no 1"); 
  var asnwer_No_4=document.getElementById("Q4 Answer no 3"); 
  var asnwer_No_5=document.getElementById("Q5 Answer no 1"); 
  var asnwer_No_6=document.getElementById("Q6 Answer no 3"); 
  var asnwer_No_7=document.getElementById("Q7 Answer no 1"); 
  var asnwer_No_8=document.getElementById("Q8 Answer no 3"); 
  var asnwer_No_9=document.getElementById("Q9 Answer no 3"); 
  var asnwer_No_10=document.getElementById("Q10 Answer no 2"); 
  if(asnwer_No_1.checked==true)
  {
    score++
  }
  else{
    txt+=" Question 1 is wrong"+" ";
  }

  if(asnwer_No_2.checked==true)
  {
    score++
  }
  else{
    txt+=" Question 2 is wrong"+" ";
  }
  if(asnwer_No_3.checked==true)
  {
      score++;
  }
  else{
    txt+=" Question 3 is wrong"+" ";
  }
  
  if(asnwer_No_4.checked==true)
  {
      score++;
  }
  else{
    txt+=" Question 4 is wrong"+" ";
  }

  if(asnwer_No_5.checked==true)
  {
      score++;
  }
  else{
    txt+=" Question 5 is wrong"+" ";
  }

  if(asnwer_No_6.checked==true)
  {
      score++;
  }
  else{
    txt+=" Question 6 is wrong"+" ";
  }

  if(asnwer_No_7.checked==true)
  {
      score++;
  }
  else{
    txt+=" Question 7 is wrong"+" ";
  }
  if(asnwer_No_8.checked==true)
  {
      score++;
  }
  else{
    txt+=" Question 8 is wrong"+" ";
  }

  if(asnwer_No_9.checked==true)
  {
      score++;
  }
  else{
    txt+=" Question 9 is wrong"+" ";
  }

  if(asnwer_No_10.checked==true)
  {
      score++;
  }
  else{
    txt+=" Question 10 is wrong"+" ";
  }
  alert("You Score "+" "+score);
  alert(txt)

}