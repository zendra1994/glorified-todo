import React from 'react';

export default class MyWeekEvent extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    Object.assign(
      this.eventDiv.style,
      {
        'height': this.props.durationInMin * this.props.minuteInPixels,
        'top': this.calculateStartPoint(
            this.props.timeOfDay, 
            this.props.hour,
            this.props.startInMin
        )
      }
    )
  }

  calculateStartPoint(timeOfDay, hour, startInMin) {
    //set child top position
    let top = 54; //default starting point
    
    if(timeOfDay === 'PM') {
      // 720
      return top += (this.props.hourInMinutes * this.props.minuteInPixels * 4) + startInMin * this.props.minuteInPixels;
    }
    if(timeOfDay === 'AM' && hour >= 8) {
      // - 1440
      return top += (-this.props.hourInMinutes * this.props.minuteInPixels * 8) + startInMin * this.props.minuteInPixels;
    }
    if(timeOfDay === 'AM' && hour <= 7) {
      // 2880
      return top += (this.props.hourInMinutes * this.props.minuteInPixels * 16) + startInMin * this.props.minuteInPixels;
    }

    return top;
  }

  render() {
    return (
      <section 
        ref={eventDiv => this.eventDiv = eventDiv}
        id={`event-${this.props.eventId}`}
        className={'day-event absolute width-100 flex flex--column'}
        data-priority={this.props.priority}>
        <header><h2>{this.props.eventHeadline}</h2></header>
        <div className={'event-details flexible'}>{this.props.eventDesc}</div>
      </section>
    )
  }
}