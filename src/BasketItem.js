import React from "react";
import "./BasketItem.css";

function BasketItem({ item, key, setBasket, basket }) {


  return (
    <div key={key}>
      <div className="mainCont">
        <div className="imgCont">
          <img
            src={item.img}
            style={{ width: 200, height: 150, borderRadius: 13 }}
          />
        </div>

        <div className="itemFunc">
          <p style={{ fontFamily: "Montserrat" }}>
            {item.name}{" "}
            <p style={{ fontFamily: "Montserrat", fontSize: 13 }}>
              {item.price}€{" "}
            </p>{" "}
          </p>
          <div className="arrowsCont">
            <div
              className="arrow"
              onClick={() => {
                let newbasket = basket.slice();

                newbasket.forEach((it, ind) => {
                  if (it.key === item.key) {
                    parseInt(item.quantity, 10) - 1 > 0
                      ? (it.quantity = parseInt(item.quantity, 10) - 1)
                      : newbasket.splice(ind, 1);
                  }
                });

                setBasket([...newbasket]);
              }}
            >
              <img
                className="cursor"
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 13,
                  transform: `rotate(90deg)`
                }}
                src={require("./assets/arrow.png")}
              />
            </div>

            <div>
              <p className="quant">{item.quantity}</p>
            </div>

            <div
              className="arrow"
              onClick={() => {
                let newbasket = basket.slice();
                newbasket.forEach(it => {
                  if (it.key === item.key) {
                    it.quantity = parseInt(item.quantity, 10) + 1;
                  }
                });

                setBasket([...newbasket]);
              }}
            >
              <img
                className="cursor"
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 13,
                  transform: `rotate(270deg)`
                }}
                src={require("./assets/arrow.png")}
              />
            </div>
          </div>
        </div>

        <div
          style={{ marginLeft: "auto" }}
          onClick={() => {
            let newbasket = basket.slice();

            newbasket.forEach((it, ind) => {
              if (it.key === item.key) {
                newbasket.splice(ind, 1);
              }
            });

            setBasket([...newbasket]);
          }}
        >
          <img className="cancel" src={require("./assets/cancel.png")} />
        </div>
      </div>
    </div>
  );
}

export default BasketItem;
