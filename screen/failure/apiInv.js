import axios from "axios";

export async function generateInvitationCode(phoneNumber) {
  try {
    const response = await axios.post("http://192.168.3.10:8080/api/gen-code", {
      phonenumber: phoneNumber,
    });
    if (response.status === 200) {
      const data = response.data;
      // use the data as necessary
      return data;
    } else {
      throw new Error("Failed to generate invitation code");
    }
  } catch (error) {
    console.log(error);
  }
  console.log(data);
}
