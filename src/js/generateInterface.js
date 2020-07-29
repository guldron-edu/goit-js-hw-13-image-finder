import renderInterfaceMarkup from '../template/renderInterfaceMarkup.hbs';
const htmlEntryPoint = document.querySelector('.main');
htmlEntryPoint.insertAdjacentHTML('afterbegin', renderInterfaceMarkup());
