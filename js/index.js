const checkToken = () => {
  const token = $.session.get("loggedInEmail");

  if (!token) {
    console.log("checked");
    return (window.location.href = "./../index.html");
  }
};

$(() => {
  checkToken();

  $("#add").on("submit", function (event) {
    event.preventDefault();
    const serialNo = $("#serialNo").val();
    const fullName = $("#fullName").val();
    const degree = $("#degree").val();
    const university = $("#university").val();

    console.log(serialNo, fullName, degree, university);
  });

  $("#logout").on("click", function (e) {
    $.session.remove("loggedInEmail");
    return (window.location.href = "./../index.html");
  });
});
