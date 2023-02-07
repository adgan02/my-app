import axios from "axios";

export const sendOTPandReferralCode = (otp, referralCode, phoneNumber) => {
  const payload = {
    otp: otp,
    phoneNumber: phoneNumber,
    referralCode: referralCode,
  };
  console.log(payload);
  console.log(otp);
  axios
    .post("http://192.168.3.10:8080/api/send-otp", payload)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
