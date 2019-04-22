import Taro, { Component } from '@tarojs/taro'
import { View, Text,Map,Image ,Button,CoverView,CoverImage,Input,Textarea,Picker} from '@tarojs/components'
import {connect} from "@tarojs/redux"
import './index.scss';
import my from "../../images/my.png"
import right from "../../images/arrow.svg"
 class Index extends Component {
  constructor(){
    super();
    this.state={
    }
  }
  config = {
    navigationBarTitleText: '个人中心'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
 
  render () {
    console.log(this.props.list)
    return (
      <View className='index'>
          <View class="icon">
              <View class="con">
                  <CoverImage class="img" src={my}></CoverImage>
              </View>
          </View>
          <View class="li">
            <Text>我的面试</Text>
            <CoverImage class="right" src={right}></CoverImage>
          </View>
          <View class="li">
            <Text>我的面试</Text>
            <CoverImage class="right" src={right}></CoverImage>
          </View>
      </View>
    )
  }

}

const propsdata=state=>{
  return {
    ...state.getNum
  }
}
export default connect(propsdata)(Index)