
export const generateOTPandReferralCode = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    const referralCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    return {otp, referralCode};
}

