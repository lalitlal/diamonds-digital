import axios from "axios";

const sendCustomInquiry = async (
  firstName,
  lastName,
  email,
  phone,
  message,
  budget,
  prefContact,
  prefRing,
  prefStone
  // imageAssets
) => {
  //   console.log(firstName, lastName, email, phone, message, "YSSIRR");
  return axios({
    method: "post",
    url: `/api/send-custom-inquiry`,
    data: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      message: message,
      budget: budget,
      prefContact: prefContact,
      prefRing: prefRing,
      prefStone: prefStone,
      // imageAssets: imageAssets,
    },
  });
};

export default sendCustomInquiry;
