let name = prompt("Entrez votre nom : ")
document.getElementById('welcome').innerText="Welcome " + name + " !"


let style = document.createElement('style');
style.textContent = `
  .option-label {
    transition: background-color 0.5s ;
    padding: 5px 10px;
    border-radius: 5px;
    display: inline-block;
  }
  .message {
    margin-top: 15px;
    font-weight: bold;
    font-size: 18px;  }
  .excellent {
    color: green;
  }
  .good {
    color: #007bff;
  }
  .average {
    color: orange;
  }
  .poor {
    color: red;
  }
`;
document.head.appendChild(style);

// Appliquer la classe aux labels
document.querySelectorAll('input[type="radio"]').forEach(input => {
  if (input.parentElement.tagName === 'LABEL') {
    input.parentElement.classList.add('option-label');
  }
});

document.querySelectorAll('input[name="q1"]').forEach(input => {
  input.onchange = () => {
    // Réinitialiser toutes les couleurs de cette question
    document.querySelectorAll('input[name="q1"]').forEach(i => {
      if (i.parentElement.tagName === 'LABEL') {
        i.parentElement.style.backgroundColor = "";
      }
    });
    
    // Définir la couleur en fonction de la réponse
    if (input.value === "2006") {
      input.parentElement.style.backgroundColor = "green";
      document.getElementById("score").value = parseInt(document.getElementById("score").value) + 1;
    } else {
      input.parentElement.style.backgroundColor = "red";
      // Mettre en évidence la bonne réponse
      document.querySelectorAll('input[name="q1"]').forEach(i => {
        if (i.value === "2006" && i.parentElement.tagName === 'LABEL') {
          i.parentElement.style.backgroundColor = "lightgreen";
        }
      });
    }
    
    // Attendre que la transition soit terminée avant de passer à la question suivante
    setTimeout(() => {
      document.getElementById("question1").classList.remove("visible");
      document.getElementById("question1").classList.add("hidden");
      document.getElementById("question2").classList.add("visible");
    }, 800);
  };
});

document.querySelectorAll('input[name="q2"]').forEach(input => {
  input.onchange = () => {
    document.querySelectorAll('input[name="q2"]').forEach(i => {
      if (i.parentElement.tagName === 'LABEL') {
        i.parentElement.style.backgroundColor = "";
      }
    });
    
    if (input.value === "236") {
      input.parentElement.style.backgroundColor = "green";
      document.getElementById("score").value = parseInt(document.getElementById("score").value) + 1;
    } else {
      input.parentElement.style.backgroundColor = "red";
      document.querySelectorAll('input[name="q2"]').forEach(i => {
        if (i.value === "236" && i.parentElement.tagName === 'LABEL') {
          i.parentElement.style.backgroundColor = "lightgreen";
        }
      });
    }
    
    setTimeout(() => {
      document.getElementById("question2").classList.remove("visible");
      document.getElementById("question2").classList.add("hidden");
      document.getElementById("question3").classList.add("visible");
    }, 800);
  };
});

document.querySelectorAll('input[name="q3"]').forEach(input => {
  input.onchange = () => {
    document.querySelectorAll('input[name="q3"]').forEach(i => {
      if (i.parentElement.tagName === 'LABEL') {
        i.parentElement.style.backgroundColor = "";
      }
    });
    
    if (input.value === "Marin") {
      input.parentElement.style.backgroundColor = "green";
      document.getElementById("score").value = parseInt(document.getElementById("score").value) + 1;
    } else {
      input.parentElement.style.backgroundColor = "red";
      document.querySelectorAll('input[name="q3"]').forEach(i => {
        if (i.value === "Marin" && i.parentElement.tagName === 'LABEL') {
          i.parentElement.style.backgroundColor = "lightgreen";
        }
      });
    }
    
    setTimeout(() => {
      document.getElementById("question3").classList.remove("visible");
      document.getElementById("question3").classList.add("hidden");
      document.getElementById("question4").classList.add("visible");
    }, 800);
  };
});

