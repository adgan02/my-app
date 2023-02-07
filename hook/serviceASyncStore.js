
import AsyncStorage from '@react-native-async-storage/async-storage';
export async function AuthStorageService(type, key, body) {
    async function setToken(key, body) {
        await AsyncStorage.setItem(`@UserSuperKey:${key}`, body);
    } /* setToken */
    async function getToken(key) {
        try {
            const value = await AsyncStorage.getItem(key);
            return value;
        } catch (error) { console.log(error); }
    } /* getToken */
    async function delToken(key) {
        await AsyncStorage.removeItem(key);
    } /* delToken */
    switch (type) {
        case 1: setToken(key, body); break;
        case 2: getToken(key); break;
        case 3: delToken(key); break;
    }
}