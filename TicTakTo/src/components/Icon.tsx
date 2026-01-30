import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { PropsWithChildren } from 'react';

type IconsProps = PropsWithChildren<{
    name: string;
}>

const Icons = ({name}:IconsProps) =>{
    
      switch (name) {
        case "circle":
          return <FontAwesome6 name="circle" size={64} color="#000" />
          break;
        
        case "circle-xmark":
          return <FontAwesome6 name="circle-xmark" size={64} color="#000" />
          break;  

        
        default:
          return <FontAwesome6 name="pencil" size={64} color="#000" iconStyle="solid"/>
          break;
      }
    }
     
export default Icons;
  
