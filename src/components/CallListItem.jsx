import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from '../styles'
import CallLogoBlack from '../assets/call-icon-black.png'
import DetailsLogo from '../assets/details-icon.png'
import { moderateScale, verticalScale } from '../styles/mixins'

const CallListItem = ({index,data}) => {
  return (
    <View style={[styles.alignViewSplit, {height: moderateScale(56), width: moderateScale(390), marginVertical: verticalScale(10)}]}>
      <View style={[styles.alignViaRow, styles.alignViewCenter, styles.alignItemsCenter]}>
        {/* here an image */}
        <Image
            src={data.imageUri}
            style={styles.callImage}
        />
        {/* this view is for name */}
        <TouchableOpacity style={[styles.alignViewCenter, styles.alignItemsCenter]}>
            {(data.direction === 0 && data.answered === 0) ? (
                <Text style={styles.callNameRed}>{data.name}</Text>):(
                    <Text style={styles.callName}>{data.name}</Text>
                )}
            <View style={[styles.alignViaRow, styles.alignItemsCenter, styles.alignViewCenter]}>
                {/* here an image */}
                <Image 
                    source={CallLogoBlack}
                    style={styles.miniCallIcon}
                />
                {data.direction === 1 ? (
                    <Text style={styles.callDirection}>
                        outgoing
                    </Text>
                ) : (
                    <Text style={styles.callDirection}>
                        incoming
                    </Text>
                )}
            </View>
        </TouchableOpacity>

      </View>

      <View style={[styles.alignViaRow, styles.alignItemsCenter, styles.alignViewCenter]}>
        {/* date */}
        <Text style={styles.callDate}>
         {data.date}
        </Text>
        {/* info button */}
        <TouchableOpacity>
            <Image  
                source={DetailsLogo}
                style={styles.detailsLogo}
            />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CallListItem