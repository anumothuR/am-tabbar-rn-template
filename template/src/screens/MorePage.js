import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import InAppReview from 'react-native-in-app-review';
import { getAppInstalledDate, updateAppInstalledDate } from '../service/AsyncStorage'
import moment from 'moment'


export default function MorePage() {

    useEffect(() => {

        getAppInstalledDate().then(unixDate => {
            if((Number(unixDate) - moment().unix()) / 86400 > 10) { //60 *60* 24 = 86400 
                if (InAppReview.isAvailable()) {
                    InAppReview.RequestInAppReview()
          .then((hasFlowFinishedSuccessfully) => {

               updateAppInstalledDate(true)
                if(hasFlowFinishedSuccessfully) {
        
                }
          })
          .catch((error) => {
            console.log(error);
          });
                }
            }
        })
        

    },[])



    return (
        <View>
            <Text>More</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
