import { View, Text } from 'react-native'
import React from 'react'

export default function RatingDetailComponent({ratings}) {
  return (
    <View style={{width:'100%'}}>

        <Text style={{alignSelf:'center'}}>Summary</Text>
        <View style={{flexDirection:'row',flex:1,width:'100%',justifyContent:'space-between'}}>
            <View style={{width:'65%',borderWidth:1}}>
                {ratings.map((item) => {

                    return (

                        <View key={item.id} style={{flexDirection:'row',justifyContent:'center',flex:1}}>
                            <Text style={{marginRight:10}}>{item.rating}</Text>
                        <View style={{width:'100%',height:10,backgroundColor:'#f0f0f0',borderRadius:2,marginVertical:5}}><View style={{width:`${item.percent}%`,backgroundColor:'#8940FF',height:10,borderRadius:2}}></View></View>
                        </View>
                    )
                })}
            
            </View>
            <View>
                <Text>4.5 </Text>
            </View>

        </View>
        
      
      
    </View>
  )
}