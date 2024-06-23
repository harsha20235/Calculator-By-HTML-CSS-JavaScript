document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.getElementById('inputBox');
    const buttons = document.querySelectorAll('button');
    let currentInput = '';
    let operator = '';
    let result = '';
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;
            if (button.classList.contains('allclearbtn')) {
                currentInput = '';
                result = '';
                inputBox.value = '0';
            } else if (button.classList.contains('delbtn')) {
                currentInput = currentInput.slice(0, -1);
                inputBox.value = currentInput || '0';
            } else if (button.classList.contains('equalbtn')) {
                try {
                    result = eval(currentInput);
                    inputBox.value = result;
                    currentInput = result;
                } catch {
                    inputBox.value = 'Error';
                    currentInput = '';
                }
            } else {
                if (buttonText === '%') {
                    currentInput += '/100';
                } else {
                    currentInput += buttonText;
                }
                inputBox.value = currentInput;
            }
        });
    });
});
