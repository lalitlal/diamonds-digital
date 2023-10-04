import axios from "axios";

const sendEmail = async (firstName, lastName, email, phone, message) => {
  //   console.log(firstName, lastName, email, phone, message, "YSSIRR");
  return axios({
    method: "post",
    url: `/api/send-email`,
    data: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      message: message,
    },
  });
};

export default sendEmail;
