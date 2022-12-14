import AsyncStorage from '@react-native-async-storage/async-storage';

export interface GenericAsyncStorageOperator {
  saveItem: <T>(key: string, tObj: T) => Promise<boolean>;
  getItem: <T>(key: string) => Promise<T | null>;
  removeItem: <T>(key: string) => Promise<boolean>;
}


class GenericAsyncStorageOperatorImpl implements GenericAsyncStorageOperator {
  saveItem = async <T>(key: string, tObj: T): Promise<boolean> => {
    const properKey = '@' + key;
    const value = JSON.stringify(tObj);
    await AsyncStorage.setItem(properKey, value);
    return true;
  };

  getItem = async <T>(key: string): Promise<T | null> => {
    const properKey = '@' + key;
    const value = await AsyncStorage.getItem(properKey);
    if (typeof value === 'string') {
      return JSON.parse(value) as T;
    }
    return null;
  };

  removeItem = async <T>(key: string): Promise<boolean> => {
    const properKey = '@' + key;
    await AsyncStorage.removeItem(properKey);
    return true;
  };
}

export const genericAsyncStorageOperator =
  new GenericAsyncStorageOperatorImpl();
