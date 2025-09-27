    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    let currentInput = '';

    const updateDisplay = (value) => {
      display.textContent = value || '0';
    };

    const calculate = () => {
      try {
        const result = eval(currentInput);
        updateDisplay(result);
        currentInput = result.toString();
      } catch {
        updateDisplay('Error');
        currentInput = '';
      }
    };

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const val = button.textContent;
        if (val === 'C') {
          currentInput = '';
          updateDisplay('');
        } else if (val === '=') {
          calculate();
        } else {
          currentInput += val;
          updateDisplay(currentInput);
        }
      });
    });

    document.addEventListener('keydown', (e) => {
      const key = e.key;
      if (key === 'Enter') {
        calculate();
      } else if (key === 'Backspace') {
        currentInput = currentInput.slice(0, -1);
        updateDisplay(currentInput);
      } else if ('0123456789+-*/().'.includes(key)) {
        currentInput += key;
        updateDisplay(currentInput);
      } else if (key === 'Escape') {
        currentInput = '';
        updateDisplay('');
      }
    });
  
  
