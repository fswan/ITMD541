window.onload = () => {
    document.getElementById("tip").oninput = () => updateData();
    document.getElementById("total").onchange = () => updateData();
    document.getElementById("total").oninput = () => updateData();
    let lastValue = 100;
    updateData();

    function updateData() {
        let total = document.getElementById("total").value;
        if(isNaN(total))
        {
            alert("Please input a number.");
            document.getElementById("total").value = lastValue;
            return;
        }
        let tip = document.getElementById("tip").value;
        document.getElementById("tip_amount").value = tip;
        document.getElementById("tip_percentage").value = Number(tip / total * 100).toFixed(2);
        document.getElementById("bill").value = Number(Number(tip) + Number(total)).toFixed(2);
        lastValue = document.getElementById("total").value;
    }
}