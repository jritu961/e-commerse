import {
  NavbarCartDiv,
  NavbarContainer,
  NavbarDiv,
  NavbarHeadingDiv,
  NavbarLoginDiv,
  NavbarSeachDiv,
  NavbarSellerDiv,
  NavbarSupportDiv,
} from "../styles/navbar";
import LoginLogo from "../assets/images/interface.png";
import ShoppingCart from "../assets/images/shopping-cart.png";
import SellerLogo from "../assets/images/businessman.png";
import DotLogo from "../assets/images/dots.png";
import SearchLogo from "../assets/images/search.png";
export const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <NavbarDiv>
          <NavbarHeadingDiv>
            <div>Flipkart</div>
            <div>Exlore </div>
          </NavbarHeadingDiv>
          <NavbarSeachDiv>
            <div>
              {" "}
              <img
                src={SearchLogo}
                alt="logo"
                style={{ width: "20px", height: "20px" }}
              />
            </div>
            <div>Search for Brand and Logo</div>
          </NavbarSeachDiv>
          <NavbarLoginDiv>
            <div>
              <img
                src={LoginLogo}
                alt="logo"
                style={{ width: "20px", height: "20px" }}
              />
            </div>

            <div>Login</div>
          </NavbarLoginDiv>
          <NavbarCartDiv>
            <div>
              <img
                src={ShoppingCart}
                alt="logo"
                style={{ width: "20px", height: "20px" }}
              />
            </div>
            <div>Cart</div>
          </NavbarCartDiv>
          <NavbarSellerDiv>
            <div>
              <img
                src={SellerLogo}
                alt="logo"
                style={{ width: "20px", height: "20px" }}
              />
            </div>
            <div>Seller</div>
          </NavbarSellerDiv>
          <NavbarSupportDiv>
            <img
              src={DotLogo}
              alt="logo"
              style={{ width: "20px", height: "20px" }}
            />
          </NavbarSupportDiv>
        </NavbarDiv>
      </NavbarContainer>
    </>
  );
};
