
import Chart from 'react-apexcharts';


let options = {
  chart: {
    id: 'apexchart-example'
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
  }
}

let series = [{
  name: 'series-1',
  data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
}]

const DashboardEarning = () => {
  return (
    <div className="dashboard-body__content">
      <div className="card common-card">
        <div className="card-body">
          <div className="row gy-4">
            <div className="col-lg-4 col-sm-6">
              <div className="earning-card position-relative z-index-1">
                <img
                  src="assets/images/gradients/testimonial-bg.png"
                  alt=""
                  className="hover-bg visible opacity-100"
                />
                <div>
                  <h6 className="earning-card__title font-body font-16 mb-2 text-white fw-600">
                    Procuring This Month
                  </h6>
                  <p className="earning-card__text font-14  text-white fw-200">
                    Sales earnings this month (March), after associated author fees,
                    &amp; before taxes:
                  </p>
                </div>
                <div>
                  <h5 className="earning-card__amount mb-1 mt-3 pt-3 border-top text-white">
                    $6422
                  </h5>
                  <p className="earning-card__text font-14  text-white fw-200">
                    All out Procuring after purchaser charge
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="earning-card position-relative z-index-1">
                <img
                  src="assets/images/gradients/testimonial-bg.png"
                  alt=""
                  className="hover-bg visible opacity-100"
                />
                <div>
                  <h6 className="earning-card__title font-body font-16 mb-2 text-white fw-600">
                    Your Balance
                  </h6>
                </div>
                <div>
                  <h5 className="earning-card__amount mb-1 mt-3 pt-3 border-top text-white">
                    $6422
                  </h5>
                  <p className="earning-card__text font-14  text-white fw-200">
                    Your Total Blance
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="earning-card position-relative z-index-1">
                <img
                  src="assets/images/gradients/testimonial-bg.png"
                  alt=""
                  className="hover-bg visible opacity-100"
                />
                <div>
                  <h6 className="earning-card__title font-body font-16 mb-2 text-white fw-600">
                    Absolute Worth of Your Deals.
                  </h6>
                  <p className="earning-card__text font-14  text-white fw-200">
                    Total Value of your sales, before taxes:{" "}
                  </p>
                </div>
                <div>
                  <h5 className="earning-card__amount mb-1 mt-3 pt-3 border-top text-white">
                    $6422
                  </h5>
                  <p className="earning-card__text font-14  text-white fw-200">
                    Total Value of Sale Before Fee
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="dashboard-card">
                <div className="dashboard-card__header">
                  <h6 className="dashboard-card__title mb-0">Item Sales</h6>
                </div>
                <Chart options={options} series={series} type="area" width={"100%"} height={"100%"} />
              </div>
            </div>
            
            <div className="col-lg-12">
              <div className="card common-card border shadow-none border-gray-five">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table text-body mt--24">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Item Sales Count</th>
                          <th>Earning</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td> Friday</td>
                          <td> 2</td>
                          <td> $5.31</td>
                        </tr>
                        <tr>
                          <td> Saturday</td>
                          <td> 6</td>
                          <td> $30.62</td>
                        </tr>
                        <tr>
                          <td> Sunday</td>
                          <td> 10</td>
                          <td> $100.34</td>
                        </tr>
                        <tr>
                          <td> Monday</td>
                          <td> 1</td>
                          <td> $21.24</td>
                        </tr>
                        <tr>
                          <td> Tuesday</td>
                          <td> 3</td>
                          <td> $32.56</td>
                        </tr>
                        <tr>
                          <td> Wednesday</td>
                          <td> 1</td>
                          <td> $5.15</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default DashboardEarning;