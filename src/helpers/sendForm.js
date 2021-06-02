import emailjs from 'emailjs-com';

const sendForm = (templateID, data, success, error) => {
    emailjs
        .sendForm('service_yke2lsi', templateID, data, 'user_lItWkmVEEQ61Ar2rTrdTn')
        .then(() => success(), () => error());
};

export default { sendForm };