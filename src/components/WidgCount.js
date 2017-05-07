import { PropTypes } from 'prop-types';
import '../stylesheets/ui.scss';

export const WidgCount = ({total, finish, size, cost}) => (
    <div className="per-widget-count">
        <div className="total-widgets">
            <span>{total}</span>

            <span>unique widget styles in stock!</span>
        </div>
        <div className="finish-units">
            <span>{finish}</span>

            <span>units</span>
        </div>
        <div className="size-units">
            <span>{size}</span>

            <span>units</span>
        </div>
        <div className="cost-units">
            <span>{cost}</span>

            <span>widgets</span>
        </div>
    </div>
)

WidgCount.defaultProps = {
    total: 100,
    finish:90,
    size:10,
    cost: 30
}

WidgCount.propTypes = {
    total: PropTypes.number,
    finish: PropTypes.number,
    size: PropTypes.number,
    cost: PropTypes.number
}
