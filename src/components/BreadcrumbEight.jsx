import { Link } from "react-router-dom";

const BreadcrumbEight = ({ items = [] }) => {  // Added default value for items
  return (
    <section className="breadcrumb border-bottom p-0 d-block section-bg position-relative z-index-1">
      <div className="breadcrumb-two">
        <img
          src="assets/images/gradients/breadcrumb-gradient-bg.png"
          alt=""
          className="bg--gradient"
        />
        <div className="container container-two">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="breadcrumb-two-content text-center">
                <ul className="breadcrumb-list flx-align gap-2 mb-2 justify-content-center">
                  {items.map((item, index) => (
                    <li 
                      key={index} 
                      className={`breadcrumb-list__item font-14 ${
                        index === items.length - 1 
                          ? "text-main fw-semibold" 
                          : "text-body"
                      }`}
                    >
                      {index > 0 && (
                        <span className="breadcrumb-list__icon font-10 mx-2">
                          <i className="fas fa-chevron-right" />
                        </span>
                      )}
                      {item.path ? (
                        <Link
                          to={item.path}
                          className={`breadcrumb-list__link ${
                            index === items.length - 1 
                              ? "text-main hover-text-main" 
                              : "text-body hover-text-main"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <span className="breadcrumb-list__text">
                          {item.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
                {items.length > 0 && (  // Added check before accessing last item
                  <h3 className="breadcrumb-two-content__title mb-0 text-capitalize">
                    {items[items.length - 1].label}
                  </h3>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbEight;