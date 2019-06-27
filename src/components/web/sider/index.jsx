import React, { Component } from 'react'
import './index.less'
import { connect } from 'react-redux'
import avatar from '@/assets/sider_avatar.jpg'
import { Link } from 'react-router-dom'

import { Divider, Tag, Icon } from 'antd'

function random(colorList) {
  const len = colorList.length
  return Math.floor(Math.random() * len)
}

@connect(state => state.article)
class BolgSider extends Component {
  render() {
    const { recentList, tagList, colorList } = this.props
    return (
      <div className="sider-wrapper">
        <img src={avatar} className="sider-avatar" alt="" />
        <h2 className="name">Lzwee</h2>
        <div className="title">nodejs工程师</div>
        <ul className="link-list">
          <li>
            <Icon type="github" />
            <a target="_blank" rel="noreferrer noopener">
              github
            </a>
          </li>
          <li>
            <i className="iconfont icon-juejin" />
            <a target="_blank" rel="noreferrer noopener">
              juejin
            </a>
          </li>
        </ul>

        <Divider orientation="left">最近文章</Divider>
        <ul className="recent-list">
          {recentList.map(d => (
            <li key={d.id}>
              <Link to={`/article/${d.id}`}>{d.title}</Link>
            </li>
          ))}
        </ul>
        <Divider orientation="left">标签</Divider>
        <div className="tags-content">
          {tagList.map((tag, i) => (
            <Tag key={i} color={colorList[i] ? colorList[i] : colorList[random(colorList)]}>
              <Link to={tag.name}>{tag.name}</Link>
            </Tag>
          ))}
        </div>
      </div>
    )
  }
}

export default BolgSider
