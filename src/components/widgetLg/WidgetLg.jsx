import './widgetLg.scss'

const WidgetLg = () => {

  const Button = ({type}) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>
  }
  return (
    <div className='widgetLg'>
        <span className="widgetLgTitle">Latest Transactions</span>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://buzzly.info/upload/1758/06f58cecd517e250fcc57a550b954312.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Mar 2021</td>
            <td className="widgetLgAmount">$225.00</td>
            <td className="widgetLgStatus"><Button type="Approved"/></td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://buzzly.info/upload/1758/06f58cecd517e250fcc57a550b954312.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Mar 2021</td>
            <td className="widgetLgAmount">$225.00</td>
            <td className="widgetLgStatus"><Button type="Declined"/></td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://buzzly.info/upload/1758/06f58cecd517e250fcc57a550b954312.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Mar 2021</td>
            <td className="widgetLgAmount">$225.00</td>
            <td className="widgetLgStatus"><Button type="Pending"/></td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://buzzly.info/upload/1758/06f58cecd517e250fcc57a550b954312.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Mar 2021</td>
            <td className="widgetLgAmount">$225.00</td>
            <td className="widgetLgStatus"><Button type="Approved"/></td>
          </tr>
        </table>
    </div>
  )
}

export default WidgetLg