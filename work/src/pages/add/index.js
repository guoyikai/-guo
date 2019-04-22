import Taro, { Component } from '@tarojs/taro'
import { View, Text,Map,Image ,Button,CoverView,CoverImage,Input,Textarea,Picker} from '@tarojs/components'
import {connect} from "@tarojs/redux"
import './index.scss';
 class Index extends Component {
  constructor(){
    super();
    this.state={
      date: "2019-04-06",
      title:"",
      number:"",
      say:"",
      adds:"请输入面试地址",
    }
  }
  config = {
    navigationBarTitleText: '添加面试'
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
            <View class="header">面试信息</View>
            <View class="inp">
              <Text>公司名称</Text>
              <Input type="text" placeholder="请输入公司名称" onInput={this.title}/>
            </View>
            <View class="inp">
              <Text>公司电话</Text>
              <Input type="text" placeholder="请输入面试联系人电话" onInput={this.number}/>
            </View>
            <View class="inp">
                  <View class="section">
                      <Picker
                        mode="date"
                        value={this.state.date}
                        // start="2015-09-01"
                        // end="2017-09-01"
                      onChange={this.bindDateChange}
                      >
                            <View class="picker">
                            面试时间: <Text>{this.state.date}</Text>
                            </View>
                      </Picker>
                </View>
            </View>
            <View class="inp">
              <Text>面试地址</Text>
              <View  onClick={this.addres}>{this.state.adds}</View>
            </View>
            <View class="header">备注信息</View>
            <View class="context">
                  <Textarea placeholder="备注信息(可选，100个字以内)" onInput={this.say}></Textarea>
            </View>
            <View class="button" class={this.state.data!=""&&this.state.title!=""&&this.state.number!=""&&this.state.adds!=""?"sure":"active"} onClick={this.sure}>确定</View>
      </View>
    )
  }
  title=(e)=>{
      this.setState({
        title:e.target.value
      })
  }
  number=(e)=>{
    this.setState({
      number:e.target.value
    })
}
say=(e)=>{
  console.log(e.target.value)
  this.setState({
    say:e.target.value
  })
}
  addres=()=>{
    Taro.navigateTo({
      url:"/pages/addres/index"
    })
  }
  bindDateChange=(e)=>{
    this.setState({
      date: e.detail.value
    })
  }
  sure=()=>{
    console.log(this.state)
  Taro.showModal({
    title:"面试信息"
  })
  }
}

const propsdata=state=>{
  return {
    ...state.getNum
  }
}
export default connect(propsdata)(Index)