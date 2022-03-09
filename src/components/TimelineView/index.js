import {Chrono} from 'react-chrono'
import {Component} from 'react'
import CourseTimeLineCard from '../CourseTimelineCard'
import ProjectTimeLineCard from '../ProjectTimelineCard'
import './index.css'

class TimeLineView extends Component {
  renderTimelineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimeLineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimeLineCard key={item.id} courseDetails={item} />
  }

  render() {
    const {timelineItemsList} = this.props
    return (
      <div className="time-line-container">
        <div className="responsive-container">
          <div className="heading-container">
            <h1 className="heading">
              MY JOURNEY OF <br />
              <span className="ccbp-heading">CCBP 4.0</span>
            </h1>
          </div>
          <Chrono
            theme={{secondary: 'white'}}
            items={timelineItemsList}
            mode="VERTICAL_ALTERNATING"
          >
            {timelineItemsList.map(eachItem =>
              this.renderTimelineCard(eachItem),
            )}
          </Chrono>
        </div>
      </div>
    )
  }
}

export default TimeLineView
