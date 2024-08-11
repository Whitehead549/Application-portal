import React, { useRef } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { getOrderStatus } from '../../lib/helpers';
import { FaArrowRight } from 'react-icons/fa';

const recentOrderData = [
  // your data here
  {
    id: '1',
    product_id: '4324',
    customer_id: '23143',
    customer_name: 'Shirley A. Lape',
    order_date: '2022-05-17T03:24:00',
 
		current_order_status: 'Pendding',
    shipment_address: 'Cottage Grove, OR 97424'
  },
  {
		id: '2',
		product_id: '7453',
		customer_id: '96453',
		customer_name: 'Ryan Carroll',
		order_date: '2022-05-14T05:24:00',
	
		current_order_status: 'Approved',
		shipment_address: 'Los Angeles, CA 90017'
	},
	{
		id: '3',
		product_id: '5434',
		customer_id: '65345',
		customer_name: 'Mason Nash',
		order_date: '2022-05-17T07:14:00',

		current_order_status: 'Approved',
		shipment_address: 'Westminster, CA 92683'
	},
	{
		id: '4',
		product_id: '9854',
		customer_id: '87832',
		customer_name: 'Luke Parkin',
		order_date: '2022-05-16T12:40:00',

		current_order_status: 'Approved',
		shipment_address: 'San Mateo, CA 94403'
	},
	{
		id: '5',
		product_id: '8763',
		customer_id: '09832',
		customer_name: 'Anthony Fry',
		order_date: '2022-05-14T03:24:00',

		current_order_status: 'Pendding',
		shipment_address: 'San Mateo, CA 94403'
	},
	{
		id: '6',
		product_id: '5627',
		customer_id: '97632',
		customer_name: 'Ryan Carroll',
		order_date: '2022-05-14T05:24:00',

		current_order_status: 'Approved',
		shipment_address: 'Los Angeles, CA 90017'
	}
];

export default function Places() {
  const tableContainerRef = useRef(null);

  const scrollToRight = () => {
    if (tableContainerRef.current) {
      tableContainerRef.current.scrollLeft += 300; // Adjust this value to control the scroll distance
    }
  };

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Recent Orders</strong>
      <div className="relative">
        <div
          ref={tableContainerRef}
          className="border-x border-gray-200 rounded-sm mt-3 overflow-x-auto flex items-center"
        >
          <table className="min-w-full text-gray-700">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2 border-b text-sm font-medium"> ID</th>
                <th className="px-4 py-2 border-b text-sm font-medium"> Name</th>
                <th className="px-4 py-2 border-b text-sm font-medium">clearance Date</th>
                <th className="px-4 py-2 border-b text-sm font-medium">Screening status</th>
                <th className="px-4 py-2 border-b text-sm font-medium">Address</th>
                
              </tr>
            </thead>
            <tbody>
              {recentOrderData.length > 0 ? (
                recentOrderData.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border-b text-sm">
                      <Link to={`/product/${order.product_id}`}>#{order.product_id}</Link>
                    </td>
                    <td className="px-4 py-2 border-b text-sm">
                      <Link to={`/customer/${order.customer_id}`}>{order.customer_name}</Link>
                    </td>
                    <td className="px-4 py-2 border-b text-sm">{format(new Date(order.order_date), 'dd MMM yyyy')}</td>
                    <td className="px-4 py-2 border-b text-sm">{getOrderStatus(order.current_order_status)}</td>
                    <td className="px-4 py-2 border-b text-sm">{order.shipment_address}</td>
                   
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-4 py-2 text-center">No orders available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <button
          onClick={scrollToRight}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
          aria-label="Scroll right"
        >
          <FaArrowRight className="text-gray-700 lg:hidden md:hidden" />
        </button>
      </div>
    </div>
  );
}
