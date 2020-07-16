$(() => {
    $("#add").on("submit", function(event) {
        event.preventDefault();
        const serialNo = $("#serialNo").val();
        const fullName = $("#fullName").val();
        const degree = $("#degree").val();
        const university = $("#university").val();

        console.log(serialNo, fullName, degree, university);
    })
})