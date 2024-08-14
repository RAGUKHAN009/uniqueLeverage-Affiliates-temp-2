function ShowMore() {

    const DropDown = document.getElementById('DropDown')

    if (DropDown.classList.contains('DropDownH')) {
        DropDown.classList.remove('DropDownH')
        DropDown.classList.add('DropDownS')
    }
    else {
        DropDown.classList.add('DropDownH')
        DropDown.classList.remove('DropDownS')
    }

}

const container = document.getElementById('heroCont');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY || window.pageYOffset;
  const windowHeight = window.innerHeight;

  if (scrollPosition >= windowHeight) {
    container.classList.remove('scrolled');
  } else {
    container.classList.add('scrolled');
  }
});