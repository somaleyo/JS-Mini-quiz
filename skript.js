document.querySelectorAll('input[name="q1"]').forEach(input => {
  input.onchange = () => {
      if (input.value === "Paris") {
          document.getElementById("score").value = parseInt(document.getElementById("score").value) + 1;
      }
      document.getElementById("question1").classList.remove("visible");
      document.getElementById("question1").classList.add("hidden");
      document.getElementById("question2").classList.add("visible");
  };
});

document.querySelectorAll('input[name="q2"]').forEach(input => {
  input.onchange = () => {
      if (input.value === "4") {
          document.getElementById("score").value = parseInt(document.getElementById("score").value) + 1;
      }
      document.getElementById("question2").classList.remove("visible");
      document.getElementById("question2").classList.add("hidden");
      document.getElementById("question3").classList.add("visible");
  };
});

document.querySelectorAll('input[name="q3"]').forEach(input => {
  input.onchange = () => {
      if (input.value === "Pacifique") {
          document.getElementById("score").value = parseInt(document.getElementById("score").value) + 1;
      }
      document.getElementById("question3").classList.remove("visible");
      document.getElementById("question3").classList.add("hidden");
      document.getElementById("valider").classList.remove("hidden");
  };
});

document.getElementById("valider").onclick = () => {
  document.getElementById("resultat").innerHTML = "Votre score est : " + document.getElementById("score").value + "/3";
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

  document.getElementById("resultat").classList.add("hidden");
  document.getElementById("rejouer").classList.add("hidden");
};
