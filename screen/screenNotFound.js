import { Text, TouchableOpacity, View } from "react-native"

const ScreenNotFound = ({ props_Header, props_Body, props }) => {
    console.log(props);
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

            <Text>
                {props_Header} {props_Body}
            </Text>
            <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                <Text>
                    กลับหน้าก่อนหน้า
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export default ScreenNotFound