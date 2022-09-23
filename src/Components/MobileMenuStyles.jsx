import styled, {css} from "styled-components";
export const Container = styled.section`
position: absolute;
backdrop-filter: blur(3px);
width: 100%;
height: 70%;
z-index: 5;
align-items: center;
display: flex;
justify-content: center;
background: rgba(17, 18, 17, 0.95);
background: linear-gradient(34deg, #black 0%, rgba(17,18,17,0.95) 95%);
opacity: 0;
pointer-events: none;
transform: translateX(100px);
transition: .8s;
border-bottom-left-radius:100px;

> img {
  position: absolute;
  top: 1rem;
  right: 1rem;
  transition: <div className="5"></div>s;
  transform: rotate(40deg);
  filter: invert(200%);
  margin-right: 15px;

}

img:hover{
  cursor: pointer;
}

.carrinho{
 filter: invert(200%);
 font-size: 2rem;
 margin-left: 10px;

}

.carrinho span{
  margin-left: 10px;
  filter: invert(200%);
  padding: 0 3px;
  background-color: #DA291C;
  font-weight: bold;
  border-radius: 5px;
  position: absolute;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  transform: scale(0.7);
  transition: .7s;
}

nav ul{
  list-style-type:disc;
}

nav ul :nth-child(1){
  list-style-type: none;
  font-family: 'Montserrat';
  margin-bottom: 15px;
  padding: 10px;
  background-color: #DA291C;
  font-size: 1.5em;
  font-weight: bold;
  text-transform: uppercase;
}

nav ul :nth-child(2){
 font-size: 1.2em;
}

nav li{
  margin-bottom: 10%;
  text-transform: uppercase;
}




${({ IsVisible }) => IsVisible && css`
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0px);
  > img {
    transform: rotate(0deg);
  }
  nav {
    transform: scale(1);
  }
`}
`;