document.querySelectorAll('input[name="q4"]').forEach(input => {
  input.onchange = () => {
    document.querySelectorAll('input[name="q4"]').forEach(i => {
      if (i.parentElement.tagName === 'LABEL') {
        i.parentElement.style.backgroundColor = "";
      }
    });
    
    if (input.value === "Uzi") {
      input.parentElement.style.backgroundColor = "green";
      document.getElementById("score").value = parseInt(document.getElementById("score").value) + 1;
    } else {
      input.parentElement.style.backgroundColor = "red";
      document.querySelectorAll('input[name="q4"]').forEach(i => {
        if (i.value === "Uzi" && i.parentElement.tagName === 'LABEL') {
          i.parentElement.style.backgroundColor = "lightgreen";
        }
      });
    }
    
    setTimeout(() => {
      document.getElementById("question4").classList.remove("visible");
      document.getElementById("question4").classList.add("hidden");
      document.getElementById("question5").classList.add("visible");
    }, 800);
  };
});

document.querySelectorAll('input[name="q5"]').forEach(input => {
  input.onchange = () => {
    document.querySelectorAll('input[name="q5"]').forEach(i => {
      if (i.parentElement.tagName === 'LABEL') {
        i.parentElement.style.backgroundColor = "";
      }
    });
    
    if (input.value === "13") {
      input.parentElement.style.backgroundColor = "green";
      document.getElementById("score").value = parseInt(document.getElementById("score").value) + 1;
    } else {
      input.parentElement.style.backgroundColor = "red";
      document.querySelectorAll('input[name="q5"]').forEach(i => {
        if (i.value === "13" && i.parentElement.tagName === 'LABEL') {
          i.parentElement.style.backgroundColor = "lightgreen";
        }
      });
    }
    
    setTimeout(() => {
      document.getElementById("question5").classList.remove("visible");
      document.getElementById("question5").classList.add("hidden");
      document.getElementById("question6").classList.add("visible");
    }, 800);
  };
});

document.querySelectorAll('input[name="q6"]').forEach(input => {
  input.onchange = () => {
    document.querySelectorAll('input[name="q6"]').forEach(i => {
      if (i.parentElement.tagName === 'LABEL') {
        i.parentElement.style.backgroundColor = "";
      }
    });
    
    if (input.value === "Kegan") {
      input.parentElement.style.backgroundColor = "green";
      document.getElementById("score").value = parseInt(document.getElementById("score").value) + 1;
    } else {
      input.parentElement.style.backgroundColor = "red";
      document.querySelectorAll('input[name="q6"]').forEach(i => {
        if (i.value === "Kegan" && i.parentElement.tagName === 'LABEL') {
          i.parentElement.style.backgroundColor = "lightgreen";
        }
      });
    }
    
    setTimeout(() => {
      document.getElementById("question6").classList.remove("visible");
      document.getElementById("question6").classList.add("hidden");
      document.getElementById("question7").classList.add("visible");
    }, 800);
  };
});

document.querySelectorAll('input[name="q7"]').forEach(input => {
  input.onchange = () => {
    document.querySelectorAll('input[name="q7"]').forEach(i => {
      if (i.parentElement.tagName === 'LABEL') {
        i.parentElement.style.backgroundColor = "";
      }
    });
    
    if (input.value === "Sarah") {
      input.parentElement.style.backgroundColor = "green";
      document.getElementById("score").value = parseInt(document.getElementById("score").value) + 1;
    } else {
      input.parentElement.style.backgroundColor = "red";
      document.querySelectorAll('input[name="q7"]').forEach(i => {
        if (i.value === "Sarah" && i.parentElement.tagName === 'LABEL') {
          i.parentElement.style.backgroundColor = "lightgreen";
        }
      });
    }
    
    setTimeout(() => {
      document.getElementById("question7").classList.remove("visible");
      document.getElementById("question7").classList.add("hidden");
      document.getElementById("question8").classList.add("visible");
    }, 800);
  };
});

