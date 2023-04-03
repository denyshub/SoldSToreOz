import React from "react";

const OnclickButton = () => {

  function show1(anything1){
    document.querySelector('.textBox1').value= 'HELLO NIGGA';
  }

  function DropDown() {
    let dropdown1 = document.getElementById('.dropdown');
    dropdown1.classList.toggle('active');
  }

  return <button
  onClick={DropDown}          
  class="buttonsInDrop1"
>
  Price (HIGH - LOW){" "}
</button>
};
export default OnclickButton;
