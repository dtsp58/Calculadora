function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;
    var result;
  
    if (isNaN(num1) || isNaN(num2)) {
      result = "Por favor, insira números válidos.";
    } else {
      switch (operation) {
        case "add":
          result = num1 + num2;
          break;
        case "subtract":
          result = num1 - num2;
          break;
        case "multiply":
          result = num1 * num2;
          break;
        case "divide":
          if (num2 !== 0) {
            result = num1 / num2;
          } else {
            result = "Divisão por zero não é permitida.";
          }
          break;
        default:
          result = "Operação inválida.";
      }
    }
  
    document.getElementById('result').textContent = result;
  }
  