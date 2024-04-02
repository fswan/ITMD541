window.onload = () => {
    document.getElementById("tip").oninput = () => updateData();
    document.getElementById("total").onchange = () => updateData();
    document.getElementById("total").oninput = () => updateData();
    updateData();

    function updateData() {
        let total = document.getElementById("total").value;
        let tip = document.getElementById("tip").value;
        document.getElementById("tip_amount").value = tip;
        document.getElementById("tip_percentage").value = Number(tip / total).toFixed(2);
        document.getElementById("bill").value = Number(tip) + Number(total);
    }
}