document.querySelectorAll('input[name="q8"]').forEach(input => {
  input.onchange = () => {
    document.querySelectorAll('input[name="q8"]').forEach(i => {
      if (i.parentElement.tagName === 'LABEL') {
        i.parentElement.style.backgroundColor = "";
      }
    });
    
    if (input.value === "17") {
      input.parentElement.style.backgroundColor = "green";
      document.getElementById("score").value = parseInt(document.getElementById("score").value) + 1;
    } else {
      input.parentElement.style.backgroundColor = "red";
      document.querySelectorAll('input[name="q8"]').forEach(i => {
        if (i.value === "17" && i.parentElement.tagName === 'LABEL') {
          i.parentElement.style.backgroundColor = "lightgreen";
        }
      });
    }
    
    setTimeout(() => {
      document.getElementById("question8").classList.remove("visible");
      document.getElementById("question8").classList.add("hidden");
      document.getElementById("question9").classList.add("visible");
    }, 800);
  };
});

document.querySelectorAll('input[name="q9"]').forEach(input => {
  input.onchange = () => {
    document.querySelectorAll('input[name="q9"]').forEach(i => {
      if (i.parentElement.tagName === 'LABEL') {
        i.parentElement.style.backgroundColor = "";
      }
    });
    
    if (input.value === "Nerimazeth") {
      input.parentElement.style.backgroundColor = "green";
      document.getElementById("score").value = parseInt(document.getElementById("score").value) + 1;
    } else {
      input.parentElement.style.backgroundColor = "red";
      document.querySelectorAll('input[name="q9"]').forEach(i => {
        if (i.value === "Nerimazeth" && i.parentElement.tagName === 'LABEL') {
          i.parentElement.style.backgroundColor = "lightgreen";
        }
      });
    }
    
    setTimeout(() => {
      document.getElementById("question9").classList.remove("visible");
      document.getElementById("question9").classList.add("hidden");
      document.getElementById("question10").classList.add("visible");
    }, 800);
  };
});

document.querySelectorAll('input[name="q10"]').forEach(input => {
  input.onchange = () => {
    document.querySelectorAll('input[name="q10"]').forEach(i => {
      if (i.parentElement.tagName === 'LABEL') {
        i.parentElement.style.backgroundColor = "";
      }
    });
    
    if (input.value === "9") {
      input.parentElement.style.backgroundColor = "green";
      document.getElementById("score").value = parseInt(document.getElementById("score").value) + 1;
    } else {
      input.parentElement.style.backgroundColor = "red";
      document.querySelectorAll('input[name="q10"]').forEach(i => {
        if (i.value === "9" && i.parentElement.tagName === 'LABEL') {
          i.parentElement.style.backgroundColor = "lightgreen";
        }
      });
    }
    
    setTimeout(() => {
      document.getElementById("question10").classList.remove("visible");
      document.getElementById("question10").classList.add("hidden");
      document.getElementById("valider").classList.remove("hidden");
    }, 800);
  };
});

document.getElementById("valider").onclick = () => {
  const score = parseInt(document.getElementById("score").value);
  

  let message = "";
  let messageClass = "";
  
  if (score >= 9) {
    message = "Tié la toi hein !";
    messageClass = "excellent";
  } else if (score >= 7) {
    message = "Tié bon tié bon !";
    messageClass = "good";
  } else if (score >= 5) {
    message = "force force recommence";
    messageClass = "average";
  } else {
    message = "Arrête pas l'ecole en tout cas";
    messageClass = "poor";
  }
  

  document.getElementById("resultat").innerHTML = "Votre score est : " + score + "/10";

  const messageElement = document.createElement("div");
  messageElement.className = "message " + messageClass;
  messageElement.innerHTML = message;
  
  // Si un message existe déjà, le remplacer
  const existingMessage = document.querySelector(".message");
  if (existingMessage) {
    existingMessage.remove();
  }
  
  // Ajouter le nouveau message après le résultat
  document.getElementById("resultat").appendChild(messageElement);
  
  document.getElementById("resultat").classList.remove("hidden");
  document.getElementById("valider").classList.add("hidden");
};