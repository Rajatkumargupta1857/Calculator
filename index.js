{/* <link rel="stylesheet" href="index.css">
<script src="index.js"></script> */}


       let memory = 0;

        function appendToDisplay(value) {
            document.getElementById('display').value += value;
        }

        function clearDisplay() {
            document.getElementById('display').value = '';
        }

        function backspace() {
            const currentDisplay = document.getElementById('display').value;
            document.getElementById('display').value = currentDisplay.slice(0, -1);
        }

        function calculate() {
            const expression = document.getElementById('display').value;
            try {
                const result = eval(expression);
                document.getElementById('display').value = result;
            } catch (error) {
                document.getElementById('display').value = 'Error';
            }
        }

        function addToMemory() {
            const currentValue = parseFloat(document.getElementById('display').value);
            if (!isNaN(currentValue)) {
                memory += currentValue;
            }
        }

        function subtractFromMemory() {
            const currentValue = parseFloat(document.getElementById('display').value);
            if (!isNaN(currentValue)) {
                memory -= currentValue;
            }
        }

        function recallMemory() {
            document.getElementById('display').value = memory;
        }

        function clearMemory() {
            memory = 0;
        }
        function calculatePercentage() {
            const inputValue = parseFloat(document.getElementById('display').value);
            if (!isNaN(inputValue)) {
                const percentageValue = inputValue / 100;
                document.getElementById('display').value = percentageValue;
            }
        }
