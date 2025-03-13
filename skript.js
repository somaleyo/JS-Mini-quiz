let name = prompt("Entrez votre nom : ")
document.getElementById('welcome').innerText="Welcome " + name + " !"
document.querySelectorAll('input[name="q1"]').forEach(input => {
  input.onchange = () => {
      if (input.value === "2006") {
          document.getElementById("score").value = parseInt(document.getElementById("score").value) + 1;
      }
      document.getElementById("question1").classList.remove("visible");
      document.getElementById("question1").classList.add("hidden");
      document.getElementById("question2").classList.add("visible");
  };
});

document.querySelectorAll('input[name="q2"]').forEach(input => {
  input.onchange = () => {
      if (input.value === "236") {
          document.getElementById("score").value = parseInt(document.getElementById("score").value) + 1;
      }
      document.getElementById("question2").classList.remove("visible");
      document.getElementById("question2").classList.add("hidden");
      document.getElementById("question3").classList.add("visible");
  };
});

document.querySelectorAll('input[name="q3"]').forEach(input => {
  input.onchange = () => {
      if (input.value === "Marin") {
          document.getElementById("score").value = parseInt(document.getElementById("score").value) + 1;
      }
      document.getElementById("question3").classList.remove("visible");
      document.getElementById("question3").classList.add("hidden");
      document.getElementById("question4").classList.add("visible");
  };
});
document.querySelectorAll('input[name="q4"]').forEach(input => {
  input.onchange = () => {
      if (input.value === "Uzi") {
          document.getElementById("score").value = parseInt(document.getElementById("score").value) + 1;
      }
      document.getElementById("question4").classList.remove("visible");
      document.getElementById("question4").classList.add("hidden");
      document.getElementById("question5").classList.add("visible");
  };
});
document.querySelectorAll('input[name="q5"]').forEach(input => {
  input.onchange = () => {
      if (input.value === "13") {
          document.getElementById("score").value = parseInt(document.getElementById("score").value) + 1;
      }
      document.getElementById("question5").classList.remove("visible");
      document.getElementById("question5").classList.add("hidden");
      document.getElementById("question6").classList.add("visible");
  };
});
document.querySelectorAll('input[name="q6"]').forEach(input => {
  input.onchange = () => {
      if (input.value === "Kegan") {
          document.getElementById("score").value = parseInt(document.getElementById("score").value) + 1;
      }
      document.getElementById("question6").classList.remove("visible");
      document.getElementById("question6").classList.add("hidden");
      document.getElementById("question7").classList.add("visible");
  };
});
document.querySelectorAll('input[name="q7"]').forEach(input => {
  input.onchange = () => {
      if (input.value === "Sarah") {
          document.getElementById("score").value = parseInt(document.getElementById("score").value) + 1;
      }
      document.getElementById("question7").classList.remove("visible");
      document.getElementById("question7").classList.add("hidden");
     document.getElementById("question8").classList.add("visible");
  };
});
document.querySelectorAll('input[name="q8"]').forEach(input => {
  input.onchange = () => {
      if (input.value === "17") {
          document.getElementById("score").value = parseInt(document.getElementById("score").value) + 1;
      }
      document.getElementById("question8").classList.remove("visible");
      document.getElementById("question8").classList.add("hidden");
      document.getElementById("question9").classList.add("visible");
  };
});
document.querySelectorAll('input[name="q9"]').forEach(input => {
  input.onchange = () => {
      if (input.value === "Nerimazeth") {
          document.getElementById("score").value = parseInt(document.getElementById("score").value) + 1;
      }
      document.getElementById("question9").classList.remove("visible");
      document.getElementById("question9").classList.add("hidden");
      document.getElementById("question10").classList.add("visible");
  };
});
document.querySelectorAll('input[name="q10"]').forEach(input => {
  input.onchange = () => {
      if (input.value === "9") {
          document.getElementById("score").value = parseInt(document.getElementById("score").value) + 1;
      }
      document.getElementById("question10").classList.remove("visible");
      document.getElementById("question10").classList.add("hidden");
      document.getElementById("valider").classList.remove("hidden");
  };
});

document.getElementById("valider").onclick = () => {
  document.getElementById("resultat").innerHTML = "Votre score est : " + document.getElementById("score").value + "/10";
  document.getElementById("resultat").classList.remove("hidden");
  document.getElementById("valider").classList.add("hidden");
  document.getElementById("rejouer").classList.remove("hidden");
};

document.getElementById("rejouer").onclick = () => {
  document.getElementById("score").value = 0;
  document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);
  
  document.getElementById("question1").classList.add("visible");
  document.getElementById("question1").classList.remove("hidden");
  document.getElementById("question2").classList.add("hidden");
  document.getElementById("question2").classList.remove("visible");
  document.getElementById("question3").classList.add("hidden");
  document.getElementById("question3").classList.remove("visible");
  document.getElementById("question4").classList.add("hidden");
  document.getElementById("question4").classList.remove("visible");
  document.getElementById("question5").classList.add("hidden");
  document.getElementById("question5").classList.remove("visible");
  document.getElementById("question6").classList.add("hidden");
  document.getElementById("question6").classList.remove("visible");
  document.getElementById("question7").classList.add("hidden");
  document.getElementById("question7").classList.remove("visible");
  document.getElementById("question8").classList.add("hidden");
  document.getElementById("question8").classList.remove("visible");
  document.getElementById("question9").classList.add("hidden");
  document.getElementById("question9").classList.remove("visible");
  document.getElementById("question10").classList.add("hidden");
  document.getElementById("question10").classList.remove("visible");


  document.getElementById("resultat").classList.add("hidden");
  document.getElementById("rejouer").classList.add("hidden");
};
