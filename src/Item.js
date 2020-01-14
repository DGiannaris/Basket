import React, { useState } from "react";
import "./Item.css";

function Item({ item, key, setBasket, basket }) {
  const [onmouse, setOnMouse] = useState(false);

  return (
    <div style={{ marginTop: 30 }} key={key}>
      <div className="itemCon">
        <div className="item">
          <img
            className="background-image"
            src={item.img}
            onMouseEnter={() => setOnMouse(true)}
            onMouseLeave={() => setOnMouse(false)}
            style={
              !onmouse
                ? { width: 200, height: 150, borderRadius: 13 }
                : { width: 200, height: 150 }
            }
          />
        </div>

        <div className="itemData">
          <p style={{ fontFamily: "Montserrat" }}>{item.name} </p>
          <div className="buttonCon">
            <p
              style={{
                color: "#BDBDBD",
                fontFamily: "Montserrat",
                fontSize: 13
              }}
            >
              {item.price}€{" "}
            </p>

            <div
              onClick={() => {
                let newitem = item;
                let newbasket = basket.slice();

                if (!basket.some(it => it.key === item.key)) {
                  newitem.quantity = 1;
                  setBasket([...newbasket, newitem]);
                } else {
                  newbasket.forEach(it => {
                    if (it.key === item.key) {
                      it.quantity = parseInt(it.quantity, 10) + 1;
                      setBasket([...newbasket]);
                    }
                  });
                }
              }}
            >
              <div className="expand">
                <img
                  className="cursor"
                  style={{ width: 20, height: 20 }}
                  src={require("./assets/basket-icon.png")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
