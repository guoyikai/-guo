import Taro, { Component } from '@tarojs/taro'
import { View, Text,Map,Image ,Button,CoverView,CoverImage} from '@tarojs/components'
import {connect} from "@tarojs/redux"
import './index.scss';
import location from "../../images/location.png"
import my from "../../images/my.png"
 class Index extends Component {
  constructor(){
    super();
    this.state={
      markers: [{
        iconPath: '/resources/others.png',
        id: 0,
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        width: 50,
        height: 50
      }],
      
    }
  }
  config = {
    navigationBarTitleText: '一面而就'
  }
  
  componentWillMount () { }

  componentDidMount () {
    // console.log('地图定位！')
    // var that = this
    Taro.getLocation({
      type: 'wgs84',
      success:(res)=> {
        this.setState({
          latitude : res.latitude,
          longitude : res.longitude
        })  
        
        const speed = res.speed
        const accuracy = res.accuracy
      }
    })

   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
   
  
  render () {
    return (
      <View className='index'>
             <Map
              id="map"
              longitude={this.state.longitude}
              latitude={this.state.latitude}
              scale="16"
              bindcontroltap="controltap"
              markers={this.state.markers}
              showLocation="true"
              style="width: 100%; height:458px;"
        ></Map>
            
                      <CoverImage class="left" onClick={this.clickcontrol} src={location} ></CoverImage>
                      <CoverImage class="right" src={my} onClick={this.me}></CoverImage>
              
            <View class="btn" onClick={this.add}>添加面试</View>
      </View>
    )
  }
  clickcontrol=(e)=>{
    console.log(1)
    let mpCtx = wx.createMapContext("map");
    mpCtx.moveToLocation();
 }
  add=()=>{
    Taro.navigateTo({
      url:"/pages/add/index"
    })
  }
  me=()=>{
    Taro.navigateTo({
      url:"/pages/my/index"
    })
  }
}
const propsdata=state=>{
  return {
    ...state.getNum
  }
}
export default connect(propsdata)(Index)