import React, { Component } from 'react'
import './index.less'
import { connect } from 'react-redux'
import avatar from '@/assets/sider_avatar.jpg'
import { Link } from 'react-router-dom'

import { Divider, Tag } from 'antd'

// colorList

const colorList = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple']

function random() {
  const len = colorList.length
  return Math.floor(Math.random() * len)
}

@connect(state => state.article)
class BolgSider extends Component {
  jumpTo = value => {
    console.log(value)
  }

  render() {
    const { recentList, tags } = this.props
    return (
      <div className="sider-wrapper">
        <img src={avatar} className="sider-avatar" alt="" />
        <h2 className="name">Lzwee</h2>
        <div className="title">nodejs工程师</div>
        <Divider orientation="left">最近文章</Divider>
        <ul className="recent-list">
          {recentList.map(d => (
            <li key={d.id}>
              <Link to={`/${d.id}`}>{d.title}</Link>
            </li>
          ))}
        </ul>
        <Divider orientation="left">标签</Divider>
        <div className="tags-content">
          {tags.map((tag, i) => (
            <Tag key={i} color={colorList[i] ? colorList[i] : colorList[random()]}>
              <Link to={tag}>{tag}</Link>
            </Tag>
          ))}
        </div>
      </div>
    )
  }
}

export default BolgSider
