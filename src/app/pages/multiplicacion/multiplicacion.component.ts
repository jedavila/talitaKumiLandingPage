import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplicacion',
  templateUrl: './multiplicacion.component.html',
  styleUrls: ['./multiplicacion.component.css']
})
export class MultiplicacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    const option1 = document.getElementById("option1"),
      option2 = document.getElementById("option2"),
      option3 = document.getElementById("option3"),
      audio = new Audio("../../../assets/audio/wrong.mp3")

    var answer = 0;

    function generate_equation() {
      var num1 = Math.floor(Math.random() * 13),
        num2 = Math.floor(Math.random() * 13),
        dummyAnswer1 = Math.floor(Math.random() * 10),
        dummyAnswer2 = Math.floor(Math.random() * 10),
        allAnswers = [],
        switchAnswers = [];

      answer = num1*num2;

      document.getElementById("num1").innerHTML=num1.toString();
      document.getElementById("num2").innerHTML=num2.toString();

      allAnswers = [answer, dummyAnswer1, dummyAnswer2];

      for (let i = allAnswers.length; i--;) {
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
      };

      option1.innerHTML = switchAnswers[0];
      option2.innerHTML = switchAnswers[1];
      option3.innerHTML = switchAnswers[2];
    };

    option1.addEventListener("click", function () {
      if (ConvertStringToNumber(option1.innerHTML) == answer) {
        generate_equation();
      }
      else {
        audio.play();
      }
    });

    option2.addEventListener("click", function () {
      if (ConvertStringToNumber(option2.innerHTML) == answer) {
        generate_equation();
      }
      else {
        audio.play();
      }
    });

    option3.addEventListener("click", function () {
      if (ConvertStringToNumber(option3.innerHTML) == answer) {
        generate_equation();
      }
      else {
        audio.play();
      }
    });
    
  function ConvertStringToNumber(input: string) {
    var numeric = Number(input);
    return numeric;
  }

    generate_equation()
  }

}
