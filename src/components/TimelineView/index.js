import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import {Head, Container, Card, ChronoDiv, CardHead} from './styledComponents'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <Container>
      <Card>
        <CardHead>
          <Head>MY JOURNEY OF</Head>CCBP 4.0"
        </CardHead>
        <ChronoDiv>
          <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
            {timelineItemsList.map(item =>
              item.categoryId === 'COURSE' ? (
                <CourseTimelineCard key={item.id} data={item} />
              ) : (
                <ProjectTimelineCard key={item.id} data={item} />
              ),
            )}
          </Chrono>
        </ChronoDiv>
      </Card>
    </Container>
  )
}

export default TimelineView
