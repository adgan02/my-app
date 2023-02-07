import { useState } from "react"
import { View, ImageBackground, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import IconFeather from "react-native-vector-icons/Feather";
import { LoginService } from "../../hook/serviceAuth";
const SetpassScreen = ({ props, valueSet, stateLogin, callback_ComfirmUser }) => {
    const [userPass, setUserpass] = useState("");;
    const [userPassComfirm, setUserPassComfirm] = useState("");
    const [userShowPass, setuserShowPass] = useState(false);
    const [userShowPassComfirm, setuserShowPassComfirm] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const checkPass = (text) => {
        setUserPassComfirm(text)
        if (text != userPass) {
            setErrorMessage("!Password not match")
        } else {
            setErrorMessage("")
        }
    }

    const login = async () => {
        if (userPass == userPassComfirm) {
            let body = {
                otp: valueSet.otp,
                refCode: valueSet.refCode,
                username: valueSet.username,
                imeiCode: valueSet.imeiCode,
                password: userPass,
                countryPhone: String(valueSet.countryPhone),
            }
            let updatePassService = await LoginService(2, JSON.stringify(body), '/auth/update-password');
            console.log(updatePassService);
            setTimeout(async () => {
                if (updatePassService) {
                    try {
                        let bodyLogin = { username: valueSet.username, password: userPass, };
                        console.log(bodyLogin);
                        let loginService = await LoginService(3, JSON.stringify(bodyLogin), '/auth/sign-in');
                        console.log(loginService);
                        if (loginService.authToken != undefined) {
                            callback_ComfirmUser({
                                auth: loginService.authToken,
                                token: loginService.userToken
                            })
                        }
                    } catch (error) { }
                }
            }, 500);
        }
    }
    const Checklogin = async () => {
        setTimeout(async () => {
            let body = {
                otp: valueSet.otp,
                refCode: valueSet.refCode,
                username: valueSet.username,
                imeiCode: valueSet.imeiCode,
                password: userPass,
                countryPhone: String(valueSet.countryPhone),
            }
            try {
                let bodyLogin = { username: valueSet.username, password: userPass, };
                console.log(bodyLogin);
                let loginService = await LoginService(3, JSON.stringify(bodyLogin), '/auth/sign-in');
                console.log(loginService);
                if (loginService.authToken != undefined) {
                    callback_ComfirmUser({
                        auth: loginService.authToken,
                        token: loginService.userToken
                    })
                }
            } catch (error) {
                setErrorMessage("Password not Match")
            }
        }, 500);
    }
    async function loginUser() {
        if (stateLogin == 2) {
            login();
        } else {
            Checklogin();
        }
    }
    return (
        <ImageBackground
            source={require("../../assets/wallpaperr.png")}
            style={{ flex: 1 }}  >
            <View style={{ flex: 1, padding: 10, justifyContent: 'center' }}>
                <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 10 }}>
                    <View>
                        <Text style={styles.label}>Password*</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                secureTextEntry={!userShowPass}
                                style={styles.input}
                                value={userPass}
                                onChangeText={(text) => setUserpass(text)}
                            />
                            <TouchableOpacity onPress={() => {
                                setuserShowPass(!userShowPass)
                            }}>
                                <IconFeather name={!userShowPass ? "eye-off" : "eye"} size={20} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.underline}>

                        </View>
                        {stateLogin == 2 ? (<Text style={styles.label}>Password Comfirm*</Text>) : (null)}
                        {stateLogin == 2 ? (<View style={{ flexDirection: 'row' }}>
                            <TextInput
                                secureTextEntry={!userShowPassComfirm}
                                style={styles.input}
                                value={userPassComfirm}
                                onChangeText={(text) => { checkPass(text) }}
                            />
                            <TouchableOpacity onPress={() => {
                                setuserShowPassComfirm(!userShowPassComfirm)
                            }}>
                                <IconFeather name={!userShowPassComfirm ? "eye-off" : "eye"} size={20} />
                            </TouchableOpacity>
                        </View>) : (null)}
                        {stateLogin == 2 ? (<View style={styles.underline}></View>) : (null)}
                        <Text style={[styles.error, { textAlign: 'center', marginTop: 5 }]}>
                            {errorMessage}
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                onPress={async () => {
                                    props.navigation.navigate("login")
                                }}
                                style={[styles.button, { marginRight: 10, paddingHorizontal: 10, backgroundColor: "#A0A0A0" }]} >
                                <Text style={styles.buttonText}>Back</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={async () => {
                                    await loginUser()
                                }}
                                style={[styles.button, { flex: 1 }]} >
                                <Text style={styles.buttonText}> {stateLogin == 2 ? 'Confirm Password' : 'Login'} </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>

    )
}
const styles = StyleSheet.create({
    label: {
        fontWeight: "regular",
        marginTop: 10,
        fontSize: 14,
        color: "#5C5C5C",
    },
    input: {
        flex: 1,
        fontSize: 14,
        height: 30,
        padding: 1,
        color: "black",
        backgroundColor: "white",
    },
    underline: {
        height: 1,
        backgroundColor: "#C4C4C4",
        opacity: 0.85
    },
    button: {
        backgroundColor: "#9758E8",
        borderRadius: 5,
        justifyContent: 'center',
        height: 40,
        marginTop: 10
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    error: {
        color: "red",
        fontSize: 18,
    },
})
export default SetpassScreen