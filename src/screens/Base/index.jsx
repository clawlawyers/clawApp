 import 'react-native-gesture-handler';
import { View, Text, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Onboarding from '../client/Onboarding';
import NewsScreen from '../client/NewsScreen';
import LegalGPTScreen from '../client/LegalGPTScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeSelected from '../../assets/tab-home-selected.png'
import HomeUnSelected from '../../assets/tab-home-unselected.png'
import NewsUnSelected from '../../assets/news-icon-unselected.png'
import NewsSelected from '../../assets/news-icon-selected.png'
import CallUnselected from '../../assets/CallUnselected.png'
import CallSelected from '../../assets/CallSelected.png'
import ProfileUnSelected from '../../assets/profile-icon-unselected.png'
import ProfileSelected from '../../assets/profile-icon-selected.png'

import Entypo from 'react-native-vector-icons/Entypo';
import UserOnboarding from '../user/Onboarding';
import AuthFlow from '../AuthFlow/AuthFlow';
import styles from '../../styles';
import MessageScreen from '../client/MessageScreen';
import ProfileScreen from '../client/ProfileScreen';
import SignupClient from '../AuthFlow/SignupClient';
import SignupCilentScreen from '../AuthFlow/SignupClientScreen';
import SignupUser from '../AuthFlow/SignupUser';
import LoginUser from '../AuthFlow/LoginUser';
import LoginClient from '../AuthFlow/LoginClient';
import ForgetPassword from '../AuthFlow/ForgetPassword';
import CallLogScreen from '../user/CallLog';
import ContactList from '../client/Onboarding/ContactList';
import ClientGigsScreen from '../user/ClientGigsScreen';
import ExpandedNewsScreen from '../ExpandedNewsScreen';
import SignupLawyer from '../AuthFlow/SignupLawyer';
import CustomDrawer from '../../components/CustonDrawer';


const UserCall = createNativeStackNavigator();
const Root = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Tab2 = createBottomTabNavigator();
const News = createNativeStackNavigator();
const UserNews = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function UserFlow(){
  return(
    <Tab.Navigator 
      initialRouteName='NewsFlow'
      screenOptions={
        {
          headerShown: false,
          tabBarLabel: "",
          tabBarHideOnKeyboard: true,
          tabBarStyle:{
            backgroundColor: '#8940FF',
            borderTopWidth: 0,
          },
          
          tabBarIcon: ({focused}) =>{
            return(
              focused ? (<Image 
                source={HomeSelected} 
                style={[styles.iconFocus,{marginTop: 10}]}
                />) : (
                <Image 
                  source={HomeUnSelected} 
                  style={styles.iconUnFocus} 
                />)
              
            )
          }
        }
      }
    >
      <Tab.Screen
        component={USerCallLog} 
        name="USerCallLog"
        options={
          {
            headerShown: false,
            tabBarLabel: "",
            tabBarStyle:{
              backgroundColor: '#8940FF',
              borderTopWidth: 0,
            },
            tabBarIcon: ({focused}) =>{
              return(
                focused ? (<Image 
                  source={HomeSelected} 
                  style={[styles.iconFocus,{marginTop: 10}]}
                  />) : (
                  <Image 
                    source={HomeUnSelected} 
                    style={styles.iconUnFocus} 
                  />)
                
              )
            }
          }
        }
        
      />
      <Tab.Screen 
        component={NewsScreen} 
        name="NewsScreen" 
        options={
          {
            headerShown: false,
            tabBarLabel: "",
            tabBarStyle:{
              backgroundColor: '#8940FF',
              borderTopWidth: 0,
            },
            tabBarIcon: ({focused}) =>{
              return(
                focused ? (<Image 
                  source={NewsSelected} 
                  style={[styles.iconFocus,{marginTop: 10}]}
                  />) : (
                  <Image 
                    source={NewsUnSelected} 
                    style={styles.iconUnFocus} 
                  />)
                
              )
            }
          }
        }
      />
      <Tab.Screen 
        component={MessageScreen} 
        name="MessageScreen" 
        options={
          {
            headerShown: false,
            tabBarLabel: "",
            tabBarStyle:{
              backgroundColor: '#8940FF',
              borderTopWidth: 0,
            },
            tabBarIcon: ({focused}) =>{
              return(
                focused ? (<Image 
                  source={CallSelected} 
                  style={[styles.iconFocus,{marginTop: 10, height:25, width: 25}]}
                  />) : (
                  <Image 
                    source={CallUnselected} 
                    style={styles.iconUnFocus} 
                  />)
                
              )
            }
          }
        }
      />
      <Tab.Screen 
        component={ProfileScreen} 
        name="ProfileScreen" 
        options={
          {
            headerShown: false,
            tabBarLabel: "",
            tabBarStyle:{
              backgroundColor: '#8940FF',
              borderTopWidth: 0,
            },
            tabBarIcon: ({focused}) =>{
              return(
                focused ? (<Image 
                  source={ProfileSelected} 
                  style={[styles.iconFocus,{marginTop: 10}]}
                  />) : (
                  <Image 
                    source={ProfileUnSelected} 
                    style={styles.iconUnFocus} 
                  />)
                
              )
            }
          }
        }
      />
    </Tab.Navigator>
  )
}

function USerCallLog(){
  return(
    <UserCall.Navigator initialRouteName='UserOnboarding' screenOptions={{headerShown: false}}>
      <UserCall.Screen
        component={UserOnboarding} name="UserOnboarding" 
      />
      <UserCall.Screen
        component={CallLogScreen} name="UserCallLogScreen" 
      />
    </UserCall.Navigator>
  )
}

function UserNewsFlow(){
  return(
    <UserNews.Navigator screenOptions={{headerShown: false}}>
        <UserNews.Screen component={UserOnboarding} name="UserOnboarding"/>
        <UserNews.Screen component={NewsScreen} name="NewsScreen" />
    </UserNews.Navigator>
  )
}

// Client App flow

function ClientTabNavigator  () {

  return(
    <Tab.Navigator 
      initialRouteName='NewsFlow'
      screenOptions={
        {
          headerShown: false,
          tabBarLabel: "",
          tabBarHideOnKeyboard: true,
          tabBarStyle:{
            backgroundColor: '#8940FF',
            borderTopWidth: 0,
          },
          
          tabBarIcon: ({focused}) =>{
            return(
              focused ? (<Image 
                source={HomeSelected} 
                style={[styles.iconFocus,{marginTop: 10}]}
                />) : (
                <Image 
                  source={HomeUnSelected} 
                  style={styles.iconUnFocus} 
                />)
              
            )
          }
        }
      }
    >
      <Tab.Screen
        component={NewsFlow} 
        name="News"
        options={
          {
            headerShown: false,
            tabBarLabel: "",
            tabBarStyle:{
              backgroundColor: '#8940FF',
              borderTopWidth: 0,
            },
            tabBarIcon: ({focused}) =>{
              return(
                focused ? (<Image 
                  source={HomeSelected} 
                  style={[styles.iconFocus,{marginTop: 10}]}
                  />) : (
                  <Image 
                    source={HomeUnSelected} 
                    style={styles.iconUnFocus} 
                  />)
                
              )
            }
          }
        }
        
      />
      <Tab.Screen 
        component={NewsScreen} 
        name="NewsScreen" 
        options={
          {
            headerShown: false,
            tabBarLabel: "",
            tabBarStyle:{
              backgroundColor: '#8940FF',
              borderTopWidth: 0,
            },
            tabBarIcon: ({focused}) =>{
              return(
                focused ? (<Image 
                  source={NewsSelected} 
                  style={[styles.iconFocus,{marginTop: 10}]}
                  />) : (
                  <Image 
                    source={NewsUnSelected} 
                    style={styles.iconUnFocus} 
                  />)
                
              )
            }
          }
        }
      />
      <Tab.Screen 
        component={ContactList} 
        name="ContactList" 
        options={
          {
            headerShown: false,
            tabBarLabel: "",
            tabBarStyle:{
              backgroundColor: '#8940FF',
              borderTopWidth: 0,
            },
            tabBarIcon: ({focused}) =>{
              return(
                focused ? (<Image 
                  source={CallSelected} 
                  style={[styles.iconFocus,{marginTop: 10, height:20, width: 20}]}
                  />) : (
                  <Image 
                    source={CallUnselected} 
                    style={[styles.iconUnFocus,{height:21, width: 21}]} 
                  />)
                
              )
            }
          }
        }
      />
      <Tab.Screen 
        component={ProfileScreen} 
        name="ProfileScreen" 
        options={
          {
            headerShown: false,
            tabBarLabel: "",
            tabBarStyle:{
              backgroundColor: '#8940FF',
              borderTopWidth: 0,
            },
            tabBarIcon: ({focused}) =>{
              return(
                focused ? (<Image 
                  source={ProfileSelected} 
                  style={[styles.iconFocus,{marginTop: 10}]}
                  />) : (
                  <Image 
                    source={ProfileUnSelected} 
                    style={styles.iconUnFocus} 
                  />)
                
              )
            }
          }
        }
      />
    </Tab.Navigator>
  )

}

// function ClientDrawerNavigator () {

//   return (
//     <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props}/>}>
//      <Drawer.Screen 
//         component={ClientTabNavigator} name="Home" options={{headerShown:false}}/>
//         <Drawer.Screen component={LegalGPTScreen} name='Legal GPT' options={{headerShown:false}}/>
//         <Drawer.Screen component={NewsScreen} name="News" options={{headerShown:false}}/>
//     </Drawer.Navigator>
//   )
// }


function ClientFlow(){
  
  return(
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props}/>}>
     <Drawer.Screen 
        component={ClientTabNavigator} name="Home" options={{headerShown:false}}/>
        <Drawer.Screen component={LegalGPTScreen} name='Legal GPT' options={{headerShown:false}}/>
        <Drawer.Screen component={NewsScreen} name="News" options={{headerShown:false}}/>
    </Drawer.Navigator>
    
  )
}



