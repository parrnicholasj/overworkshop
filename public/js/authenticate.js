function authenticate() {
  const token = localStorage.getItem('accessToken');
  if (!token) {

    var el = document.createElement('div');
    el.innerHTML = "<a href='/'>log in link<a>";
    
    swal({
      title: "plz log in to vote",
      content: el,
      icon: "warning"
    })
    return false;
  } else {
    return true;
  }
}