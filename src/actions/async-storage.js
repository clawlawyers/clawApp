import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchData = async key => {
  const data = await AsyncStorage.getItem(key);
 // console.log('data',data);
  if (data === null) {
    return null;
  }
  return data;
};

export const removeData = async( key) => {
  await AsyncStorage.removeItem(key);
};

export const storeData = async (key, value) => {
  await AsyncStorage.setItem(key, value);
};