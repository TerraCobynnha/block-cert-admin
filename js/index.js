$(() => {
    $("#add").on("submit", function(event) {
        event.preventDefault();
        console.log($("#add").serializeArray());
    })
})