import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { useEffect } from "react";

function PopOverCuscomer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {["bottom"].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key="bottom"
          placement="bottom"
          overlay={
            <Popover id={`popover-positioned-bottom`}>
              <Popover.Header as="h3">{`Customer Credentials`}</Popover.Header>
              <Popover.Body>
                <p>User: customer@customer.com</p> Password: customer
              </Popover.Body>
            </Popover>
          }
        >
          <button className="credential-button mt-4">GET CUSTOMER CREDENTIALS</button>
        </OverlayTrigger>
      ))}
    </>
  );
}

export default PopOverCuscomer;