function NewsFlow(){
  return(
    <News.Navigator initialRouteName='OnboardingSnippet' screenOptions={{headerShown: false}}>
      <News.Screen component={Onboarding} name="OnboardingSnippet" />
      <News.Screen component={NewsScreen} name="NewsScreen" />
      <News.Screen component={ContactList} name="ContactList" />
      <News.Screen component={MessageScreen}
      name='MessageScreen' />
    </News.Navigator>
)}

function AppFlow(){
  return(
    <AppStack.Navigator initialRouteName='Auth' screenOptions={{headerShown: false}}>
      <AppStack.Screen component={AuthFlow} name="Auth" />
      {/* <AppStack.Screen component={SignupClient} name="SignupUser" /> */}
      
      <AppStack.Screen component={SignupCilentScreen} name="SignupUser"/>
      <AppStack.Screen component={SignupLawyer} name="SignupLawyer"/>
      {/* <AppStack.Screen component={LoginUser} name = "LoginUser" /> */}
      <AppStack.Screen component={ClientFlow} name= "ClientFlow" />
      <AppStack.Screen component={UserFlow} name= "UserFlow" />
    </AppStack.Navigator>
  )
}

function Base() {
    return (
       <NavigationContainer>
         <Root.Navigator screenOptions={{ headerShown: false }}>
          <Root.Screen component={AppFlow} name="AppFlow" />
           {/* <Root.Screen component={ClientFlow} name="UserFlow" /> */}
           {/* <Root.Screen component={Onboarding} name="Onboarding" />/ */}
           {/* <Root.Screen component={AuthFlow} name="AuthFlow" /> */}
           {/* <Root.Screen component={UserFlow} name="UserFlow" /> */}
           {/* <Root.Screen component={ClientFlow} name="ClientFlow" /> */}
           {/* <Root.Screen component={SignupClient} name="SignupClient" /> */}
           <Root.Screen component={ExpandedNewsScreen} name="ExpandedNewsScreen" />
         </Root.Navigator>
       </NavigationContainer>
    );
   }

export default Base