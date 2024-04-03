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
        document.getElementById("tip_percentage").value = Number(tip / total).toFixed(4)*100;
        document.getElementById("bill").value = Number(tip) + Number(total);
        lastValue = document.getElementById("total").value;
    }
}