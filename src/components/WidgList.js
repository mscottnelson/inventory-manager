import { WidgRow } from './WidgRow';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router';

export const WidgList = ({widgets, filter}) => {
  const filteredWidgets = (!filter || !filter.match(/finish|size|cost/)) ?
    widgets : widgets.filter(widget => widget[filter])

  return (
    <div className="per-widget-list">
    <table>
        <thead>
            <tr>
                <th>Last Update</th>
                <th>Edition</th>
                <th>Finish</th>
                <th>Size</th>
                <th>Cost</th>
            </tr>
            <tr>
              <td>
                <Link to="/list-widgets">
                  All widgets
                </Link>
              </td>
              <td>
                <Link to="/list-widgets/edition">
                  Edition widgets
                </Link>
              </td>
              <td>
                <Link to="/list-widgets/finish">
                  Finish widgets
                </Link>
              </td>
              <td>
                <Link to="/list-widgets/size">
                  Size widgets
                </Link>
              </td>
              <td>
                <Link to="/list-widgets/cost">
                  Cost widgets
                </Link>
              </td>
            </tr>
        </thead>
        <tbody>
            {filteredWidgets.map((widget, i) =>
            <WidgRow key={i}
                    {...widget} />
            )}
        </tbody>
    </table>
  </div>
)
}

WidgList.propTypes = {
    widgets: function(props){
        if(!Array.isArray(props.widgets)){
            return new Error("WidgList should be an array");
        }else if(!props.widgets.length){
                return new Error("WidgList must have at least one record");
        } else {
                return null;
        }
    }
}
