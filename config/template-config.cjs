/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: 'EdJnVNNotpLh0GhtuQr_0kBwFgbEEGVBr59Su0aJkRE',
    title: '小宝, 早上好',
    desc: `
      **{{date.DATA}}**
      
      下个休息日：{{holidaytts.DATA}}
      
      ---
      
      城市：{{city.DATA}}
      
      天气：{{weather.DATA}}
      
      气温(最高/最低):{{max_temperature.DATA}} / {{min_temperature.DATA}}
      
      风向: {{wind_direction.DATA}}
      
      风级: {{wind_scale.DATA}}
      
      注意: {{ganmao.DATA}}
      
      温馨提示: {{notice.DATA}}
      
      今日份星座运势：{{comprehensive_horoscope.DATA}}
      
      ---
      
      今天是我们相a爱的第{{love_day.DATA}}天
      
      距离宝贝生日还有这{{birthday_message.DATA}}天
      
      ---
      
      {{earthy_love_words.DATA}}
    `
  },
  {
    id: 'DqmkMvTPpnaQ10fd5m49N-zdTfAHpvyjtLTvcQtIs_A',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
