import { PropTypes } from 'prop-types';
import { sizeNames } from './definitions.js';

export const WidgRow = ({edition, date, finish, size, cost}) => (
    <tr>
        <td>
            {date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}
        </td>
        <td>
            {edition}
        </td>
        <td>
            {(finish) ? finish : "Unknown"}
            </td>
        <td>
            {sizeNames[size]}
        </td>
        <td>
            {(cost) ? cost : "Call"}
        </td>
    </tr>
)

WidgRow.defaultProps = {
    edition: "Default",
    date: new Date("1969-01-02"),
    size: 3
}

WidgRow.propTypes = {
    edition: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    finish: PropTypes.string,
    size: PropTypes.number,
    cost: PropTypes.number
}
