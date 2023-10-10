function closeResult() {
    document.getElementById('result').style.display = 'none';
}

function showPopupMessage() {
    document.getElementById('modal').style.display = 'block';
}

function calculateSalary() {
    const hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
    const regularHours = parseFloat(document.getElementById('regularHours').value);
    const overtime50Hours = parseFloat(document.getElementById('overtime50Hours').value);
    const overtime100Hours = parseFloat(document.getElementById('overtime100Hours').value);
    const bonusPercentage = parseFloat(document.getElementById('bonus').value);
    const hasHealthDiscount = document.getElementById('healthDiscount').checked;
    const afpDiscountEnabled = document.getElementById('afpDiscountEnabled').checked;
    const afpDiscountPercentage = parseFloat(document.getElementById('afpDiscount').value);
    const hasCesantiaDiscount = document.getElementById('cesantiaDiscount').checked;

    if (!isNaN(hourlyRate) && !isNaN(regularHours) && !isNaN(overtime50Hours) && !isNaN(overtime100Hours) && !isNaN(bonusPercentage)) {
        const regularPay = hourlyRate * regularHours;
        const overtime50Pay = hourlyRate * 1.5 * overtime50Hours;
        const overtime100Pay = hourlyRate * 2.0 * overtime100Hours;
        const bonusAmount = (regularPay + overtime50Pay + overtime100Pay) * (bonusPercentage / 100);

        let totalDiscount = 0;
        if (hasHealthDiscount) {
            totalDiscount += regularPay * 0.07;
        }
        if (afpDiscountEnabled && !isNaN(afpDiscountPercentage)) {
            totalDiscount += regularPay * (afpDiscountPercentage / 100);
        }
        if (hasCesantiaDiscount) {
            totalDiscount += regularPay * 0.05;
        }

        const totalPay = (regularPay + overtime50Pay + overtime100Pay + bonusAmount) - totalDiscount;

        document.getElementById('regularPayResult').textContent = `$${regularPay.toFixed(2)}`;
        document.getElementById('overtime50PayResult').textContent = `$${overtime50Pay.toFixed(2)}`;
        document.getElementById('overtime100PayResult').textContent = `$${overtime100Pay.toFixed(2)}`;
        document.getElementById('bonusAmount').textContent = `$${bonusAmount.toFixed(2)}`;
        document.getElementById('totalDiscount').textContent = `$${totalDiscount.toFixed(2)}`;
        document.getElementById('totalPayResult').textContent = `$${totalPay.toFixed(2)}`;
        document.getElementById('result').style.display = 'block';

        showPopupMessage();
    } else {
        document.getElementById('regularPayResult').textContent = "-";
        document.getElementById('overtime50PayResult').textContent = "-";
        document.getElementById('overtime100PayResult').textContent = "-";
        document.getElementById('bonusAmount').textContent = "-";
        document.getElementById('totalDiscount').textContent = "-";
        document.getElementById('totalPayResult').textContent = "Ingrese valores válidos";
        document.getElementById('result').style.display = 'none';
    }
}

document.getElementById('closeResult').addEventListener('click', closeResult);

document.getElementById('closeModal').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'none';
});
