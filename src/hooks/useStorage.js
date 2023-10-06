import react from 'react'


export default function useStorage(){
    const storeData = async (key, value)=>{
      try {
        await AsyncStorage.setItem(key, value);
        console.log(`Success: saved ${value} in ${key}`);
      } catch (e) {
        console.log(`Error in useStorage: \n ${e}`);
      }
    }
    const getData = async (key)=>{
      try {
        const result = await AsyncStorage.getItem(key);
        console.log(`Success: retrieved ${result}`);

        return result

      } catch (e) {
        console.log(`Error in useStorage: \n ${e}`);
      }
    }

    const saveDownloadHistory = async (value)=>{
      await storeData("downloadH",value);
    }

    const saveSearchHistory = async (value)=>{
      await storeData("searchH",value);
    }

    const getDownloadHistory = async ()=>{
      return await getData("downloadH")
    }

    const getSearchHistory = async ()=>{
      return await getData("searchH")
    }

    return{
      saveDownloadHistory,
      saveSearchHistory,
      getDownloadHistory,
      getSearchHistory
    }
}