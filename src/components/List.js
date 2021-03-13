import PropTypes from 'prop-types'
import FadeAnimation from '../animation/FadeAnimation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faVideo, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const List = ({ items, selectedItem, setSelectedItem, action }) => {

  return (
    <FadeAnimation delay={0.5}>
      <div className='card' style={{ width: '500px' }}>
        <ul className='list-group' style={{border: '0px solid white !important'}}>
          { items.map(item => (
            <li key={ item.socketId } style={{ cursor: 'pointer', height:'50px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box', borderColor: '0px solid #eaf8f2 !important' }} onClick={() => action({ video: true, audio: true })} className={ 'list-group-item second-bg-color' }>
              <div style={{ flex: 11, color: '#22b07d' }}>
                { item.name }
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                <div style={{ color: '#22b07d', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                  <FontAwesomeIcon icon={faChevronRight}/>
                </div>
              </div>
              
            </li>
          )) }
        </ul>
      </div>
    </FadeAnimation>
  )
}

export default List

List.propTypes = {
  items: PropTypes.array,
  selectedItem: PropTypes.object,
  setSelectedItem: PropTypes.func,
  action: PropTypes.func
}