import Taro, { Component } from '@tarojs/taro'
import { View, Text,Map,Image ,Button,CoverView,CoverImage,Input,Textarea} from '@tarojs/components'
import {connect} from "@tarojs/redux"
import './index.scss';
 class Index extends Component {
  constructor(){
    super();
    this.state={
  
    }
  }
  config = {
    navigationBarTitleText: '添加面试地址'
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
            面试地址
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