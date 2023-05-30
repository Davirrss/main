$(document).ready(function () {
    let displayValue = '';

    $('.number').click(function () {
        const value = $(this).data('value');
        appendToDisplay(value);
    });

    $('.operator').click(function () {
        const value = $(this).data('value');
        appendToDisplay(value);
    });

    $('#equal').click(function () {
        calculate();
    });

    $('#clear').click(function () {
        clearDisplay();
    });

    function appendToDisplay(value) {
        displayValue += value;
        $('#display').val(displayValue);
    }

    function clearDisplay() {
        displayValue = '';
        $('#display').val(displayValue);
    }

    function calculate() {
        try {
            const result = eval(displayValue);
            displayValue = result.toString();
            $('#display').val(displayValue);
        } catch (error) {
            displayValue = '';
            $('#display').val('Error');
        }
    }
});
