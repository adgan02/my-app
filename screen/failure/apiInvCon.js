export async function inviteUser(inviteOTP) {
  try {
    console.log(inviteOTP);
    const response = await axios.post("http://192.168.3.10:8080/api/invite", {
      inviteOTP: inviteOTP,
    });
    if (response.status === 200) {
      const data = response.data;
      // use the data as necessary
      return data;
    } else {
      throw new Error("Failed to invite user");
    }
  } catch (error) {
    console.log(error);
  }
  // console.log(data);
}
