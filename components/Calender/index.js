import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'

const Calendar = () => {
  const matchList = [
    { id: '0', name: '周计划', startTime: '2022-03-19 06:30:00', type: 1 },
    { id: '2', name: '自建日程', startTime: '2022-03-22 09:00:00', type: 2 },
    { id: '3', name: '周计划', startTime: '2022-03-23 12:30:00', type: 1 },
    { id: '4', name: '周计划', startTime: '2022-03-24 08:30:00', type: 1 }
  ];

  matchList &&
    matchList.forEach((item) => {
      item.title = item.name
      item.start = item.startTime
      item.borderColor = item.type === 1 ? '#62D78E' : '#416EFF'
    })

  const eventClick = (eventInfo) => {
    console.log(eventInfo)
    console.log(eventInfo.event._def)
  }

  return (
      <div className='my-calender'>
        <FullCalendar
          // height={800}
          // aspectRatio={2} // 宽度为高度的2倍
          initialView="dayGridMonth" // 初始化在week维度
          plugins={[dayGridPlugin, timeGridPlugin]}
          headerToolbar={{
            left: 'prevYear,prev', // prevYear,prev,next,nextYear today 上一年，上一月，下一月，下一年 今天(逗号为紧相邻，空格为有间隙，不写哪个就不展示哪个按钮)
            center: 'title,today', // 默认显示当前年月
            // right: 'dayGridMonth,timeGridWeek,timeGridDay' // 右侧月 周 天切换按钮
            right: 'next,nextYear'
          }}
          locale="en-US"
          buttonText={{ today: 'Today', month: 'month' }}
          allDaySlot={false} // 不显示all-day
          firstDay={6} // 从周六开始
          scrollTime={'06:00:00'} // 初始滚动条滚动到的时间位置：6点
          slotLabelFormat={{ hour: '2-digit', minute: '2-digit', meridiem: false, hour12: false }} // 左侧时间格式
          weekNumbers // 显示一年中的第n周
          eventSources={[matchList]} // 数据源
          // defaultTimedEventDuration={'01:00:00'} // 当没有设置endTime时的持续时间为1个小时
          // displayEventEnd
          eventClick={eventClick}
        />
      </div>
  )
}

export default Calendar;